import { NextResponse } from "next/server";

export function setCookie<T>(
  response: NextResponse<T>,
  refreshToken: string,
  accessToken: string,
): NextResponse<T> {
  response.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/api",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 1,
  });
  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 1,
  });

  return response;
}

export function clearCookie<T>(response: NextResponse<T>): NextResponse<T> {
  response.cookies.set("refreshToken", "", {
    httpOnly: true,
    path: "/api",
    sameSite: "strict",
    maxAge: 0,
  });
  response.cookies.set("accessToken", "", {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 1,
  });
  return response;
}
