"use client";

import Options from "@/app/home/options";
import Logo from "@/components/logo";
import { IoMdSearch } from "react-icons/io";
import UserImageComponent from "./userImgComponent";
import { data } from "../datas/data";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setPopup } from "@/app/redux/store";

export default function ProfileNavBar() {
  const dispatch = useDispatch();
  const { popup, userData } = useSelector((state: RootState) => state.app);
  const { name, email, image } = userData;

  return (
    <nav className="flex items-center justify-around pt-1 bg-[#fff]">
      <div className="flex items-center mb-1 w-[500px] space-x-2 relative">
        <Logo
          className="text-[#0a66c2]"
          logoComponent="text-4xl"
          textstyles="min-[300px]:hidden"
        />

        <IoMdSearch className="absolute left-14 font-bold" />
        <input
          type="text"
          placeholder="Search"
          className=" py-1 px-10 profile-inputs"
        />
      </div>
      <article className="flex items-center h-[3.2rem]">
        <Options datas={data} items="text-2xl" />
        <button
          onClick={() => dispatch(setPopup(!popup))}
          className="cursor-pointer flex-center flex-col hover:text-[#171717] text-[12px] ml-2"
        >
          <UserImageComponent
            style="w-[25px] h-[25px] text-[11px]"
            image={image}
            name={name}
            email={email}
            dontShowLarg
          />

          <span className="flex-center gap-0.5">
            {" "}
            <p>Me</p> <FaCaretDown />
          </span>
        </button>
      </article>
    </nav>
  );
}
