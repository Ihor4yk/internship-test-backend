import { pool } from "../db/connectPostgreSQL.js";

export const getDeals = async (req, res) => {
  const result = await pool.query("SELECT * FROM deals ORDER BY id");
  res.json(result.rows);
};
