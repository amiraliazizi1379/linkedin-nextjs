import { RootState, setPostBt, setPostText } from "@/app/redux/store";
import {  useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export function PostTextArea() {
  const dispatch = useDispatch();
  const { postText} = useSelector((state: RootState) => state.app);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = "auto"; // reset
      textRef.current.style.height = textRef.current.scrollHeight + "px"; // تغییر ارتفاع بر اساس متن
    }
  }, [postText]);

  return (
    <textarea
      className="w-full  text-xl text-[#464646] mt-10 outline-none resize-none"
      placeholder="What do you want to talk about?"
      ref={textRef}
      value={postText}
      onChange={(e) => {
        dispatch(setPostText(e.target.value));
        if (e.target.value === "") {
          dispatch(setPostBt(false));
        } else {
          dispatch(setPostBt(true));
        }
      }}
    ></textarea>
  );
}
