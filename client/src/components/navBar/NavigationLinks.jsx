import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { BsFillClipboardCheckFill } from "react-icons/bs";


const NavigationLinks = ({ open }) => {
  return (
    <div className="flex mt-16">
      <ul>
        
      <div>
          <li className="inline-flex">
            <Link to="/about">
              <BsFillClipboardCheckFill
                style={{ color: "#ffffff" }}
                className={`bg-modules p-2 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-4xl" : "text-4xl"
                }
              `}
              />
            </Link>
            <Link
              to="/about"
              className={`text-secondary origin-left font-semibold text-[20px] cursor-pointer hover:underline hover:text-lightBlue  ${
                !open && "scale-0"
              }`}
            >
              About
            </Link>
          </li>
        </div>

        <div>
          <li className="inline-flex">
            <Link to="/">
              <MdDashboardCustomize
                style={{ color: "#ffffff" }}
                className={`bg-modules p-1 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-4xl" : "text-4xl"
                }
              `}
              />
            </Link>
            <Link
              to="/"
              className={`text-secondary origin-left font-semibold text-[20px] cursor-pointer hover:underline hover:text-lightBlue  ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </Link>
          </li>
        </div>

        <div>
          <li className="inline-flex">
            <Link to="/AllModulesPage">
              <LuClipboardEdit
                style={{ color: "#ffffff" }}
                className={`bg-modules p-1 rounded cursor-pointer block float-left mr-4 duration-500 ${
                  open ? "text-4xl" : "text-4xl"
                }
              `}
              />
            </Link>
            <Link
              to="/AllModulesPage"
              className={`text-secondary origin-left font-semibold text-[20px] cursor-pointer hover:underline hover:text-lightBlue  ${
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

export default NavigationLinks;
