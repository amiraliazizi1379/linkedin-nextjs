import { useUserContext } from "@/context/context";
import { RootState, setPostData, setpostImgSrc } from "@/redux/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

export function CloseButton({
  setCustomState,
}: {
  setCustomState: ActionCreatorWithPayload<boolean>;
}) {
  const { postData } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const { setPostImgFile } = useUserContext();
  return (
    <button
      onClick={() => {
        dispatch(setCustomState(false));
        const disableEditPost = postData.map((post) => ({
          ...post,
          editPost: false,
        }));
        dispatch(setPostData(disableEditPost));
        dispatch(setpostImgSrc(""));
        setPostImgFile(null);
      }}
      className="text-3xl h-[40px] cursor-pointer rounded-full hover:bg-gray-100 p-1"
    >
      <IoMdClose />
    </button>
  );
}
