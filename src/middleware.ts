import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { databaseOperation } from "./models/dataBase";
import { catchAsync } from "./utils/catchAsync";

export const middleware = catchAsync(
  async (request: NextRequest): Promise<NextResponse> => {
    const token = request.cookies.get("refreshToken")?.value;
    if (!token) return NextResponse.redirect(new URL("/login", request.url));

    const findUser = await databaseOperation.findToken(token);
    if (!findUser) return NextResponse.redirect(new URL("login", request.url));

    const secret = new TextEncoder().encode(process.env.REFRESHTOKEN_SECRET);
    await jwtVerify(token, secret);

    return NextResponse.next();
  }
);
export const config = { matcher: ["/newpage", "/api/getuserdata"] };
