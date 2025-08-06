import { loginType } from "@/validation/loginSchema";
//import { registerType } from "@/validation/registerSchema";

export async function RegisterOnSubmit(data: loginType) {
  try {
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(data),

      credentials: "include", //to recieve cookie
    });
    const result = await res.json();
  
  } catch (err) {
    console.log(err);
  }
}
