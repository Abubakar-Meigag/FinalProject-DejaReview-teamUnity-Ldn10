import React from "react";
import { TbLogout } from "react-icons/tb";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Link } from "react-router-dom";

const UsersInfoAndSignOut = ({ open, session }) => {
  const supabase = useSupabaseClient();

  const userMetadata = session.user.user_metadata;

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <div className={`flex mt-[16rem]`}>
      <ul>
        <div>
          <li className="inline-flex mb-2">
            <img
              src={userMetadata.avatar_url}
              alt="user-img"
              className={`h-[35px] mr-2 cursor-pointer rounded-md border-2 border-sky-400 `}
            />
            <Link
              to="/profilePage"
              className={`text-secondary origin-left font-semibold pt-3 cursor-pointer text-[15px] ${
                !open && "hidden"
              } hover:text-lightBlue`}
            >
              {userMetadata.full_name}
            </Link>
          </li>
        </div>

        <div>
          <li className="inline-flex">
            <TbLogout
              style={{ color: "#ffffff" }}
              className={`bg-modules p-2 rounded cursor-pointer  float-left text-4xl mr-2 duration-500 ${
                !open && "text-4xl"
              }`}
              onClick={signOut}
            />
            <div
              className={`text-secondary origin-left font-semibold pt-2 cursor-pointer text-[15px] ${
                !open && "hidden"
              } hover:text-lightBlue`}
              onClick={signOut}
            >
              Sign Out
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default UsersInfoAndSignOut;
