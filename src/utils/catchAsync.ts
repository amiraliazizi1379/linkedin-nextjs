import { NextRequest } from "next/server";

export const catchAsync = <
  T extends (...args: NextRequest[]) => Promise<Response>
>(
  handler: T
) => {
  return (async (...args: Parameters<T>): Promise<Response> => {
    try {
      return await handler(...args);
    } catch (err) {
      const { ErroHandler } = await import("@/utils/errorHandler");
      return ErroHandler(err);
    }
  }) as T;
};
