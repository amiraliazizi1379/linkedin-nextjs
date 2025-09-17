import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

type props = {
  srcImg: string;
  setSrcImg: Dispatch<SetStateAction<string>>;
};

export function PostImageUploader({ srcImg, setSrcImg }: props) {
  return (
    <main className="w-full h-[65%]">
      <div className="h-full">
        {srcImg && (
          <section>
            <button
              onClick={() => setSrcImg("")}
              className="text-2xl mb-3 h-[32px] flex justify-self-end text-[#fff] cursor-pointer bg-[#4b4b4b] rounded-full hover:bg-[#252525] p-1"
            >
              <IoMdClose />
            </button>
            <img src={srcImg} className=" " />
          </section>
        )}
      </div>
    </main>
  );
}
