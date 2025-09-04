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

    if (!refreshToken) {
      response = clearCookie(response);
      response = clearCookie(response, "userId", "/");
      return response;
    }

    const userId = request.cookies.get("userId")?.value;
    if (!userId) {
      response = clearCookie(response);
      response = clearCookie(response, "userId", "/");
      return response;
    }

    await databaseOperation.deleteToken(userId);

    let newresponse = NextResponse.json(
      { message: "Logged out" },
      { status: 200 }
    );

    newresponse = clearCookie(newresponse);

    newresponse = clearCookie(newresponse, "userId", "/");

    return response;
  }
);
