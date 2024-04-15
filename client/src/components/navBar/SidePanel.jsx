import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
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
              className={`cursor-pointer block float-left mr-4 text-accent text-3xl font-bold duration-500 ${open}`}
            >
              DEJA
            </div>
            <h1
              className={`cursor-pointer block float-left mr-4 text-accent text-3xl font-bold duration-500 ${
                !open && "scale-0"
              }`}
            >
              REVIEW
            </h1>
          </div>
          <div className="flex flex-col gap-10">
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
