import { ChangeEvent, RefObject } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";

type props = {
  srcImg: string;
  handleImgBt: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleImgInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function AddImageButton({
  srcImg,
  handleImgBt,
  fileInputRef,
  handleImgInput,
}: props) {
  return (
    <div>
      <button
        onClick={handleImgBt}
        className={`text-2xl cursor-pointer ml-1.5 mt-2 ${srcImg && "hidden"}`}
      >
        <HiOutlinePhoto />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImgInput}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
