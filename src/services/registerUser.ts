import { databaseOperation } from "@/models/dataBase";
import { hashPassword } from "@/utils/hash";
import { Validator } from "@/utils/joiValidator";
import { AccessToken, RefreshToken } from "@/utils/jwt";
import { loginType } from "@/validation/loginSchema";

interface DataProps {
  email: string;
  password: string;
}

export async function registerUser(data : DataProps) {
  Validator(data);

  const { email, password } = data;

  const doubleEmail = await databaseOperation.findEmail(email);
  if (doubleEmail) return Response.json({ status: 403 });

  const hashedPassword = hashPassword(password);

  const refreshToken = RefreshToken(email);

  const accessToken = AccessToken(email);

  await databaseOperation.addUser(email, password, refreshToken);

  return {accessToken,refreshToken};
}
