import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import applicationRoutes from "./routes/applications.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Connected to PostgreSQL");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ PostgreSQL connection error:", err);
    process.exit(1);
  }
}

startServer();
