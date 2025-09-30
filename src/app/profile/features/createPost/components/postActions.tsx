import { ClipLoader } from "react-spinners";
import { handlePost } from "../services/addPost";

type props = {
  postBt: boolean;
  srcImg: string;
  classname?: string;
  name?: string;
  loading: boolean;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export function PostAction({
  postBt,
  srcImg,
  classname,
  name = "Post",
  loading,
  onclick,
}: props) {
  return (
    <div
      className={`flex items-center ${classname} gap-4 justify-end border-t-1 border-gray-300 w-full pt-4 ${
        srcImg && "mt-10"
      }`}
    >
      <button
        onClick={(e) => onclick(e)}
        className={`${
          postBt || srcImg
            ? "bg-[#0a66c2] text-[#fff] hover:bg-[#0f467c] cursor-pointer"
            : "bg-gray-200 text-gray-400  cursor-not-allowed"
        } rounded-full   py-1 px-4  text-sm font-semibold flex-center`}
      >
        {loading ? <ClipLoader color="#fff" size={17} /> : name}
      </button>
    </div>
  );
}
