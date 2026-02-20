import { Router } from "express";
import { getApplications } from "../controllers/applicationController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.get("/applications", authenticate, getApplications);

export default router;
