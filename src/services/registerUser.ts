import { databaseOperation } from "@/models/dataBase";
import { AppError } from "@/utils/AppError";
import { hashPassword } from "@/utils/hash";
import { Validator } from "@/utils/joiValidator";
import { AccessToken, RefreshToken } from "@/utils/jwt";
import { JoiregisterProps } from "@/types/joitypes";

export async function registerUser(
  data: JoiregisterProps
): Promise<{ accessToken: string; refreshToken: string; insertId: number }> {
  await Validator(data);

  const { email, password } = data;

  const doubleEmail = await databaseOperation.findEmail(email);
  if (doubleEmail) throw new AppError("email is already registered", 403);

  const hashedPassword = await hashPassword(password);

  const { insertId } = await databaseOperation.addUser(email, hashedPassword);

  const refreshToken = RefreshToken(insertId);

  const hasheRefreshToken = await hashPassword(refreshToken);
  await databaseOperation.updateToken(hasheRefreshToken, insertId);

  const accessToken = AccessToken(email, insertId);

  return { accessToken, refreshToken, insertId };
}
