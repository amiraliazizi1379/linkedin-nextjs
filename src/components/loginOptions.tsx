import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

type props = {
  id?: string;
  className?: string;
  apple?: boolean;
  textcolor: string;
};

export default function LoginOptions({
  id,
  className,
  apple,
  textcolor,
}: props) {
  return (
    <main className="flex flex-col gap-5 ">
      <a id={id} href="" className={className}>
        <span
          className={`text-[1.3rem] rounded-full  bg-[#ffff] ${
            textcolor === "text-white" && "px-[0.5rem] py-[0.5rem]"
          } `}
        >
          {" "}
          <FcGoogle />
        </span>

        <p className={textcolor}>Continue with Google</p>
      </a>
      {apple ? (
        <a
          href=""
          className="text-gray-700 flex-center login-button hover:bg-[#F1F1F1]"
        >
          <FaApple className="text-[1.5rem] text-[#171717]" />

          <h3 className="text-gray-500 font-semibold">Sign in with Apple</h3>
        </a>
      ) : (
        <a
          href=""
          className=" text-gray-700 flex-center login-button hover:bg-[#F1F1F1]"
        >
          <img src="microsoft.png" alt="" className="w-[1.3rem]" />
          <p>Continue with Microsoft</p>
        </a>
      )}
    </main>
  );
}
