import { Joi, Segments } from "celebrate";

export const createApplicationSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(1).required(),
  }),
};
