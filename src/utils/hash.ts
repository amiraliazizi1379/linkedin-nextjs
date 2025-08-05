import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export async function hashPassword(password: string) {
   return await bcrypt.hash(password, 10)
}

export async function is_validPassword( password : string , dbPassword : string ) {
  const validPassword = await bcrypt.compare(password, dbPassword);
  if (!validPassword) return NextResponse.json({ status: 400 });
}
