import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("invalid email or password"),
  password: z.string().min(6, "invalid email or password"),
});

export type loginType = z.infer<typeof loginSchema>;
