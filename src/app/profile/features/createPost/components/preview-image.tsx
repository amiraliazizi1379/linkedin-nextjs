import { RootState, setCommentImgSrc, setpostImgSrc } from "@/redux/store";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

type props = {
  classname: string;
};

export function PostImageUploader({ classname = "w-full" }: props) {
  const dispatch = useDispatch();
  const { commentImgSrc, postImgSrc } = useSelector(
    (state: RootState) => state.app
  );
  return (
    <main className={`max-h-[200px] overflow-auto ${classname}`}>
      <div className="h-full">
        {(commentImgSrc || postImgSrc) && (
          <section>
            <button
              onClick={() => {
                dispatch(setpostImgSrc("")), dispatch(setCommentImgSrc(""));
              }}
              className={`text-2xl mb-3 h-[32px] flex justify-self-end text-[#fff] cursor-pointer bg-[#4b4b4b] rounded-full hover:bg-[#252525] p-1 ${
                classname && "absolute top-3 right-4 opacity-80"
              }`}
            >
              <IoMdClose />
            </button>
            <Image alt="" src={commentImgSrc || postImgSrc} />
          </section>
        )}
      </div>
    </main>
  );
}
