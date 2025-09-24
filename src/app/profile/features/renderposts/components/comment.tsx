import { useState } from "react";
import { AddImageButton } from "../../createPost/components/addImgBt";
import { useCreatePost } from "../../createPost/hooks/useCreatePost";
import UserImageComponent from "../../userImgComponent";
import { PostAction } from "../../createPost/components/postActions";
import { PostImageUploader } from "../../createPost/components/postImageUploader";

export function CommentComponent() {
  const state = useCreatePost();
  const [comment, setCommetn] = useState("");
  return (
    <section className="flex-center gap-4 mt-4 mb-4 relative">
      <UserImageComponent style="w-[30px] h-[30px] text-md" />
      <textarea
        onChange={(e) => setCommetn(e.target.value)}
        placeholder="Add a comment"
        className={`rounded-full z-0 w-[80%] border-1 h-10 resize-none pt-1.5 px-4 border-gray-400 outline-gray-400 ${
          comment && "h-[80px] rounded-xl"
        } ${state.srcImg && 'h-[200px] rounded-xl'}`}
      ></textarea>
      <PostImageUploader {...state} classname="absolute w-[35%] rounded-lg top-8 left-24 "/>
      <AddImageButton
        {...state}
        classname={`absolute right-9.5 hover:bg-gray-200 rounded-full w-[35px] z-5 p-1.5 flex-center ${
          comment && "right-[450px] top-10.5"
        }`}
      />
      {(comment || state.srcImg) && (
        <PostAction
          {...state}
          postBt={true}
          name="Comment"
          classname={`absolute border-none right-12 top-6.5 ${state.srcImg && 'bottom-0 top-20'}`}
        />
      )}
    </section>
  );
}
