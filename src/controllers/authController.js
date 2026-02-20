import bcrypt from "bcrypt";
import { pool } from "../db/connectPostgreSQL.js";
import createHttpError from "http-errors";
import { asyncHandler } from "../middleware/asyncHandler.js";
import jwt from "jsonwebtoken";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (userExists.rows.length > 0) {
    return next(createHttpError(400, "User already exists"));
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

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT id, email, password FROM users WHERE email = $1",
    [email],
  );

  const user = result.rows[0];

  if (!user) {
    return next(createHttpError(401, "Invalid credentials"));
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return next(createHttpError(401, "Invalid credentials"));
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  });
});

export const getMe = async (req, res) => {
  res.json({
    message: "Authorized",
    user: req.user,
  });
};
