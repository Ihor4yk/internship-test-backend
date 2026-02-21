import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Internship Test Backend is running 🚀",
    docs: "/swagger",
  });
});

export default router;
