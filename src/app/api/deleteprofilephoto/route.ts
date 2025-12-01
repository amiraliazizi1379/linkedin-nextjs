import { auth } from "@/libs/accessTokenVerify";
import cloudinary from "@/libs/cloudinary";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (req: NextRequest, userId) => {
  const { image } = await databaseOperation.getImageUrl(userId);

  const public_id = image.split("/upload/")[1].split(".")[0];
  const result = await cloudinary.uploader.destroy(public_id);
  if (!result)
    return NextResponse.json(
      { message: "some thing went wrong" },
      { status: 500 }
    );
  await databaseOperation.deleteProfileImage(userId);
  return NextResponse.json({id : userId} , { status: 200 });
});
