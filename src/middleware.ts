import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

import { AppError } from "./utils/AppError";

export const middleware = async (
  request: NextRequest
): Promise<NextResponse> => {
  try {
    const accessToken = request.headers.get("Authorization");
    const refreshToken = request.cookies.get("refreshToken");
    const userId = request.cookies.get("userId")?.value;

    const { pathname } = request.nextUrl;

    if (refreshToken && ["/", "/register", "/login"].includes(pathname))
      return NextResponse.redirect(new URL(`/profile/${userId}`, request.url));

    if (pathname.startsWith("/api/profile/")) {
      if (!accessToken) {
        const err = new AppError("no token", 401);
        return NextResponse.json(
          { message: err.message },
          { status: err.statusCode }
        );
      }
      const result = await jwtVerify(
        accessToken,
        new TextEncoder().encode(process.env.ACCESSTOKEN_SECRET)
      );
      if (!result) {
        const err = new AppError("verify", 401);
        return NextResponse.json(
          { message: err.message },
          { status: err.statusCode }
        );
      }
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.json(err);
  }
};

export const config = {
  matcher: ["/api/profile/:path*", "/login", "/register", "/"],
};
