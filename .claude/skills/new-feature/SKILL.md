---
name: new-feature
description: >-
  ใช้เมื่อผู้ใช้จะเริ่มงานใหม่บน Git — สร้าง branch สำหรับ feature/fix/hotfix/refactor/chore
  ตามมาตรฐาน Git Workflow ของทีม GS Battery และช่วยเขียน commit/PR ให้ถูกต้อง.
  Triggers: "เริ่มงาน feature ...", "สร้าง branch", "เริ่มทำ ...", "จะแก้ bug ...",
  "เปิด PR", "เขียน commit message", "start new task/feature". บังคับ Branch Naming
  Convention, Conventional Commits และ PR checklist ตาม SOP 7.1, 7.2, 7.3
---

# New Feature — เริ่มงานบน Git ตามมาตรฐานทีม

ช่วยให้การเริ่มงานใหม่เป็นไปตาม Git Workflow ของทีม
อ้างอิง: `documentation/07_GIT_WORKFLOW/7.1_Branching_Strategy.md`, `7.2_Commit_Message_Convention.md`, `7.3_Pull_Request_Process.md`
(ถ้ามีโฟลเดอร์ `documentation/` ในโปรเจกต์ ให้เปิดอ่านค่าล่าสุดเสมอ)

## ขั้นตอนที่ 1 — ถามข้อมูลงาน

ถามผู้ใช้ (ถ้ายังไม่ระบุ):

1. **ประเภทงาน** → เลือก type: `feature` / `fix` / `hotfix` / `refactor` / `chore`
2. **Asana Task ID** (บังคับ — ใส่ในชื่อ branch และ PR เสมอ)
3. **คำอธิบายงานสั้นๆ** (2–5 คำ ภาษาอังกฤษ)

## ขั้นตอนที่ 2 — สร้าง Branch ตาม Naming Convention

**รูปแบบ:** `<type>/<asana-task-id>-<short-description>`

| Type | Merge เข้า | สร้างจาก |
|:-----|:----------|:--------|
| `feature/` | `develop` | `develop` |
| `fix/` | `develop` | `develop` |
| `refactor/` | `develop` | `develop` |
| `chore/` | `develop` | `develop` |
| `hotfix/` | `main` → `develop` | `main` |

**กฎชื่อ branch (บังคับ):**
- ✅ lowercase ทั้งหมด, ใช้ hyphen `-` แทน space
- ✅ ใส่ Asana Task ID เสมอ, ชื่อสั้น 2–5 คำ
- ❌ ห้ามภาษาไทย, ห้าม special characters

**สำหรับ feature/fix/refactor/chore — เริ่มจาก develop:**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/1234567890-add-login
```

**สำหรับ hotfix — เริ่มจาก main:**
```bash
git checkout main
git pull origin main
git checkout -b hotfix/1234567892-fix-critical-bug
```

> ❌ **ห้าม commit ลง `main`/`develop` โดยตรง** — เป็น protected branch

## ขั้นตอนที่ 3 — ทำงาน + Commit ตาม Conventional Commits

**รูปแบบ:** `<type>(<scope>): <subject>`

- **type:** `feat` `fix` `docs` `style` `refactor` `test` `chore` `perf` `ci` `build` `revert`
- **scope (opt: ):** `auth` `api` `ui` `db` `config` `deps` ...
- **subject:** imperative, lowercase, ไม่มีจุดท้าย, ≤ 50 ตัวอักษร, ภาษาอังกฤษ

```bash
git add .
git commit -m "feat(auth): add login form component"
git commit -m "feat(auth): add form validation"
```

**กฎ:** atomic commit (1 commit = 1 การเปลี่ยนแปลง), commit ทุก 1–2 ชม.

| ✅ ดี | ❌ ไม่ดี |
|:-----|:--------|
| `feat(auth): add google oauth login` | `update code` |
| `fix(payment): handle null response` | `fix: fix bug` |
| `chore(deps): upgrade react to v19` | `feat: เพิ่มหน้า login` (ภาษาไทย) |
| | `feat: add login and fix navbar and update readme` (หลายงาน) |

## ขั้นตอนที่ 4 — Push + เปิด Pull Request

```bash
git push -u origin feature/1234567890-add-login
```

เปิด PR (ตาม `7.3_Pull_Request_Process.md`):
- **Title:** ใช้รูปแบบ Conventional Commits เช่น `feat(auth): add login`
- **Description:** ใส่ **ลิงก์ Asana Task** เสมอ + อธิบายสิ่งที่เปลี่ยนและเหตุผล
- Tag reviewer อย่างน้อย 1 คน
- รอ CI ผ่าน + ได้ approval ก่อน merge

### PR Checklist (ก่อนขอ review)
- [ ] ชื่อ branch ตาม convention + มี Asana Task ID
- [ ] commit ทุกตัวเป็น Conventional Commits
- [ ] ไม่มี `console.log()` / commented code เหลือ
- [ ] ไม่มี `any` type / ไม่มี code duplication
- [ ] Lint + Build + Tests ผ่าน
- [ ] ไม่มี secret / `.env` ถูก commit
- [ ] PR description มีลิงก์ Asana

## ขั้นตอนที่ 5 — หลัง Merge

```bash
git checkout develop && git pull origin develop
git branch -d feature/1234567890-add-login
git push origin --delete feature/1234567890-add-login
```
