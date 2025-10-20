import { auth } from "@/libs/accessTokenVerify";
import { FormDataRouteHandler } from "@/libs/formDataRouteHandler";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (req: NextRequest, userId: number) => {
  const { bio, email, name, imageUrl } = await FormDataRouteHandler(
    req,
    "userphoto"
  );
  let res = NextResponse.json({ status: 200 });
  if (imageUrl) {
    await databaseOperation.addProfileImage(imageUrl, userId);
    return res;
  }
  if (bio) {
    await databaseOperation.addBio(bio, userId);
    return res;
  }
  if (name) {
    await databaseOperation.editName(name, userId);
    return res;
  }
  if (email) {
    const findEmail = await databaseOperation.findEmail(email);
    if (findEmail)
      return NextResponse.json(
        { message: "email is already token" },
        { status: 403 }
      );
    await databaseOperation.addBio(bio, userId);
    return res;
  }
  return NextResponse.json({ status: 400 });
});
