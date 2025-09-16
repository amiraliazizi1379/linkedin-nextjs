import { ReactElement } from "react";

export default function FormOptions() : ReactElement{

    return (
        <>
         <div className="flex ml-0 mt-4">
          <a
            href=""
            className="text-[#0a66c2]  hover:underline hover:bg-[#daedff] px-2 py-1 rounded-full"
          >
            Forgot password?
          </a>
        </div>
        <article className="flex mt-2">
          <input type="checkbox" className="w-[1.2rem] mr-2 " />
          <h1>Keep me logged in</h1>
        </article>
        </>
    )
}