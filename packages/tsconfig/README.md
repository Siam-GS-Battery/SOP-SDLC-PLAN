# @siam-gs-battery/tsconfig

Shared TypeScript base configs สำหรับโปรเจกต์ GS Battery — สอดคล้องกับ [Code Standard Guide (SOP-DEV-001) Section 3](../../documentation/04_DEVELOPMENT/Code_Standard_Guide.md#3-typescript-guidelines)

## Presets

| Preset | สำหรับ | Path |
|:---|:---|:---|
| **base** | TypeScript ทั่วไป | `@siam-gs-battery/tsconfig/base.json` |
| **react** | Vite + React | `@siam-gs-battery/tsconfig/react.json` |
| **node** | Node.js + Express | `@siam-gs-battery/tsconfig/node.json` |

## Installation

```bash
npm install -D @siam-gs-battery/tsconfig typescript@^5.5.0
```

> ต้องตั้ง `.npmrc` และ `GITHUB_TOKEN` ก่อน — ดู [packages/README.md](../README.md)

## Usage

### Frontend (Vite + React)

`tsconfig.json`:

```json
{
  "extends": "@siam-gs-battery/tsconfig/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### Backend (Node.js)

```json
{
  "extends": "@siam-gs-battery/tsconfig/node.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

## Settings ที่บังคับ

ตาม Code Standard Guide:

- `strict: true` — strict mode เปิดเต็มรูปแบบ
- `noImplicitAny: true` — ห้าม implicit `any`
- `strictNullChecks: true` — null safety
- `noUnusedLocals: true` / `noUnusedParameters: true` — ห้ามตัวแปร/parameter ที่ไม่ใช้
- `forceConsistentCasingInFileNames: true` — ป้องกัน case-sensitivity issues
- `target: ES2022`, `module: ESNext` (react) / `CommonJS` (node)

## Changelog

| Version | Date | Changes |
|:---|:---|:---|
| 0.1.0 | 2026-05-19 | Initial release — base / react / node presets |
