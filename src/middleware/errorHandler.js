export const errorHandler = (err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const isProd = process.env.NODE_ENV === "production";

  // логування серверних помилок
  if (status >= 500) {
    console.error(err);
  }

  // очікувані помилки
  if (status < 500) {
    return res.status(status).json({
      message: err.message,
    });
  }

  // серверна помилка
  res.status(status).json({
    message: isProd
      ? "Something went wrong. Please try again later."
      : err.message,
  });
};
