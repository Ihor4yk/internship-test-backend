import { Router } from "express";
import {
  createApplicationSchema,
  getApplicationsSchema,
} from "../validations/applicationValidation.js";
import {
  createApplication,
  getApplications,
} from "../controllers/applicationController.js";
import { authenticate } from "../middleware/authenticate.js";
import { celebrate } from "celebrate";
import { upload } from "../middleware/uploadMiddleware.js";

const router = Router();

router.post(
  "/applications",
  upload.single("image"),
  celebrate(createApplicationSchema),
  createApplication,
);

router.get(
  "/applications",
  authenticate,
  celebrate(getApplicationsSchema),
  getApplications,
);

export default router;
