import { auth } from "@/libs/accessTokenVerify";
import cloudinary from "@/libs/cloudinary";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const UPDATE = auth(async (req: NextRequest, userId) => {
  const image_url = await databaseOperation.getImageUrl(userId);
  const public_id = image_url.split("/upload/")[1].split(".")[0];
  const result = await cloudinary.uploader.destroy(public_id);
  if (!result)
    return NextResponse.json(
      { message: "some thing went wrong" },
      { status: 500 }
    );
  await databaseOperation.deleteProfileImage(userId);
  return NextResponse.json({ status: 200 });
});
