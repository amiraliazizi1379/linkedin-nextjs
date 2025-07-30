import { FcGoogle } from "react-icons/fc";
import GoogleSignin from "../../components/googleSignin";
import "./home.css";
export default function LoginOptions() {
  return (
    <div
      id="login-container"
      className="flex flex-col  gap-5  ml-[9.6rem] mt-8 w-[28vw]"
    >
      <GoogleSignin id="google-logo" className="bg-[#0a66c2] text-[#fff]" />

      <a href="">
        <img src="microsoft.png" alt="" className="w-[1.3rem]" />
        <h1>Continue with Microsoft</h1>
      </a>
      <a href="/login">Sign in with email</a>
      <p
        id="notice-container"
        className="text-center text-[12px] text-gray-600"
      >
        By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
        <a href="https://www.linkedin.com/legal/user-agreement?trk=linkedin-tc_auth-button_user-agreement">
          User Agreement
        </a>{" "}
        ,{" "}
        <a href="https://www.linkedin.com/legal/privacy-policy?trk=linkedin-tc_auth-button_privacy-policy">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="https://www.linkedin.com/legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy">
          Cookie Policy
        </a>
      </p>
    </div>
  );
}
