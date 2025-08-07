import { registerUser } from "@/services/registerUser";
import { AppError } from "@/utils/AppError";
import { catchAsync } from "@/utils/catchAsync";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = catchAsync(async (request: Request) => {
  if (!request) throw new AppError("Email and Password is required", 400);

  const body = await request.json();
  const { accessToken, refreshToken } = await registerUser(body);

  const cookieStore = await cookies();
  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/",
    //secure : true , //cookie send by https for more secure
    sameSite: "strict", //the browser can send cookie only from our site
    maxAge: 60 * 60 * 24 * 1,
  });

  return NextResponse.json({ accessToken }, { status: 200 });
});
