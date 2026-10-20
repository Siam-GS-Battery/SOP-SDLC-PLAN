/**
 * Grafana Cloud app metrics (prom-client) — SOP 5.7
 * Usage:
 *   1) app.use(metricsMiddleware);            // before routes
 *   2) app.get('/metrics', metricsHandler);   // scraped by Alloy; protect with METRICS_TOKEN or a private network
 *   3) await trackJob('daily-sync', () => runSync());
 * Env: PROJECT_NAME (required, label `project`), METRICS_TOKEN (optional)
 */
import express, { NextFunction, Request, Response } from 'express';
import client from 'prom-client';

export const registry = new client.Registry();
// label project ติดทุก metric
registry.setDefaultLabels({ project: process.env.PROJECT_NAME ?? 'unknown' });
client.collectDefaultMetrics({ register: registry });

const httpDuration = new client.Histogram({
  name: 'http_server_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['route', 'method', 'status'] as const,
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
  registers: [registry],
});

const jobRuns = new client.Counter({
  name: 'job_runs_total', help: 'Background job runs',
  labelNames: ['job'] as const, registers: [registry],
});
const jobFailures = new client.Counter({
  name: 'job_failures_total', help: 'Background job failures (after retries)',
  labelNames: ['job'] as const, registers: [registry],
});

// Middleware: ใช้ matched route pattern กัน cardinality ระเบิด (ห้ามใช้ req.path ตรงๆ)
export function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
  const end = httpDuration.startTimer();
  res.on('finish', () => {
    end({
      route: req.route?.path ?? 'unmatched',
      method: req.method,
      status: String(res.statusCode),
    });
  });
  next();
}

// ครอบ background job: เรียกหลัง retry หมดแล้ว เพื่อให้ failure = ล้มจริง
export async function trackJob<T>(name: string, fn: () => Promise<T>): Promise<T> {
  jobRuns.inc({ job: name });
  try {
    return await fn();
  } catch (err) {
    jobFailures.inc({ job: name });
    throw err;
  }
}

// GET /metrics — ห้ามเปิดสู่ public: บังคับ token หรือแยก listener port ภายใน (อย่า bind ทั้งแอปที่ localhost)
// หรือบังคับ token (Authorization: Bearer $METRICS_TOKEN)
export async function metricsHandler(req: Request, res: Response) {
  const token = process.env.METRICS_TOKEN;
  if (token && req.headers.authorization !== `Bearer ${token}`) {
    return res.status(401).end();
  }
  res.set('Content-Type', registry.contentType);
  res.end(await registry.metrics());
}

// ---- Example app ----
if (require.main === module) {
  const app = express();
  app.use(metricsMiddleware);
  app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
  app.get('/metrics', metricsHandler);
  app.listen(Number(process.env.PORT ?? 3000)); // /metrics ป้องกันด้วย METRICS_TOKEN (หรือแยก port ภายใน) — ห้าม bind ทั้งแอปที่ 127.0.0.1
}
