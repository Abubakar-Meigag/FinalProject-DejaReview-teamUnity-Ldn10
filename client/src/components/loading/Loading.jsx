import React from "react";
import "../loading/loading.css";

const Loading = () => {
  return (
    <div
      className={`flex justify-center bg-secondary bg-cover bg-center items-center min-h-screen min-w-screen`}
    >
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
