import { auth } from "@/libs/accessTokenVerify";
import cloudinary from "@/libs/cloudinary";
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

export const PATCH = auth(
  async (request: NextRequest, userId: number): Promise<NextResponse> => {
    const { text, imageUrl } = await FormDataRouteHandler(request);
    if (!text && !imageUrl)
      return NextResponse.json(
        { message: "cannot make a post" },
        { status: 400 }
      );
    const postId = request.headers.get("id");

    if (!postId)
      return NextResponse.json({ message: "post not found" }, { status: 400 });

    const { image_url } = await databaseOperation.getImageUrl(
      Number(postId),
      "posts"
    );
    console.log("reqimage : ", imageUrl, "  image in database : ", image_url);
    if (!imageUrl && image_url) {
      const public_id = image_url.split("/upload/")[1].split(".")[0];
      console.log(image_url , public_id)
      const result = await cloudinary.uploader.destroy(public_id);
      if (!result)
        return NextResponse.json(
          { message: "some thing went wrong" },
          { status: 500 }
        );
    }

    await databaseOperation.editPost(Number(postId), text, imageUrl);
    return NextResponse.json(
      { message: "post successfully edited" },
      { status: 200 }
    );
  }
);
