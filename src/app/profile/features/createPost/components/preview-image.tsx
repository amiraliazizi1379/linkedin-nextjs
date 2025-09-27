import { Dispatch, SetStateAction, useCallback, useRef } from "react";
import { IoMdClose } from "react-icons/io";

type props = {
  srcImg: string;
  setSrcImg: Dispatch<SetStateAction<string>>;
  classname?: string;
};

export function PostImageUploader({
  srcImg,
  setSrcImg,
  classname = "w-full",
}: props) {
  return (
    <main className={`h-[65%] overflow-auto ${classname}`}>
      <div className="h-full">
        {srcImg && (
          <section>
            <button
              onClick={() => setSrcImg("")}
              className={`text-2xl mb-3 h-[32px] flex justify-self-end text-[#fff] cursor-pointer bg-[#4b4b4b] rounded-full hover:bg-[#252525] p-1 ${
                classname && "absolute top-3 right-4 opacity-80"
              }`}
            >
              <IoMdClose />
            </button>
            <img src={srcImg} />
          </section>
        )}
      </div>
    </main>
  );
}
