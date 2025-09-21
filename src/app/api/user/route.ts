import { auth } from "@/libs/accessTokenVerify";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async (request: NextRequest, userId) => {
  // const id = request.nextUrl.pathname.split("/")[3];
  // console.log(request.nextUrl)
  // console.log(id , userId)
  // if (userId !== Number(id))
  //   return NextResponse.json(
  //     { message: "you dont have permission to access this url" },
  //     { status: 403 }
  //   );
  return NextResponse.json({ userId }, { status: 200 });
});
