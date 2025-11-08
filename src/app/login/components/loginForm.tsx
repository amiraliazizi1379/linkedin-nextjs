"use client";

import InputField from "../../../components/inputField";
import FormOptions from "./formOptions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@/validation/loginSchema";
import Divider from "@/components/divider";
import SubmitButton from "@/components/submitButton";
import LoginOptions from "@/components/loginOptions";
import { LoginOnSubmit } from "../services/handleLogin";
import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function LoginForm(): ReactElement {
  const { showPassword, loginLoading } = useSelector(
    (state: RootState) => state.app
  );

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
        className="min-h-[82vh] p-8 shadow-xl mx-auto rounded-xl text-center max-[480px]:w-[95vw] max-[550px]:w-[80vw] max-[640px]:w-[70vw] max-[780px]:w-[60vw] max-[1023px]:w-[50vw] min-[1023px]:w-[25vw]"
      >
        <h1 className="font-bold text-3xl text-left mb-6">Sign in</h1>
        <LoginOptions apple={true} className="hover:bg-[#F1F1F1]" />

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
        <SubmitButton
          name="Sign in"
          className="py-4 mt-8"
          loading={loginLoading}
        />
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
