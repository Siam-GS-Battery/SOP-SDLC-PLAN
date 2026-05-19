# @siam-gs-battery/prettier-config

Shared Prettier config — สอดคล้องกับ [Code Standard Guide (SOP-DEV-001)](../../documentation/04_DEVELOPMENT/Code_Standard_Guide.md#12-tools--extensions)

## Installation

```bash
npm install -D @siam-gs-battery/prettier-config prettier@^3.0.0
```

> ต้องตั้ง `.npmrc` และ `GITHUB_TOKEN` ก่อน — ดู [packages/README.md](../README.md)

## Usage

วิธีที่ 1 — ใน `package.json`:

```json
{
  "prettier": "@siam-gs-battery/prettier-config"
}
```

วิธีที่ 2 — สร้าง `.prettierrc.js`:

```js
module.exports = require('@siam-gs-battery/prettier-config');
```

วิธีที่ 3 — Override บางค่า:

```js
module.exports = {
  ...require('@siam-gs-battery/prettier-config'),
  printWidth: 120,
};
```

## Config Values

| Key | Value |
|:---|:---|
| `semi` | `true` |
| `singleQuote` | `true` |
| `trailingComma` | `'es5'` |
| `printWidth` | `100` |
| `tabWidth` | `2` |
| `useTabs` | `false` |
| `arrowParens` | `'always'` |
| `endOfLine` | `'lf'` |

## Changelog

| Version | Date | Changes |
|:---|:---|:---|
| 0.1.0 | 2026-05-19 | Initial release |
