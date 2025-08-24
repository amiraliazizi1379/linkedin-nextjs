import { NextResponse } from "next/server";

export function setCookie<T>(
  response: NextResponse<T>,
  token: string,
  key: string = "refreshToken",
  path: string = "/api/refresh"
): NextResponse<T> {
  response.cookies.set(key, token, {
    httpOnly: true,
    path: path,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 1,
  });
  return response;
}

export function clearCookie<T>(
  response: NextResponse<T>,
  key: string = "refreshToken",
  path: string = "/api/refresh"
): NextResponse<T> {
  response.cookies.set(key, "", {
    httpOnly: true,
    path: path,
    sameSite: "strict",
    maxAge: 0,
  });
  return response;
}

