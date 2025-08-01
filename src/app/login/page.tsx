import "./login.css";
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import LoginForm from "./components/loginForm";

export default function Login() {
  return (
    <main>
      <Logo className="text-[#0a66c2]  ml-10 mt-8 " />
      <LoginForm />
      <Footer />
    </main>
  );
}
