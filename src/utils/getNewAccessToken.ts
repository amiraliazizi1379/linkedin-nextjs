export async function GetNewAccessToken(
  url: string,
  options: { method: string; body?: FormData }
): Promise<Response> {
  try {
    const res = await fetch(url, {
      method: options.method,
      body: options.body,
    });
    const result = await res.json();
    console.log(result);
    if (res.status === 401 && result.message === "Token expired") {
      const requestToken = await fetch("http://localhost:3000/api/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (requestToken.ok) {
        const res = await fetch(url, {
          method: options.method,

          body: options.body,
        });
        return res;
      }
      return requestToken;
    }

    return res;
  } catch (err) {
    throw err;
  }
}
