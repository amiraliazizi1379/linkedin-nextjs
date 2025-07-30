import { FcGoogle } from "react-icons/fc";
type props = {
  id?: string;
  className?: string;
};

export default function GoogleSignin({ id, className }: props) {
  return (
    <a
      id={id}
      href=""
      className={` hover:border-2 mt-4 border h-[42px] text-gray-500 hover:bg-gray-100 px-8 py-2 rounded-full w-full flex items-center justify-center gap-2 text-[1rem] font-semibold ${className}`}
    >
      <span className="text-[1.3rem] rounded-full  bg-[#ffff]">
        {" "}
        <FcGoogle />
      </span>

      <p>Continue with Google</p>
    </a>
  );
}
