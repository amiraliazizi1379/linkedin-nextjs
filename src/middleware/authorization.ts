import * as jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";

export async function VerifyJwt(request: NextRequest) : Promise<NextResponse>{
  const token = request.cookies.get("refreshToken")?.value;

  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  jwt.verify(token, process.env.ACCESSTOKEN_SECRET!, (decode, error) => {
    if (error) return NextResponse.redirect(new URL("login", request.url));
  });
  return NextResponse.next();
}
