type props = {
  postBt: boolean;
  srcImg: string;
  handlePost: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PostAction({ handlePost, postBt, srcImg }: props) {
  return (
    <div
      className={`flex items-center gap-4 justify-end border-t-1 border-gray-300 w-full pt-4 ${
        srcImg && "mt-10"
      }`}
    >
      <button
        onClick={(e) => handlePost(e)}
        className={`${
          postBt || srcImg
            ? "bg-[#0a66c2] text-[#fff] hover:bg-[#0f467c] cursor-pointer"
            : "bg-gray-200 text-gray-400  cursor-not-allowed"
        } rounded-full   py-1 px-4  text-sm font-semibold `}
      >
        Post
      </button>
    </div>
  );
}
