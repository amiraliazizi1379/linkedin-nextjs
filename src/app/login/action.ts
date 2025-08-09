import { loginType } from "@/validation/loginSchema";

export async function LoginOnSubmit(data: loginType) {
  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
}
