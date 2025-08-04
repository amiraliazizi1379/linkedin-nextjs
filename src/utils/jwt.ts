import * as jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export  function RefreshToken(email: string)  {
  return jwt.sign({ userInfo: { username: email } }, process.env.REFRESHTOKEN_SECRET!, {
    expiresIn: "1d",
  });
}

export  function AccessToken(email: string) {
  return jwt.sign({ userInfo: { username: email } }, process.env.ACCESSTOKEN_SECRET!, {
    expiresIn: "15m",
  });
}
// middleware
/*export async function VerifyJwt(token : string){
    jwt.verify(token , process.env.ACCESSTOKEN_SECRET! , (decode , error) => {

      if(error) return NextResponse.json({error} , {status : 401})
        NextResponse.json({status : 200})
    } )
}*/
