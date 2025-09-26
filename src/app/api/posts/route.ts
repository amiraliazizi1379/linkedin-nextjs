import { auth } from "@/libs/accessTokenVerify";
import { databaseOperation } from "@/models/dataBase";
import { catchAsync } from "@/utils/catchAsync";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(
  async (request: NextRequest, userId: number): Promise<NextResponse> => {
    const formData = await request.formData();
    const text = formData.get("text") as string;
    const image = formData.get("img") as File | null;

    let imageUrl = null;

    if (image) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const path = `C:/Users/Amir/Desktop/linkedin-nextjs/public/postimg/${image.name}`;
      await writeFile(path, buffer);
      imageUrl = `/postimg/${image.name}`;
    }

    await databaseOperation.addPost(userId, text, imageUrl);

    return NextResponse.json(
      { message: "post successfully added" },
      { status: 200 }
    );
  }
);
