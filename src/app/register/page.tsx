import Footer from "@/components/footer";
import Logo from "@/components/logo";
import RegisterForm from "./components/registerForm";
import { ReactElement } from "react";

export default function Register() : ReactElement {
  return (
    <main className="min-h-screen">
      <Logo className="text-[#0a66c2] mt-6 ml-10  w-[140px]" />
      <h1 className="text-center text-3xl px-1.5 mt-4 mb-6">
        Make the most of your professional life
      </h1>
      <RegisterForm />
      <Footer />
    </main>
  );
}
