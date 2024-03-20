import React from "react";
import { TbLogout } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const Profile = ({ open }) => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  const handelLogout = () => {
    logout();
  };

  if (isLoading) {
    return <div>{<Loading />}</div>;
  }

  return (
    isAuthenticated && (
      <div className={`flex mt-[16rem]`}>
        <ul>
          <div>
            <li className="inline-flex mb-2">
            <Link
                to="/profilePage">
              <img
                src={user.picture}
                alt="user-img"
                className={`h-[35px] mr-2 cursor-pointer rounded-md border-2 border-sky-400 `}
              />
              </Link>
              <Link
                to="/profilePage"
                className={`text-white origin-left font-semibold pt-3 cursor-pointer text-[15px] ${
                  !open && "hidden"
                } hover:text-pink-200`}
              >
                {user.name}
              </Link>
            </li>
          </div>

          <div>
            <li className="inline-flex">
              <TbLogout
                style={{ color: "#f7f4d2" }}
                className={`bg-purple-600 p-2 rounded cursor-pointer  float-left text-4xl mr-2 duration-500 ${
                  !open && "text-4xl"
                }`}
                onClick={handelLogout}
              />
              <h2
                className={`text-white origin-left font-semibold pt-2 cursor-pointer text-[15px] ${
                  !open && "hidden"
                } hover:text-pink-200`}
                onClick={handelLogout}
              >
                Sign Out
              </h2>
            </li>
          </div>
        </ul>
      </div>
    )
  );
};

export default Profile;
