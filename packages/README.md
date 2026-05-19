# @siam-gs-battery — Internal NPM Packages

Shared configurations และ packages ที่ทีมใช้ร่วมกันในทุกโปรเจกต์ เพื่อให้:

- โปรเจกต์ใหม่เริ่มได้เร็ว ไม่ต้อง copy config ทุกครั้ง
- มาตรฐาน ESLint / Prettier / TypeScript เหมือนกันทั้งทีม
- อัปเดต config ครั้งเดียว ทุกโปรเจกต์ pull version ใหม่ได้

> 📦 Registry: **GitHub Packages** (`https://npm.pkg.github.com`)
> 🔐 Access: **Private** (จำกัดใน organization `siam-gs-battery`)

---

## Packages

| Package | Description | Version |
|:---|:---|:---|
| [`@siam-gs-battery/eslint-config`](./eslint-config/) | Shared ESLint config (base / react / node presets) | 0.1.0 |
| [`@siam-gs-battery/prettier-config`](./prettier-config/) | Shared Prettier config | 0.1.0 |
| [`@siam-gs-battery/tsconfig`](./tsconfig/) | Shared TypeScript base configs (base / react / node) | 0.1.0 |

---

## Quick Start (สำหรับ Consumer)

### 1. สร้าง `.npmrc` ใน root ของโปรเจกต์

```ini
@siam-gs-battery:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

> ⚠️ ห้าม commit ค่า token จริง — ใช้ environment variable `GITHUB_TOKEN` ที่อ่านจาก shell

### 2. ตั้งค่า `GITHUB_TOKEN`

สร้าง Personal Access Token (PAT) ที่ https://github.com/settings/tokens (classic) ด้วย scope:

- `read:packages` — สำหรับ install
- `write:packages` — สำหรับ publish (เฉพาะ maintainer)

แล้ว export:

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

(แนะนำใส่ใน `~/.zshrc` / `~/.bashrc` หรือใช้ tool เช่น direnv)

### 3. ติดตั้ง package

```bash
npm install -D @siam-gs-battery/eslint-config \
               @siam-gs-battery/prettier-config \
               @siam-gs-battery/tsconfig
```

ดูตัวอย่างการใช้งานในไฟล์ README ของแต่ละ package

---

## Development (สำหรับ Maintainer)

```bash
# clone + install
git clone https://github.com/siam-gs-battery/sop-sdlc-plan.git
cd sop-sdlc-plan
npm install

# แก้ไข package ใต้ packages/*
# bump version
npm run version:patch   # หรือ version:minor / version:major

# publish (จะรันผ่าน GitHub Actions อัตโนมัติเมื่อ tag)
```

ดูรายละเอียดการ release ใน [4.1.2 Internal NPM Packages](../documentation/04_DEVELOPMENT/4.1.2_Internal_NPM_Packages.md)
