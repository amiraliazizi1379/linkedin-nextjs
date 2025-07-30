import  "./home/home.css";
import LoginOptions from "./home/LoginOptions";
import NavBar from "./home/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />

      <article id="body" className="flex w-[100%]">
        <section>
          <h1 className="text-[48px] text-[#526a6e] w-[70%] ml-[9.6rem] mt-[4rem]">
            Welcome to your professional community
          </h1>
          <LoginOptions />
        </section>
        <img src="home.svg" alt="" className="w-[47vw] mt-[4rem] mx-auto" />
      </article>
    </main>
  );
}
