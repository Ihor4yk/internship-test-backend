import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectPostgreSQL } from "./db/connectPostgreSQL.js";
import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { errors } from "celebrate";

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(applicationRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(errors());
app.use(notFoundHandler);
app.use(errorHandler);

await connectPostgreSQL();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
