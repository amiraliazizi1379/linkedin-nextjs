"use client";

import { useEffect, useState } from "react";
import { GetUserData } from "./action";
import { useUserContext } from "@/context/useContext";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function Profile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { accesstoken, setAccesstoken } = useUserContext();
  console.log(accesstoken);
  const [data, setData] = useState<{ id: number }>();
  const router = useRouter();

  useEffect(() => {
    const result = async () => {
      const res = await GetUserData(accesstoken, id);
      const result = await res.json();
      if (res.ok && result.accessToken) {
        setAccesstoken(result.accessToken);
        const res2 = await GetUserData(accesstoken, id);
        if (!res2.ok) router.replace("/login");
      }
      else{
        router.push('/login')
      }
      //setData(result);

      if (!res.ok) router.replace("/login");
    };

    result();
  }, [router]);

  async function handlelogout() {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (res.ok) router.push("/login");
  }

  return (
    <div>
      <button onClick={handlelogout}>log out</button>
      {data && data.id} welcome to your profile{" "}
    </div>
  );
}
