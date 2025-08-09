import * as jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export  function RefreshToken(email: string) : string  {
  return jwt.sign({ userInfo: { username: email } }, process.env.REFRESHTOKEN_SECRET!, {
    expiresIn: "1d",
  });
}

export  function AccessToken(email: string) : string {
  return jwt.sign({ userInfo: { username: email } }, process.env.ACCESSTOKEN_SECRET!, {
    expiresIn: "15m",
  });
}
// middleware
/**/
