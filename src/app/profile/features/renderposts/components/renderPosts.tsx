import { BsChatText } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import UserImageComponent from "../../userImgComponent";
import { RenderPostsServices } from "../services/renderpostsServices";
import { FaCheck } from "react-icons/fa6";

import { useState } from "react";
import { CommentComponent } from "./comment";

export default function RenderPosts() {
  const action = RenderPostsServices();
  const [comment, setCommetn] = useState(false);
  return (
    <main className="">
      {action.data.map((item) => {
        const { post_id, user_id, content, image_url, liked, is_following } =
          item;

        return (
          <div
            key={post_id}
            className="mt-6 w-[40vw] py-2  mx-auto rounded-lg shadow-lg border-1 border-gray-200"
          >
            <div className="flex items-center justify-between mx-4 mt-2">
              <UserImageComponent style="w-[2.9rem] h-[2.9rem] text-xl" />
              <button
                onClick={() => action.handleFollow(user_id, is_following)}
                className={`text-[#0a66c2] w-[105px] rounded-sm ${
                  !is_following && "hover:bg-[#dfeefd]  hover:text-[#033d77]"
                } cursor-pointer h-[30px] py-2  font-semibold flex-center gap-1 ${
                  is_following && "bg-[#e4e4e4] text-[#171717]  w-[115px] "
                }`}
              >
                <span className={`text-lg `}>
                  {is_following ? <FaCheck /> : <FaPlus />}
                </span>
                {is_following ? "Following" : "Follow"}
              </button>
            </div>
            <p className="mt-4 ml-4">{content}</p>
            <img className="w-full object-cover mt-4 " src={image_url} alt="" />
            <div className="w-full h-[1px] mt-4 bg-gray-400"></div>
            <div className="space-x-14 mt-2 ml-6 mb-2  flex items-center">
              <button
                className={`post-bt flex-center`}
                onClick={() => {
                  action.handleLikes(post_id, liked);
                }}
              >
                <BiSolidLike
                  className={`scale-x-[-1] w-[22px] h-[22px] ${
                    liked && "  p-1  rounded-full text-[#fff] bg-[#0a66c2]"
                  }`}
                />
                <p
                  className={`text-[14px] font-semibold ${
                    liked && "text-[#0a66c2]"
                  } `}
                >
                  Like
                </p>
              </button>
              <button
                onClick={() => setCommetn(true)}
                className="post-bt flex-center text-xl"
              >
                <BsChatText className=" " />
                <p className="text-[14px] font-semibold">comment</p>
              </button>
            </div>
            {comment && <CommentComponent />}
          </div>
        );
      })}
    </main>
  );
}
