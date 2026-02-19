import { pool } from "../db/connectPostgreSQL.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createApplication = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  const result = await pool.query(
    `INSERT INTO applications (name, email, message)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, email, message],
  );

  res.status(201).json(result.rows[0]);
});

export const getApplications = asyncHandler(async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM applications ORDER BY created_at DESC",
  );

  res.json(result.rows);
});
