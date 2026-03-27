# Phase 6: Testing

> ตรวจสอบคุณภาพด้วยการทดสอบอย่างครอบคลุม

## เอกสารในหมวดนี้

| ลำดับ | เอกสาร | คำอธิบาย |
|:-----:|:-------|:---------|
| 6.1 | [Testing Strategy Overview](6.1_Testing_Strategy_Overview.md) | ภาพรวมกลยุทธ์การทดสอบ, Testing Pyramid, Coverage เป้าหมาย |
| 6.2 | [Unit Test Guide](6.2_Unit_Test_Guide.md) | แนวทาง Unit Test สำหรับ React + Node.js ด้วย Vitest |
| 6.3 | [Integration Test Guide](6.3_Integration_Test_Guide.md) | แนวทาง API Integration Test ด้วย Supertest |
| 6.4 | [Performance Test Guide](6.4_Performance_Test_Guide.md) | Load / Stress / Spike Test ด้วย k6 |
| 6.5 | [Security Test Guide](6.5_Security_Test_Guide.md) | Security Test ตาม OWASP Top 10 |
| - | [UAT Scenario Template](UAT_Scenario_Template.md) | Template สำหรับเขียน UAT scenarios |
| - | UAT_scenario.docx | เอกสาร UAT scenarios (Word format) |

## ลำดับการอ่านแนะนำ

1. เริ่มจาก **Testing Strategy Overview** เพื่อเข้าใจภาพรวมและ Testing Pyramid
2. อ่าน **Unit Test Guide** เพื่อเริ่มเขียน tests ตั้งแต่ development
3. อ่าน **Integration Test Guide** เมื่อต้อง test API endpoints
4. ดู **Performance Test Guide** ก่อน deploy ขึ้น production
5. ดู **Security Test Guide** เพื่อตรวจสอบช่องโหว่ก่อน release
6. ใช้ **UAT Scenario Template** สำหรับการทดสอบจากผู้ใช้งานจริง

## Phase ก่อนหน้า / ถัดไป

- ก่อนหน้า: [Phase 5 — Deploy](../05_DEPLOY/INDEX.md)
- ถัดไป: [Phase 7 — Git Workflow](../07_GIT_WORKFLOW/INDEX.md)

---

[กลับไปหน้าหลัก](../../README.md)
