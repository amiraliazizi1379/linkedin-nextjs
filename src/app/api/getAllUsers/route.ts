import { auth } from "@/libs/accessTokenVerify";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async (reques: NextRequest, userId) => {
  let data = await databaseOperation.getAllUsers(userId);

  data = (data as any[]).map((prev) => ({
    ...prev,
    is_following: Boolean(prev.is_following),
  }));
  return NextResponse.json({ data }, { status: 200 });
});
