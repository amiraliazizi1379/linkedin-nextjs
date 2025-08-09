import * as bcrypt from "bcrypt";
import { AppError } from "./AppError";

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function is_validPassword(
  password: string,
  dbPassword: string
): Promise<boolean> {
  const validPassword = await bcrypt.compare(password, dbPassword);
  if (!validPassword) throw new AppError("invalid Email or Password", 400);
  return validPassword;
}
