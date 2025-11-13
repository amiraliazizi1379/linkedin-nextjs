"use client";

import { setLargImg, setFullScreenSrc } from "@/redux/store";
import { CreateAvatarColor } from "@/utils/createAvatarColor";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function UserImageComponent({
  style,
  image,
  name,
  email,
  dontShowLarg,
}: {
  style: string;
  image: string;
  name: string;
  email: string;
  dontShowLarg?: boolean;
}) {
  const [bg, setBg] = useState("");
  const dispatch = useDispatch();
  let content = "";
  if (name) {
    content = name.split("")[0].toUpperCase();
  } else if (email) {
    content = email.split("")[0].toUpperCase();
  }
  useEffect(() => {
    if (!image && email) {
      const color = CreateAvatarColor(email);
      setBg(color);
    }
  }, [email]);

  if (image) {
    return (
      <img
        onClick={() => {
          if (!dontShowLarg) dispatch(setLargImg(true));
          dispatch(setFullScreenSrc(image));
        }}
        src={image}
        className={`object-cover rounded-full cursor-pointer flex-center ${style} `}
      />
    );
  }
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`${style}  rounded-full flex-center text-[#fff]`}
    >
      {content}
    </div>
  );
}
