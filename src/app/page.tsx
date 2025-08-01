import  "./home/home.css";
import LoginOptionsComponent from "./home/LoginOptionsComponent";
import NavBar from "./home/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />

      <article id="body" className="flex w-[100%]">
        <section className="flex flex-col items-center">
          <h1 className="text-[48px] text-[#526a6e] w-[70%]  mt-[4rem]">
            Welcome to your professional community
          </h1>
          <LoginOptionsComponent />
        </section>
        <img src="home.svg" alt="" className="w-[47vw] mt-[4rem] mx-auto" />
      </article>
    </main>
  );
}
