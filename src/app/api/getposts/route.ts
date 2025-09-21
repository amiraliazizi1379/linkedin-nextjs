import { auth } from "@/libs/accessTokenVerify";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async (request: NextRequest, userId) => {
  let postdata = await databaseOperation.getPostsData(userId);

  postdata = (postdata as any[]).map((prev) => ({
    ...prev,
    liked: Boolean(prev.liked),
  }));

  if (!postdata)
    return NextResponse.json(
      { message: "No content to send" },
      { status: 404 }
    );
  return NextResponse.json({ postdata }, { status: 200 });
});
