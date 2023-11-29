import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div
      className={`flex justify-start p-20 bg-cover bg-center items-start  h-screen w-full`}
    >
      <div className="flex justify-center items-center  text-black">
        {isAuthenticated && (
          <div className="card card-side bg-base-100 shadow-2xl border-solid border-gray-300 p-10">
            <figure>
              <img src={user.picture} alt={user.name} className="h-48" />
            </figure>
            <div className="card-body">
              <p className="card-title"> Name -  {user.name}</p>
              <p className="card-title">Email -  {user.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
