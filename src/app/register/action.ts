import { loginType } from "@/validation/loginSchema";
//import { registerType } from "@/validation/registerSchema";
import { UseFormSetError } from "react-hook-form";
import { includes } from "zod";

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
    if (!result.ok) {
      if (result.message.includes("email"))
        setError("email", { type: "server", message: result.message });
      if (result.message.includes("Password"))
        setError("password", { type: "server", message: result.message });
      else {
        setError("password", { type: "server", message: result.message });
      }
    }
    if (result.accesstoken) setAccesstoken(result.accesstoken);
  } catch (err) {
    setError("root", {
      type: "manual",
      message: "something went wrong while connecting to server",
    });
  }
}
