import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type props = {
  setPostText: Dispatch<SetStateAction<string>>;
  setPostBt: Dispatch<SetStateAction<boolean>>;
  postText: string;
};

export function PostTextArea({ setPostText, setPostBt, postText }: props) {
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
        setPostText(e.target.value);
        if (e.target.value === "") {
          setPostBt(false);
        } else {
          setPostBt(true);
        }
      }}
    ></textarea>
  );
}
