import { Router } from "express";
import { celebrate } from "celebrate";
import { createApplicationSchema } from "../validations/applicationValidation.js";
import {
  createApplication,
  getApplications,
} from "../controllers/applicationController.js";

const router = Router();

router.post(
  "/applications",
  celebrate(createApplicationSchema),
  createApplication,
);
router.get("/applications", getApplications);

export default router;
