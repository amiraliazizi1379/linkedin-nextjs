"use client";

import InputField from "../../../components/inputField";
import { useUserContext } from "../../../context/useContext";
import FormOptions from "./formOptions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@/validation/loginSchema";
import Divider from "@/components/divider";
import SubmitButton from "@/components/submitButton";
import LoginOptions from "@/components/loginOptions";
import { LoginOnSubmit } from "../action";

export default function LoginForm() {
  const { showPassword } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });
  return (
    <main>
      <form
        onSubmit={handleSubmit(LoginOnSubmit)}
        className="h-[80vh] w-[25vw] p-6  shadow-xl mx-auto rounded-xl text-center"
      >
        <h1 className="font-bold text-3xl text-left">Sign in</h1>
        <LoginOptions apple={true} />

        <Divider />
        <InputField
          id="email"
          register={register}
          name="email"
          error={errors.email?.message}
          label="Email or phone"
        />

        <InputField
          name="password"
          register={register}
          error={errors.password?.message}
          id="password-inp"
          label="Password"
          type={`${showPassword ? "text" : "password"}`}
        />
        <FormOptions />
        <SubmitButton name="Sign in" className="py-4 mt-4" />
      </form>
      <h1 className=" flex justify-center items-center mt-8 gap-2 text-gray-700">
        New to LinkedIn?
        <a
          href="/register"
          className="text-[#0a66c2] hover:underline hover:bg-[#daedff] px-2 py-1 rounded-full font-semibold text-[15px]"
        >
          Join now
        </a>
      </h1>
    </main>
  );
}
