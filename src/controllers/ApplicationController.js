import { pool } from "../db/connectPostgreSQL.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const getApplications = asyncHandler(async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM applications ORDER BY created_at DESC",
  );

  res.json(result.rows);
});
