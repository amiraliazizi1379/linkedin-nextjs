import { useUserContext } from "@/context/useContext";
import UserImageComponent from "../../userImgComponent";
import { IoMdClose } from "react-icons/io";
import { PostTextArea } from "./PostTextarea";
import { useCreatePost } from "../hooks/useCreatePost";
import { PostAction } from "./postActions";
import { PostImageUploader } from "./postImageUploader";
import { AddImageButton } from "./addImgBt";

export default function CreatePostComponent() {
  const { createPost, setCreatePost } = useUserContext();
  const state = useCreatePost();

  if (createPost) {
    return (
      <section>
        <div
          onClick={() => {
            setCreatePost(false);
          }}
          className="fixed inset-0 bg-black opacity-50"
        ></div>
        <div className="fixed w-[52vw] h-[78vh] p-5 pb-0 shadow-lg bg-[#fff] rounded-md left-[22rem] top-[2rem] ">
          <div className="flex  justify-between">
            <UserImageComponent style="w-[55px] h-[55px] text-3xl ml-4 mt-2" />
            <button
              onClick={() => setCreatePost(false)}
              className="text-3xl h-[40px] cursor-pointer rounded-full hover:bg-gray-100 p-1"
            >
              <IoMdClose />
            </button>
          </div>
          <section className="overflow-y-auto h-[70%] w-full">
            <PostTextArea {...state} />
            <PostImageUploader {...state} />
          </section>
          <AddImageButton {...state} />
          <PostAction {...state} />
        </div>
      </section>
    );
  }
}
