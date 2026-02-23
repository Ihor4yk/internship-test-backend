import { pool } from "../db/connectPostgreSQL.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const getApplications = asyncHandler(async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM applications ORDER BY created_at DESC",
  );

  res.json(result.rows);
});

export const createApplication = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  const imageUrl = req.file?.path || null;

  const result = await pool.query(
    "INSERT INTO applications (name, email, message, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, email, message, imageUrl],
  );

  res.status(201).json(result.rows[0]);
});
