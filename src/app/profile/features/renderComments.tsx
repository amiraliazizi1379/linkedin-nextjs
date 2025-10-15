import { commentDataType } from "@/types/commentDataType";
import UserImageComponent from "./components/userImgComponent";

export function RenderComments({
  commentData,
}: {
  commentData: commentDataType[];
}) {
  return (
    <section className="mt-8">
      {commentData &&
        commentData.map((post) => {
          const {
            comment_id,
            content,
            image_url,
            user_id,
            name,
            image,
            email,
          } = post;
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
                  src={image_url}
                  alt=""
                  className="w-[50%] h-[150px] mt-2"
                />
              )}
            </div>
          );
        })}
    </section>
  );
}
