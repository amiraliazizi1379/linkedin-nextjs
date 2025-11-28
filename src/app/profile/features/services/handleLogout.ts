import { setLoading, store } from "@/redux/store";
import { redirect } from "next/navigation";

export async function handlelogout() {
  store.dispatch(setLoading(true));
  const res = await fetch("https://linkedin-nextjs-3b3x.onrender.com/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (res.ok) redirect("/login");
  store.dispatch(setLoading(false));
}
