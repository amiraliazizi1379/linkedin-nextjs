import { databaseOperation } from "@/models/dataBase";
import { catchAsync } from "@/utils/catchAsync";
import { setCookie } from "@/utils/handlecookie";
import { hashPassword, is_validPassword } from "@/utils/hash";
import { Validator } from "@/utils/joiValidator";
import { AccessToken, RefreshToken } from "@/utils/jwt";
import { NextResponse } from "next/server";

export const POST = catchAsync(async (req: Request) => {
  const data = await req.json();

  await Validator(data);

  const { email, password } = data;

  const emailExist = await databaseOperation.findEmail(email);
  if (!emailExist)
    return NextResponse.json(
      { message: "email or password is invalid" },
      { status: 400 }
    );

  const validPassword = await is_validPassword(password, emailExist.password);
  if (!validPassword)
    return NextResponse.json(
      { message: "email or password  is invalid" },
      { status: 400 }
    );

  const refreshToken = RefreshToken(emailExist.id);
  const hashToken = await hashPassword(refreshToken);
  await databaseOperation.updateToken(hashToken, emailExist.id);

  const accessToken = AccessToken(emailExist.email, emailExist.id);
  const res = NextResponse.json({ id: emailExist.id }, { status: 200 });
  setCookie(res, refreshToken, accessToken);
  return res;
});
