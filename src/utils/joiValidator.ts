import Joi from "joi";
import { AppError } from "./AppError";

interface DataProps {
  email: string;
  password: string;
  helpers: { message: string };
}

const passwordSchema = Joi.string()
  .min(8)
  .required()
  .custom((value, helpers) => {
    if (!/[^a-zA-Z0-9]/.test(value))
      return helpers.message({
        custom: "Password must contain one special character",
      });
    if (!/[A-Z]/.test(value))
      return helpers.message({
        custom: "Password must contain one capital letter",
      });
    if (!/[0-9]/.test(value))
      return helpers.message({ custom: "Password must contain one number" });
  });

export function Validator(data: DataProps) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: passwordSchema,
  });
  const { error } = schema.validate(data);
  if (error) throw new AppError(error.message, 400);
}
