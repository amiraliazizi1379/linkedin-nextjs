import jwt from "jsonwebtoken";

interface payload {
  userInfo: { userId: number };
}
export function verifyRefreshToken(refreshToken: string) {
  try {
    const payload = jwt.verify(
      refreshToken,
      process.env.REFRESHTOKEN_SECRET!
    ) as payload;

    const userId = payload.userInfo.userId;
    return userId;
  } catch (err: any) {
    console.log(err);
    if (err.name === "TokenExpiredError") return false;
  }
}
