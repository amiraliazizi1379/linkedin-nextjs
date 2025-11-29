import { loginType } from "@/validation/loginSchema";

import { UseFormSetError } from "react-hook-form";
//import { registerType } from "@/validation/registerSchema";

export async function RegisterOnSubmit(
  data: loginType,
  setError: UseFormSetError<loginType>
) {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),

      credentials: "include", //to recieve cookie
    });
    const result = await res.json();

    if (!res.ok) {
      const message = result.message.replaceAll('"', "");

      if (message.startsWith("email")) {
        setError("email", { type: "server", message: message });
      } else if (message.startsWith("Password")) {
        setError("password", { type: "server", message: message });
      } else {
        setError("root", { type: "manual", message: message });
      }
    } else {
      return result;
    }
  } catch (err) {
    setError("root", {
      type: "manual",
      message: "something went wrong while connecting to server",
    });
  }
}
