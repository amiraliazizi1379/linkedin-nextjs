import { registerUser } from "@/services/registerUser";
import { AppError } from "@/utils/AppError";
import { catchAsync } from "@/utils/catchAsync";
import { strict } from "assert";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = catchAsync(
  async (request: Request): Promise<NextResponse> => {
    if (!request) throw new AppError("Email and Password is required", 400);

    const body = await request.json();
    const { accessToken, refreshToken, insertId } = await registerUser(body);

    const cookieStore = await cookies();
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      //secure : true , //cookie send by https for more secure
      sameSite: "strict", //the browser can send cookie only from our site
      maxAge: 60 * 60 * 24 * 1,
    });

    cookieStore.set('userId' , String(insertId) , {
      httpOnly : true , 
      path : '/' , 
      sameSite : 'lax' , 
      maxAge : 60 * 60 * 24 * 1
    })

    return NextResponse.json({ accessToken, insertId }, { status: 200 });
  }
);
