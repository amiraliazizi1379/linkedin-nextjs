import { redirect } from "next/navigation";

export async function GetNewAccessToken(
  url: string,
  options: { method: string; body?: FormData | string }
) {
  try {
    const res = await fetch(url, {
      method: options.method,
      body: options.body,
      credentials: "include",
    });

    if (res.ok) return res;
    const result = await res.json();
    console.log(result);
    if (res.status === 401 && result.message === "Token expired") {
      const requestToken = await fetch("http://localhost:3000/api/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json ",
        },
        credentials: "include",
      });
      if (!requestToken.ok) redirect("/login");

      if (requestToken.ok) {
        const res2 = await fetch(url, {
          method: options.method,
          body: options.body,
          credentials: "include",
        });
        if (res2.ok) return res2;
      }
    }
  } catch (err) {
    throw err;
  }
}
