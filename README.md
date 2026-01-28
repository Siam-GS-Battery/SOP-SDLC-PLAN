<div align="center">

# 📚 SOP-SDLC Documentation


[![Documentation](https://img.shields.io/badge/Documentation-Complete-brightgreen)](documentation/)
[![SDLC](https://img.shields.io/badge/SDLC-Full%20Lifecycle-blue)]()
[![Status](https://img.shields.io/badge/Status-Active-success)]()

*A comprehensive documentation repository covering the full Software Development Life Cycle*

---

[Requirements](#-1-requirements-phase) •
[Design](#-2-design-phase) •
[Database](#%EF%B8%8F-3-database-design) •
[Development](#-4-development-phase) •
[Deploy](#-5-deploy-phase) •
[Testing](#-6-testing-phase)

---

</div>

## 📖 Overview

This repository stores all documentation related to the **Kaizen Web Application** project, covering the full SDLC lifecycle — from requirements gathering to production delivery.

<br>

## 🧩 1. REQUIREMENTS PHASE

> *Define what to build and prioritize features*

| Document | Description |
|:---------|:------------|
| 📋 [Raw Requirement List (MoSCoW)](documentation/01_REQUIREMENTS/1.1_Raw_Requirement_List_MoSCoW.md) | Raw requirements with MoSCoW prioritization (Must, Should, Could, Won't) |
| 📝 [User Story List](documentation/01_REQUIREMENTS/1.2_User_Story_List.md) | User stories grouped by role and feature |
| ✅ [Acceptance Criteria](documentation/01_REQUIREMENTS/1.3_Acceptance_Criteria.md) | Definition of done for each story |
| 📅 [Roadmap & Timeline](documentation/01_REQUIREMENTS/1.4_Roadmap_Timeline_Asana_Link.md) | Timeline planning with Asana integration |

<br>

## 🎨 2. DESIGN PHASE

> *Create user experience flows and visual designs*

| Document | Description |
|:---------|:------------|
| 🔀 [UX Flow Diagram](documentation/02_DESIGN/2.1_UX_Flow_Diagram_FigJam_Link.md) | User flow map from FigJam |
| 🖼️ [Wireframe Screens](documentation/02_DESIGN/2.2_Wireframe_Screens_Figma_Link.md) | Wireframes for each page |
| 🎯 [Interactive Prototype](documentation/02_DESIGN/2.3_Interactive_Prototype_Link.md) | Clickable prototype for UAT |
| ⚙️ [Technical Stack](documentation/02_DESIGN/2.4_Technical_Stack.md) | Technical stack documentation |
| 🛠️ [Wireframe with Figma Make](documentation/02_DESIGN/2.5_Wireframe_with_Figma_Make.md) | Wireframe creation with Figma Make |
| 🎨 [UI Design with Figma Make](documentation/02_DESIGN/2.6_UI_Design_with_Figma_Make.md) | UI Design creation and Export to GitHub |

<br>

## 🗄️ 3. DATABASE DESIGN

> *Structure the data layer and relationships*

| Document | Description |
|:---------|:------------|
| 📊 [ERD Diagram](documentation/03_DATABASE/3.1_ERD_Diagram.md) | Entity Relationship Diagram |
| 📑 [Database Schema](documentation/03_DATABASE/3.2_Database_Schema_Document.md) | Detailed schema (tables, relations, enums, indexes) |
| 🔄 [Database Migration from Figma](documentation/03_DATABASE/3.3_Database_Migration_from_Figma_DataContext.md) | Migration from Figma DataContext to Supabase |

<br>

## 💻 4. DEVELOPMENT PHASE

> *Build the application with best practices*

| Document | Description |
|:---------|:------------|
| 🚀 [Project Initialization](documentation/04_DEVELOPMENT/5.1_Project_Initialization.md) | Project setup and initialization |
| 📥 [Import Wireframes](documentation/04_DEVELOPMENT/5.2_Import_Wireframes.md) | Wireframe import documentation |
| 🔍 [Frontend Analysis](documentation/04_DEVELOPMENT/5.3_Frontend_Analyze.md) | Frontend analysis documentation |
| 🎬 [Generate Demo](documentation/04_DEVELOPMENT/5.4_Generate_Demo.md) | Demo generation guide |
| 🗃️ [Database Design](documentation/04_DEVELOPMENT/5.5_Database_Design.md) | Database design documentation |
| ⚡ [Backend Project](documentation/04_DEVELOPMENT/5.6_Backend_Project.md) | Backend project documentation |
| 🔌 [API Development](documentation/04_DEVELOPMENT/5.7_API_Development.md) | API development documentation |
| 🔗 [Frontend Integration](documentation/04_DEVELOPMENT/5.8_Frontend_Integration.md) | Frontend integration documentation |
| 📏 [Code Standard Guide](documentation/04_DEVELOPMENT/Code_Standard_Guide.md) | Coding standards and guidelines |

<br>

## 🚀 5. DEPLOY PHASE

> *Ship to production safely*

| Document | Description |
|:---------|:------------|
| 📋 [Deploy Overview](documentation/05_DEPLOY/5.1_Deploy_Overview.md) | Deployment overview |
| ✅ [Pre-Deploy Checklist](documentation/05_DEPLOY/5.2_Pre_Deploy_Checklist.md) | Pre-deployment checklist |
| 🔐 [Environment Variables](documentation/05_DEPLOY/5.3_Environment_Variables.md) | Environment variables configuration |
| 📝 [Deploy Steps](documentation/05_DEPLOY/5.4_Deploy_Steps.md) | Step-by-step deployment guide |
| 🔎 [Post-Deploy Verification](documentation/05_DEPLOY/5.5_Post_Deploy_Verification.md) | Post-deployment verification |
| 🔧 [Troubleshooting](documentation/05_DEPLOY/5.6_Troubleshooting.md) | Troubleshooting guide |

<br>

## 🧪 6. TESTING PHASE

> *Ensure quality through comprehensive testing*

| Document | Description |
|:---------|:------------|
| 📝 [UAT Scenario Template](documentation/06_TESTING/UAT_Scenario_Template.md) | UAT scenario template |
| 📄 UAT_scenario.docx | UAT scenario document (Word format) |

<br>

---

## 📁 Project Structure

```
📦 SOP-SDLC-PLAN
 ┣ 📂 documentation
 ┃ ┣ 📂 01_REQUIREMENTS    → Requirements phase documents
 ┃ ┣ 📂 02_DESIGN          → Design phase documents & images
 ┃ ┣ 📂 03_DATABASE        → Database design documents
 ┃ ┣ 📂 04_DEVELOPMENT     → Development phase documents
 ┃ ┣ 📂 05_DEPLOY          → Deployment documents
 ┃ ┗ 📂 06_TESTING         → Testing documents
 ┗ 📄 README.md
```

<br>

---

## 📜 Documentation Policy

| Policy | Description |
|:-------|:------------|
| 📍 **Location** | All documents must be stored under `/documentation/` folder |
| 📝 **Versioning** | Each version update must be recorded in the Change Log below |
| 🔗 **External Links** | FigJam / Figma / Asana links must be publicly viewable |
| 📛 **Naming Convention** | `<phase>_<document_title>_<version>.<ext>` |

> **Example:** `1.1_Raw_Requirement_List_v1.0.xlsx`

<br>

---

## 🕒 Change Log

| Date | Version | Author | Changes |
|:-----|:--------|:-------|:--------|
| 2025-12-16 | v1.0 | Fahfon | Initial document structure created |

<br>

---

<div align="center">

**Made with by the IT & Datamanagement Team**

</div>
