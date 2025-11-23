import { useEffect, useRef } from "react";
import { AddImageButton } from "../../createPost/components/addImgBt";
import UserImageComponent from "../../components/userImgComponent";
import { CustomActionBtn } from "../../createPost/components/customActionBt";
import { PostImageUploader } from "../../createPost/components/preview-image";
import { handleComment } from "../services/handleComments";
import {
  RootState,
  setPostBt,
  setCommentText,
  setCommentImgSrc,
} from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import { useUserContext } from "@/context/context";

export function CommentComponent({ postId }: { postId: number }) {
  const dispatch = useDispatch();
  const { userData, commentImgSrc, commentText } = useSelector(
    (state: RootState) => state.app
  );
  const { name, email, image } = userData;
  const { postImgFile } = useUserContext();
  const ctextRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (ctextRef.current) {
      ctextRef.current.style.height = "auto"; // reset
      ctextRef.current.style.height = ctextRef.current.scrollHeight + "px"; // تغییر ارتفاع بر اساس متن
    }
  }, [commentText]);

  return (
    <section className={`flex justify-center gap-2 mt-4 mb-4 relative`}>
      <UserImageComponent
        style="w-[40px] h-[40px] text-md"
        name={name}
        image={image}
        email={email}
      />
      <textarea
        onChange={(e) => {
          dispatch(setPostBt(true));
          dispatch(setCommentText(e.target.value));
        }}
        placeholder="Add a comment"
        ref={ctextRef}
        value={commentText}
        className={`rounded-full z-0 w-[85%] border-1 ${
          !(commentText || commentImgSrc) && "h-10"
        }  overflow-hidden resize-none pt-1.5 px-4 border-gray-400 outline-gray-400 ${
          commentText && "min-h-[80px] rounded-xl pb-14"
        } ${commentImgSrc && "min-h-[200px] rounded-xl pb-[220px]"}`}
      ></textarea>
      <PostImageUploader
        classname={`absolute w-[35%] rounded-lg bottom-4 left-24 ${
          !commentImgSrc && "hidden"
        }`}
      />
      <AddImageButton
        classname={`absolute right-6 text-2xl hover:bg-gray-200 rounded-full w-[35px]  p-1.5 flex-center ${
          commentText && "left-[5rem] z-5 bottom-2"
        } `}
        setState={setCommentImgSrc}
      />
      {(commentText || commentImgSrc) && (
        <CustomActionBtn
          onclick={(e) => handleComment(e, postId, postImgFile)}
          name="Comment"
          classname={`absolute border-none bottom-4 right-12`}
          ImgSrc={commentImgSrc}
        />
      )}
    </section>
  );
}
