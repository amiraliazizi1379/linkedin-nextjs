import { auth } from "@/libs/accessTokenVerify";
import { FormDataRouteHandler } from "@/libs/formDataRouteHandler";
import { databaseOperation } from "@/models/dataBase";
import { catchAsync } from "@/utils/catchAsync";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(
  async (request: NextRequest, userId: number): Promise<NextResponse> => {
    const { text, imageUrl } = await FormDataRouteHandler(request);

    await databaseOperation.addPost(userId, text, imageUrl);

    return NextResponse.json(
      { message: "post successfully added" },
      { status: 200 }
    );
  }
);
