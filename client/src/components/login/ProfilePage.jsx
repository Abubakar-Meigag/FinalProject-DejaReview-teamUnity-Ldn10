import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

    const storeUserInfo = async () => {
      try {
        if (user) {
          const userData = {
            name: user.given_name || user.name || "DefaultName",
            email: user.email || "DefaultEmail@example.com",
            picture: user.picture || "default-profile-picture-url",
            sub: user.sub,
          };

          // const url = "https://deja-review-backend.onrender.com/storeUserInfo";
          const url = "hhttp://localhost:5005/storeUserInfo";

          const response = await axios.post(url, userData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status < 200 || response.status >= 300) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = response.data;
          console.log(data);
        } else {
          console.log("Error storing user: 'user' is undefined");
        }
      } catch (error) {
        console.log("Error storing user:", error);
      }
    };

    storeUserInfo();

  return (
    <div
      className={`flex  justify-start p-20 bg-cover bg-center items-start  h-screen w-full`}
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
