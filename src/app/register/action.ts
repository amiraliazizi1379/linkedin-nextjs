import { loginType } from "@/validation/loginSchema";
//import { registerType } from "@/validation/registerSchema";
import { UseFormSetError } from "react-hook-form";

export async function RegisterOnSubmit(
  data: loginType,
  setAccesstoken: (token: string) => void,
  setError: UseFormSetError<loginType>
) {
  try {
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(data),

      credentials: "include", //to recieve cookie
    });
    const result = await res.json();
    if (!result.ok)
      setError("email", { type: "manual", message: result.message });
    if (result.accesstoken) setAccesstoken(result.accesstoken);
  } catch (err) {
    console.log(err);
  }
}
