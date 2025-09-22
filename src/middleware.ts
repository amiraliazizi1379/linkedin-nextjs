import { NextResponse, NextRequest } from "next/server";
import { clearCookie } from "./utils/handlecookie";

export const middleware = async (
  request: NextRequest
): Promise<NextResponse> => {
  try {
    const accessToken = request.cookies.get("accessToken")?.value;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/api") || pathname.startsWith("/profile")) {
      if (!accessToken) {
        let res = NextResponse.redirect(new URL("/login", request.nextUrl));
        clearCookie(res);
        return res;
      }
    }

    return NextResponse.next();
  } catch {
    return NextResponse.json(
      { message: "something went wron in middleware" },
      { status: 401 }
    );
  }
};

export const config = {
  matcher: ["/api/posts", "/profile/:path*", "/login", "/register", "/"],
};
