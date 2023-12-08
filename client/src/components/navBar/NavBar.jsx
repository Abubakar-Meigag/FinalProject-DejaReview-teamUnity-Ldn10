import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";

const NavBar = ({ open }) => {
  return (
    <div className="flex mt-16">
      <ul>
        <div>
          <li className="inline-flex">
            <Link to="/">
              <MdDashboardCustomize
                style={{ color: "#f7f4d2" }}
                className={`bg-base-200 p-1 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-4xl" : "text-4xl"
                }
              `}
              />
            </Link>
            <Link
              to="/"
              className={`text-white origin-left font-semibold text-[20px] cursor-pointer hover:underline hover:text-pink-200  ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </Link>
          </li>
        </div>

        <div>
          <li className="inline-flex mt-3">
            <Link to="/AllModulesPage">
              <LuClipboardEdit
                style={{ color: "#f7f4d2" }}
                className={`bg-base-200 p-1 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-4xl" : "text-4xl"
                }
                `}
              />
            </Link>
            <Link
              to="/AllModulesPage"
              className={`text-white origin-left font-semibold text-[20px] cursor-pointer hover:underline hover:text-pink-200  ${
                !open && "scale-0"
              }`}
            >
              CYF Topics
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
