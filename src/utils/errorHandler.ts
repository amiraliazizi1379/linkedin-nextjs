import { AppError } from "@/utils/AppError";
import { NextResponse } from "next/server";
import { logger } from "./logger";

export function ErroHandler(error: any) {
  console.log(error);
  logger.error(error);
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
