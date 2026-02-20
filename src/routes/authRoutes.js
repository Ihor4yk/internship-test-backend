import { celebrate } from "celebrate";
import { Router } from "express";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validations/authValidation.js";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controllers/authController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.post("/auth/register", celebrate(registerUserSchema), registerUser);
router.post("/auth/login", celebrate(loginUserSchema), loginUser);
router.get("/auth/me", authenticate, getMe);

export default router;
