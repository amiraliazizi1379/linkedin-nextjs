import { RootState } from "@/redux/store";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";

export default function PostEditOptions() {
  const { postEditOptions } = useSelector((state: RootState) => state.app);
  if (postEditOptions) {
    return (
      <div
        className={`fixed flex flex-col items-start right-[30rem] py-1 shadow-md rounded-md transition-all duration-200 w-[230px] text-[14px] 
                   
                    ${
                      postEditOptions
                        ? "translate-y-0 z-50 opacity-100"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
      >
        <button
          //onClick={() => dispatch(set(true))}
          className=" flex gap-2 items-center mt-2   cursor-pointer px-2 p-1 hover:bg-gray-100 w-full "
        >
          <MdOutlineModeEditOutline className="text-xl" />
          <p className="">Edit info</p>
        </button>
        <button
          // onClick={() => {}}
          className=" flex gap-2 items-center mt-0.5 hover:text-red-700 cursor-pointer px-2 p-1 hover:bg-gray-100 w-full"
        >
          <MdDelete className="text-xl" />
          <p>Delete photo</p>
        </button>
      </div>
    );
  }
}
