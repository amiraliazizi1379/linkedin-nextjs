import { setDeleteVerification } from "@/redux/store";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function PostEditOptions({
  active,
  postId,
}: {
  active: boolean;
  postId: number;
}) {
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
        //onClick={() => dispatch(set(true))}
        className=" flex gap-2 items-center mt-2 cursor-pointer  p-4 hover:bg-gray-100 w-full "
      >
        <MdOutlineModeEditOutline className="text-xl" />
        <p className="">Edit info</p>
      </button>
      <button
        onClick={() => {
          dispatch(setDeleteVerification(true));
        }}
        className=" flex gap-2 items-center mt-0.5 hover:text-red-700 cursor-pointer  p-4 hover:bg-gray-100 w-full"
      >
        <MdDelete className="text-xl" />
        <p>Delete photo</p>
      </button>
    </div>
  );
}
