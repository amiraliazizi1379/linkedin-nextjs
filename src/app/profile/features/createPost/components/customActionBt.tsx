import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

type props = {
  classname?: string;
  name?: string;
  ImgSrc: string;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
};

export function CustomActionBtn({
  classname,
  name = "Post",
  ImgSrc,
  onclick,
}: props) {
  const { btnLoading, postBt } = useSelector((state: RootState) => state.app);
  return (
    <div
      className={`flex items-center ${classname} gap-4 justify-end border-t-1 border-gray-300 w-full pt-4 ${
        ((ImgSrc && name !== "Delete") || (!ImgSrc && name === "Save")) &&
        "mt-8"
      }`}
    >
      <button
        onClick={(e) => onclick(e)}
        className={`${
          postBt || ImgSrc
            ? "bg-[#0a66c2] text-[#fff] hover:bg-[#0f467c] cursor-pointer"
            : "bg-gray-200 text-gray-400  cursor-not-allowed"
        } rounded-full   py-1 px-4  text-sm font-semibold flex-center`}
      >
        {btnLoading ? <ClipLoader color="#fff" size={17} /> : name}
      </button>
    </div>
  );
}
