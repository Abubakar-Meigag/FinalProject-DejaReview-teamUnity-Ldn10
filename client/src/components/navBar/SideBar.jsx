import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import NavigationLinks from "./NavigationLinks";
import UsersInfoAndSignOut from "./UsersInfoAndSignOut";
import "../navBar/navBar.css";

const SideBar = ({ session }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-full ">
      <aside className="h-screen  sticky top-0 ">
        <div
          className={` bg-coral h-screen p-5 pt-8 side-container 
            ${open ? "w-[15rem]" : "w-24"} duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-coral text-2xl rounded-full absolute -right-3 top-9 border-solid border-coral cursor-pointer
          ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex flex-col">
            <div
              className={` text-white rounded cursor-pointer block float-left mr-4 text-[#fffff] text-2xl font-bold duration-500 ${open}`}
            >
              DEJA
            </div>
            <h1
              className={`text-white origin-left font-semibold  text-[15px] duration-500 ${
                !open && "scale-0"
              }`}
            >
              Spaced Repetition
            </h1>
          </div>

          <div
            className={`flex item-center rounded-md bg-base-100 mt-6 
          ${!open ? "p-2.5" : "p-4"} py-2`}
          >
            <BsSearch
              className={`text-black text-lg block float-left mb-1 cursor-pointer mr-2
            ${open && "mt-2"}`}
            />

            <input
              type={"search"}
              placeholder="Search..."
              className={`bg-base-100 w-full text-black focus:outline-none ${
                !open && "hidden"
              }`}
            />
          </div>

          <div className="">
            <div>
              <NavigationLinks open={open} setOpen={setOpen} />
            </div>

            <div>
              <UsersInfoAndSignOut
                open={open}
                setOpen={setOpen}
                session={session}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
