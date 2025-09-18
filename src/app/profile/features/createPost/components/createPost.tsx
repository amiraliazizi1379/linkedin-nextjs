import { useUserContext } from "@/context/useContext";
import { createPostData } from "../../datas/createpostdata";
import UserImageComponent from "../../userImgComponent";

export default function CreatePost() {
  const { createPost, setCreatePost } = useUserContext();

  return (
    <section className="border-1 border-gray-300 p-2 w-[40vw] mx-auto mt-8 rounded-md bg-[#fff]">
      <article className="flex-center gap-2">
        <UserImageComponent style="w-[45px] h-[45px] text-xl" />
        <button
          onClick={() => {
            setCreatePost(true);
          }}
          className="font-semibold text-[13px] text-[#707070] mt-1 py-3 px-4 text-left w-[90%] cursor-pointer hover:bg-[#F1F1F1] rounded-full border-1 border-gray-300"
        >
          Start a post
        </button>
      </article>
      <div className="flex items-center justify-around mt-2">
        {createPostData.map((item, index) => {
          return (
            <button
              key={index}
              className={`flex items-center cursor-pointer text-[13px] gap-2 font-semibold hover:text-[#171717] hover:bg-gray-100 p-3.5 rounded-md `}
            >
              <span className={`text-2xl ${item.color}`}>{item.logo}</span>
              <p>{item.name}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
