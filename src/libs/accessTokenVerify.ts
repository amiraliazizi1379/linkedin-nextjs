import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

interface payloadType {
  userInfo: { username: string; userId: number };
}

export function auth(
  handler: (req: NextRequest, userId: number) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    try {
      const token = req.cookies.get("accessToken")?.value;
      if (!token)
        return NextResponse.json(
          { message: "Token not found" },
          { status: 401 }
        );

      const payload = jwt.verify(
        token,
        process.env.ACCESSTOKEN_SECRET!
      ) as payloadType;
      if (!payload)
        return NextResponse.json({ message: "Token expired" }, { status: 401 });

      const { userId } = payload.userInfo;
      return await handler(req, userId);
    } catch (err: any) {
      console.log(err);

      if (err.name === "TokenExpiredError")
        return NextResponse.json({ message: "Token expired" }, { status: 401 });
    }
  };
}
