# `.claude/` — ชุด Skill กลางสำหรับทีม (Team Skill Package)

ชุดนี้คือ **Claude Code Skills ส่วนกลาง** ที่ทำให้ทุกคนในทีมทำงานตาม **SOP-SDLC** ได้ง่ายและเป็นมาตรฐานเดียวกัน
แต่ละ Skill อ้างอิงกฎจริงจากโฟลเดอร์ [`documentation/`](../documentation/) ของ repo นี้

> **แนวคิด:** Skill ช่วยให้ "ทำถูกตั้งแต่แรก" (assist) ส่วนการบังคับ "เป๊ะๆ" (enforce)
> ให้ใช้ Git Hooks + GitHub Actions CI ควบคู่กัน — ดู [Roadmap ด้านล่าง](#-roadmap-ส่วนที่ยังไม่ได้ทำ)

---

## 📦 Skills ในชุดนี้

| Skill | ใช้เมื่อ | อ้างอิง SOP |
|:------|:--------|:-----------|
| [`scaffold-project`](skills/scaffold-project/SKILL.md) | เริ่มโปรเจกต์ใหม่ — สร้าง starter package (frontend + backend) | `4.1`, `4.1.1`, Code Standard |
| [`new-feature`](skills/new-feature/SKILL.md) | เริ่มงาน feature/fix ใหม่ — สร้าง branch + commit ตามมาตรฐาน | `7.1`, `7.2`, `7.3` |
| [`new-sop-doc`](skills/new-sop-doc/SKILL.md) | เพิ่ม/แก้เอกสาร SOP ใน repo นี้ + อัปเดตไฟล์ที่เกี่ยวข้องครบ | `CONTRIBUTING.md` |

---

## 🚀 วิธีใช้

Skill เหล่านี้ Claude จะ **เรียกใช้เองอัตโนมัติ** เมื่อเจองานที่ตรงกับ `description` ของแต่ละ Skill
หรือผู้ใช้พิมพ์เรียกตรงๆ ก็ได้ เช่น:

```
/scaffold-project        # หรือพิมพ์ว่า "ช่วยตั้งโปรเจกต์ใหม่ให้หน่อย"
/new-feature             # หรือ "เริ่มงาน feature login"
/new-sop-doc             # หรือ "เพิ่มเอกสาร SOP เรื่อง ..."
```

---

## 🌐 นำไปใช้กับโปรเจกต์อื่น (Deploy เป็น Template กลาง)

repo นี้คือ **แหล่งกลาง (source of truth)** ของ Skill ทั้งหมด เวลาเปิดโปรเจกต์ใหม่:

```bash
# คัดลอกชุด skill เข้าโปรเจกต์เป้าหมาย
cp -r /path/to/SOP-SDLC-PLAN/.claude /path/to/your-new-project/

# จากนั้น commit เข้า repo โปรเจกต์นั้น
cd /path/to/your-new-project
git add .claude && git commit -m "chore: add team SOP skills"
```

> - `scaffold-project` และ `new-feature` ออกแบบให้ **พกพาได้** (กฎสำคัญฝังอยู่ในตัว Skill) จึงทำงานได้แม้ในโปรเจกต์ที่ไม่มีโฟลเดอร์ `documentation/`
> - `new-sop-doc` ใช้กับ **repo SOP นี้เท่านั้น** (ต้องมี `documentation/` + `CONTRIBUTING.md`)

---

## 🗺️ Roadmap (ส่วนที่ยังไม่ได้ทำ)

ชุดนี้เป็น **ชั้นที่ 2 (Skills)** จากสถาปัตยกรรม 4 ชั้น ส่วนที่เหลือเพิ่มได้ภายหลัง:

| ชั้น | สิ่งที่ทำ | สถานะ |
|:----|:--------|:------|
| 1. `CLAUDE.md` | กฎ always-on โหลดทุก session | ⬜ ยังไม่ทำ |
| 2. **Skills** | ช่วยทำงานซ้ำๆ ตาม SOP | ✅ **ชุดนี้** |
| 3. Subagents | `code-reviewer`, `security-reviewer` | ⬜ ยังไม่ทำ |
| 4. Hooks + CI | commitlint, บล็อก `.env`/`any`, บล็อก push `main` | ⬜ ยังไม่ทำ (มี `.github/workflows/` อยู่แล้วต่อยอดได้) |

---

[← กลับหน้าหลัก](../README.md)
