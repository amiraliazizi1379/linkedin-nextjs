import { auth } from "@/libs/accessTokenVerify";
import { FormDataRouteHandler } from "@/libs/formDataRouteHandler";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (req: NextRequest, userId: number) => {
  const { text, imageUrl } = await FormDataRouteHandler(req, "userphoto");
  if (imageUrl) {
    await databaseOperation.updateUserInfo(imageUrl, userId);
  }
  return NextResponse.json({ status: 200 });
});
