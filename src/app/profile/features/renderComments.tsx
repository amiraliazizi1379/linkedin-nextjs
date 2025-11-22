import { commentDataType } from "@/types/commentDataType";
import UserImageComponent from "./components/userImgComponent";
import { useDispatch } from "react-redux";
import { setFullScreenSrc, setLargImg } from "@/redux/store";

export function RenderComments({
  commentData,
}: {
  commentData: commentDataType[];
}) {
  const dispatch = useDispatch();
  return (
    <section className="mt-8">
      {commentData &&
        commentData.map((post) => {
          const { comment_id, content, image_url, name, image, email } = post;
          return (
            <div key={comment_id} className="ml-5.5 mt-4 pb-4">
              <article className="flex gap-4 ">
                <UserImageComponent
                  style="w-[40px] h-[40px] text-md"
                  name={name}
                  image={image}
                  email={email}
                />
                <h1 className="font-semibold">{name ? name : email}</h1>
              </article>
              <p className="text-md mt-2 ml-10"> {content}</p>
              {image_url && (
                <img
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
