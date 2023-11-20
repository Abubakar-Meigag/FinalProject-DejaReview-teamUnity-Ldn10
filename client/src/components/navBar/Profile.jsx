import React from "react";
import image from "../../images/user.jpg";
import { FaUserGraduate } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

const Profile = ({ open }) => {
  return (
    <div className={`flex mt-[7rem] `}>
      <ul>
        <div>
          <li className="inline-flex mb-2">
            <img
              src={image}
              alt="user-img"
              className={`h-[45px] mr-2 cursor-pointer rounded-full border-2 border-sky-400`}
            />
            <h1
              className={`text-white origin-left font-semibold pt-3 cursor-pointer text-[15px] ${
                !open && "scale-0"
              } hover:text-fuchsia-400	`}
            >
              Profile
            </h1>
          </li>
        </div>

        <div>
          <li className="inline-flex">
            <FaUserGraduate
              className={`bg-amber-300 p-2 rounded cursor-pointer block float-left text-4xl mr-4 duration-500 ${
                !open && "ml-2"
              }
                `}
            />
            <h1
              className={`text-white origin-left font-semibold pt-1 cursor-pointer text-[15px] ${
                !open && "scale-0"
              } hover:text-fuchsia-400`}
            >
              User Name
            </h1>
          </li>
        </div>

        <div>
          <li className="inline-flex">
            <TbLogout
              className={`bg-amber-300 p-2 rounded cursor-pointer block float-left text-4xl mr-4 duration-500 ${
                !open && "ml-2"
              }
               `}
            />
            <h1
              className={`text-white origin-left font-semibold pt-3 cursor-pointer text-[15px] ${
                !open && "scale-0"
              } hover:text-fuchsia-400`}
            >
              Sing Out
            </h1>
          </li>
        </div>

        
      </ul>
    </div>
  );
};

export default Profile;
