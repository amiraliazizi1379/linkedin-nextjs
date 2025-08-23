import { catchAsync } from "@/utils/catchAsync";
import { NextResponse, NextRequest } from "next/server";
import { AccessToken } from "@/utils/jwt";
import { jwtVerify } from "jose";
import { databaseOperation } from "@/models/dataBase";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

interface jwts extends JwtPayload {
  userInfo: { username: string; userId: number };
}

export const POST = catchAsync(
  async (request: NextRequest): Promise<NextResponse> => {
    const token = request.cookies.get("refreshToken")?.value;
    if (!token)
      return NextResponse.json(
        { message: "You need to sign in" },
        { status: 401 }
      );

    const findUser = await databaseOperation.findToken(token);

    if (!findUser) {
      const cookieStore = await cookies();
      cookieStore.set("refreshToken", "", {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      return NextResponse.json(
        { message: "You need to sign in" },
        { status: 401 }
      );
    }
    const secret = new TextEncoder().encode(process.env.REFRESHTOKEN_SECRET);
    const { payload } = await jwtVerify<jwts>(token, secret);
    if (!payload)
      return NextResponse.json(
        { message: "You need to sign in" },
        { status: 401 }
      );
    const newAccessToken = AccessToken(payload.userInfo.username, findUser.id);

    return NextResponse.json({
      accessToken: newAccessToken,
      userId: findUser,
    });
  }
);
