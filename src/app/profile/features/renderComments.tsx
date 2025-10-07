import { commentDataType } from "@/context/useContext";
import UserImageComponent from "./components/userImgComponent";

export function RenderComments({
  commentData,
}: {
  commentData: commentDataType[];
}) {
  return (
    <section>
      {commentData && commentData.map((post) => {
        const { id, content , image_url , user_id } = post;
        return (
          <div key={id} className="ml-6 pb-4">
            <article className="flex gap-4 ">
            <UserImageComponent style="w-[30px] h-[30px] text-md"/>
            <h1>{user_id}</h1>
            </article>
            <p className="text-md mt-2 ml-10"> {content}</p>
            { image_url && <img src={image_url} alt=""  className="w-[50%] h-[150px] mt-2"/>}
          </div>
        );
      })}
    </section>
  );
}
