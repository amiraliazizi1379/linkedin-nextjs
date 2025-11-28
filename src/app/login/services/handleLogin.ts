import { setLoginLoading, store } from "@/redux/store";
import { loginType } from "@/validation/loginSchema";
import { redirect } from "next/navigation";

export async function LoginOnSubmit(data: loginType) {
  try {
    store.dispatch(setLoginLoading(true));
    const res = await fetch("https://linkedin-nextjs-3b3x.onrender.com/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
    if (res.status === 200) window.location.href = `/profile/${result.id}`;
    store.dispatch(setLoginLoading(false));
  } catch (err) {
    console.log(err);
  }
}
