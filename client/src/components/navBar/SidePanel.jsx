import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import NavBar from './NavBar';
import Profile from './Profile';

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

        <div
          className={`flex item-center rounded-md bg-sky-900 mt-6 
          ${!open ? "p-2.5" : "p-4"} py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left mb-1 cursor-pointer mr-2
            ${open && "mt-2"}`}
          />

          <input
            type={"search"}
            placeholder="Search..."
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        <div className="nav-items">
          <NavBar open={open} setOpen={setOpen} />
        </div>

        <div>
          <Profile open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}

export default SidePanel