# Phase 4: Development

> พัฒนาแอปพลิเคชันด้วย Figma Make + Claude Code

## Development Workflow

```
AC (Acceptance Criteria)
  → Figma Make สร้าง UI พร้อม DataContext
    → Import Code ออกมา
      → Claude อ่าน DataContext → สร้าง SQL Schema
        → Claude Code สร้าง Backend API
          → Claude Code เชื่อม Frontend ↔ Backend
```

## เอกสารในหมวดนี้

| ลำดับ | เอกสาร | คำอธิบาย |
|:-----:|:-------|:---------|
| ⭐ | [Code Standard Guide](Code_Standard_Guide.md) | มาตรฐานการเขียนโค้ด (อ่านก่อนเริ่มงาน) |
| 4.1 | [Project Initialization](4.1_Project_Initialization.md) | ตั้งค่า Repository และ Environment |
| 4.2 | [Import UI from Figma Make](4.2_Import_Wireframes.md) | นำเข้า Code จาก Figma Make ที่สร้างจาก AC |
| 4.3 | [Database from DataContext](4.3_Database_Design.md) | Claude อ่าน DataContext → สร้าง SQL Schema |
| 4.4 | [Backend Development](4.4_Backend_Project.md) | สร้าง Backend API ด้วย Claude Code |
| 4.5 | [Frontend Integration](4.5_Frontend_Integration.md) | Claude Code เชื่อม Frontend จาก Mockup ไป Backend จริง |

## ลำดับการทำงาน

1. อ่าน **Code Standard Guide** ก่อนเริ่มเขียนโค้ด
2. ทำ **Project Initialization** เพื่อ setup repository
3. **Import UI from Figma Make** — นำ code ที่ Figma Make สร้างจาก AC เข้าโปรเจกต์
4. **Database from DataContext** — ให้ Claude อ่าน DataContext แล้วสร้าง SQL
5. **Backend Development** — ใช้ Claude Code สร้าง Backend API
6. **Frontend Integration** — ใช้ Claude Code เปลี่ยนจาก mockup data ไปเชื่อม backend จริง

## Phase ก่อนหน้า / ถัดไป

- ก่อนหน้า: [Phase 3 — Database](../03_DATABASE/INDEX.md)
- ถัดไป: [Phase 5 — Deploy](../05_DEPLOY/INDEX.md)

---

[กลับไปหน้าหลัก](../../README.md)
