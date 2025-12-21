import {
  RootState,
  setCreatePost,
  setDeleteVerification,
  setPostData,
} from "@/redux/store";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function PostEditOptions({ active }: { active: boolean }) {
  const { postData } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  return (
    <div
      className={`absolute flex flex-col items-start right-[10px]  py-1 shadow-md rounded-md transition-all duration-200 w-[330px] text-[14px] 
                   
                    ${
                      active
                        ? "translate-y-0 z-50 bg-[#fff]"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
    >
      <button
        onClick={() => {
          const updatedData = postData.map((post) =>
            post.activePostOptions
              ? {
                  ...post,
                  activePostOptions: false,
                  editPost: true,
                }
              : post
          );
          dispatch(setPostData(updatedData));
          dispatch(setCreatePost(true));
        }}
        className=" flex gap-2 items-center mt-2 cursor-pointer  p-4 hover:bg-gray-100 w-full "
      >
        <MdOutlineModeEditOutline className="text-xl" />
        <p className="">Edit Post</p>
      </button>
      <button
        onClick={() => {
          dispatch(setDeleteVerification(true));
        }}
        className=" flex gap-2 items-center mt-0.5 cursor-pointer  p-4 hover:bg-gray-100 w-full"
      >
        <MdDelete className="text-xl" />
        <p>Delete photo</p>
      </button>
    </div>
  );
}
