import { ReactNode } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { handleImgInput } from "../services/previewImg";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useCreatePost } from "../hooks/useCreatePost";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useUserContext } from "@/context/context";

type props = {
  classname?: string;
  logo?: ReactNode;
  setState: ActionCreatorWithPayload<string>;
};

export function AddImageButton({ classname, logo, setState }: props) {
  const { commentImgSrc, postImgSrc } = useSelector(
    (state: RootState) => state.app
  );

  const { handleImgBt, fileInputRef } = useCreatePost();
  const { setPostImgFile } = useUserContext();

  return (
    <div className={`${classname} transition-all duration-200`}>
      <button
        onClick={handleImgBt}
        className={` cursor-pointer ${
          (commentImgSrc || postImgSrc) && "opacity-0 pointer-events-none"
        } `}
      >
        {logo ? logo : <HiOutlinePhoto />}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleImgInput(e, setPostImgFile, setState)}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
