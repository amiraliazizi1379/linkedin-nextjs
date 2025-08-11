import { NextRequest } from "next/server";

export function POST(request: NextRequest): Response {
  request.cookies.delete("refreshToken");
  return Response.json({ message: "Logged out" }, { status: 200 });
}
