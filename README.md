# Internship Test Backend

An API for accepting and storing job applications using Node.js and PostgreSQL.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install PostgreSQL:
   - Download and install PostgreSQL from https://www.postgresql.org/download/windows/
   - During installation, set a password for the postgres user
   - Make sure to add PostgreSQL to your PATH

3. Create the database:
   - Open Command Prompt or PowerShell
   - Run: `createdb -U postgres internship_test`
   - Or use pgAdmin to create the database

4. Update `.env` file:
   - Replace `username` and `password` in `DATABASE_URL` with your PostgreSQL credentials
   - Example: `DATABASE_URL=postgresql://postgres:your_password@localhost:5432/internship_test`

5. Run the database schema:
```bash
psql -U postgres -d internship_test -f database_schema.sql
```

6. Start the server:
```bash
npm run dev
```

## Alternative Setup with Docker

If you prefer using Docker:

1. Install Docker Desktop from https://www.docker.com/products/docker-desktop/

2. Run PostgreSQL in Docker:
```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=internship_test -p 5432:5432 -d postgres:13
```

3. Update `.env`:
```
DATABASE_URL=postgresql://postgres:mypassword@localhost:5432/internship_test
```

4. Run the schema:
```bash
docker exec -i postgres-db psql -U postgres -d internship_test < database_schema.sql
```

## API Endpoints

### Create Application
- **POST** `/api/applications`
- Body: JSON with application data
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "position": "Developer",
  "experience": "2 years",
  "message": "I am interested in this position"
}
```

### Get All Applications
- **GET** `/api/applications`

### Get Application by ID
- **GET** `/api/applications/:id`

### Delete Application
- **DELETE** `/api/applications/:id`

## Environment Variables

- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secret for JWT tokens (not used in this basic version)