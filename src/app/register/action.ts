import { registerType } from "@/validation/registerSchema";

export async function RegisterOnSubmit(data: registerType) {
  try {
    const res = await fetch("/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
}
