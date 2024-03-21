import React from "react";
import { TbLogout } from "react-icons/tb";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Link } from "react-router-dom";

const UsersInfoAndSignOut = ({ open, session }) => {
  const supabase = useSupabaseClient();

  // const session = useSession();

  const userMetadata = session.user.user_metadata;

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <div className={`flex  ]`}>
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
              className={`text-white origin-left font-semibold pt-3 cursor-pointer text-[15px] ${
                !open && "scale-0"
              } hover:text-pink-200 	`}
            >
              {userMetadata.full_name}
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
              onClick={signOut}
            />
            <h1
              className={`text-white origin-left font-semibold pt-2 cursor-pointer text-[15px] ${
                !open && "scale-0"
              } hover:text-pink-200`}
              onClick={signOut}
            >
              Sign Out
            </h1>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default UsersInfoAndSignOut;
