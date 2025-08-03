import LoginOptions from "@/components/loginOptions";
import Divider from "@/components/divider";
import SubmitButton from "@/components/submitButton";
import InputField from "@/components/inputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerType } from "@/validation/registerSchema";
import { useUserContext } from "@/context/useContext";
import RegisterOnSubmit from "../action";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({
    resolver: zodResolver(RegisterSchema),
    mode: "all",
  });

  const { showPassword } = useUserContext();

  return (
    <form
      onSubmit={handleSubmit(RegisterOnSubmit)}
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
