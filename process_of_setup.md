# CampusEats - Step-by-Step Setup Guide

This guide walks you through setting up and running the **CampusEats** project on a new computer without using Git. Follow these instructions step-by-step to get the database, backend, and frontend fully operational.

---

## 📁 What Files Are in This Folder?

- `backend/` - Node.js Express API & Socket.io server
- `frontend/` - React + Vite + Tailwind CSS client application
- `schema_for_initial_setup.sql` - Complete SQL schema (creates database & tables with all recent columns)
- `seed_for_initial_setup.sql` - Initial seed data (3 canteens, 139 realistic menu items, admins, kitchen staff, test users)
- `process_of_setup.md` - This setup guide

> **Tip for sharing:** If you are sharing this project via USB drive, Google Drive, or zip file, you can delete the `node_modules` folders inside `backend` and `frontend` first to drastically reduce the file size (from ~300 MB down to ~15 MB). The recipient will install them easily using `npm install`.

---

## 🛠️ Prerequisites

Before you start, make sure the following software is installed on the computer:
1. **Node.js**: Version 18.x or higher (Download from [nodejs.org](https://nodejs.org/))
2. **XAMPP** (or any MySQL server): (Download from [apachefriends.org](https://www.apachefriends.org/))
3. A modern web browser (Chrome, Edge, Firefox, Brave)

---

## 🗄️ Step 1: Database Setup (MySQL)

### 1.1 Start MySQL in XAMPP
1. Open the **XAMPP Control Panel**.
2. Click the **Start** button next to **MySQL** (and **Apache** if you want to use phpMyAdmin).
3. Ensure the MySQL status indicator turns green (running on port `3306`).

---

### 1.2 Import the Database

Choose **Option A** (phpMyAdmin GUI - easiest) OR **Option B** (Command Line):

#### Option A: Using phpMyAdmin (Recommended)
1. Open your browser and go to: `http://localhost/phpmyadmin`
2. Click on the **Import** tab in the top navigation bar.
3. Under **File to import**, click **Choose File** and select `schema_for_initial_setup.sql`.
4. Scroll to the bottom and click **Import** (or **Go**).
   - *This will automatically create the `campus_eats` database and all 7 tables.*
5. On the left sidebar, click on the newly created **`campus_eats`** database.
6. Click on the **Import** tab again.
7. Click **Choose File** and select `seed_for_initial_setup.sql`.
8. Scroll down and click **Import** (or **Go**).
   - *This populates all 3 canteens, 139 food items, admin/staff users, and sample reviews.*

#### Option B: Using Terminal / Command Prompt
Open a terminal in the root `campus_eats` folder and run:
```bash
# 1. Run the schema file
mysql -u root -p < schema_for_initial_setup.sql

# 2. Run the seed data file
mysql -u root -p < seed_for_initial_setup.sql
```
*(If your MySQL root user has no password, just press Enter when prompted for password).*

---

## ⚙️ Step 2: Backend Setup

1. Open your terminal / command prompt.
2. Navigate into the `backend` folder:
   ```bash
   cd backend
   ```
3. Check the `.env` file:
   - Make sure a file named `.env` exists in `backend/`. If it is missing, create one or copy `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Standard `.env` contents:
     ```env
     PORT=5000
     NODE_ENV=development

     # MySQL Database (XAMPP default)
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=
     DB_NAME=campus_eats
     DB_PORT=3306

     # JWT Authentication
     JWT_SECRET=super_secret_campuseats_jwt_key_2026
     JWT_EXPIRES_IN=7d

     # Client URL (for CORS)
     CLIENT_URL=http://localhost:5173
     ```
     > **Note:** If your local MySQL has a root password, update `DB_PASSWORD=your_password`.

4. Install backend dependencies:
   ```bash
   npm install
   ```

5. Start the backend development server:
   ```bash
   npm run dev
   ```
   *(Alternative: `npm start` or `node src/server.js`)*

6. **Verify backend output:** You should see messages like:
   ```text
   [Database] Successfully connected to MySQL database: campus_eats
   [Cron] Background cron service initialized.
   Server running on port 5000
   ```
   *Keep this terminal window running!*

---

## 💻 Step 3: Frontend Setup

1. Open a **second terminal / command prompt** window.
2. Navigate into the `frontend` folder:
   ```bash
   cd frontend
   ```
3. Install frontend dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```
   *CampusEats is now live!*

---

## 👥 Pre-Configured Test Accounts

All accounts below are pre-loaded in `seed_for_initial_setup.sql`.
**Password for ALL seeded accounts:** `password123`

| Role | Name | Email | Associated Canteen / Notes |
| :--- | :--- | :--- | :--- |
| **Super Admin** | System Super Admin | `superadmin@campuseats.com` | Full system control & canteen provisioning |
| **Local Admin** | Khan's Kitchen Admin | `kk@ca.com` *(or `kk_admin@ce.com`)* | Canteen: Khan's Kitchen |
| **Local Admin** | Olympia Palace Admin | `op@ca.com` *(or `olympia@ca.com`)* | Canteen: Olympia Palace |
| **Local Admin** | Cafe Neptune Admin | `cn@ca.com` *(or `neptune_admin@ce.com`)* | Canteen: Cafe Neptune |
| **Kitchen Staff**| KK Kitchen Staff | `staff.kk@ca.com` | Canteen: Khan's Kitchen |
| **Kitchen Staff**| OP Kitchen Staff | `staff.op@ca.com` | Canteen: Olympia Palace |
| **Kitchen Staff**| CN Kitchen Staff | `staff.cn@ca.com` | Canteen: Cafe Neptune |
| **Student** | Rahim Ahmed | `student.rahim@campuseats.com` | Budget: 400 BDT, Loyalty Points: 30 |
| **Faculty** | Dr. Tanvir Hasan | `faculty.tanvir@campuseats.com` | Budget: 800 BDT, Loyalty Points: 85 |
| **Quick Test** | Demo User (aa) | `aa@a.a` | Budget: 200 BDT, Loyalty Points: 1 |

---

## 🧹 Cleaning Up Initial Setup Files (Optional)

Once you and your friends have successfully imported the database:
- You can safely delete both:
  - `schema_for_initial_setup.sql`
  - `seed_for_initial_setup.sql`
- Or you can keep them stored safely as backup files for fresh re-installations in the future.

---

## ❓ Troubleshooting

### 1. "Database Connection Failed" / "ECONNREFUSED"
- Make sure MySQL is running in XAMPP.
- Confirm MySQL is on port `3306`. If your XAMPP uses a different port (e.g., `3307`), update `DB_PORT=3307` in `backend/.env`.
- Ensure `DB_PASSWORD` in `backend/.env` matches your MySQL root password (blank by default in XAMPP).

### 2. "Port 5000 is already in use"
- Another service or previous node instance is running on port 5000.
- Close the existing process or change `PORT=5001` in `backend/.env` (and update frontend API base URL if needed).

### 3. "Cannot find module ..."
- Make sure you ran `npm install` inside both `backend` and `frontend` folders.

### 4. Images not loading
- Menu item images are linked directly to high-quality Unsplash food photos. Ensure your internet connection is active when browsing menus.
