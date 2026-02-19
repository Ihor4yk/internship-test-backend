import { Joi, Segments } from "celebrate";

export const createApplicationSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    message: Joi.string().allow("").max(1000),
  }),
};
