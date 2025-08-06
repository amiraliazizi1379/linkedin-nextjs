import { AppError } from "@/utils/AppError";
import { NextResponse } from "next/server";

export function ErroHandler(error: any) {
  console.log(error);
  if (error instanceof AppError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }

  return NextResponse.json(
    { message: "somethig went wrong!" },
    { status: 500 }
  );
}
