import { auth } from "@/libs/accessTokenVerify";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async (req: NextRequest, userId: number) => {
  const postId = req.headers.get("postId");
  if (!postId) return NextResponse.json({ status: 400 });

  let commentData = await databaseOperation.getComments(Number(postId));
  if (!commentData) return NextResponse.json({ status: 500 });

  commentData = commentData.map((cmnt) => ({
    ...cmnt,
    activeCommentOption: false,
  }));
  return NextResponse.json({ commentData }, { status: 200 });
});
