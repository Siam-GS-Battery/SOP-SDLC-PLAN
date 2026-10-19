-- Quality metrics store for Grafana Cloud (Supabase / Postgres)
-- Rows are inserted by CI (templates/workflows/quality-metrics.yml) using the service key.
--
-- metric names:
--   coverage_lines_pct     overall line coverage (%)
--   new_code_coverage_pct  coverage of new/changed lines in a PR (%)
--   audit_critical         count of critical npm audit vulnerabilities
--   audit_high             count of high npm audit vulnerabilities
--   tests_passed           1 = tests passed, 0 = tests failed

create table if not exists public.quality_metrics (
  id         bigserial primary key,
  project    text not null,
  repo       text not null,
  metric     text not null,
  value      numeric not null,
  ref        text,
  sha        text,
  run_id     text,
  created_at timestamptz not null default now()
);

create index if not exists quality_metrics_project_metric_created_idx
  on public.quality_metrics (project, metric, created_at desc);

-- RLS on, and NO policies for anon/authenticated: the public API cannot read or write.
-- CI inserts with the service_role key (bypasses RLS).
alter table public.quality_metrics enable row level security;

-- Read-only role for Grafana.
-- IMPORTANT: change the password below before running (store it in Grafana's data source only).
create role grafana_reader login password '<SET_IN_SUPABASE>';
grant usage on schema public to grafana_reader;
grant select on public.quality_metrics to grafana_reader;

-- RLS applies to grafana_reader too (it is not a table owner / bypassrls), so it needs a select policy.
create policy grafana_reader_select on public.quality_metrics
  for select to grafana_reader using (true);
