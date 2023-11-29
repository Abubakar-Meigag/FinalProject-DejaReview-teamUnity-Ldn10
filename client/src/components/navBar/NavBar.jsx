import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const NavBar = ({ open }) => {
  
  return (
    <div className="flex mt-16">
      <ul>
        <div>
          <li className="inline-flex">
            <Link to="/">
              <MdDashboardCustomize
                className={`bg-amber-300 p-2 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-7xl" : "text-5xl"
                }
              `}
              />
            </Link>
            <Link
              to="/"
              className={`text-white origin-left font-semibold pt-3 text-[30px] cursor-pointer ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </Link>
            
          </li>
        </div>

        <div>
          <li className="inline-flex mt-3">
            <Link to="/">
              <LuClipboardEdit
                className={`bg-amber-300 p-2 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-7xl" : "text-5xl"
                }
                `}
              />
            </Link>
            <Link
              to="/AllModulesPage"
              className={`text-white origin-left font-semibold pt-3 text-[30px] cursor-pointer  ${
                !open && "scale-0"
              }`}
            >
              All Topics
            </Link>
          </li>
        </div>

        <div>
          <li className="inline-flex mt-3">
            <Link to="/management">
              <AiOutlineFundProjectionScreen
                className={`bg-amber-300 p-2 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-7xl" : "text-5xl"
                }
                    `}
              />
            </Link>
            <Link
              to="/management"
              className={`text-white origin-left font-semibold pt-3 text-[30px] cursor-pointer  ${
                !open && "scale-0"
              }`}
            >
              Management
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
