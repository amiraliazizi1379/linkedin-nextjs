"use client";
import "./register.css";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import RegisterForm from "./components/registerForm";

export default function Register() {
  return (
    <main className="min-h-screen  ">
      <Logo className="text-[#0a66c2] mt-4 translate-x-16 text-3xl w-[10%]" />
      <h1 className="text-center text-3xl mt-4">
        Make the most of your professional life
      </h1>
      <RegisterForm />
      <Footer />
    </main>
  );
}
