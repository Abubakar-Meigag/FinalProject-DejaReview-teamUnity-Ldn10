import React from "react";

const ProfilePage = ({ session }) => {
  const userMetadata = session.user.user_metadata;

  return (
    <div
      className={`flex justify-start p-20 bg-cover bg-center items-start  h-screen w-full`}
    >
      <div className="flex justify-center items-center  text-black">
        {session && (
          <div className="card card-side bg-gray-50 shadow-2xl border-solid border-gray-400 p-10">
            <figure>
              <img
                src={userMetadata.avatar_url}
                alt={userMetadata.name}
                className="h-48"
              />
            </figure>
            <div className="card-body">
              <p className="card-title"> Name - {userMetadata.full_name}</p>
              <p className="card-title">Email - {userMetadata.full_name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
