import bcrypt from "bcrypt";
import { pool } from "../db/connectPostgreSQL.js";
import createError from "http-errors";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (userExists.rows.length > 0) {
    return next(createError(400, "User already exists"));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
    [email, hashedPassword],
  );

  res.status(201).json({
    message: "User created",
    user: newUser.rows[0],
  });
});
