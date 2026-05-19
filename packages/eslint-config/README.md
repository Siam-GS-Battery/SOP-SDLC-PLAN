# @siam-gs-battery/eslint-config

Shared ESLint config สำหรับโปรเจกต์ GS Battery — สอดคล้องกับ [Code Standard Guide (SOP-DEV-001)](../../documentation/04_DEVELOPMENT/Code_Standard_Guide.md)

## Presets

| Preset | สำหรับ | Import path |
|:---|:---|:---|
| **base** | TypeScript ทั่วไป | `@siam-gs-battery/eslint-config` |
| **react** | Vite + React + TypeScript | `@siam-gs-battery/eslint-config/react` |
| **node** | Node.js + Express + TypeScript | `@siam-gs-battery/eslint-config/node` |

## Installation

```bash
npm install -D @siam-gs-battery/eslint-config eslint@^8.57.0
```

> ต้องตั้ง `.npmrc` และ `GITHUB_TOKEN` ก่อน — ดู [packages/README.md](../README.md)

## Usage

### Frontend (React)

สร้าง `.eslintrc.cjs` ที่ root ของโปรเจกต์:

```js
module.exports = {
  root: true,
  extends: ['@siam-gs-battery/eslint-config/react'],
};
```

### Backend (Node.js)

```js
module.exports = {
  root: true,
  extends: ['@siam-gs-battery/eslint-config/node'],
};
```

### Generic TypeScript

```js
module.exports = {
  root: true,
  extends: ['@siam-gs-battery/eslint-config'],
};
```

## Rules ที่บังคับ

ตาม Code Standard Guide:

- `@typescript-eslint/no-explicit-any: error` — ห้ามใช้ `any`
- `@typescript-eslint/no-unused-vars: error` — ยกเว้น prefix `_`
- `no-console: warn` — อนุญาตเฉพาะ `console.warn` / `console.error`
- `eqeqeq: error` — ต้องใช้ `===` / `!==`
- `prefer-const`, `no-var` — error

## Compatibility

- ESLint: **^8.57.0** (legacy `.eslintrc` format)
- Migration ไป ESLint v9 (flat config) อยู่ใน roadmap

## Changelog

| Version | Date | Changes |
|:---|:---|:---|
| 0.1.0 | 2026-05-19 | Initial release — base / react / node presets |
