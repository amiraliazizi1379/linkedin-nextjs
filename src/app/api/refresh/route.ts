import { catchAsync } from "@/utils/catchAsync";
import { NextResponse, NextRequest } from "next/server";
import { AccessToken, RefreshToken } from "@/utils/jwt";
import { databaseOperation } from "@/models/dataBase";
import * as jwt from "jsonwebtoken";
import { hashPassword, is_validPassword } from "@/utils/hash";
import { clearCookie, setCookie } from "@/utils/handlecookie";

interface jwts extends jwt.JwtPayload {
  userInfo: { username: string; userId: number };
}

export const POST = catchAsync(
  async (request: NextRequest): Promise<NextResponse> => {
    const token = request.cookies.get("refreshToken")?.value;
    const userId = request.cookies.get("userId")?.value;
    let response = NextResponse.json(
      { message: "You need to sign in" },
      { status: 401 }
    );
    if (!token || !userId) return response;

    const findUser = await databaseOperation.findToken(userId);
    if (!findUser) return clearCookie(response);

    const is_validToken = await is_validPassword(token, findUser.refreshtoken);
    if (!is_validToken) return clearCookie(response);

    const payload = jwt.verify(token, process.env.REFRESHTOKEN_SECRET!) as jwts;

    if (!payload) return clearCookie(response);

    const newRefreshToken = RefreshToken(findUser.email);

    await databaseOperation.updateToken(
      await hashPassword(newRefreshToken),
      findUser.id
    );

    const newAccessToken = AccessToken(payload.userInfo.username, findUser.id);

    let newresponse = NextResponse.json({
      accessToken: newAccessToken,
      userId: findUser.id,
    });

    newresponse = setCookie(newresponse, newRefreshToken);

    return newresponse;
  }
);
