import * as jwt from "jsonwebtoken";

export function RefreshToken(id : number): string {
  return jwt.sign(
    { userInfo: { userId : id } },
    process.env.REFRESHTOKEN_SECRET!,
    {
      expiresIn: "1d",
    }
  );
}

export function AccessToken(email: string, id: number): string {
  return jwt.sign(
    { userInfo: { username: email, userId: id } },
    process.env.ACCESSTOKEN_SECRET!,
    {
      expiresIn: "5m",
    }
  );
}
