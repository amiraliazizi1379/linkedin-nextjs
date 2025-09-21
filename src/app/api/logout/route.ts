import { verifyRefreshToken } from "@/libs/verifyRtoken";
import { databaseOperation } from "@/models/dataBase";
import { catchAsync } from "@/utils/catchAsync";
import { clearCookie } from "@/utils/handlecookie";
import { NextRequest, NextResponse } from "next/server";

export const POST = catchAsync(
  async (request: NextRequest): Promise<NextResponse> => {
    let response = NextResponse.json(
      { message: "No content to send" },
      { status: 400 }
    );

    const refreshToken = request.cookies.get("refreshToken")?.value;
    if (!refreshToken) return response;

    const result = verifyRefreshToken(refreshToken);
    if (!result)
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    const userId = result;
    await databaseOperation.deleteToken(userId);

    let newresponse = NextResponse.json(
      { message: "Logged out" },
      { status: 200 }
    );

    newresponse = clearCookie(newresponse);

    return newresponse;
  }
);
