import { asyncHandler } from "../middleware/asyncHandler.js";
import { pool } from "../db/connectPostgreSQL.js";
import createHttpError from "http-errors";

export const getDeals = asyncHandler(async (req, res, next) => {
  const result = await pool.query(
    "SELECT * FROM deals ORDER BY created_at DESC LIMIT 4",
  );

  if (!result.rows.length) {
    return next(createHttpError(404, "No deals found"));
  }

  res.json(result.rows);
});
