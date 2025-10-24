import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

export function CloseButton({
  setCustomState,
}: {
  setCustomState: ActionCreatorWithPayload<boolean>;
}) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setCustomState(false))}
      className="text-3xl h-[40px] cursor-pointer rounded-full hover:bg-gray-100 p-1"
    >
      <IoMdClose />
    </button>
  );
}
