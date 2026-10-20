# SDLC Process Audit — Workflow Document & Checklist

| | |
|---|---|
| **เอกสาร** | SDLC-CHECKLIST.md |
| **เวอร์ชัน** | 3.5 |
| **วันที่จัดทำ** | 2026-08-18 |
| **ผู้จัดทำ (Owner)** | Pantira S. |
| **ทีม/ขอบเขต** | Siam GS Battery — ทีม dev · โปรเจกต์นำร่อง: **GS Carbooking** |
| **ขอบเขตการตรวจ** | 6 phase · **36 รายการ** (BR 6, CR 4, TS 6, DOC 5, SEC 9, REL 6) — ถอด Requirements & Planning ออกตั้งแต่ v2.0 ลดรายการสำหรับทีมขนาดเล็กใน v3.0 และปรับเกณฑ์ให้ตรงกับ SOP ใน v3.1 ดูหัวข้อ "ขอบเขตที่ถูกถอดออก" |
| **OKR อ้างอิง** | KR2.1 SDLC Process Audit — Step 1: Create audit checklist + workflow doc |

## ประวัติการแก้ไข (Revision History)

| เวอร์ชัน | วันที่ | ผู้แก้ไข | รายละเอียด |
|---|---|---|---|
| 1.0 | 2026-08-18 | Pantira S. | จัดทำฉบับแรก — workflow document + audit checklist (ยังไม่กรอกผลตรวจ) |
| 1.1 | 2026-08-25 | Pantira S. | เพิ่มหมวด "Requirements & Planning" (workflow + checklist REQ-01..REQ-06) ที่เดิมยังไม่ครอบคลุม และเพิ่มตารางการยืนยันจากทีม (Team Confirmation / Sign-off) ตามรูปแบบคอลัมน์ที่ต้องใช้ยืนยันปิด Step 1 |
| 2.0 | 2026-10-06 | Pantira S. | **ถอดหมวด "Requirements & Planning" (REQ-01..REQ-06) ออกทั้งหมด** ทั้งส่วน Workflow และ Checklist เพราะ artefact ด้านข้อกำหนดไม่ถูกเก็บใน repository จึงตรวจเทียบหลักฐานจาก repo ไม่ได้ — จำนวนรายการลดจาก 57 เหลือ 51 (7 phase → 6 phase) และฐานหาร pass rate เปลี่ยน **pass rate ตั้งแต่ 2026-10-06 เทียบตรงกับรอบก่อนหน้าไม่ได้** (ดูหัวข้อ "ขอบเขตที่ถูกถอดออก") สูตร pass rate และเกณฑ์ผ่านไม่เปลี่ยน |
| 3.0 | 2026-10-20 | Pantira S. | **ปรับ checklist ให้กระชับสำหรับทีมขนาดเล็ก (51 → 36 รายการ)** — รวมรายการที่ซ้ำซ้อนกัน, ผ่อนเกณฑ์ที่เข้มเกินจริง, เลื่อนรายการที่ไม่จำเป็นต่อ SDLC พื้นฐานออกไป และเพิ่มรายการใหม่ SEC-10, REL-08, REL-09 (ดูรายละเอียดในหัวข้อ "ขอบเขตที่ถูกถอดออก") ใช้ ID เดิมของรายการที่คงไว้ (รายการที่รวมกันใช้ ID ต่ำสุด) ไม่ renumber **pass rate ตั้งแต่ 2026-10-20 เทียบตรงกับรอบก่อนหน้าไม่ได้** — หากต้องเทียบข้ามรอบให้คำนวณผลรอบเก่าใหม่บนชุด 36 รายการ |
| 3.1 | 2026-10-20 | Pantira S. | ปรับเกณฑ์ให้ตรงกับ SOP: CR-01, BR-05, SEC-04, BR-07, TS-08, BR-08, CR-03, REL-01, REL-07, REL-09 (จำนวนรายการคงที่ 36) |
| 3.2 | 2026-10-20 | Pantira S. | CR-01/CR-02 ตรวจผู้ merge ต้องเป็น Senior, CR-07 รวม status check "Senior Approval" (pr-approval-gate.yml) ตาม SOP 7.3/7.5 |
| 3.3 | 2026-10-20 | Pantira S. | รองรับ Senior คนเดียว: Senior merge PR ตัวเองได้ผ่าน gate "Senior Approval" (required approvals = 0) — ปรับ BR-05, CR-01, CR-02, CR-03, CR-07; แก้ชื่อ job ใน CR-07 ให้ตรงกับ ci.yml จริง |
| 3.4 | 2026-10-20 | Pantira S. | ปรับให้ตรง SOP: BR-02 รองรับ docs/ และจุดในชื่อ release, CR-03 เพิ่ม Related Issues, CR-07 แก้อ้างอิงหัวข้อ + หมายเหตุ Dependency Audit, REL-07 อ้างขั้นตอนย้อน migration ใน 5.5 |
| 3.5 | 2026-10-20 | Pantira S. | ปรับเกณฑ์ coverage ตาม SOP: TS-08 new code ≥ 70% → ≥ 80% (ยกเว้น PR < 20 บรรทัด), coverage ทั้งโปรเจกต์ FE 70% / BE 80% เป็นเป้าหมายระยะยาว |

---

# ส่วนที่ 1 — Workflow Document (มาตรฐานการทำงาน)

เอกสารนี้อธิบายมาตรฐาน SDLC ที่ทีมใช้จริงกับโปรเจกต์ GS Carbooking (monorepo `backend/` + `frontend/`) โดยยึดจากสิ่งที่มีอยู่จริงในโค้ด/เวิร์กโฟลว์ ณ วันที่จัดทำ ส่วนใดที่ยังไม่ได้บังคับใช้จะกำกับไว้ชัดเจนว่า **(ยังไม่บังคับใช้ — ดู checklist)** เพื่อไม่ให้เอกสารอ้างเกินความเป็นจริง

## 1. Branching & Version Control

- **Branch หลัก**: `main` (production) และ `develop` (active development) — ยืนยันจาก README ("Branch Strategy") และมีอยู่จริงทั้งใน local/remote
- **Branch ทำงาน**: ตั้งชื่อตามรูปแบบ `feature/<kebab-case>` สำหรับฟีเจอร์ใหม่ และ `fix/<kebab-case>` สำหรับแก้บั๊ก — พบใช้งานจริงใน repo (เช่น `feature/approval-loading-swal`, `feature/playwright-e2e-tests`, `fix/email-async-notify`)
- **Flow**: แตก branch ย่อยจาก `develop` → เปิด PR กลับเข้า `develop` **(ตาม SOP 7.1/7.3 ห้าม commit ตรงเข้า `main`/`develop` — Senior merge PR ตัวเองได้ผ่าน gate `Senior Approval` (ข้อยกเว้นชั่วคราวสำหรับทีมที่มี Senior คนเดียว) — ปัจจุบันส่วนใหญ่ยัง commit ตรงเข้า `develop` ดู BR-07/CR-01)** → เมื่อพร้อมขึ้น production ค่อยเปิด PR จาก `develop` เข้า `main`
- **ผู้ merge**: ยังไม่มีเอกสารกำหนดตัวบุคคล/สิทธิ์ผู้ merge อย่างเป็นทางการ (ยังไม่บังคับใช้ — ดู checklist)
- **Branch protection rule** (require PR, require review, require CI ผ่านก่อน merge เข้า `main`/`develop`): ยังไม่พบการตั้งค่าไว้ใน repo (ยังไม่บังคับใช้ — ดู checklist)
- **Release / tagging**: ยังไม่มีระบบ git tag หรือ versioning ตาม semver สำหรับการ release (เลื่อนออกจาก checklist ตั้งแต่ v3.0) — `version` ใน `package.json` ปัจจุบันค้างที่ `0.1.0`/`0.0.1` ในทุก package

## 2. Code Review

- **เมื่อไรต้องมี PR**: การเปลี่ยนแปลงทุกครั้งควรผ่าน PR จาก branch ย่อยเข้า `develop` (ตาม flow ในข้อ 1) — โดย gate `Senior Approval` ผ่านเมื่อ author เป็น Senior (merge เอง โดย CI เขียว + PR template กรอกครบ + ติ๊ก self-review checklist) หรือมี review Approved จาก Senior ที่ไม่ใช่ author (ข้อยกเว้นชั่วคราวสำหรับทีมที่มี Senior คนเดียว) แต่ยังไม่มีการบังคับด้วย branch protection rule จริงบน GitHub (ยังไม่บังคับใช้ — ดู checklist)
- **จำนวนผู้อนุมัติขั้นต่ำ**: กำหนด required approving reviews = 0 และบังคับการอนุมัติผ่าน status check `Senior Approval` แทน (ยังไม่ได้ตั้งค่าจริงบน GitHub) (ยังไม่บังคับใช้ — ดู checklist)
- **สิ่งที่ reviewer ต้องตรวจ**: ยังไม่มี code review checklist ที่เป็นลายลักษณ์อักษร (เลื่อนออกจาก checklist ตั้งแต่ v3.0) — ควรครอบคลุมอย่างน้อย: ตรง requirement, ไม่กระทบ RLS/authorization (`SECURITY.md`), มีเทสต์ครอบคลุม, ผ่าน CI, ไม่มี secret หลุดใน diff
- **PR description**: มี PR template ที่ `.github/PULL_REQUEST_TEMPLATE.md` คัดลอกมาจาก 7.3 §Description Template บังคับหัวข้อที่ต้องกรอก
- **CODEOWNERS**: ยังไม่มีไฟล์ `.github/CODEOWNERS` กำหนดผู้รับผิดชอบ path เฉพาะทาง (เลื่อนออกจาก checklist ตั้งแต่ v3.0)
- **กฎการ merge**: ยังไม่มีการบังคับ "ต้องผ่าน CI ทุก job ก่อน merge" ผ่าน branch protection (แม้ CI workflow จะรันจริงทุก PR ตามข้อ 3) (ยังไม่บังคับใช้ — ดู checklist)

## 3. Testing

- **ประเภทเทสต์ที่มีจริง**:
  - Backend: Unit/Integration ด้วย Vitest + Supertest (`backend/src/**/*.test.ts`) ครอบคลุม routes, services, utils
  - Frontend: Unit ด้วย Vitest ครอบคลุม lib helpers (roles, maps)
  - E2E: Playwright (`frontend/tests/e2e/`) mock เครือข่ายทั้งหมดผ่าน `mock-api.ts` ไม่พึ่ง backend/Supabase จริง ครอบคลุม flow หลัก (booking, auth, route-guard, approval, admin, security)
- **วิธีรัน**:
  - `npm test` (root) → รัน backend + frontend พร้อมกัน
  - `npm run test:coverage` (root หรือ `--prefix backend` / `--prefix frontend`) → พร้อม coverage report (v8 provider, reporter text/html/clover/json/json-summary)
  - `npm run test:e2e --prefix frontend` (หรือ `test:e2e:ui` แบบ interactive, `test:e2e:report` ดูรายงานหลังรัน)
- **สิ่งที่ต้องผ่านก่อน merge จริงใน CI** (`.github/workflows/ci.yml`, trigger บนทุก push/PR เข้า `main`/`develop`):
  - `backend-typecheck` — `tsc --noEmit`
  - `backend-test` — `vitest run`
  - `frontend-test` — `vitest run`
  - `frontend-build` — `vite build` (ขึ้นกับ `frontend-test` ผ่านก่อน)
  - หมายเหตุ: `frontend-typecheck` ยังถูกข้ามอยู่ (frontend ยังไม่มี script `typecheck`/`tsconfig.json` แยก) (เลื่อนออกจาก checklist ตั้งแต่ v3.0)
- **E2E ใน CI**: Playwright ยังไม่ถูกรันเป็น job ใน `ci.yml` (รันได้เฉพาะ local ผ่าน `npm run test:e2e`) (ยังไม่บังคับใช้ — ดู checklist)
- **Coverage เป้าหมาย (%)**: ยังไม่มีการตั้ง threshold บังคับใน `vitest.config.ts` ของทั้ง backend/frontend (ยังไม่บังคับใช้ — ดู checklist) — ปัจจุบัน config ตั้งเฉพาะ `include`/`exclude` ของไฟล์ source ที่นับ coverage เท่านั้น
- **Test audit**: มีสคริปต์ `test:audit` (root/backend/frontend) รัน vitest พร้อม coverage แล้ว export ผลเป็น JSON ไปที่ `.audit/vitest.json` สำหรับใช้ในรอบ audit เทสต์

## 4. Documentation Standard

- **README**: มี `README.md` ระดับ root ครอบคลุม overview, tech stack, project structure, features, getting started (env vars), API reference, testing, deployment, branch strategy — ต้องอัปเดตทุกครั้งที่มีการเปลี่ยน endpoint/env var/flow หลัก
- **API reference**: ปัจจุบันอยู่ในรูปตารางใน README (ไม่มี OpenAPI/Swagger spec แยก) (ยังไม่บังคับใช้ — ดู checklist)
- **Code comments/JSDoc**: ไม่มีมาตรฐานบังคับ (เช่น ESLint rule บังคับ JSDoc) เป็นลายลักษณ์อักษร (เลื่อนออกจาก checklist ตั้งแต่ v3.0) — พบ comment อธิบายเหตุผล (เช่น ใน `.github/workflows/*.yml`, `backend/vitest.config.ts`) เป็นแนวปฏิบัติที่ดีอยู่แล้วในบางไฟล์
- **User manual**: ยังไม่มีคู่มือผู้ใช้แยกสำหรับผู้ใช้ปลายทางแต่ละบทบาท (employee/manager/HR/security) (เลื่อนออกจาก checklist ตั้งแต่ v3.0)
- **Env var documentation**: มีจริงใน README (ตัวอย่าง `.env` ของ backend/frontend พร้อมคำอธิบาย) และมีไฟล์ `backend/.env.example` กับ `frontend/.env.example` อยู่จริงใน repo ตามที่ SECURITY.md อ้างถึง — แต่ `frontend/.env.example` มีเพียง 1 บรรทัด ยังไม่ครบทุกตัวแปร
- **Security docs**: มี `SECURITY.md` อธิบายโมเดลความปลอดภัย (RLS, JWT authorization, service-role key), ข้อกำหนดตอน deploy, และนโยบายเพิ่มตารางใหม่ต้องเปิด RLS — ต้องอัปเดตทุกครั้งที่โมเดลความปลอดภัยเปลี่ยน
- **E2E test docs**: มี `frontend/tests/e2e/README.md` อธิบายแนวคิด mock, วิธีรัน, รายการไฟล์เทสต์ และขอบเขตที่ตั้งใจไม่ครอบคลุม

## 5. Security & Dependency Hygiene

- **การจัดการ `.env`/secret**: ห้าม commit ไฟล์ `.env` จริงหรือ secret ใด ๆ ลง repo ตาม `SECURITY.md` — `JWT_SECRET` ต้องเป็นสตริงสุ่ม ≥32 ตัวอักษร ไม่ใช่ placeholder (ตรวจตอน boot ใน `backend/src/config/env.ts`)
- **RLS (Row Level Security)**: ทุกตารางในฐานข้อมูลต้องเปิด RLS โดยไม่มี policy ให้ `anon`/`authenticated` (ดู `backend/supabase/migrations/0016_enable_rls.sql`) — authorization จริงอยู่ที่ backend middleware (`authRequired`, `requireRole`) ไม่ใช่ RLS policy — ตารางใหม่ทุกตารางต้อง `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` ในไฟล์ migration เสมอ
- **npm audit**: มี workflow `security-audit.yml` รัน `npm audit --omit=dev` ทั้ง backend และ frontend เมื่อมี PR เข้า `main`/`develop` และตามตารางทุกวันจันทร์ (cron) — ปัจจุบันตั้งเป็น `continue-on-error: true` (ไม่ทำให้ job fail) เพราะมีช่องโหว่ค้างอยู่แล้ว (SOP 6.5/7.5 กำหนดให้ fail เมื่อพบ critical ด้วย `--audit-level=critical`; ส่วน high ให้เปิด issue/PR แก้ภายใน 14 วัน) (react-router, nodemailer ระดับ high; qs ระดับ moderate; body-parser ระดับ low) เพื่อกัน alert fatigue — ผลลัพธ์แสดงใน GitHub Step Summary ให้ทีมตรวจดูเอง — หมายเหตุ: workflow นี้ trigger เฉพาะ `pull_request` และ `schedule` เท่านั้น ไม่มี `push` trigger เมื่อรวมกับข้อเท็จจริงว่าปัจจุบัน commit ส่วนใหญ่ push ตรงเข้า `develop` (ไม่ผ่าน PR) จึงเท่ากับว่า audit นี้รันจริงแค่สัปดาห์ละครั้งตาม cron ไม่ได้รันบนการเปลี่ยนแปลงส่วนใหญ่เลย
- **Dependabot**: เปิดใช้งานผ่าน `.github/dependabot.yml` อัปเดต dependency รายสัปดาห์ แยก 3 ecosystem: backend (npm), frontend (npm), GitHub Actions — จำกัด PR เปิดพร้อมกันไม่เกิน 5 ต่อ ecosystem
- **แผนยกระดับ audit ให้ fail จริง**: ตาม SOP ต้อง fail เมื่อพบ critical (`npm audit --omit=dev --audit-level=critical`) ทันที — ส่วนการยกระดับเป็น `--audit-level=high` ทำเมื่อแก้ advisory high ที่ค้างอยู่ครบแล้ว (ติดตามใน SEC-06) (ยังไม่บังคับใช้ — ดู checklist)
- **การรายงานช่องโหว่**: ต้องแจ้งผ่านช่องทางภายในองค์กรเท่านั้น ห้ามเปิดเป็น public issue (ตาม `SECURITY.md`) — ช่องทางติดต่อจริงยังเป็น TODO ใน `SECURITY.md` เอง (ยังไม่บังคับใช้ — ดู checklist)

## 6. Release & Deployment

- **Versioning**: `package.json` ของ root/backend/frontend ยังไม่ตาม semver ที่ผูกกับ release จริง (ค้างที่ค่าเริ่มต้น) (เลื่อนออกจาก checklist ตั้งแต่ v3.0)
- **Changelog**: ไม่มีไฟล์ `CHANGELOG.md` — ประวัติการเปลี่ยนแปลงอ้างอิงจาก git commit message (Conventional Commits prefix ภาษาอังกฤษ + subject ภาษาไทย เช่น `fix: แก้อีเมลรีเซ็ตรหัสผ่าน...`, `feat: เพิ่มรายงาน...`, `docs: เพิ่ม README...`, `refactor: ลบข้อความ...`) ซึ่งเป็น convention จริงที่ทีมใช้สม่ำเสมอ (ยืนยันจาก `git log`) แต่ยังไม่มีเอกสารบังคับรูปแบบนี้อย่างเป็นทางการ (ยังไม่บังคับใช้ — ดู checklist)
- **Migration ก่อน deploy**: ต้องรัน database migration ให้ครบทุกไฟล์ใน `backend/supabase/migrations/` ก่อนขึ้นระบบจริงเสมอ โดยเฉพาะต้องถึง `0016_enable_rls.sql` — ถ้าข้ามขั้นตอนนี้ ข้อมูลจะเข้าถึงได้ตรงผ่าน Supabase client โดยไม่ผ่านการตรวจสิทธิ์ของ backend API (ระบุชัดเจนใน README และ `SECURITY.md`)
- **ขั้นตอน build/deploy จริง**: backend — `npm install && npm run build && npm start` (tsc → `dist/`); frontend — `npm install && npm run build` (vite build → `dist/`) เสิร์ฟผ่าน static host — ต้องอยู่หลัง reverse proxy ที่ทำ TLS, ตั้ง `NODE_ENV=production` และ `CORS_ORIGIN` เป็นโดเมนจริงเสมอ (ตาม `SECURITY.md`)
- **Rollback plan**: ยังไม่มีขั้นตอน rollback ที่เป็นลายลักษณ์อักษร (ยังไม่บังคับใช้ — ดู checklist)

---

# ส่วนที่ 2 — Audit Checklist (แบบตรวจ)

**คำอธิบายคอลัมน์ "ผล"**: ✅ ผ่าน · ⚠️ ผ่านบางส่วน · ❌ ไม่ผ่าน · N/A ไม่เกี่ยวข้อง

**คำอธิบายคอลัมน์ "แหล่งหลักฐาน"**: `repo` = ตรวจได้จากไฟล์/git log ใน repository โดยตรง · `GitHub PR` = ต้องเปิดดู Pull Request บน GitHub · `GitHub settings` = ต้องเปิดดูหน้า Settings ของ repository บน GitHub · `CI run` = ต้องเปิดดูผลรันจริงใน GitHub Actions · `ops/server` = ต้องตรวจบนเครื่อง/สภาพแวดล้อม production จริง — แถวที่แหล่งหลักฐานไม่ใช่ `repo` ต้องแนบ **screenshot หรือลิงก์** เป็นหลักฐานอ้างอิง ไม่ใช่แค่ path ไฟล์ เพราะไม่สามารถตรวจจาก local repo ได้โดยตรง

> หมายเหตุ: ตารางด้านล่างเป็น**เครื่องมือ (instrument)** ที่ยังไม่ได้กรอกผลตรวจ — คอลัมน์ "ผล", "หลักฐานอ้างอิง", "หมายเหตุ" จะถูกกรอกในรอบ audit จริง (Step 2) — รวม 6 phase / 36 รายการ (BR 6, CR 4, TS 6, DOC 5, SEC 9, REL 6)

## 1. Branching & Version Control

| รหัส | รายการตรวจ | เกณฑ์ผ่าน | แหล่งหลักฐาน | ผล | หลักฐานอ้างอิง | หมายเหตุ |
|---|---|---|---|---|---|---|
| BR-01 | มี branch `main` และ `develop` แยกกันชัดเจน | repo มี branch `main` (production) และ `develop` (active development) อยู่จริงทั้ง local และ remote | repo | | | |
| BR-02 | ตั้งชื่อ branch ถูกรูปแบบ | head ref ของ PR ที่ merge ใน 90 วันล่าสุด (ไม่นับ bot เช่น dependabot) ตรงรูปแบบ `^(feature\|fix\|hotfix\|refactor\|release\|docs\|chore)/[a-z0-9]+([.-][a-z0-9]+)*$` ≥ 80% — รายงานเป็นจำนวนที่ตรง/ทั้งหมด | GitHub PR | | | อนุญาตจุดในชื่อ เช่น `release/v1.2.0` — อ้างอิง SOP: 07_GIT_WORKFLOW/7.1_Branching_Strategy.md §Branch Types |
| BR-04 | ทุกการเปลี่ยนแปลงเข้า `main` มาจาก PR | ทุกการเปลี่ยนแปลงที่เข้า `main` ใน 90 วันล่าสุดมาผ่าน PR (อนุญาต hotfix branch ตราบที่เปิดเป็น PR) | repo / GitHub PR | | | |
| BR-05 | เปิดใช้ branch protection บน `main` และ `develop` | GitHub settings ของทั้ง `main` และ `develop` เปิด "require pull request before merging" (ห้าม push ตรง) — จำนวน required approvals อาจเป็น 0 เพราะการอนุมัติบังคับผ่าน status check `Senior Approval` (ดู CR-07) | GitHub settings | | | ข้อยกเว้นชั่วคราวสำหรับทีมที่มี Senior คนเดียว — ทบทวนเมื่อมีผู้รีวิวคนที่สอง — อ้างอิง SOP: 07_GIT_WORKFLOW/7.1_Branching_Strategy.md §Branch Protection Rules / §Branch Types; 07_GIT_WORKFLOW/7.5_GitHub_Actions_CI_Template.md §ตั้งค่า Branch Protection Rules |
| BR-07 | สัดส่วน commit บน `develop` ที่มาผ่าน PR | **เป้าหมายตาม SOP = 0 direct push (100% ผ่าน PR)** — วัดสัดส่วน non-merge commit บน `develop` ใน 90 วันล่าสุดที่เข้ามาผ่าน PR; เป้าหมายขั้นบันได **≥ 50% → 80% → 100%** เป็นเพียง ramp ชั่วคราวเพื่อไปสู่กฎ SOP (ไม่ใช่เกณฑ์ถาวร) ระบุเป้าหมายปัจจุบันของรอบนั้นในช่องหมายเหตุ | repo | | | อ้างอิง SOP: 07_GIT_WORKFLOW/7.1_Branching_Strategy.md §Best Practices ("อย่า commit ลง main/develop โดยตรง") และ §Workflow |
| BR-08 | มีระบบ release/tag พร้อม release notes | เวอร์ชันล่าสุดที่ deploy จริงมี git tag ตาม semver `vX.Y.Z` และ GitHub Release notes ที่ระบุเลข PR ที่รวมอยู่ใน release | repo | | | อ้างอิง SOP: 05_DEPLOY/5.1_Deploy_Overview.md §Release Checklist Template; 07_GIT_WORKFLOW/7.3_Pull_Request_Process.md §Traceability (Release Notes ระบุ PR numbers) |

## 2. Code Review

| รหัส | รายการตรวจ | เกณฑ์ผ่าน | แหล่งหลักฐาน | ผล | หลักฐานอ้างอิง | หมายเหตุ |
|---|---|---|---|---|---|---|
| CR-01 | PR เข้า `develop` ผ่าน Senior approval ก่อน merge | PR ที่ merge เข้า `develop` ใน 90 วันล่าสุด แต่ละ PR ผ่านถ้า (ก) author เป็น Senior (ตาม `SENIOR_REVIEWER` ใน `.github/workflows/pr-approval-gate.yml`) และ merge โดย Senior คนนั้น พร้อม CI เขียวและติ๊ก self-review checklist ใน PR body **หรือ** (ข) author ไม่ใช่ Senior และมี review Approved จาก Senior และ merge โดย Senior (`gh pr view <n> --json mergedBy`) — รายงานเป็น n ผ่าน / N ทั้งหมด และรายงานแยกจำนวน PR ที่ Senior merge เอง | GitHub PR | | | ข้อยกเว้นชั่วคราวสำหรับทีมที่มี Senior คนเดียว — ทบทวนเมื่อมีผู้รีวิวคนที่สอง — อ้างอิง SOP: 07_GIT_WORKFLOW/7.3_Pull_Request_Process.md §Definition of Done (Senior Review) และ §สิ่งที่ห้ามทำใน PR; 07_GIT_WORKFLOW/7.5_GitHub_Actions_CI_Template.md (ค่า `SENIOR_REVIEWER`) |
| CR-02 | ทุก PR ที่ merge เข้า `main` ผ่านการอนุมัติ | PR ที่ merge เข้า `main` ใน 90 วันล่าสุด แต่ละ PR ผ่านถ้า (ก) author เป็น Senior (ตาม `SENIOR_REVIEWER` ใน `pr-approval-gate.yml`) และ merge โดย Senior คนนั้น พร้อม CI เขียวและติ๊ก self-review checklist ใน PR body **หรือ** (ข) author ไม่ใช่ Senior และมี review Approved จาก Senior และ merge โดย Senior (`gh pr view <n> --json mergedBy`) — รายงานเป็น n ผ่าน / N ทั้งหมด และรายงานแยกจำนวน PR ที่ Senior merge เอง | GitHub PR | | | ข้อยกเว้นชั่วคราวสำหรับทีมที่มี Senior คนเดียว — ทบทวนเมื่อมีผู้รีวิวคนที่สอง — อ้างอิง SOP: 07_GIT_WORKFLOW/7.3_Pull_Request_Process.md §สิ่งที่ห้ามทำใน PR |
| CR-03 | มี PR template และ PR กรอกครบ | มีไฟล์ `.github/PULL_REQUEST_TEMPLATE.md` ที่มีหัวข้อตรงกับ SOP template: Summary / Changes / Screenshots (ถ้ามี) / Testing / Checklist / Related Issues (ตามลำดับ) โดยหัวข้อ Checklist ต้องมีรายการ self-review (ทดสอบแล้ว / ไม่มี secret ใน diff / ตรวจ authorization/RLS / อัปเดตเอกสาร) และ PR ที่ merge 10 รายการล่าสุดกรอกหัวข้อเหล่านั้นไม่ว่าง (Screenshots ว่างได้ถ้าไม่มี UI change; Related Issues ว่างได้ถ้าไม่มี issue ที่เกี่ยวข้อง) | repo / GitHub PR | | | อ้างอิง SOP: 07_GIT_WORKFLOW/7.3_Pull_Request_Process.md §PR Template (Description Template) |
| CR-07 | Branch protection บังคับผ่าน CI ก่อน merge | ตั้งค่า "require status checks to pass" ครอบคลุม job จริงของ `ci.yml` ของโปรเจกต์ (`backend-typecheck`, `backend-test`, `frontend-test`, `frontend-build` — ชื่อเดียวกับ TS-04) และ status check `Senior Approval` จาก `.github/workflows/pr-approval-gate.yml` บน `develop`/`main` | GitHub settings | | | SOP 7.5 ใช้ชื่อ job ตาม template (`Lint & Type Check`, `Run Tests`, `Dependency Audit`) — ให้ใช้ชื่อ job ของโปรเจกต์ข้างต้นแทน — SOP 7.5 บังคับ `Dependency Audit` เป็น required check ด้วย ในโปรเจกต์ตรวจผ่าน SEC-04 (`security-audit.yml`) — อ้างอิง SOP: 07_GIT_WORKFLOW/7.5_GitHub_Actions_CI_Template.md §ตั้งค่า Branch Protection Rules (Required checks: `Senior Approval`); 07_GIT_WORKFLOW/7.3_Pull_Request_Process.md §Definition of Done (Senior Review) |

## 3. Testing

| รหัส | รายการตรวจ | เกณฑ์ผ่าน | แหล่งหลักฐาน | ผล | หลักฐานอ้างอิง | หมายเหตุ |
|---|---|---|---|---|---|---|
| TS-01 | Backend มี unit/integration test จริง | มีไฟล์ `*.test.ts` อย่างน้อย 1 ไฟล์ในแต่ละโฟลเดอร์ `backend/src/routes/`, `services/`, `utils/` และ `npm test --prefix backend` exit code = 0 | repo | | | |
| TS-02 | Frontend มี unit test จริง | `frontend` มีไฟล์เทสต์ (Vitest) และรันผ่านด้วย `npm test --prefix frontend` | repo | | | |
| TS-03 | มี E2E test ครอบคลุม flow หลัก | `frontend/tests/e2e/` มี spec ครอบคลุม booking, auth, route-guard และรันผ่านด้วย `npm run test:e2e --prefix frontend` | repo | | | |
| TS-04 | CI ผ่านครบทุก job บน `develop` และ `main` | workflow run ล่าสุดของ `ci.yml` บน `develop` และ `main` ทั้ง 4 job สถานะ success: `backend-typecheck`, `backend-test`, `frontend-test`, `frontend-build` — แนบลิงก์ run | CI run | | | |
| TS-08 | มี coverage threshold และ CI วัด coverage | ตั้ง `coverage.thresholds` ใน vitest.config.ts ทั้งสองฝั่ง และ ci.yml เรียก `npm run test:coverage` — ยอมรับ threshold ระดับ baseline ปัจจุบันเป็นค่าชั่วคราว (interim, กันไม่ให้ลดลง) โดย **เป้าหมายตาม SOP: new code ≥ 80% (Advisory 1–2 sprint แรก แล้วเป็น Required; PR ที่แก้โค้ดน้อยกว่า 20 บรรทัดไม่รวม test/docs ได้รับยกเว้น) ส่วน Frontend ≥ 70% / Backend ≥ 80% ทั้งโปรเจกต์เป็นเป้าหมายระยะยาว ไม่ใช่เงื่อนไขบล็อก merge** | repo | | | อ้างอิง SOP: 06_TESTING/6.1_Testing_Strategy_Overview.md §Test Coverage เป้าหมาย / §Quality Gates; 07_GIT_WORKFLOW/7.3_Pull_Request_Process.md §Merge Rule |
| TS-09 | E2E รันใน CI ตามรอบที่กำหนด | มี job ใน `.github/workflows/` ที่รัน `npm run test:e2e` บน PR เข้า `main` หรือตามตารางเวลา nightly (ไม่ต้องรันทุก PR) | repo | | | |

## 4. Documentation Standard

| รหัส | รายการตรวจ | เกณฑ์ผ่าน | แหล่งหลักฐาน | ผล | หลักฐานอ้างอิง | หมายเหตุ |
|---|---|---|---|---|---|---|
| DOC-01 | README ตรงกับ project structure ปัจจุบัน | โฟลเดอร์ทุกตัวใน Project Structure ของ README มีอยู่จริง | repo | | | |
| DOC-02 | README มี API reference ตรงกับ route จริง | สุ่มตรวจ 5 route จาก `backend/src/routes/*.routes.ts` ปรากฏในตาราง API Reference ของ README | repo | | | |
| DOC-03 | มี `.env.example` ครบทุกตัวแปร | มี `backend/.env.example` และ `frontend/.env.example` และมีครบทุก env var ที่ `backend/src/config/env.ts` อ่าน (และตัวแปร `VITE_` ที่ frontend ใช้) | repo | | | |
| DOC-05 | มี `SECURITY.md` ที่เป็นปัจจุบัน | ทุก path ที่ SECURITY.md อ้างถึงมีอยู่จริงใน repo | repo | | | |
| DOC-06 | มี `frontend/tests/e2e/README.md` ที่เป็นปัจจุบัน | รายการไฟล์เทสต์ในเอกสารตรงกับไฟล์ `.spec.ts` จริงในโฟลเดอร์ | repo | | | |

## 5. Security & Dependency Hygiene

| รหัส | รายการตรวจ | เกณฑ์ผ่าน | แหล่งหลักฐาน | ผล | หลักฐานอ้างอิง | หมายเหตุ |
|---|---|---|---|---|---|---|
| SEC-01 | ไม่มีไฟล์ `.env`/secret จริงถูก commit | `git log --all --name-only \| grep -E '(^\|/)\.env$'` ว่างเปล่า และเปิด GitHub secret scanning **หรือ** สแกนด้วย gitleaks exit code = 0 | repo | | | |
| SEC-02 | ทุกตารางในฐานข้อมูลเปิด RLS | ทุกตารางใน `backend/supabase/migrations/` มีคำสั่ง `ENABLE ROW LEVEL SECURITY` กำกับ | repo | | | |
| SEC-03 | `JWT_SECRET` ผ่านการตรวจความแข็งแรงตอน boot | `backend/src/config/env.ts` throw error เมื่อ `JWT_SECRET` สั้นกว่า 32 ตัวอักษรหรือเป็น placeholder ที่รู้จัก | repo | | | |
| SEC-04 | npm audit รันบน PR และ fail เมื่อพบ critical | `security-audit.yml` รันบน PR เข้า `develop`/`main` และ fail เมื่อพบช่องโหว่ **critical** (`--audit-level=critical` ไม่มี `continue-on-error` หรือ `\|\| true`) | CI run | | | ยกระดับเป็น high เมื่อ advisory high ที่ค้างอยู่ถูกแก้ครบ (ติดตามใน SEC-06) — อ้างอิง SOP: 06_TESTING/6.5_Security_Test_Guide.md §1 Dependency Vulnerability Scanning; 07_GIT_WORKFLOW/7.5_GitHub_Actions_CI_Template.md §ไฟล์ที่ 1 ci.yml (Dependency Audit) |
| SEC-05 | Dependabot เปิดใช้งานจริงและสร้าง PR ได้ | มี `.github/dependabot.yml` และมี PR จาก dependabot[bot] ใน 90 วันล่าสุดอย่างน้อย 1 รายการ (ecosystem ใดก็ได้) | GitHub PR | | | |
| SEC-06 | มีการติดตามช่องโหว่ high/critical ที่ค้างอยู่ | มี tracking issue (Jira/GitHub) 1 ใบครอบคลุม advisory high/critical ที่ยังเปิดอยู่ พร้อมระบุเจ้าของ (owner) ชัดเจน | repo | | | |
| SEC-07 | ช่องทางรายงานช่องโหว่ระบุชัดเจน | `SECURITY.md` ระบุอีเมล/ช่องทางติดต่อจริง ไม่ใช่ `<TODO>` | repo | | | |
| SEC-08 | Production ตั้งค่า `NODE_ENV`/`CORS_ORIGIN` ถูกต้อง | ตรวจ config เครื่อง production จริง ยืนยันว่า `NODE_ENV=production` และ `CORS_ORIGIN` ไม่ใช่ `localhost` | ops/server | | | ถ้าเข้าถึง production ไม่ได้ ให้ระบุ "ตรวจไม่ได้" (ไม่นับเป็น ❌) |
| SEC-10 | มีรายชื่อผู้ถือ secret production และขั้นตอนหมุนกุญแจ | มีเอกสาร (ระบุ path) ระบุว่าใครถือ Supabase service-role key / production secrets และมีขั้นตอนหมุน (rotate) กุญแจเมื่อมีคนออกจากทีม | repo | | | |

## 6. Release & Deployment

| รหัส | รายการตรวจ | เกณฑ์ผ่าน | แหล่งหลักฐาน | ผล | หลักฐานอ้างอิง | หมายเหตุ |
|---|---|---|---|---|---|---|
| REL-01 | Commit message ตาม convention ที่ใช้จริง | commit 20 รายการล่าสุด (ไม่นับ Merge commit และ bot commit) ≥ 80% ตรง regex `^(feat\|fix\|docs\|style\|refactor\|test\|chore\|perf\|ci\|build\|revert)(\(.+\))?: .+` | repo | | | อ้างอิง SOP: 07_GIT_WORKFLOW/7.2_Commit_Message_Convention.md §Primary Types / §Additional Types |
| REL-02 | มีที่บันทึกเลข migration ที่รันต่อการ deploy | มีที่เก็บที่กำหนดไว้ (ไฟล์เดียวหรือ Jira) บันทึกเลข migration ล่าสุดต่อการ deploy — ผ่านถ้า deploy ครั้งล่าสุดถูกบันทึกไว้ | repo | | | |
| REL-05 | Backend และ frontend build สำเร็จ | backend `npm ci && npm run build` ได้ `backend/dist/server.js` และ frontend build ได้โฟลเดอร์ `dist/` โดยทั้งสองฝั่ง exit 0 (การ start จริงตรวจแยกบน staging ที่มี env ครบ) | repo | | | |
| REL-07 | มีขั้นตอน rollback เป็นลายลักษณ์อักษร | มีเอกสาร (ระบุ path ชัดเจน) ที่ระบุขั้นตอน rollback deployment (ตาม 5.5 — Render UI) + ขั้นตอนย้อน migration พร้อมผู้รับผิดชอบ | repo | | | อ้างอิง SOP: 05_DEPLOY/5.5_Post_Deploy_Verification.md §6 Rollback (6.2 วิธี, 6.3 ข้อควรระวัง Database Schema) และ §6 "ขั้นตอนย้อน migration" |
| REL-08 | เปิด backup Supabase และเคยทดสอบ restore | เปิด backup ของ Supabase และเคยทดสอบ restore อย่างน้อย 1 ครั้ง (บันทึกวันที่ + ผู้ทดสอบ) | ops/server | | | |
| REL-09 | Production มี monitoring + alert | production มี monitoring และ alert ตั้งค่าตามเกณฑ์ใน 5.7 (health check `/api/health` ทุก 1 นาที fail ต่อเนื่อง 3 ครั้ง, availability ≥ 99.5% ต่อเดือนในเวลาทำการ 07:30–16:30 จ.–ศ.) พร้อมระบุชื่อเจ้าของ alert | ops/server | | | อ้างอิง SOP: 05_DEPLOY/5.7_Continuous_Monitoring.md §ตาราง SLO / ข้อกำหนดบังคับ Owner |

---

## วิธีใช้แบบตรวจ

1. เปิดตารางแต่ละ phase ด้านบน กรอกคอลัมน์ **ผล** ด้วยสัญลักษณ์ตาม legend และกรอก **หลักฐานอ้างอิง** (path ไฟล์ / เลข PR / ลิงก์ CI run) ทุกแถวที่ตรวจ
2. ทุกรายการที่ได้ ⚠️ หรือ ❌ ให้บันทึกลง findings log แยกต่างหาก (สรุปปัญหา + ผู้รับผิดชอบ + กำหนดแก้ไข) เพื่อ track ต่อ
3. ทำซ้ำการ audit เป็นรอบ (เช่น ทุกไตรมาส หรือหลังมีการเปลี่ยนแปลงกระบวนการสำคัญ) โดยใช้ checklist ชุดเดียวกันเพื่อเทียบผลข้ามรอบได้
4. เมื่อรายการใดถูกแก้ไขแล้ว ให้ re-audit เฉพาะรายการนั้นและอัปเดตผลใหม่ พร้อมอ้างอิงหลักฐานที่แสดงว่าแก้ไขแล้วจริง

## เกณฑ์สรุปผล

- **Pass rate ต่อ phase** = (จำนวนรายการ ✅) / (จำนวนรายการทั้งหมดในphase ที่ไม่ใช่ N/A) × 100%
- **จำนวนรายการ**: 6 phase รวม 36 รายการ (BR 6 + CR 4 + TS 6 + DOC 5 + SEC 9 + REL 6) — ฐานหารจริงของแต่ละรอบ = 36 หักรายการ N/A และ "ตรวจไม่ได้"
- **Pass rate รวมโปรเจกต์** = (จำนวนรายการ ✅ ทั้งหมด) / (จำนวนรายการทั้งหมดที่ไม่ใช่ N/A) × 100%
- **เกณฑ์ผ่านของโปรเจกต์**: Pass rate รวม ≥ 80% **และ** ไม่มีรายการ ❌ ค้างอยู่ในหมวด Security & Dependency Hygiene (หมวด 5) เนื่องจากกระทบความเสี่ยงสูงสุด
- รายการที่เป็น ⚠️ นับเป็นครึ่งคะแนน (0.5) ในการคำนวณ pass rate เพื่อสะท้อนความคืบหน้าบางส่วน
- รายการที่ระบุ "ตรวจไม่ได้" (เช่น SEC-08 เมื่อเข้าถึง production ไม่ได้) ถูกตัดออกจากฐานหาร และไม่นับเป็น ❌ สำหรับเกณฑ์ผ่านหมวด Security
- ผลสรุปทั้งหมดต้องถูกนำเสนอและได้รับการยืนยันจากทีมตามตารางด้านล่าง ก่อนถือว่าการ audit รอบนั้นเสร็จสมบูรณ์

## ขอบเขตที่ถูกถอดออก (Removed from scope)

| รายการ | รายละเอียด |
|---|---|
| **สิ่งที่ถูกถอด** | Phase "Requirements & Planning" — รายการตรวจ REQ-01 ถึง REQ-06 (6 รายการ) และหัวข้อ workflow "0. Requirements & Planning" |
| **วันที่ถอด** | 2026-10-06 (v2.0) โดย Pantira S. |
| **เหตุผล** | Requirements artefacts (ticket/backlog, Definition of Done, การประเมินผลกระทบ, roadmap, traceability) ไม่ถูกเก็บใน repository จึงไม่สามารถตรวจเทียบกับหลักฐานจาก repo ได้ — การให้คะแนนหมวดนี้จึงไม่มีความหมายต่อการ audit ที่ต้องอิงสิ่งที่สังเกตได้จริงในโค้ด |
| **ผลต่อจำนวนรายการ** | 7 phase / 57 รายการ → **6 phase / 51 รายการ** (BR 8, CR 8, TS 11, DOC 8, SEC 9, REL 7) |
| **ผลต่อ pass rate** | ฐานหาร (denominator) ของ pass rate รวมโปรเจกต์เปลี่ยนไป **pass rate ตั้งแต่ 2026-10-06 เป็นต้นไปจึงเทียบตรงกับรอบก่อนหน้า (v1.0–v1.1 ที่มี 57 รายการ) ไม่ได้** — หากต้องเทียบข้ามรอบให้คำนวณตัวเลขรอบเก่าใหม่โดยตัดรายการ REQ ออกก่อน |
| **ประวัติ** | รายการ REQ-01..REQ-06 มีอยู่ใน v1.1 (2026-08-25) และผลตรวจรอบเก่าที่อ้าง REQ ยังคงเป็นหลักฐานประวัติ ไม่ถูกแก้ย้อนหลัง |

### v3.0 — ปรับให้กระชับสำหรับทีมขนาดเล็ก (2026-10-20)

| รายการที่ถูกถอด/รวม | เหตุผล |
|---|---|
| CR-04 CODEOWNERS | ทีมเล็กเกินไปที่จะมีผู้รับผิดชอบแยกตาม path — เลื่อนออก |
| CR-05, CR-08 | รวมเข้า CR-03 (PR template + PR กรอกครบ) |
| DOC-04 | รวมเข้า DOC-03 (`.env.example` ครบทุกตัวแปร) |
| DOC-07 คู่มือผู้ใช้ | ไม่ใช่เรื่อง SDLC — เลื่อนออก |
| DOC-08 JSDoc | วัดผิดจุด (นับจำนวน JSDoc ไม่ได้สะท้อนคุณภาพเอกสาร) — เลื่อนออก |
| TS-05, TS-06, TS-07 | รวมเข้า TS-04 (CI ผ่านครบ 4 job) |
| TS-10 export test:audit | เป็นเครื่องมือสำหรับ audit ไม่ใช่คุณภาพของโปรเจกต์ — เลื่อนออก |
| TS-11 frontend typecheck | เลื่อนจนกว่า frontend จะมี tsconfig |
| BR-03 | รวมเข้า BR-02 (รูปแบบชื่อ branch) |
| BR-06, CR-06 | รวมเข้า BR-05 (branch protection) |
| SEC-09 | รวมเข้า SEC-04 (audit ต้อง fail เมื่อพบ critical) |
| REL-03 semver | ใช้ git tag ตาม BR-08 แทน — เลื่อนออก |
| REL-04 | รวมเข้า BR-08 (tag/release + release notes) |
| REL-06 | รวมเข้า REL-05 (build backend + frontend) |

รายการใหม่ใน v3.0: SEC-10, REL-08, REL-09 · รายการที่ผ่อนเกณฑ์: BR-04, BR-07, CR-01, TS-08, TS-09, DOC-01, DOC-02, DOC-05, SEC-01, SEC-05, SEC-06, REL-01, REL-02 · ผลต่อจำนวน: **6 phase / 51 รายการ → 6 phase / 36 รายการ** (BR 6, CR 4, TS 6, DOC 5, SEC 9, REL 6) — ส่วน v2.0 (REQ) ด้านบนคงไว้เป็นประวัติ

## การยืนยันจากทีม (Team Confirmation / Sign-off)

| ชื่อ | บทบาท | วันที่ยืนยัน | ลายเซ็น/หลักฐาน |
|---|---|---|---|
| Pantira S. | ผู้จัดทำ (Owner) | 2026-08-25 | จัดทำ workflow document + audit checklist ครอบคลุม 7 phase (requirements & planning, branching, code review, testing, documentation, security, release) ตามสภาพจริงของโปรเจกต์ ณ วันที่จัดทำ — v1.1 |
| Pantira S. | ผู้จัดทำ (Owner) | 2026-10-06 | ปรับขอบเขตเป็น 6 phase / 51 รายการ โดยถอด Requirements & Planning (REQ-01..REQ-06) ออก — v2.0 |
| | Reviewer 1 | | |
| | Reviewer 2 | | |
| | Reviewer 3 | | |
