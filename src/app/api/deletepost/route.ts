import { auth } from "@/libs/accessTokenVerify";
import cloudinary from "@/libs/cloudinary";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (req: NextRequest, userId) => {
  const { postId } = await req.json();
  const { image_url } = await databaseOperation.getImageUrl(postId, "posts");
  if (image_url) {
    const public_id = image_url.split("/upload/")[1].split(".")[0];
    const result = await cloudinary.uploader.destroy(public_id);
    if (!result)
      return NextResponse.json(
        { message: "some thing went wrong" },
        { status: 500 }
      );
  }
  await databaseOperation.deletePost(postId);
  return NextResponse.json({ message: "ok" }, { status: 200 });
});
