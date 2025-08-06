import Joi from "joi";
import { AppError } from "./AppError";

interface DataProps {
  email: string;
  password: string;
}

export async function Validator(data: DataProps) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(data);
  if (error) throw new AppError(error.message, 400);
}
