# 🚀 Internship Test — Backend

REST API built with **Node.js + Express** and **PostgreSQL**, created as part of an internship technical assignment. The API handles user authentication, application submissions, and deal listings, with file upload support via Cloudinary and interactive API docs via Swagger.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ESM) |
| Framework | Express 5 |
| Database | PostgreSQL (`pg`) |
| Auth | JWT + bcrypt |
| Validation | Joi + Celebrate |
| File Uploads | Multer + Cloudinary |
| API Docs | Swagger UI (`swagger-jsdoc`) |
| Linting | ESLint + Prettier |

---

## 📋 Prerequisites

- Node.js v18+
- PostgreSQL database (local or cloud, e.g. Supabase, Neon, Railway)
- Cloudinary account (for image uploads)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ihor4yk/internship-test-backend.git
cd internship-test-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

```env
PORT=5000
NODE_ENV=development

DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Set up the database

Run the provided schema to create the required tables:

```bash
psql $DATABASE_URL -f schema.sql
```

This creates three tables: `users`, `applications`, and `deals`, along with performance indexes.

### 5. Run the server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The server starts on `http://localhost:5000` by default.

---

## 📡 API Reference

Interactive docs are available at:

```
GET /api/swagger
```

### Auth

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/register` | ❌ | Register a new user |
| `POST` | `/api/auth/login` | ❌ | Login and receive a JWT |
| `GET` | `/api/auth/me` | ✅ Bearer | Get the current user's info |

**Register / Login request body:**
```json
{
  "email": "user@example.com",
  "password": "minlength8"
}
```

**Login response:**
```json
{
  "token": "<jwt>",
  "user": { "id": 1, "email": "user@example.com" }
}
```

---

### Applications

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/applications` | ❌ | Submit a new application (supports image upload) |
| `GET` | `/api/applications` | ✅ Bearer | List all applications (newest first) |

**POST `/api/applications`** — `multipart/form-data`

| Field | Type | Required |
|---|---|---|
| `name` | string | ✅ |
| `email` | string (email) | ✅ |
| `message` | string | ✅ |
| `image` | file | ❌ |

---

### Deals

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/deals` | ❌ | Get all available deals |

---

### Health

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check |

---

## 🗄 Database Schema

```sql
-- Users
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  email       VARCHAR(255) UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Applications
CREATE TABLE applications (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(255) NOT NULL,
  message     TEXT NOT NULL,
  image_url   VARCHAR(500),
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Deals
CREATE TABLE deals (
  id            SERIAL PRIMARY KEY,
  title         VARCHAR(255) NOT NULL,
  image         VARCHAR(255) NOT NULL,
  price         NUMERIC(12,2) NOT NULL,
  ticket        NUMERIC(12,2) NOT NULL,
  yield_percent NUMERIC(5,2) NOT NULL,
  days_left     INTEGER NOT NULL,
  sold_percent  INTEGER NOT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📁 Project Structure

```
src/
├── config/
│   ├── cloudinary.js        # Cloudinary SDK setup
│   └── swagger.js           # Swagger spec config
├── controllers/
│   ├── authController.js    # Register, login, get current user
│   ├── applicationController.js
│   └── dealController.js
├── db/
│   └── connectPostgreSQL.js # PostgreSQL pool connection
├── docs/
│   ├── auth.swagger.js      # Auth endpoint Swagger docs
│   ├── applications.swagger.js
│   └── deals.swagger.js
├── middleware/
│   ├── authenticate.js      # JWT verification middleware
│   ├── asyncHandler.js      # Wraps async controllers
│   ├── errorHandler.js      # Global error handler
│   ├── notFoundHandler.js   # 404 handler
│   └── uploadMiddleware.js  # Multer + Cloudinary storage
├── routes/
│   ├── authRoutes.js
│   ├── applicationRoutes.js
│   ├── dealRoutes.js
│   ├── healthRoutes.js
│   └── rootRoutes.js
├── validations/
│   ├── authValidation.js
│   └── applicationValidation.js
└── server.js                # App entry point
schema.sql                   # Database schema
```

---

## 🔐 Authentication

Protected routes require a `Bearer` token in the `Authorization` header:

```
Authorization: Bearer <your_jwt_token>
```

Tokens are signed with `JWT_SECRET` and expire after `JWT_EXPIRES_IN` (default: `7d`).

---

## 🖼 Image Uploads

Images submitted with applications are uploaded directly to **Cloudinary**. The returned URL is stored in the `image_url` column of the `applications` table.

To seed deals with images, run:

```bash
npm run upload:images
```

---

## 📦 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start server with nodemon (hot reload) |
| `npm start` | Start server in production mode |
| `npm run upload:images` | Upload seed images to Cloudinary |

---

## 🌐 Deployment

The API can be deployed to any Node.js-compatible platform (Railway, Render, Heroku, VPS, etc.). Make sure to:

1. Set all environment variables from `.env.example` in your hosting provider's dashboard.
2. Provision a PostgreSQL database and set `DATABASE_URL`.
3. Run `schema.sql` against the production database once on first deploy.
4. Set `NODE_ENV=production`.

---

## 🔗 Related

- **Frontend repository:** _add link here_
- **Live demo:** _add link here_
