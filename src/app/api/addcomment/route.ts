import { auth } from "@/libs/accessTokenVerify";
import { FormDataRouteHandler } from "@/libs/formDataRouteHandler";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(
  async (req: NextRequest, userId: number): Promise<NextResponse> => {
    const postId = req.headers.get("postId");
    const { text, imageUrl } = await FormDataRouteHandler(req, "commentImage");
    await databaseOperation.addComment(userId, Number(postId), text, imageUrl);
    return NextResponse.json({ message: "commnet added" }, { status: 200 });
  }
);
