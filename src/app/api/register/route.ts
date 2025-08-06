import { registerUser } from "@/services/registerUser";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { accessToken, refreshToken } = await registerUser(body);

    const cookieStore = await cookies();
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      //secure : true , //cookie send by https for more secure
      sameSite : "strict" ,  //the browser can send cookie only from our site
      maxAge: 60 * 60 * 24 * 1,
    });

    return NextResponse.json({ accessToken }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
