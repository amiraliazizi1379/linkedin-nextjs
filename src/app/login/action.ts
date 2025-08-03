import { loginType } from "@/validation/loginSchema";

export async function LoginOnSubmit(data: loginType) {
  try {
    const res = await fetch("/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
}
