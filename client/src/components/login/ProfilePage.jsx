import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

  

  return (
    <div
      className={`flex  justify-center bg-cover bg-center items-center h-screen w-full`}
    >
      <div className="flex justify-center items-center  text-black">
        {isAuthenticated && (
          <div className="flex min-h-screen items-center justify-center">
            <div className="w-96 h-72 flex flex-col justify-center items-center rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
              <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <img
                src={user.picture}
                alt="user-img"
                className={`h-[75px] cursor-pointer rounded-full border-2 border-sky-400`}
              />;
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                <figcaption className="sr-only">John Doe, Web Developer</figcaption>
              </figure>
              <h2 className="mt-4 text-xl font-bold text-sky-200 dark:text-sky-300">
                {user.name}
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{user.email}</p>
              <div className="flex items-center justify-center"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
