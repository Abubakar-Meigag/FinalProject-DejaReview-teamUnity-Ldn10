import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();



  return (
    <div
      className={`flex  justify-center bg-cover bg-center items-center h-screen w-full`}>
      <div className="flex justify-center items-center  text-black">

        {isAuthenticated && (

          <div className="flex min-h-screen items-center justify-center">
            <div className="w-96 h-72 flex flex-col justify-center items-center rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
              <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">

              <img
                src={user.picture}
                alt="user-img"
                className={`h-[75px] cursor-pointer rounded-full border-2 border-sky-400`}
                />
                
              </figure>
              <h2 className="mt-4 text-3xl pb-3 font-bold text-sky-200 dark:text-sky-300">
                {user.name}
              </h2>

              <p className="mb-4 text-2xl text-gray-600 dark:text-gray-300">{user.email}</p>
              <div className="flex items-center justify-center"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
