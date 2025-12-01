import { auth } from "@/libs/accessTokenVerify";
import { FormDataRouteHandler } from "@/libs/formDataRouteHandler";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (req: NextRequest, userId: number) => {
  const { bio, email, name, imageUrl } = await FormDataRouteHandler(req);

  if (imageUrl) await databaseOperation.addProfileImage(imageUrl, userId);

  if (bio) await databaseOperation.addBio(bio, userId);

  if (name) await databaseOperation.editName(name, userId);

  if (email) {
    const findEmail = await databaseOperation.findEmail(email);
    if (findEmail)
      return NextResponse.json(
        { message: "email is already token" },
        { status: 403 }
      );
    await databaseOperation.editEmail(email, userId);
  }
  return NextResponse.json({ id: userId }, { status: 200 });
});
