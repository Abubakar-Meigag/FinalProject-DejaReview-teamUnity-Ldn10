import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import NavBar from "./NavBar";
import Profile from "./Profile";
import "../navBar/navBar.css";

const SidePanel = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-full">
      <aside className="h-screen sticky top-0">
        <div
          className={`bg-main h-screen p-5 pt-8 side-container
            ${open ? "w-[15rem]" : "w-24"} duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-secondary text-coral text-2xl rounded-full absolute -right-3 top-9 border-solid border-coral cursor-pointer
          ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex flex-col">
            <div
              className={` text-secondary rounded cursor-pointer block float-left mr-4 text-[#fffff] text-2xl font-bold duration-500 ${open}`}
            >
              DEJA
            </div>
            <h1
              className={`text-secondary origin-left font-semibold  text-[15px] duration-500 ${
                !open && "scale-0"
              }`}
            >
              Spaced Repetition
            </h1>
          </div>

          <div
            className={`flex item-center rounded-md bg-secondary mt-6 
          ${!open ? "p-2.5" : "p-4"} py-2`}
          >
            <BsSearch
              className={`text-black text-lg block float-left mb-1 cursor-pointer mr-2
            ${open && "mt-2"}`}
            />

            <input
              type={"search"}
              placeholder="Search..."
              className={`bg-secondary w-full text-black focus:outline-none ${
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
