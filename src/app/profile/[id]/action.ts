import { AppError } from "@/utils/AppError";

export async function GetUserData(
  accesstoken: string,
  id: string
): Promise<Response> {
  try {
    const res = await fetch(`http://localhost:3000/api/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accesstoken,
      },
    });

    if (res.status === 401) {
      const requestToken = await fetch("http://localhost:3000/api/refresh", {
        method: "POST",
        credentials: "include",
      });

      if (requestToken.ok) {
        const newToken = await requestToken.json();
        await new Promise((resolve) => setTimeout(resolve, 100));
        const res2 = await fetch(`http://localhost:3000/api/profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: newToken.accessToken,
          },
        });
        return res2;
      } else return requestToken;
    }

    return res;
  } catch (err) {
    throw err;
  }
}
