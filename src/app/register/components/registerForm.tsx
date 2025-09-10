"use client";
import LoginOptions from "@/components/loginOptions";
import Divider from "@/components/divider";
import SubmitButton from "@/components/submitButton";
import InputField from "@/components/inputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//import { RegisterSchema, registerType } from "@/validation/registerSchema";
import { useUserContext } from "@/context/useContext";
import { RegisterOnSubmit } from "../action";
import { loginSchema, loginType } from "@/validation/loginSchema";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

export default function RegisterForm(): ReactElement {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const {showPassword} = useUserContext();

  const router = useRouter();
  const OnSubmit = async (data: loginType): Promise<void> => {
  const result = await RegisterOnSubmit(data, setError);

    if (result) {
      const route = String(result.insertId);
      router.push(`/profile/${route}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(OnSubmit)}
      className=" p-6 shadow-xl mx-auto rounded-xl pb-8 text-center max-[480px]:w-[95vw] max-[550px]:w-[80vw] max-[640px]:w-[70vw] max-[780px]:w-[60vw] max-[1023px]:w-[50vw] min-[1023px]:w-[28vw]"
    >
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

      <SubmitButton name="Agree and Join" className="mt-12 py-3 " />
      <Divider />
      <LoginOptions className="hover:bg-[#F1F1F1] mt-4 bg-[#ffff] text-gray-500" />
    </form>
  );
}
