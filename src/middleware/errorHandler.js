export const errorHandler = (err, req, res, next) => {
  const isProd = process.env.NODE_ENV === "production";

  const status = err.status || err.statusCode || 500;

  // ЗАВЖДИ логгуй помилку на сервері
  console.error("\n❌ ERROR:");
  console.error("Status:", status);
  console.error("Message:", err.message);
  console.error("Stack:", err.stack);
  console.error("Path:", req.path);
  console.error("Method:", req.method);
  console.error("\n");

  res.status(status).json({
    message: isProd
      ? "Something went wrong. Please try again later."
      : err.message,
    ...(isProd && { error: "Check server logs for details" }),
  });
};

