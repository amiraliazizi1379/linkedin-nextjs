"use client";
import { BsChatText } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import UserImageComponent from "../../components/userImgComponent";
import { FaCheck } from "react-icons/fa6";
import { handleFollow } from "../services/handleFollow";
import { CommentComponent } from "./comment";
import { handleLikes } from "../services/handkelikes";
import { GetComments } from "../services/getcomment";
import { RenderComments } from "../../renderComments";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import {
  RootState,
  setLargImg,
  setFullScreenSrc,
  store,
  setPostData,
} from "@/redux/store";
import Image from "next/image";
import PostEditOptions from "./postEditOptions";

export default function RenderPosts({ userId }: { userId: string }) {
  const { postData, notFoundSearch, postsSearch } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();

  if (notFoundSearch) return <h1 className="text-center mt-8">No Content</h1>;
  return (
    <main className="">
      {(postsSearch.length > 0 ? postsSearch : postData).map((item) => {
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
          like_count,
          comment_count,
          bio,
          readMore,
          activePostOptions,
        } = item;
        console.log(postData);
        return (
          <div
            key={post_id}
            className="bg-[#fff] mt-2 w-[40vw] py-2  mx-auto rounded-lg z-0 border-1 border-gray-200"
          >
            <div className="flex items-center justify-between mx-4 mt-2">
              <div className="flex gap-4">
                <UserImageComponent
                  style="w-[2.9rem] h-[2.9rem] text-xl"
                  name={name}
                  email={email}
                  image={image}
                />
                <div>
                  <h1 className="text-gray-700">{name ? name : email}</h1>
                  <p className="text-[14px] text-gray-400">{bio}</p>
                </div>
              </div>
              {Number(userId) !== user_id ? (
                <button
                  onClick={() => handleFollow(user_id, is_following)}
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
              ) : (
                <button
                  onClick={() => {
                    const updatedPostData = postData.map((post) =>
                      post.post_id === post_id
                        ? { ...post, activeOptions: !activePostOptions }
                        : post
                    );
                    dispatch(setPostData(updatedPostData));
                  }}
                  className="text-2xl custom-side-bt"
                >
                  <BsThreeDots />
                </button>
              )}
            </div>
            <PostEditOptions
              active={activePostOptions}
            />
            <p className="p-4">
              {readMore ? content : content.substring(0, 100)}
              {!readMore && content.length > 50 && (
                <button
                  className="text-[14px] hover:text-[#0a66c2] cursor-pointer"
                  onClick={() => {
                    const updatedData = postData.map((itm) =>
                      itm.post_id === post_id ? { ...itm, readMore: true } : itm
                    );
                    dispatch(setPostData(updatedData));
                  }}
                >
                  ...more
                </button>
              )}
            </p>
            <Image
              className="w-full object-cover mt-4 cursor-pointer"
              src={image_url}
              alt=""
              onClick={() => {
                store.dispatch(setLargImg(true));
                store.dispatch(setFullScreenSrc(image_url));
              }}
            />
            <div className="flex justify-between px-4 mt-1">
              <p>
                {like_count > 0 &&
                  `${like_count} ${like_count > 1 ? "likes" : "like"}`}
              </p>
              <p>
                {comment_count > 0 &&
                  `${comment_count} ${
                    comment_count > 1 ? "comments" : "comment"
                  }`}
              </p>
            </div>
            <div className="w-full h-[1px] mt-1 bg-gray-300"></div>
            <div className="mt-2 mb-2 flex justify-around items-center">
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
      {/* <PostEditOptions /> */}
    </main>
  );
}
