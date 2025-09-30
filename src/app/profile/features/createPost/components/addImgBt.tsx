import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { handleImgInput } from "../services/previewImg";

type props = {
  setPostImg: Dispatch<SetStateAction<File | null>>;
  setSrcImg: Dispatch<SetStateAction<string>>;
  srcImg: string;
  handleImgBt: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  classname?: string;
};

export function AddImageButton({
  setPostImg,
  setSrcImg,
  srcImg,
  handleImgBt,
  fileInputRef,
  classname,
}: props) {
  return (
    <div className={classname}>
      <button
        onClick={handleImgBt}
        className={`text-2xl cursor-pointer  ${srcImg && "hidden"}`}
      >
        <HiOutlinePhoto />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleImgInput(e, setPostImg, setSrcImg)}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
