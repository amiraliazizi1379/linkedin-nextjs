import { auth } from "@/libs/accessTokenVerify";
import { databaseOperation } from "@/models/dataBase";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(
  async (req: NextRequest, userId: number): Promise<NextResponse> => {
    const postId = await req.json();
    await databaseOperation.registerFollow(userId, postId);
    return NextResponse.json({ status: 200 });
  }
);

export const DELETE = auth(
  async (req: NextRequest, userId: number): Promise<NextResponse> => {
    const postId = await req.json();
    await databaseOperation.deleteFollow(userId, postId);
    return NextResponse.json({ status: 200 });
  }
);
