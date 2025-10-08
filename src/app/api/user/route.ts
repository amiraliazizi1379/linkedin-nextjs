import { auth } from "@/libs/accessTokenVerify";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (request: NextRequest, userId) => {
  const pageId = await request.text();

  if (userId !== Number(pageId))
    return NextResponse.json({ id: userId }, { status: 403 });

  const userData = await databaseOperation.getUserData(userId);
  return NextResponse.json({ userData }, { status: 200 });
});
