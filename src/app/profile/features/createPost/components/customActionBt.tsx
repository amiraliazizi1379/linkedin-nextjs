import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

type props = {
  classname?: string;
  name?: string;
  ImgSrc: string;
  text?: string;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export function CustomActionBtn({
  classname,
  name = "Post",
  ImgSrc,
  text,
  onclick,
}: props) {
  const { loading } = useSelector((state: RootState) => state.app);
  return (
    <div
      className={`flex items-center ${classname} gap-4 justify-end border-t-1 border-gray-300 w-full pt-4 ${
        ImgSrc && "mt-10"
      }`}
    >
      <button
        onClick={(e) => onclick(e)}
        className={`${
          text || ImgSrc
            ? "bg-[#0a66c2] text-[#fff] hover:bg-[#0f467c] cursor-pointer"
            : "bg-gray-200 text-gray-400  cursor-not-allowed"
        } rounded-full   py-1 px-4  text-sm font-semibold flex-center`}
      >
        {loading ? <ClipLoader color="#fff" size={17} /> : name}
      </button>
    </div>
  );
}
