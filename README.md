# 📦 StorePilot — Store & Inventory Management System

**StorePilot** is a modern full-stack application designed to manage retail store operations, inventory tracking, customer orders, and invoicing. 

---

## 🚀 Core Features & Business Model
* **Inventory & Products:** Manage products, stock quantities, and categories.
* **Supply Chain:** Track suppliers and customer contact records.
* **Order Management:** Process customer orders, track individual order items, compute totals, and manage status (`PENDING`, `COMPLETED`, `CANCELED`).
* **Invoicing:** Auto-generate invoices linked directly to completed orders.
* **Role-Based Authentication:** Secure user access supporting `ADMIN` and `EMPLOYEE` roles with password hashing (`bcrypt`) and JWT authentication.

---

## 🏗️ Technical Architecture & Folder Structure

The project follows a clean, modular backend architecture separating routes, controllers, and services:

```text
storepilot/
├── backend/
│   │   ├── server.js          # App bootstrap & PostgreSQL pool connection
│   │   ├── app.js             # Express app setup, CORS, and JSON middleware
│   │   ├── db/
│   │   │   └── index.js       # PostgreSQL client & Drizzle ORM integration
│   │   ├── schema/            # Drizzle ORM database schemas & relations
│   │   ├── modules/
│   │   │   ├── auth/          # Authentication routes & business logic
│   │   │   └── products/      # Product module (Routes, Controllers, Services)
│   │   └── utils/             # Helper utilities (JWT, etc.)
│   │
└── frontend/                  # React 19 + Vite client application
```

---

## 🛠️ Technology Stack

### **Backend**
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database & ORM:** PostgreSQL, Drizzle ORM, Drizzle Kit
* **Security:** bcrypt, JSON Web Tokens (JWT)
* **Utilities:** dotenv, cors

### **Frontend**
* **Library:** React 19, Vite
* **Linter:** ESLint

---

## ⚙️ Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd storepilot
   ```

2. **Set up the Backend:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file inside the `backend` folder:
   ```env
   PORT=5000
   DATABASE_URL=postgres://username:password@localhost:5432/storepilot
   ```
   Run database migrations and start the server:
   ```bash
   npm run db:migrate
   npm run dev
   ```

3. **Set up the Frontend:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```