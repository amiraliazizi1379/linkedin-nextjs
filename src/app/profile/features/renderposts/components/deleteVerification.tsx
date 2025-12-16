import { setDeleteVerification, store } from "@/redux/store";
import { CustomActionBtn } from "../../createPost/components/customActionBt";
import { DeletePost } from "../services/deletePost";

export function PostDeleteVerificationComponent({
  PostId,
}: {
  PostId: number;
}) {
  return (
    <div className="fixed z-50">
      <div
        className="fixed inset-0 z-50 opacity-50 bg-black "
        onClick={() => store.dispatch(setDeleteVerification(false))}
      ></div>
      <section className="w-[350px]  p-4 shadow-md text-center right-[40%] top-[3rem] rounded-md fixed z-50 min-h-[150px] bg-[#fff]">
        <h1 className="text-[#171717]">Delete Post?</h1>
        <p className="text-[14px] mt-2">
          Are you sure you want to permenantly remove this post?
        </p>
        <button
          onClick={() => store.dispatch(setDeleteVerification(false))}
          className="cursor-pointer fixed top-[10.2rem] text-[#171717] rounded-full hover:bg-gray-100 border-2 py-0 px-2.5"
        >
          Cancel
        </button>
        <CustomActionBtn
          ImgSrc="true"
          classname="mt-2"
          name="Delete"
          onclick={() => DeletePost(PostId)}
        />
      </section>
    </div>
  );
}
