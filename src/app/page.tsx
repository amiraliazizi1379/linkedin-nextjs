import Image from "next/image";
import LoginOptionsComponent from "./home/LoginOptionsComponent";
import NavBar from "./home/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <article className="flex items-center w-[100%] max-[767px]:flex max-[990px]:flex-col">
        <section className="flex flex-col items-center ml-20">
          <h1 className="text-[48px]  text-[#526a6e] ml-12 w-[510px]  max-[433px]:w-[85%] max-[560px]:w-[80vw] max-[767px]:text-[1.8rem] max-[1023px]:mt-[1.5rem]">
            Welcome to your professional community
          </h1>
          <LoginOptionsComponent />
        </section>
        <Image
          src="home.svg"
          alt=""
          className="w-[47vw] mt-[4rem] ml-auto max-[640px]:w-[80vw]"
        />
      </article>
    </main>
  );
}
