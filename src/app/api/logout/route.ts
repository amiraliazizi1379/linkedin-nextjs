import { databaseOperation } from "@/models/dataBase";
import { cookies } from "next/headers";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const refreshToken = request.cookies.get("refreshToken")?.value;
  if (!refreshToken)
    return Response.json({ message: "No content to send" }, { status: 204 });

  await databaseOperation.deleteToken(refreshToken);
  const cookieStore = await cookies();

  cookieStore.set("refreshToken", "", {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    maxAge: 0,
  });

  cookieStore.set("userId", "", { path: "/", maxAge: 0 });
  return Response.json({ message: "Logged out" }, { status: 200 });
}
