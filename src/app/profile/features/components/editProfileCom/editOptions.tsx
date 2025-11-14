import { HiOutlinePhoto } from "react-icons/hi2";
import { AddImageButton } from "../../createPost/components/addImgBt";
import { MdDelete } from "react-icons/md";
import {
  RootState,
  setActiveEditingUserInfo,
  setuserImgSrc,
} from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEditOutline } from "react-icons/md";

export function EditOptions() {
  const { editMenu } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed flex flex-col items-start right-[34.5rem] py-1 shadow-md opacity-0 -translate-y-2  rounded-md transition-all duration-200 w-[140px] text-[14px] 
                   
                    ${
                      editMenu
                        ? "translate-y-0 z-10 opacity-100"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
    >
      <button
        onClick={() => dispatch(setActiveEditingUserInfo(true))}
        className=" flex gap-2 items-center mt-2   cursor-pointer px-2 p-1 hover:bg-gray-100 w-full "
      >
        <MdOutlineModeEditOutline className="text-xl" />
        <p className="">Edit info</p>
      </button>

      <AddImageButton
        logo={
          <span className="flex gap-2 ">
            <HiOutlinePhoto className="text-[#136cc6] text-xl" />{" "}
            <p>Add photo</p>
          </span>
        }
        classname="w-full text-[14px] mt-2 cursor-pointer px-2 p-1 hover:bg-gray-100"
        setState={setuserImgSrc}
      />

      <button className=" flex gap-2 items-center mt-0.5 hover:text-red-700 cursor-pointer px-2 p-1 hover:bg-gray-100 w-full">
        <MdDelete className="text-xl" />
        <p className="text-red-500">Delete photo</p>
      </button>
    </div>
  );
}
