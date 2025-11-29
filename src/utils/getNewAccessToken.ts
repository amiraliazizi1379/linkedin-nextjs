import { redirect } from "next/navigation";

export async function GetNewAccessToken(
  url: string,
  options: {
    method: string;
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    headers?: {};
    body?: FormData | string;
  }
) {
  try {
    const res = await fetch(url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
      credentials: "include",
    });

    if (res.ok || res.status === 403) return res;
    const result = await res.json();

    if (res.status === 401 && result.message === "Token expired") {
      const requestToken = await fetch(`/api/refresh`, {
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
          headers: options.headers,
          body: options.body,
          credentials: "include",
        });
        if (res2.ok || res2.status === 403) return res2;
      }
    } else {
      redirect("/login");
    }
  } catch (err) {
    throw err;
  }
}
