import LoginOptions from "../../components/loginOptions";
import { data } from "./data/noticedata";

export default function LoginOptionsComponent() {
  return (
    <div className="flex flex-col gap-5  mt-8 w-[400px] max-[550px]:w-[90vw] max-[767px]:w-[60vw]">
      <LoginOptions className="hover:bg-[#0b7ae9] bg-[#0a66c2] text-[#fff] " />
      <a
        href="/login"
        className="flex-center login-button hover:bg-[#F1F1F1] font-bold text-[#6B6B6B] "
      >
        Sign in with email
      </a>
      <p className="text-center w-full max-[767px]:text-left text-[12px] text-gray-600 max-[767px]:text-[16px]">
        By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
        {data.map((item, index) => {
          return (
            <span key={index} className="text-gray-600">
              <a href={item.link} className="text-[#0a66c2] hover:underline">
                {item.name}
              </a>{" "}
              {index === 2 ? "." : ","}
            </span>
          );
        })}
      </p>
    </div>
  );
}
