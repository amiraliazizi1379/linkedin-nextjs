export const catchAsync = <T extends (...args: any[]) => Promise<Response>>(
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
