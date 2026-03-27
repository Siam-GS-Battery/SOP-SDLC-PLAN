# Contributing Guide

*แนวทางการเพิ่มและแก้ไขเอกสารใน SOP-SDLC Repository*

---

## โครงสร้างโฟลเดอร์

```
documentation/
  00_ONBOARDING/       # เอกสาร Onboarding สำหรับสมาชิกใหม่
  01_REQUIREMENTS/     # เอกสาร Requirements Phase
  02_DESIGN/           # เอกสาร Design Phase
  03_DATABASE/         # เอกสาร Database Design
  04_DEVELOPMENT/      # เอกสาร Development Phase
  05_DEPLOY/           # เอกสาร Deployment
  06_TESTING/          # เอกสาร Testing
  07_GIT_WORKFLOW/     # เอกสาร Git Workflow
```

---

## หลักการตั้งชื่อไฟล์

### Format

```
<phase_number>.<document_number>_<Document_Title>.md
```

### ตัวอย่าง

| Phase | ตัวอย่างชื่อไฟล์ |
|:------|:-----------------|
| 00_ONBOARDING | `0.1_Welcome_Guide.md` |
| 01_REQUIREMENTS | `1.1_Raw_Requirement_List_MoSCoW.md` |
| 02_DESIGN | `2.1_UX_Flow_Diagram_FigJam_Link.md` |
| 03_DATABASE | `3.1_ERD_Diagram.md` |
| 04_DEVELOPMENT | `4.1_Project_Initialization.md` |
| 05_DEPLOY | `5.1_Deploy_Overview.md` |
| 06_TESTING | `UAT_Scenario_Template.md` |
| 07_GIT_WORKFLOW | `7.1_Branching_Strategy.md` |

### กฎการตั้งชื่อ

- ใช้ **ตัวเลข Phase** นำหน้า (เช่น `4.1_`, `5.2_`)
- ใช้ **underscore** `_` คั่นคำ
- ใช้ **PascalCase** สำหรับแต่ละคำ (เช่น `Project_Initialization`)
- ใช้ภาษา **อังกฤษ** สำหรับชื่อไฟล์เท่านั้น
- ไม่ใช้ **ช่องว่าง** ในชื่อไฟล์

---

## Template สำหรับเอกสารใหม่

ใช้ template ด้านล่างเมื่อสร้างเอกสารใหม่:

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

---

## ขั้นตอนการเพิ่ม/แก้ไขเอกสาร

### 1. สร้าง Branch

```bash
git checkout -b docs/<ticket-id>-<short-description>
# ตัวอย่าง: docs/KZN-100-add-api-testing-guide
```

### 2. เพิ่มหรือแก้ไขเอกสาร

- สร้างไฟล์ใน folder ที่เหมาะสม
- ใช้ naming convention ตามที่กำหนด
- ใช้ template ด้านบนเป็นแนวทาง

### 3. อัปเดตไฟล์ที่เกี่ยวข้อง

เมื่อเพิ่มเอกสารใหม่ ต้องอัปเดต **3 ไฟล์** เสมอ:

| ไฟล์ | สิ่งที่ต้องทำ |
|:-----|:-------------|
| `README.md` | เพิ่มลิงก์ในตารางของ phase ที่เกี่ยวข้อง |
| `documentation/<phase>/INDEX.md` | เพิ่มลิงก์ในตารางเอกสาร |
| `QUICK_START.md` | เพิ่มลิงก์ถ้าเอกสารสำคัญสำหรับ role ใด role หนึ่ง |

### 4. Commit และ Push

```bash
git add .
git commit -m "docs: add <document-name>"
git push origin docs/<ticket-id>-<short-description>
```

### 5. สร้าง Pull Request

- ใช้ title format: `docs: <สิ่งที่เปลี่ยน>`
- ระบุเหตุผลที่เพิ่ม/แก้ไข
- Tag reviewer อย่างน้อย 1 คน

---

## แนวทางการเขียนเนื้อหา

### ภาษา

- เนื้อหาเป็น **ภาษาไทย** เป็นหลัก
- คำศัพท์เทคนิคใช้ **ภาษาอังกฤษ** (เช่น Deploy, API, Database)
- ชื่อไฟล์และ code examples เป็น **ภาษาอังกฤษ** เท่านั้น

### Format

- ใช้ **tables** สำหรับข้อมูลที่เปรียบเทียบกัน
- ใช้ **Mermaid diagrams** สำหรับ flowcharts และ diagrams
- ใช้ **code blocks** พร้อมระบุภาษา (เช่น ` ```sql `, ` ```typescript `)
- ใช้ **headings** (H2, H3) เพื่อจัดโครงสร้าง — หลีกเลี่ยง H4 ลงไป
- ใช้ **blockquotes** (`>`) สำหรับ tips หรือ notes

### รูปภาพ

- เก็บรูปภาพไว้ในโฟลเดอร์ `img/` ภายใน phase เดียวกัน
- ตัวอย่าง: `documentation/02_DESIGN/img/HomePage.png`
- ใช้ relative paths ในการอ้างอิง

---

## Change Log

เมื่อมีการเปลี่ยนแปลงสำคัญ ให้อัปเดต Change Log ใน `README.md`:

```markdown
| 2026-xx-xx | vX.X | ชื่อ | สิ่งที่เปลี่ยนแปลง |
```

---

## มีคำถาม?

- ดู [Welcome Guide](documentation/00_ONBOARDING/0.1_Welcome_Guide.md) สำหรับช่องทางการติดต่อ
- สอบถามใน Team Channel

---

[กลับไปหน้าหลัก](README.md)
