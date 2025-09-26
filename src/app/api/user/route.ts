import { auth } from "@/libs/accessTokenVerify";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (request: NextRequest, userId) => {
  const pageId = await request.text();

  if (userId !== Number(pageId))
    return NextResponse.json({ id: userId }, { status: 403 });

  return NextResponse.json({ status: 200 });
});
