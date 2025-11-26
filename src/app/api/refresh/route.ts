import { catchAsync } from "@/utils/catchAsync";
import { NextResponse, NextRequest } from "next/server";
import { AccessToken, RefreshToken } from "@/utils/jwt";
import { databaseOperation } from "@/models/dataBase";
import * as jwt from "jsonwebtoken";
import { hashPassword, is_validPassword } from "@/utils/hash";
import { clearCookie, setCookie } from "@/utils/handlecookie";
import { verifyRefreshToken } from "@/libs/verifyRtoken";

interface jwts extends jwt.JwtPayload {
  userInfo: { username: string; userId: number };
}

export const POST = catchAsync(
  async (request: NextRequest): Promise<NextResponse> => {
    const response = NextResponse.json(
      { message: "Unathorized" },
      { status: 401 }
    );

    const token = request.cookies.get("refreshToken")?.value;
    if (!token) return clearCookie(response);

    const userId = verifyRefreshToken(token);
    if (!userId) return clearCookie(response);

    const findUser = await databaseOperation.findToken(userId);
    if (!findUser || !findUser.refreshtoken) return clearCookie(response);

    const is_validToken = await is_validPassword(token, findUser.refreshtoken);

    if (!is_validToken) {
      await databaseOperation.deleteToken(userId);
      return clearCookie(response);
    }

    const newRefreshToken = RefreshToken(findUser.id);

    await databaseOperation.updateToken(
      await hashPassword(newRefreshToken),
      findUser.id
    );

    const newAccessToken = AccessToken(findUser.email, findUser.id);

    let newresponse = NextResponse.json(
      {
        message: "new access token successfully made",
      },
      { status: 200 }
    );

    newresponse = setCookie(newresponse, newRefreshToken, newAccessToken);

    return newresponse;
  }
);
