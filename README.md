# 🍔 CampusEats — University Canteen Pre-Order & Kitchen Management System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-orange?style=for-the-badge&logo=vercel)](https://campus-eats-gamma.vercel.app)
[![API Status](https://img.shields.io/badge/API-Render-brightgreen?style=for-the-badge&logo=render)](https://campus-eats-e0ua.onrender.com/api/health)
[![Database](https://img.shields.io/badge/Database-MySQL%20%7C%20TiDB-blue?style=for-the-badge&logo=mysql)](https://tidbcloud.com)
[![React](https://img.shields.io/badge/Frontend-React%2018%20%7C%20Vite-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)

CampusEats is an enterprise-grade, full-stack pre-ordering and kitchen management web platform built specifically for university campus cafeterias. It addresses long queue congestion during peak lunch hours (12:00 PM – 2:00 PM) through real-time order dispatch, student budget guardrails, verified review analytics, and automated no-show penalty systems.

---

## 🌐 Live Deployments

* **Frontend Web App:** [https://campus-eats-gamma.vercel.app](https://campus-eats-gamma.vercel.app)
* **Backend REST API:** [https://campus-eats-e0ua.onrender.com](https://campus-eats-e0ua.onrender.com)
* **API Health Status:** [https://campus-eats-e0ua.onrender.com/api/health](https://campus-eats-e0ua.onrender.com/api/health)

---

## 🔑 Quick Demo Accounts

For evaluation and testing, you can use the **"Quick Fill Demo Accounts"** button on the Login page or use the credentials below:

| Role | Email Address | Password | Permissions & Dashboard |
| :--- | :--- | :--- | :--- |
| **🎓 Student** | `student.rahim@campuseats.com` | `password123` | Menu browse, budget limit, order placement, compare, verified reviews |
| **👨‍🍳 Kitchen Staff** | `staff.kk@ca.com` | `password123` | Real-time kitchen board, order lifecycle state transitions (`Accepted` ➔ `Ready`) |
| **🏢 Local Admin** | `kk@ca.com` | `password123` | Canteen revenue analytics, kitchen on/off switch, student unblock portal |
| **⚡ Super Admin** | `superadmin@campuseats.com` | `password123` | System-wide canteen & user administration across campus |

---

## ✨ Core System Features

### 🧑‍🎓 Student Experience
1. **Unified Campus Menu:** Browse 130+ dishes across multiple university canteens from a single responsive feed.
2. **Interactive Search & Dynamic Filtering:** Filter by price caps (e.g., `<= 60 BDT`), rating thresholds (`4★+`), and dietary tags.
3. **Side-by-Side Food Comparison:** Compare price, prep time, and ratings between dishes across different canteens.
4. **Custom Pickup Windows:** Schedule exact pickup times so meals are prepared right as classes dismiss.
5. **Daily Budget Guardrail:** Set a daily spending limit (e.g., 400 BDT). The system rejects orders exceeding today's budget before submission.
6. **Loyalty Rewards Engine:** Earn points on every purchase (1 point per 100 BDT) and redeem points for cash discounts.
7. **Verified Review System:** Only users who actually received and picked up an order can submit ratings and reviews.
8. **Logout Confirmation Modal:** Clean backdrop-blur popup dialog preventing accidental session termination.

### 👨‍🍳 Kitchen & Operations
9. **Real-Time Kitchen Display Board (Socket.io):** Orders appear instantly on kitchen monitors without requiring page reloads.
10. **Order State Machine:** Enforced state progression (`pending` ➔ `accepted` ➔ `preparing` ➔ `ready` ➔ `picked_up`).
11. **One-Click Kitchen Shutdown:** Admins can instantly disable orders when a canteen is closed; items restore state on reopening.

### ⚙️ Automation & Security
12. **ACID Transaction Checkout:** Atomic database transactions (`BEGIN`, `COMMIT`, `ROLLBACK`) ensure orders, line items, and loyalty points never desynchronize.
13. **Automated No-Show Cron System (node-cron):** A background worker scans the database every 5 minutes. Orders uncollected after 30 minutes trigger automatic penalty strikes. Accumulating 3 strikes auto-blocks the user.
14. **Role-Based JWT Authorization:** Protected routes verify cryptographic tokens and validate database block status on every sensitive request.

---

## 🏗️ System Architecture

CampusEats follows a decoupled **4-Tier Architecture**:

```
[ Client Tier ] ──> [ Presentation Tier (Vercel) ] ──> [ Application Tier (Render) ] ──> [ Data Tier (TiDB / MySQL) ]
  • Students          • React 18 SPA                     • Express REST Controllers         • 7 Normalized Tables
  • Kitchen Staff     • Tailwind CSS                     • Socket.io WebSocket Engine       • Foreign Key Constraints
  • Local Admins      • Context API (State)              • node-cron Background Worker      • ACID Transactions
```

---

## 🛠️ Technology Stack

* **Frontend:** React 18, Vite, Tailwind CSS, Axios, Lucide React, Socket.io-client
* **Backend:** Node.js, Express.js, MySQL2 (Prepared Statements), JWT (JSON Web Tokens), bcryptjs, node-cron, Socket.io
* **Database:** MySQL 8.0 (Hosted on TiDB Cloud Serverless with TLS/SSL encryption)
* **DevOps & Monitoring:** Vercel (Frontend CI/CD), Render (Backend Service), UptimeRobot (24/7 Availability Ping)

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/fmostakim/campus-eats.git
cd campus-eats
```

### 2. Configure Database
Start your local MySQL server (e.g., via XAMPP) and import the schema and seed files:
```bash
mysql -u root -p < schema_for_initial_setup.sql
mysql -u root -p < seed_for_initial_setup.sql
```

### 3. Backend Setup
```bash
cd backend
npm install
# Ensure .env has your local database credentials (DB_HOST=localhost, DB_USER=root, etc.)
npm run dev
```

### 4. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The application will be live at `http://localhost:5173`.

---

## 👤 Author

* **Mostakim** — [@fmostakim](https://github.com/fmostakim)
* **GitHub Repository:** [https://github.com/fmostakim/campus-eats](https://github.com/fmostakim/campus-eats)

---

## 📄 License
This project was developed as a DBMS Lab Project and is open for academic and educational use.
