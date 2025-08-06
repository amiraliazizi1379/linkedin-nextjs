import { databaseOperation } from "@/models/dataBase";
import { AppError } from "@/utils/AppError";
import { hashPassword } from "@/utils/hash";
import { Validator } from "@/utils/joiValidator";
import { AccessToken, RefreshToken } from "@/utils/jwt";
import { loginType } from "@/validation/loginSchema";

interface DataProps {
  email: string;
  password: string;
}

export async function registerUser(data: DataProps) {
  await Validator(data);

  const { email, password } = data;

  const doubleEmail = await databaseOperation.findEmail(email);
  if (doubleEmail) throw new AppError("email is already registered", 403);

  const hashedPassword = await hashPassword(password);

  const refreshToken = RefreshToken(email);

  const accessToken = AccessToken(email);

  await databaseOperation.addUser(email, hashedPassword, refreshToken);

  return { accessToken, refreshToken };
}
