import { AppError } from "@/utils/AppError";
import { catchAsync } from "@/utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";

interface MyJwtPayload extends JwtPayload {
  userInfo: {
    username: string;
    userId: number;
  };
}
export const GET = catchAsync(
  async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const token = request.headers.get("Authorization");
    
    if (!token) throw new AppError("access denied", 401);
    const payload = jwt.verify(
      token,
      process.env.ACCESSTOKEN_SECRET!
    ) as MyJwtPayload;

    const { userId } = payload.userInfo;

    if (userId !== Number(id))
      return Response.json({ error: "Invalid token" }, { status: 403 });
    return Response.json({ userId } , {status : 200});
  }
);
