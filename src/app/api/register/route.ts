import { registerUser } from "@/services/registerUser";
import { AppError } from "@/utils/AppError";
import { catchAsync } from "@/utils/catchAsync";
import { setCookie } from "@/utils/handlecookie";
import { NextResponse } from "next/server";

export const POST = catchAsync(
  async (request: Request): Promise<NextResponse> => {
    if (!request) throw new AppError("Email and Password is required", 400);

    const body = await request.json();
    const { accessToken, refreshToken, insertId } = await registerUser(body);
    let response = NextResponse.json(
      { accessToken, insertId },
      { status: 200 }
    );
    setCookie(response, refreshToken);
    setCookie(response, String(insertId), "userId", "/");
    return response;
  }
);
