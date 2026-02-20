import { Router } from "express";
import { createApplicationSchema } from "../validations/applicationValidation.js";
import {
  createApplication,
  getApplications,
} from "../controllers/applicationController.js";
import { authenticate } from "../middleware/authenticate.js";
import { celebrate } from "celebrate";

const router = Router();

router.post(
  "/applications",
  celebrate(createApplicationSchema),
  createApplication,
);

router.get("/applications", authenticate, getApplications);

export default router;
