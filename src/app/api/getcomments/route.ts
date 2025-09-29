import { auth } from "@/libs/accessTokenVerify";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async (req: NextRequest, userId: number) => {
  const postId = req.headers.get("postId");
  const commentData = await databaseOperation.getComments(Number(postId));

  return NextResponse.json({ commentData }, { status: 200 });
});
