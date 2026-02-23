import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectPostgreSQL } from "./db/connectPostgreSQL.js";
import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import dealRoutes from "./routes/dealRoutes.js";

import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { errors } from "celebrate";
import healthRoutes from "./routes/healthRoutes.js";
import rootRoutes from "./routes/rootRoutes.js";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(rootRoutes);
app.use(authRoutes);
app.use(applicationRoutes);
app.use(dealRoutes);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(healthRoutes);

app.use(errors());
app.use(notFoundHandler);
app.use(errorHandler);

await connectPostgreSQL();

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});
