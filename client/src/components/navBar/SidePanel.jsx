import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";


const SidePanel = () => {
    const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-auto p-5 pt-8 
            ${open ? "w-[19rem]" : "w-24"} duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-solid border-dark-purple cursor-pointer
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <AiFillBell
            className={`bg-amber-300 p-2 text-7xl rounded cursor-pointer block float-left mr-4 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-semibold pt-6 text-[15px] duration-300 ${
              !open && "scale-0"
            }`}
          >
            CYF Spaced Repetition
          </h1>
        </div>


      </div>
    </div>
  );
}

export default SidePanel