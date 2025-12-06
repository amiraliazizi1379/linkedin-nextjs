"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import UserImageComponent from "./userImgComponent";

export function UserComponent() {
  const { userData } = useSelector((state: RootState) => state.app);
  const { email, name, bio, image } = userData;
  console.log(userData);
  return (
    <div className="w-[250px] h-[220px] bg-[#fff] border-1 border-gray-300 rounded-xl relative">
      <div className="flex h-[60px] w-full">
        <div className="w-[70%] bg-gray-200 rounded-tl-lg">
          <div className="w-[130%] bg-[#a6bacb] rounded-tl-lg [clip-path:circle(50%_at_33%_50%)] h-full"></div>
        </div>
        <div className="w-[32%] bg-[#cad7e3] rounded-tr-lg"></div>
      </div>
      <UserImageComponent
        style="w-[80px] h-[80px] border-3 border-[#fff] absolute left-4 top-9"
        email={email}
        image={image}
        name={name}
      />
      <h1 className="mt-14 ml-4 text-[#171717] text-xl">
        {name ? name : email}
      </h1>
      <p className="ml-4">{bio && bio}</p>
    </div>
  );
}
