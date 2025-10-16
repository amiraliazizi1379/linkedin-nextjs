import { BsChatText } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import UserImageComponent from "../../components/userImgComponent";
import { RenderPostsServices } from "../services/renderpostsServices";
import { FaCheck } from "react-icons/fa6";
import { handleFollow } from "../services/handleFollow";
import { CommentComponent } from "./comment";
import { handleLikes } from "../services/handkelikes";
import { GetComments } from "../services/getcomment";
import { RenderComments } from "../../renderComments";
import { LargPreviewImg } from "./largPreviewImg";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  setLargImg,
  setFullScreenSrc,
} from "@/app/redux/store";

export default function RenderPosts({ userId }: { userId: string }) {
  const { postData, largImg } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();
  RenderPostsServices();
  console.log(largImg);
  if (largImg) {
    return <LargPreviewImg />;
  }
  return (
    <main className="">
      {postData.map((item) => {
        const {
          post_id,
          user_id,
          content,
          image_url,
          liked,
          is_following,
          comment,
          commentData,
          image,
          name,
          email,
        } = item;

        return (
          <div
            key={post_id}
            className="bg-[#fff] mt-2 w-[40vw] py-2  mx-auto rounded-lg  border-1 border-gray-200"
          >
            <div className="flex items-center justify-between mx-4 mt-2">
              <div className="flex gap-4">
                <UserImageComponent
                  style="w-[2.9rem] h-[2.9rem] text-xl"
                  name={name}
                  email={email}
                  image={image}
                />
                <h1>{name ? name : email}</h1>
              </div>
              {Number(userId) !== user_id && (
                <button
                  onClick={() =>
                    handleFollow(user_id, is_following)
                  }
                  className={`text-[#0a66c2] w-[105px] rounded-sm ${
                    !is_following && "hover:bg-[#dfeefd]  hover:text-[#033d77]"
                  } cursor-pointer h-[30px] py-2  font-semibold flex-center gap-1 ${
                    is_following && "bg-[#e4e4e4] text-[#171717]  w-[115px] "
                  }
               
                `}
                >
                  <span className={`text-lg `}>
                    {is_following ? <FaCheck /> : <FaPlus />}
                  </span>
                  {is_following ? "Following" : "Follow"}
                </button>
              )}
            </div>
            <p className="mt-4 ml-4">{content}</p>
            <img
              className="w-full object-cover mt-4 cursor-pointer"
              src={image_url}
              alt=""
              onClick={() => {
                dispatch(setLargImg(true));
                dispatch(setFullScreenSrc(image_url));
              }}
            />
            <div className="w-full h-[1px] mt-4 bg-gray-300"></div>
            <div className="space-x-14 mt-2 ml-6 mb-2  flex items-center">
              <button
                className={`post-bt flex-center`}
                onClick={() => {
                  handleLikes(post_id, liked);
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
                onClick={() => GetComments(post_id)}
                className="post-bt flex-center text-xl"
              >
                <BsChatText className=" " />
                <p className="text-[14px] font-semibold">comment</p>
              </button>
            </div>
            {comment && (
              <div>
                <CommentComponent postId={post_id} />
                <RenderComments commentData={commentData} />
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
