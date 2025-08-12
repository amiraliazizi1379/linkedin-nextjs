import { catchAsync } from "@/utils/catchAsync";
import { NextResponse, NextRequest } from "next/server";
import { AccessToken } from "@/utils/jwt";
import { jwtVerify } from "jose";
import { databaseOperation } from "@/models/dataBase";
import { JwtPayload } from "jsonwebtoken";

interface jwts extends JwtPayload {
  userInfo: { username: string };
}

export const refreshTokenHandler = catchAsync(
  async (request: NextRequest): Promise<NextResponse> => {
    const token = request.cookies.get("refreshToken")?.value;
    if (!token) return NextResponse.redirect(new URL("/login", request.url));

    const findUser = await databaseOperation.findToken(token);
    if (!findUser) return NextResponse.redirect(new URL("login", request.url));

    const secret = new TextEncoder().encode(process.env.REFRESHTOKEN_SECRET);
    const { payload } = await jwtVerify<jwts>(token, secret);
    if (!payload) return NextResponse.redirect(new URL("/login", request.url));

    const newAccessToken = AccessToken(payload.userInfo.username);
    return NextResponse.json({ newAccessToken });
  }
);
