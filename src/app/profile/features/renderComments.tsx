import { commentDataType } from "@/types/commentDataType";
import UserImageComponent from "./components/userImgComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  setFullScreenSrc,
  setLargImg,
  setPostData,
} from "@/redux/store";
import Image from "next/image";

export function RenderComments({
  commentData,
}: {
  commentData: commentDataType[];
}) {
  const dispatch = useDispatch();
  const { postData } = useSelector((state: RootState) => state.app);
  return (
    <section className="mt-8">
      {commentData &&
        commentData.map((post) => {
          const {
            comment_id,
            post_id,
            content,
            image_url,
            name,
            image,
            email,
            bio,
            readMore,
          } = post;
          return (
            <div key={comment_id} className="ml-5.5 mt-4 pb-4">
              <article className="flex gap-4 items-center">
                <UserImageComponent
                  style="w-[40px] h-[40px] text-md"
                  name={name}
                  image={image}
                  email={email}
                />
                <div>
                  <h1 className="font-semibold">{name ? name : email}</h1>
                  <p className="text-[14px] text-gray-400">{bio}</p>
                </div>
              </article>
              <p className="p-4">
                {readMore ? content : content.substring(0, 100)}
                {!readMore && content.length > 50 && (
                  <button
                    className="text-[14px] hover:text-[#0a66c2] cursor-pointer"
                    onClick={() => {
                      const updatedData = commentData.map((itm) =>
                        itm.comment_id === comment_id
                          ? { ...itm, readMore: true }
                          : itm
                      );
                      const updatedPostData = postData.map((post) =>
                        post.post_id === post_id ? updatedData : post
                      );
                      dispatch(setPostData(updatedPostData));
                    }}
                  >
                    ...more
                  </button>
                )}
              </p>
              {image_url && (
                <Image
                  onClick={() => {
                    dispatch(setLargImg(true));
                    dispatch(setFullScreenSrc(image_url));
                  }}
                  src={image_url}
                  alt=""
                  className="w-[50%] h-[150px] mt-2 cursor-pointer"
                />
              )}
            </div>
          );
        })}
    </section>
  );
}
