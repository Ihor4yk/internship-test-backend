import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(createHttpError(401, "Unauthorized"));
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(createHttpError(401, "Invalid token"));
    }

    req.user = decoded;
    next();
  });
};
