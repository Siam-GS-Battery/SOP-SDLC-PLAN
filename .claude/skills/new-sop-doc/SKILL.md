---
name: new-sop-doc
description: >-
  ใช้เมื่อต้องการเพิ่มหรือแก้ไขเอกสาร SOP/SDLC ใน repo เอกสารนี้ (SOP-SDLC-PLAN)
  และอัปเดตไฟล์ที่เกี่ยวข้องให้ครบทุกที่. Triggers: "เพิ่มเอกสาร SOP", "สร้างเอกสารใหม่
  เรื่อง ...", "เขียน doc ใน chapter ...", "เพิ่มคู่มือ ...", "add SOP document".
  ทำตาม CONTRIBUTING.md: ตั้งชื่อไฟล์ถูกรูปแบบ ใช้ template มาตรฐาน และอัปเดต
  README.md + INDEX.md + QUICK_START.md + Change Log ครบทุกไฟล์
---

# New SOP Doc — เพิ่ม/แก้เอกสาร SOP ตาม CONTRIBUTING

> ⚠️ Skill นี้ใช้กับ **repo เอกสาร SOP-SDLC-PLAN เท่านั้น** (ต้องมี `documentation/` + `CONTRIBUTING.md`)

อ้างอิงกฎทั้งหมดจาก `CONTRIBUTING.md` — เปิดอ่านก่อนเริ่มเสมอเพื่อใช้ค่าล่าสุด

## ขั้นตอนที่ 1 — ถามข้อมูลเอกสาร

1. **Phase/Chapter ปลายทาง** — เลือกจาก:
   `00_ONBOARDING` `01_REQUIREMENTS` `02_DESIGN` `03_DATABASE` `04_DEVELOPMENT`
   `05_DEPLOY` `06_TESTING` `07_GIT_WORKFLOW` `08_AWS`
2. **ชื่อเอกสาร (ภาษาอังกฤษ)** + **หมายเลขเอกสาร** (เช่น `4.6`)
3. เป็นการ **เพิ่มใหม่** หรือ **แก้ไข** เอกสารเดิม

## ขั้นตอนที่ 2 — ตั้งชื่อไฟล์ตาม Naming Convention

**รูปแบบ:** `<phase_number>.<document_number>_<Document_Title>.md`

กฎ:
- ใช้เลข Phase นำหน้า (เช่น `4.6_`)
- คั่นคำด้วย underscore `_`
- ใช้ **PascalCase** แต่ละคำ (เช่น `Project_Initialization`)
- **ชื่อไฟล์เป็นภาษาอังกฤษเท่านั้น** ห้ามมีช่องว่าง

ตัวอย่าง: `documentation/04_DEVELOPMENT/4.6_API_Documentation_Guide.md`

## ขั้นตอนที่ 3 — สร้างไฟล์จาก Template มาตรฐาน

```markdown
# <Phase Number>.<Doc Number> — <Document Title>

> คำอธิบายสั้นๆ ว่าเอกสารนี้คืออะไร

---

## วัตถุประสงค์

อธิบายว่าทำไมถึงต้องมีเอกสารนี้

## เนื้อหา

<!-- เนื้อหาหลักของเอกสาร -->

## Best Practices

- สิ่งที่ควรทำ
- สิ่งที่ไม่ควรทำ

## เอกสารที่เกี่ยวข้อง

- [เอกสาร A](link)
- [เอกสาร B](link)

---

[กลับไปหน้า INDEX](INDEX.md) | [กลับไปหน้าหลัก](../../README.md)
```

**กฎการเขียนเนื้อหา:**
- เนื้อหาเป็น **ภาษาไทย** เป็นหลัก, คำเทคนิคใช้อังกฤษ (Deploy, API, Database)
- code examples + ชื่อไฟล์ = ภาษาอังกฤษเท่านั้น
- ใช้ **tables** เปรียบเทียบข้อมูล, **Mermaid** สำหรับ diagram, **code blocks** ระบุภาษา
- ใช้ heading H2/H3 เท่านั้น (เลี่ยง H4 ลงไป), ใช้ blockquote `>` สำหรับ tip/note
- รูปภาพเก็บใน `img/` ภายใน phase เดียวกัน + ใช้ relative path

## ขั้นตอนที่ 4 — อัปเดตไฟล์ที่เกี่ยวข้อง (สำคัญที่สุด — ห้ามลืม)

เมื่อเพิ่มเอกสารใหม่ ต้องอัปเดต **3 ไฟล์เสมอ**:

| ไฟล์ | สิ่งที่ต้องทำ |
|:-----|:-------------|
| `README.md` | เพิ่มลิงก์ในตารางของ Chapter ที่เกี่ยวข้อง |
| `documentation/<phase>/INDEX.md` | เพิ่มลิงก์ในตารางเอกสาร |
| `QUICK_START.md` | เพิ่มลิงก์ ถ้าเอกสารสำคัญต่อ role ใด role หนึ่ง |

## ขั้นตอนที่ 5 — อัปเดต Change Log ใน README.md

เพิ่มแถวใหม่ในตาราง Change Log (ใช้วันที่ปัจจุบัน):

```markdown
| YYYY-MM-DD | vX.X | <สิ่งที่เปลี่ยนแปลง> |
```

> เพิ่ม minor version เมื่อเพิ่มเอกสารใหม่ เช่น v1.5 → v1.6

## ขั้นตอนที่ 6 — Commit ตามมาตรฐาน

ตาม Git Workflow ของทีม:

```bash
git checkout -b docs/<ticket-id>-<short-description>
git add .
git commit -m "docs: add <document-name>"
git push -u origin docs/<ticket-id>-<short-description>
```

> commit type เป็น `docs:` เสมอสำหรับงานเอกสาร

## Checklist สุดท้าย

- [ ] ชื่อไฟล์ถูกรูปแบบ `<phase>.<num>_<Title>.md` (PascalCase, อังกฤษ, ไม่มี space)
- [ ] เนื้อหาใช้ template มาตรฐาน + เนื้อหาเป็นไทย / code เป็นอังกฤษ
- [ ] อัปเดต `README.md` (ตาราง Chapter)
- [ ] อัปเดต `documentation/<phase>/INDEX.md`
- [ ] อัปเดต `QUICK_START.md` (ถ้าเกี่ยวกับ role)
- [ ] อัปเดต Change Log + version ใน `README.md`
- [ ] commit message ขึ้นต้น `docs:`
