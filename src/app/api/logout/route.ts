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
    response = clearCookie(response);

    const refreshToken = request.cookies.get("refreshToken")?.value;
    if (!refreshToken) return response;

    const userId = request.cookies.get("userId")?.value;
    if (!userId) return response;

    await databaseOperation.deleteToken(userId);

    let newresponse = NextResponse.json(
      { message: "Logged out" },
      { status: 200 }
    );

    newresponse = clearCookie(newresponse);

    return newresponse;
  }
);
