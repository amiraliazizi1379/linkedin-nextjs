'use client'

import { useRouter } from "next/navigation";
import UserImageComponent from "./userImgComponent";

export default function PopOp() {
  const router = useRouter();
  async function handlelogout() {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (res.ok) router.push("/login");
  }

  return (
    <section className="w-[250px] p-2 shadow-md right-[11rem] top-[4.5rem] rounded-md fixed z-20 h-[340px] bg-[#fff]">
      <UserImageComponent style="w-[50px] h-[50px] text-xl"/>
      <button className="border-1 border-[#0a66c2] cursor-pointer hover:border-2 hover:bg-[#eaf4fd] h-[1.5rem] w-full mt-2 text-[#0a66c2] text-[13px] font-semibold rounded-full">View Profile</button>
      <button className="cursor-pointer text-left text-[14px] mt-2 w-full py-2 hover:underline border-t-1 border-gray-300" onClick={handlelogout}>Sign Out</button>
    </section>
  );
}
