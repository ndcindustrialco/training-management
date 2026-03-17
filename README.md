# Training Management System (TMS)

A professional, full-stack training management application built with Next.js, Prisma, and Supabase.

## 🚀 Overview
The Training Management System is designed to streamline the tracking of employee training history, course management, and reporting. It features a modern, humanized design system following strict 8pt grid principles.

## 🛠 Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Database:** PostgreSQL (via Supabase)
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **PDF Generation:** @react-pdf/renderer, jsPDF

## 📦 Key Features
- **Employee Tracking:** Manage employee profiles and their historical training data.
- **Course Catalog:** Central database for internal and external training courses.
- **Record Management:** Log training dates, results, and upload certificates.
- **Automated Reporting:** Generate professional PDF training records.
- **Security:** Integrated Supabase Row Level Security (RLS).

## 🛠 Getting Started

### 1. Requirements
- Node.js 18+
- PostgreSQL database (Supabase recommended)

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env` and fill in your credentials.
```bash
cp .env.example .env
```

### 4. Database Initialization
```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```

## 📐 Design Standards
This project follows a custom design system:
- **Major Third Typography:** H1 (39px), H2 (31px), H3 (25px), Body (16px).
- **8pt Grid System:** All spacing and layouts are multiples of 8.
- **Color Palette:**
  - Primary: `#2563EB` (Blue)
  - Success: `#10B981` (Green)
  - Error: `#EF4444` (Red)
  - Text: `#1F2937` (Dark Gray)

## 📄 Documentation
Detailed documentation for different roles and technical requirements can be found in the `/docs` directory:

### Business & Overview
- [System Overview / Executive Summary](./docs/executive_summary.md)
- [Functional Specification](./docs/functional_spec.md)
- [User Manual (คู่มือการใช้งาน)](./docs/user_manual.md)

### Technical Architecture
- [System Architecture](./docs/architecture.md)
- [Database Schema](./docs/database_schema.md)
- [API Documentation](./docs/api_docs.md)

### Security & Operations
- [Security & Compliance](./docs/security.md)
- [Admin Manual](./docs/admin_manual.md)
- [Backup & Recovery Plan](./docs/backup_plan.md)
- [System Maintenance / SOP IT](./docs/maintenance.md)

### Quality & Deployment
- [Test Case & Test Result (UAT)](./docs/uat_report.md)
- [Deployment Guide](./docs/deployment_guide.md)
- [Change Log](./docs/changelog.md)
