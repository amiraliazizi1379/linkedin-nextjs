import { RootState, setPostData } from "@/redux/store";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import PostEditOptions from "./postEditOptions";
import { PostDeleteVerificationComponent } from "./deleteVerification";

export function ThreeDotsOptions({
  postId,
  commentId,
  activeItemOptions,
  sectionName = "Post",
}: {
  postId: number;
  commentId?: number;
  activeItemOptions: boolean;
  sectionName?: string;
}) {
  const { postData, deleteVerfication } = useSelector(
    (state: RootState) => state.app
  );
  let updatedPostData;
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        sectionName === "Post"
          ? (updatedPostData = postData.map((post) =>
              post.post_id === postId
                ? {
                    ...post,
                    activePostOptions: !post.activePostOptions,
                  }
                : post
            ))
          : (updatedPostData = postData.map((post) =>
              post.post_id === postId
                ? {
                    ...post,
                    commentData: post.commentData.map((cmnt) =>
                      cmnt.comment_id === commentId
                        ? {
                            ...cmnt,
                            activeCommentOption: !cmnt.activeCommentOption,
                          }
                        : cmnt
                    ),
                  }
                : post
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
            sectionName === "Post"
              ? (updatedPostData = postData.map((post) =>
                  post.post_id === postId
                    ? {
                        ...post,
                        activePostOptions: false,
                      }
                    : post
                ))
              : (updatedPostData = postData.map((post) =>
                  post.post_id === postId
                    ? {
                        ...post,
                        commentData: post.commentData.map((cmnt) =>
                          cmnt.comment_id === commentId
                            ? {
                                ...cmnt,
                                activeCommentOption: false,
                              }
                            : cmnt
                        ),
                      }
                    : post
                ));
            dispatch(setPostData(updatedPostData));
          }}
        ></div>
      )}
      <PostEditOptions active={activeItemOptions} section={sectionName} />
      {deleteVerfication && (
        <PostDeleteVerificationComponent section={sectionName} />
      )}
    </button>
  );
}
