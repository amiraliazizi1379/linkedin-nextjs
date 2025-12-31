import { RootState, setPostData } from "@/redux/store";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import PostEditOptions from "./postEditOptions";

export function ThreeDotsOptions({
  item_id,
  activeItemOptions,
  sectionName = "post",
}: {
  item_id: number;
  activeItemOptions: boolean;
  sectionName?: string;
}) {
  const { postData } = useSelector((state: RootState) => state.app);
  let updatedPostData;
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        sectionName === "post"
          ? (updatedPostData = postData.map((post) =>
              post.post_id === item_id
                ? {
                    ...post,
                    activePostOptions: !post.activePostOptions,
                  }
                : post
            ))
          : (updatedPostData = postData.map((post) =>
              post.commentData.map((cmnt) =>
                cmnt.comment_id === item_id
                  ? { ...cmnt, activeCommentOption: !cmnt.activeCommentOption }
                  : cmnt
              )
            ));
        dispatch(setPostData(updatedPostData));
      }}
      className="text-2xl custom-side-bt relative"
    >
      <BsThreeDots />

      {activeItemOptions && (
        <div
          className="fixed inset-0  opacity-0 "
          onClick={() => {
            sectionName === "post"
              ? (updatedPostData = postData.map((post) =>
                  post.post_id === item_id
                    ? {
                        ...post,
                        activePostOptions: false,
                      }
                    : post
                ))
              : (updatedPostData = postData.map((post) =>
                  post.commentData.map((cmnt) =>
                    cmnt.comment_id === item_id
                      ? { ...cmnt, activeCommentOption: false }
                      : cmnt
                  )
                ));
            dispatch(setPostData(updatedPostData));
          }}
        ></div>
      )}
      <PostEditOptions active={activeItemOptions} />
    </button>
  );
}
