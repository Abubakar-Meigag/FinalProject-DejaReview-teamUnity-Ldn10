import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoDiamondSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import NavBar from "./NavBar";
import Profile from "./Profile";
import '../navBar/navBar.css'

const SidePanel = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-full">
      <aside className="h-screen sticky top-0">
        <div
          className={`bg-dark-purple h-screen p-5 pt-8 side-container
            ${open ? "w-[16rem]" : "w-20"} duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-solid border-dark-purple cursor-pointer
          ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="inline-flex">
            <IoDiamondSharp
              className={`bg-base-200 p-2 text-5xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-semibold  text-[15px] duration-300 ${
                !open && "scale-0"
              }`}
            >
              <span className="text-[#e63946] text-3xl font-extrabold text-shadow-[0_5px_9px_#f3f5f7] ">
                CYF
              </span>
              <br /> Spaced Repetition
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

          <div>
            <div className="nav-items">
              <NavBar open={open} setOpen={setOpen} />
            </div>

            <div>
              <Profile open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SidePanel;
