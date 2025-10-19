"use client";

import { setLargImg, setFullScreenSrc } from "@/app/redux/store";
import { useDispatch } from "react-redux";

export default function UserImageComponent({
  style,
  image,
  name,
  email,
  dontShowLarg 
}: {
  style: string;
  image: string;
  name: string;
  email: string;
  dontShowLarg? : boolean
}) {
  const dispatch = useDispatch();
  let content = "";
  if (name) {
    content = name.split("")[0].toUpperCase();
  } else if (email) {
    content = email.split("")[0].toUpperCase();
  }

  if (image) {
    return (
      <img
        onClick={() => {
          if(!dontShowLarg)
          dispatch(setLargImg(true));
          dispatch(setFullScreenSrc(image));
        }}
        src={image}
        className={`object-cover rounded-full cursor-pointer flex-center ${style} `}
      />
    );
  }
  return (
    <div
      className={`${style}  rounded-full bg-[#c0392b] flex-center text-[#fff]`}
    >
      {content}
    </div>
  );
}
