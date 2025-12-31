import { RootState, setPostData } from "@/redux/store";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import PostEditOptions from "./postEditOptions";

export function ThreeDotsOptions({
  post_id,
  activePostOptions,
}: {
  post_id: number;
  activePostOptions: boolean;
}) {
  const { postData } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <button
        onClick={() => {
          const updatedPostData = postData.map((post) =>
            post.post_id === post_id
              ? {
                  ...post,
                  activePostOptions: !post.activePostOptions,
                }
              : post
          );
          dispatch(setPostData(updatedPostData));
        }}
        className="text-2xl custom-side-bt"
      >
        <BsThreeDots />
      </button>

      {activePostOptions && (
        <div
          className="fixed inset-0  opacity-0 "
          onClick={() => {
            const newPostData = postData.map((post) =>
              post.post_id === post_id
                ? {
                    ...post,
                    activePostOptions: false,
                  }
                : post
            );
            dispatch(setPostData(newPostData));
          }}
        ></div>
      )}
      <PostEditOptions active={activePostOptions} />
    </div>
  );
}
