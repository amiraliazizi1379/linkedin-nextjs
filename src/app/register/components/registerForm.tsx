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

  const { showPassword, setAccesstoken } = useUserContext();
  const router = useRouter();
  const OnSubmit = async (data: loginType): Promise<void> => {
    const result = await RegisterOnSubmit(data, setAccesstoken, setError);
    if (result.success) {
      router.push("/newpage");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(OnSubmit)}
      className=" p-6 shadow-xl mx-auto rounded-xl text-center"
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
      <LoginOptions />
    </form>
  );
}
