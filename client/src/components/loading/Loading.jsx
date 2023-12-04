import React from 'react';
import "../loading/loading.css";


const Loading = () => {
  return (
    <div
      className={`flex justify-center bg-cover bg-center items-center min-h-screen min-w-screen`}
    >
      <div class="loader-container">
        <div class="loader"></div>
        <div class="loader-text">Loading...</div>
      </div>
    </div>
  );
}

export default Loading
