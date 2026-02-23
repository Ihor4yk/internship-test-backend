# Internship Test Backend API

Backend service for authentication and public application submission.

This project was developed as part of an internship technical assignment. The goal is to provide a clean, structured, and production‑style REST API that supports user authentication and public form submissions with persistent storage in PostgreSQL.

The backend is designed to be easily deployable, reproducible, and integrable with a React frontend.

---

## Project Goals (According to Test Assignment)

* Provide an **open API** that accepts applications and stores them in a database
* Implement **user authentication**
* Ensure **database persistence**
* Make the backend **deployable to any server**
* Structure the project in a way that reflects real‑world backend development
* Make the system understandable and reproducible by other developers

---

## Tech Stack

* Node.js
* Express
* PostgreSQL
* JWT Authentication
* bcrypt password hashing
* Joi / Celebrate validation
* Swagger API documentation

---

## Features

* User registration and login
* JWT authentication middleware
* Public API for submitting applications
* PostgreSQL data persistence
* Request validation
* Centralized error handling
* Swagger documentation
* Health check endpoint
* Graceful server shutdown

---

## Project Structure

```
src/
  config/
  controllers/
  db/
  middleware/
  routes/
  validations/
  server.js

schema.sql
package.json
.env
```

The structure follows separation of concerns:

* controllers → business logic
* routes → endpoint definitions
* middleware → reusable request processing
* validations → input validation schemas
* db → database connection

---

## Environment Variables

This project uses environment variables for configuration.

Do NOT commit real credentials to the repository.

1. Copy the example file:

```
cp .env.example .env
```

2. Fill in your actual values in `.env`.

Example `.env.example`:

```
PORT=5000
NODE_ENV=development

DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

---

## Database Setup

Create a PostgreSQL database and run the schema:

```
psql -U your_user -d your_database -f schema.sql
```

This creates:

* users table
* applications table
* performance indexes

The schema file ensures the database structure can be recreated on any machine or server.

---

## Installation

Clone repository and install dependencies:

```
npm install
```

---

## Running the Server

Application entry point:

src/server.js

Development:

```
npm run dev
```

Production:

```
npm start
```

Server runs on:

```
http://localhost:PORT
```

---

## API Documentation

Swagger documentation available at:

```
/api/docs
```

---

## API Endpoints

### Authentication

```
POST /auth/register
POST /auth/login
```

---

### Applications

Public endpoint:

```
POST /applications
```

Retrieve stored applications:

```
GET /applications
```

---

### Health Check

```
GET /health
```

---

## Authentication

Protected routes require header:

```
Authorization: Bearer <token>
```

---

## Validation

All incoming requests are validated using Joi / Celebrate.
Invalid input returns HTTP 400.

---

## Error Handling

Centralized error middleware handles:

* validation errors
* authentication errors
* database errors
* unknown routes

---

## Architecture Decisions

### Express instead of NestJS

The test task preferred NestJS but did not strictly require it. Express was selected to:

* reduce setup overhead
* demonstrate manual architecture control
* explicitly structure middleware, routing, and validation layers

The project still follows modular architecture similar to NestJS separation principles.

---

### PostgreSQL as Database

Chosen for:

* reliability
* relational data consistency
* strong production usage
* simple deployment on most cloud platforms

---

### JWT Authentication

Used because it:

* is stateless
* scales easily
* works well with SPA frontends
* simplifies authorization flow

---

### Public Applications Endpoint

The assignment requires an open API for submissions. Therefore:

* endpoint does not require authentication
* validation ensures correct input format

---

## System Flow (User Perspective)

1. User opens frontend application
2. User logs in using credentials
3. Frontend stores JWT token
4. User submits application form
5. Backend validates input
6. Application stored in PostgreSQL
7. Data available for retrieval via API

---

## Possible Bottlenecks

* Public endpoint can be abused (spam submissions)
* No rate limiting currently implemented
* Database may become a performance bottleneck under high write load
* JWT tokens are not revocable (no refresh / blacklist mechanism)
* Horizontal scaling requires external session / cache layer if extended

---

## Future Improvements

* Rate limiting middleware
* Refresh token system
* Email verification
* Role-based access control
* Input sanitization
* Application pagination
* Docker containerization
* Database migrations
* Monitoring and logging system

---

## Deployment

General deployment steps:

1. Provision PostgreSQL database
2. Run schema.sql
3. Set environment variables
4. Install dependencies
5. Start server

---

## Live Links

Backend URL:

```
<to be added after deployment>
```

Frontend URL:

```
<to be added after deployment>
```

GitHub Repository:

```
<to be added>
```

---

## Author

Internship technical assignment backend implementation demonstrating API design, authentication, validation, and database integration.
