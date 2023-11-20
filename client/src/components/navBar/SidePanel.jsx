import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
// import { AiFillBell } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";


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
      </div>
    </div>
  );
}

export default SidePanel