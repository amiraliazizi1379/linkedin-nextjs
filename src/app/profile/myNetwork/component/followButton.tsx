import { FaCheck } from "react-icons/fa";
import { handleFollow } from "../../features/renderposts/services/handleFollow";

export function FollowBtn({
  id,
  isfollowing,
}: {
  id: number;
  isfollowing: boolean;
}) {
  return (
    <button
      onClick={() => {
        handleFollow(id, isfollowing);
      }}
      className={`border-1 flex-center gap-1.5 border-[#0a66c2]   cursor-pointer hover:border-2 hover:bg-[#eaf4fd] h-[2rem] w-full mt-2 ${
        isfollowing
          ? "text-[#171717] border-[#171717] hover:bg-gray-100"
          : "text-[#0a66c2]"
      } text-[13px] font-semibold rounded-full`}
    >
      <span className={`${isfollowing ? "text-[12px] font-normal " : "text-2xl"} font-normal`}>
        {isfollowing ? <FaCheck /> : "+"}
      </span>
      {isfollowing ? "Following" : "Follow"}
    </button>
  );
}
