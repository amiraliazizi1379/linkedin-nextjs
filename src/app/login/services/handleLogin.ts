import { setLoginLoading, store } from "@/redux/store";
import { loginType } from "@/validation/loginSchema";
import { UseFormSetError } from "react-hook-form";

export async function LoginOnSubmit(
  data: loginType,
  setError: UseFormSetError<loginType>
) {
  try {
    store.dispatch(setLoginLoading(true));
    const res = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok)
      setError("password", { type: "server", message: result.message });

    if (res.status === 200) window.location.href = `/profile/${result.id}`;
    store.dispatch(setLoginLoading(false));
  } catch (err) {
    console.log(err);
  }
}
