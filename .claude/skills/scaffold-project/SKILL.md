---
name: scaffold-project
description: >-
  ใช้เมื่อผู้ใช้ต้องการเริ่มต้นโปรเจกต์ใหม่ ตั้งค่า repository สร้าง starter package
  หรือ scaffold โครงสร้าง frontend/backend ตามมาตรฐานทีม GS Battery (React + Node.js +
  TypeScript + Tailwind + PostgreSQL/Supabase). Triggers: "เริ่มโปรเจกต์ใหม่",
  "ตั้งโปรเจกต์", "scaffold project", "สร้าง starter / boilerplate", "init project",
  "ตั้งค่า frontend/backend ใหม่". สร้างโครงโฟลเดอร์ + ติดตั้ง dependencies ตาม Tier +
  ตั้งค่า ESLint/Prettier/Husky + .env.example + .gitignore ตาม SOP 4.1 และ 4.1.1
---

# Scaffold Project — สร้าง Starter Package ตามมาตรฐานทีม

สร้างโครงโปรเจกต์ใหม่ให้ตรงกับ SOP ของทีม IT & Data Management (GS Battery)
อ้างอิง: `documentation/04_DEVELOPMENT/4.1_Project_Initialization.md`,
`4.1.1_Dependencies_Checklist.md`, `Code_Standard_Guide.md`
(ถ้าโฟลเดอร์ `documentation/` มีอยู่ในโปรเจกต์ ให้เปิดอ่านเพื่อใช้ค่าล่าสุดเสมอ)

## ขั้นตอนที่ 1 — ถามข้อมูลที่จำเป็นก่อนเริ่ม

ถามผู้ใช้ (ถ้ายังไม่ได้ระบุ):

1. **ชื่อโปรเจกต์** — ใช้รูปแบบ repo ของทีม เช่น `DM-S-09-<project-name>`
2. **ต้องการส่วนไหน** — `frontend` / `backend` / ทั้งคู่ (monorepo)
3. **ประเภทแอป** (เพื่อเลือก dependency Tier ที่เหมาะ — ดูขั้นตอนที่ 3):
   - Dashboard/Analytics (chart, ตาราง, export Excel)
   - Heavy Forms (form ซับซ้อน, date picker, OTP)
   - Mobile/Field (QR scan, กล้อง)
   - มี Auth (login/JWT) หรือไม่
   - Database: Supabase (default) หรือ PostgreSQL ตรง

## ขั้นตอนที่ 2 — สร้างโครงโฟลเดอร์

ตาม Code Standard Section 2 (`Code_Standard_Guide.md`):

```bash
# Frontend
mkdir -p frontend/src/{components/{common,layout,features},pages,hooks,services,store,types,utils,constants,assets,lib}
mkdir -p frontend/public

# Backend (MVC: Controller → Service → Repository)
mkdir -p backend/src/{config,controllers,services,repositories,routes,middlewares,types,utils,validators}
mkdir -p backend/tests

# Database
mkdir -p database/{migrations,seeds,schemas}
```

## ขั้นตอนที่ 3 — ติดตั้ง Dependencies ตาม Tier

> เริ่มจาก **Tier 0 (Base)** เสมอ แล้วเพิ่ม Tier อื่นตามประเภทแอปที่ผู้ใช้เลือก

### Frontend (Vite + React + TS + Tailwind v4)

```bash
npm create vite@latest frontend -- --template react-ts
cd frontend
# Tier 0 — Base (ทุกโปรเจกต์)
npm install react@^18.3.1 react-dom@^18.3.1 react-router-dom@^7.0.0 axios@^1.7.0 \
  zod@^3.23.8 react-hook-form@^7.55.0 @hookform/resolvers \
  tailwindcss@^4.1.0 @tailwindcss/vite@^4.1.0 \
  clsx@^2.1.1 tailwind-merge@^3.0.0 class-variance-authority@^0.7.1 \
  lucide-react sonner
npm install -D typescript@^5.5.0 @types/node eslint @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin eslint-config-prettier prettier
```

Tier เพิ่มเติม (ติดตั้งเฉพาะที่ผู้ใช้ต้องการ):
- **Dashboard:** `recharts xlsx`
- **Heavy Forms:** `react-day-picker date-fns input-otp`
- **Mobile/QR:** `html5-qrcode qrcode.react vaul`
- **Theme:** `next-themes`
- **E2E:** `-D @playwright/test`

### Backend (Node + Express + TS)

```bash
cd ../backend && npm init -y
# Tier 0 — Base + Security (ทุก API)
npm install express@^4.21.0 cors@^2.8.5 helmet@^8.0.0 compression@^1.7.4 \
  morgan@^1.10.0 express-rate-limit@^7.4.0 dotenv@^16.4.5 zod@^3.23.8
npm install -D typescript@^5.5.0 tsx@^4.16.0 @types/node @types/express \
  @types/cors @types/morgan @types/compression eslint @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin eslint-config-prettier prettier
```

Tier เพิ่มเติม:
- **Auth:** `bcryptjs jsonwebtoken` + `-D @types/bcryptjs @types/jsonwebtoken`
- **DB (Supabase):** `@supabase/supabase-js` / **(PostgreSQL):** `pg` + `-D @types/pg`
- **File Upload:** `multer` + `-D @types/multer`
- **S3:** `@aws-sdk/client-s3 @aws-sdk/s3-request-presigner`
- **Cron:** `node-cron` + `-D @types/node-cron`

## ขั้นตอนที่ 4 — ไฟล์ config บังคับ

สร้างไฟล์เหล่านี้ทุกครั้ง (ดูเนื้อหาเต็มใน `Code_Standard_Guide.md` §3, §12):

- **`tsconfig.json`** — `strict: true`, `noImplicitAny: true`, `noUnusedLocals: true`, `noUnusedParameters: true`
- **`.eslintrc` / eslint config** — เปิด `@typescript-eslint/no-explicit-any: 'error'`, `no-console: 'warn'`
- **`.prettierrc`** — `semi: true, singleQuote: true, printWidth: 100, tabWidth: 2`
- **`vite.config.ts`** (frontend) — ใส่ plugin `@tailwindcss/vite` และ `@vitejs/plugin-react`
- **`src/index.css`** (frontend) — `@import "tailwindcss";`
- **`src/lib/utils.ts`** (frontend) — helper `cn()` (clsx + tailwind-merge)
- **`backend/src/server.ts`** — express + helmet + cors whitelist + `/health` endpoint
- **Backend global error handler** — แปลง `ZodError → 400`, ใช้ `AppError` classes

## ขั้นตอนที่ 5 — `.env.example` + `.gitignore`

**`.env.example`** (มีแต่ key ห้ามใส่ค่าจริง):

```bash
# Frontend
VITE_API_URL=http://localhost:5000
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
# Backend
PORT=5000
NODE_ENV=development
DATABASE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
JWT_SECRET=
JWT_EXPIRES_IN=7d
ALLOWED_ORIGINS=http://localhost:5173
```

**`.gitignore`** ต้องมี: `node_modules/`, `dist/`, `*.tsbuildinfo`, `.env`, `.env.local`,
`.env.*.local`, `.vscode/`, `.idea/`, `.DS_Store`, `*.log`, `coverage/`

> ⚠️ **ห้าม commit `.env`** เด็ดขาด — เป็นข้อห้ามใน Code Standard

## ขั้นตอนที่ 6 — Git Hooks (Husky + lint-staged)

```bash
cd .. && npm init -y
npm install -D husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

root `package.json`:
```json
{
  "lint-staged": {
    "frontend/src/**/*.{ts,tsx}": ["cd frontend && npm run lint:fix", "cd frontend && npm run format"],
    "backend/src/**/*.ts": ["cd backend && npm run lint:fix", "cd backend && npm run format"]
  }
}
```

## ขั้นตอนที่ 7 — Branch + First Commit

ตาม Branching Strategy (`7.1`):

```bash
git checkout -b develop
git add .
git commit -m "chore: initial project setup with frontend and backend"
git push -u origin develop
```

> commit message ต้องเป็น **Conventional Commits** (`type(scope): subject`, imperative, lowercase)

## Checklist สุดท้าย — ตรวจก่อนส่งมอบ

- [ ] โครงโฟลเดอร์ frontend/backend ครบตาม Code Standard §2
- [ ] `frontend`: `npm run dev` รันได้ + Tailwind ทำงาน
- [ ] `backend`: `npm run dev` รันได้ + `/health` ตอบ OK
- [ ] `tsconfig.json` เปิด strict mode ทั้งสองฝั่ง
- [ ] ESLint เปิด `no-explicit-any: error` + Prettier ตั้งค่าแล้ว
- [ ] `.env.example` มีแต่ key, `.env` อยู่ใน `.gitignore`
- [ ] Backend: helmet + cors whitelist + rate-limit + global error handler
- [ ] Husky + lint-staged ทำงาน (pre-commit)
- [ ] First commit ใช้รูปแบบ Conventional Commits
- [ ] ไม่มี secret hardcode ในโค้ด

## ข้อห้ามสำคัญ (อย่าให้หลุด)

| ห้าม | ทำแทน |
|:-----|:------|
| ใช้ `any` | type/interface เฉพาะ หรือ `unknown` |
| Hardcode secret | ใช้ Environment Variables |
| Commit `.env` | ใส่ `.gitignore` + ใช้ `.env.example` |
| String interpolation ใน SQL | Parameterized queries (`$1, $2`) |
| Class component / inline style | Functional component + Hooks / Tailwind |
| Push ตรง `main` | feature branch + Pull Request |
| ภาษาไทยในโค้ด/ชื่อไฟล์ | ภาษาอังกฤษเท่านั้น |
