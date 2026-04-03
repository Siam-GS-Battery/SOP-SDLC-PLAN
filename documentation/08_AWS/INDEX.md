# Phase 8: AWS Deploy Guide

> คู่มือ Deploy เว็บแอปพลิเคชันบน AWS — Step-by-Step Guide
> สถาปัตยกรรม EC2 + RDS + S3 + CloudFront + WAF
> อ้างอิงจากโครงสร้าง KAIZEN App — Siam GS Battery

## เอกสารในหมวดนี้

| ลำดับ | เอกสาร | คำอธิบาย |
|:-----:|:-------|:---------|
| 8.0 | [ภาพรวมและ Prerequisites](8.0_Overview_and_Prerequisites.md) | ภาพรวมสถาปัตยกรรม, สิ่งที่ต้องเตรียม, ค่าใช้จ่าย |
| 8.1 | [VPC และเครือข่าย](8.1_VPC_and_Networking.md) | สร้าง VPC, Subnets, Security Groups |
| 8.2 | [EC2 Instance](8.2_EC2_Instance.md) | สร้างเซิร์ฟเวอร์, ติดตั้ง Node.js + Nginx + PM2 |
| 8.3 | [RDS Database](8.3_RDS_Database.md) | สร้าง PostgreSQL, ตั้งค่า Private Access |
| 8.4 | [S3 Storage](8.4_S3_Storage.md) | สร้าง Buckets, ตั้งค่า Policy, Blue-Green |
| 8.5 | [CloudFront และ WAF](8.5_CloudFront_and_WAF.md) | ตั้งค่า CDN, SSL, Firewall Rules |
| 8.6 | [Security](8.6_Security.md) | Secrets Manager, KMS, SSL/TLS, CloudWatch |
| 8.7 | [CI/CD Pipeline](8.7_CICD_Pipeline.md) | GitHub Actions, SSM, Blue-Green Deployment |
| 8.8 | [Go-Live Checklist](8.8_Go_Live_Checklist.md) | Checklist ก่อนเปิดให้ผู้ใช้จริง |

## ลำดับการอ่านแนะนำ

1. เริ่มจาก **ภาพรวม** เพื่อเข้าใจสถาปัตยกรรมทั้งหมด
2. ทำตาม **ขั้นตอน 8.1 → 8.7** ตามลำดับ
3. ก่อน Go-Live ใช้ **Checklist 8.8** ตรวจสอบทุกอย่าง

## Phase ก่อนหน้า

- ก่อนหน้า: [Phase 7 — Git Workflow](../07_GIT_WORKFLOW/INDEX.md)

---

[กลับไปหน้าหลัก](../../README.md)
