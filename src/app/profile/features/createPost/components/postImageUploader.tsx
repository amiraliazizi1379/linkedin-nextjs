import { Dispatch, SetStateAction, useRef } from "react";
import { IoMdClose } from "react-icons/io";

type props = {
  srcImg: string;
  setSrcImg: Dispatch<SetStateAction<string>>;
  classname: string;
  setHeightImage : Dispatch<SetStateAction<number>>;
};

export function PostImageUploader({
  srcImg,
  setSrcImg,
  classname = "w-full",
  setHeightImage
}: props) {
  const preview = useRef<HTMLImageElement>(null);
  if (preview.current) {
    setHeightImage(preview.current.offsetHeight);
  }
  return (
    <main className={`h-[65%] ${classname}`}>
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
            <img src={srcImg} className="" ref={preview} />
          </section>
        )}
      </div>
    </main>
  );
}
