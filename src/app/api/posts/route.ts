import { auth } from "@/libs/accessTokenVerify";
import { FormDataRouteHandler } from "@/libs/formDataRouteHandler";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(
  async (request: NextRequest, userId: number): Promise<NextResponse> => {
    const { text, imageUrl } = await FormDataRouteHandler(request);
    if (!text && !imageUrl)
      return NextResponse.json(
        { message: "cannot make a post" },
        { status: 400 }
      );
    await databaseOperation.addPost(userId, text, imageUrl);

    return NextResponse.json(
      { message: "post successfully added" },
      { status: 200 }
    );
  }
);

export const UPDATE = auth(
  async (request: NextRequest, userId: number): Promise<NextResponse> => {
    const { text, imageUrl } = await FormDataRouteHandler(request);
    if (!text && !imageUrl)
      return NextResponse.json(
        { message: "cannot make a post" },
        { status: 400 }
      );
    const postId = request.headers.get("id");
    console.log(postId, typeof postId);
    if (!postId)
      return NextResponse.json({ message: "post not found" }, { status: 400 });

    await databaseOperation.editPost(Number(postId), text, imageUrl);

    return NextResponse.json(
      { message: "post successfully edited" },
      { status: 200 }
    );
  }
);
