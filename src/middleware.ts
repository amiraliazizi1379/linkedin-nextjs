import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

type jwtpayload = {
  userInfo: {
    userId: number;
  };
};

export const middleware = async (
  request: NextRequest
): Promise<NextResponse> => {
  try {
    const refreshToken = request.cookies.get("refreshToken")?.value;

    if (refreshToken) {
      const secret = new TextEncoder().encode(process.env.REFRESHTOKEN_SECRET);
      const { payload } = await jwtVerify<jwtpayload>(refreshToken, secret);
      console.log(payload);
      return NextResponse.redirect(
        new URL(`/profile/${payload.userInfo.userId}`, request.nextUrl)
      );
    }
    return NextResponse.next();
  } catch {
    return NextResponse.json(
      { message: "something went wrong in middleware" },
      { status: 401 }
    );
  }
};

export const config = {
  matcher: ["/login", "/register", "/"],
};
