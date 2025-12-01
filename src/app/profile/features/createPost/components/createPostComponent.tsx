import UserImageComponent from "../../components/userImgComponent";
import { PostTextArea } from "./PostTextarea";
import { CustomActionBtn } from "./customActionBt";
import { PostImageUploader } from "./preview-image";
import { AddImageButton } from "./addImgBt";
import { handlePost } from "../services/addPost";
import { CloseButton } from "../../components/closeButton";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  setCreatePost,
  setPostBt,
  setpostImgSrc,
  setPostText,
} from "@/redux/store";
import { useUserContext } from "@/context/context";

export default function CreatePostComponent() {
  const dispatch = useDispatch();
  const { createPost, userData, postText, postImgSrc } = useSelector(
    (state: RootState) => state.app
  );
  const { postImgFile } = useUserContext();
  const { image, name, email, bio } = userData;

  if (createPost) {
    return (
      <section>
        <div
          onClick={() => {
            dispatch(setCreatePost(false));
            dispatch(setPostBt(false));
            dispatch(setPostText(""));
          }}
          className="fixed inset-0 z-50 bg-black opacity-50"
        ></div>
        <div className="fixed w-[52vw] h-[78vh] p-5 pb-0 shadow-lg bg-[#fff] z-50 rounded-md left-[22rem] top-[2rem] ">
          <div className="flex  justify-between">
            <div className="flex-center gap-6">
              <UserImageComponent
                style="w-[55px] h-[55px] text-3xl ml-4 mt-2"
                image={image}
                name={name}
                email={email}
              />
              <div>
                <h1>{name ? name : email}</h1>
                <p className="text-[14px] text-gray-400">{bio && bio}</p>
              </div>
            </div>
            <CloseButton setCustomState={setCreatePost} />
          </div>
          <section className="overflow-y-auto h-[70%] w-full">
            <PostTextArea />
            <PostImageUploader classname="" />
          </section>
          <AddImageButton classname="text-2xl" setState={setpostImgSrc} />
          <CustomActionBtn
            onclick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handlePost(e, postImgFile)
            }
            ImgSrc={postImgSrc}
          />
        </div>
      </section>
    );
  }
}
