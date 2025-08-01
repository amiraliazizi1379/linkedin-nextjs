import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

type props = {
  id?: string;
  className?: string;
  apple?: boolean;
};

export default function LoginOptions({ id, className, apple }: props) {
  return (
    <main >
      <a
        id={id}
        href=""
        className={` mt-4 border h-[42px] text-gray-500 hover:bg-gray-100  py-2 rounded-full w-full flex items-center justify-center gap-2 text-[1rem] font-semibold ${className}`}
      >
        <span className="text-[1.3rem] rounded-full  bg-[#ffff]">
          {" "}
          <FcGoogle />
        </span>

        <p>Continue with Google</p>
      </a>
      {apple ? (
        <a
          href=""
          className=" hover:border-2 mt-4 border h-[42px] text-gray-700 hover:bg-gray-100  py-2 rounded-full w-full flex items-center justify-center gap-2 text-[1rem] "
        >
          <FaApple className="text-[1.5rem] text-[#171717]" />

          <h3 className="text-gray-500 font-semibold">Sign in with Apple</h3>
        </a>
      ) : (
        <a href="" className=" mt-4 border h-[42px] text-gray-700 hover:bg-gray-100  py-2 rounded-full w-full flex  items-center justify-center gap-2 text-[1rem]">
          <img src="microsoft.png" alt="" className="w-[1.3rem]" />
          <p>Continue with Microsoft</p>
        </a>
      )}
    </main>
  );
}
