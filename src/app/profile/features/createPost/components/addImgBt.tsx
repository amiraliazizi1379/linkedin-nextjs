import { ChangeEvent, RefObject } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";

type props = {
  srcImg: string;
  handleImgBt: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleImgInput: (e: ChangeEvent<HTMLInputElement>) => void;
  classname? : string;
};

export function AddImageButton({
  srcImg,
  handleImgBt,
  fileInputRef,
  handleImgInput,
  classname
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
        onChange={handleImgInput}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
