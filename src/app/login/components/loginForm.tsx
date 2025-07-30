"use client";
import { FaApple } from "react-icons/fa";
import InputField from "./inputField";
import { useUserContext } from "../../../context/useContext";
import GoogleSignin from "../../../components/googleSignin";
import FormOptions from "./formOptions";

export default function LoginForm() {
  const { showPassword } = useUserContext();
  return (
    <main>
      <form
        action=""
        className="h-[74vh] w-[25vw] p-6  shadow-xl mx-auto rounded-xl text-center"
      >
        <h1 className="font-bold text-3xl text-left">Sign in</h1>
        <GoogleSignin />
        <a
          href=""
          className=" hover:border-2 mt-4 border h-[42px] text-gray-700 hover:bg-gray-100 px-8 py-2 rounded-full w-full flex items-center justify-center gap-2 text-[1rem] "
        >
          <FaApple className="text-[1.5rem] text-[#171717]" />

          <h3 className="text-gray-500 font-semibold">Sign in with Apple</h3>
        </a>
        <div className="flex items-center mt-6 mx-auto gap-4 justify-center">
          <div className="border-t w-full border-gray-300"></div>
          <span>or</span>
          <div className="border-t w-full border-gray-300"></div>
        </div>

        <InputField id="email" label="Email or phone" />
        <InputField
          id="password-inp"
          label="Password"
          type={`${showPassword ? "text" : "password"}`}
        />
        <FormOptions />
        <button
          type="submit"
          className={` bg-[#0a66c2] hover:bg-[#06417c] w-full py-4 rounded-full mt-4 text-white cursor-pointer`}
        >
          Sign in
        </button>
      </form>
      <h1 className=" flex justify-center items-center mt-8 gap-2 text-gray-700">
        New to LinkedIn?
        <a
          href=""
          className="text-[#0a66c2] hover:underline hover:bg-[#daedff] px-2 py-1 rounded-full font-semibold text-[15px]"
        >
          Join now
        </a>
      </h1>
    </main>
  );
}
