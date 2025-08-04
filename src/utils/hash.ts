import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export async function hashPassword(password: string) {
   await bcrypt.hash(password, 10, (error, hashed) => {
    if (error) NextResponse.json({ error }, { status: 403 });
    return hashed;
  });
}

export async function is_validPassword( password : string , dbPassword : string ) {
  const validPassword = await bcrypt.compare(password, dbPassword);
  if (!validPassword) return NextResponse.json({ status: 400 });
}
