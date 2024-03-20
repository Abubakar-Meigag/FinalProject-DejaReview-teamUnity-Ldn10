import React from "react";
import ReactPlayer from "react-player";

function Demo() {
  return (
    <div className="flex items-start pt-9  justify-center bg-pink-950 min-h-screen">
      <div className="max-w-lg px-4 py-8 text-neutral-content">
        <h1 className="mb-6 text-3xl font-bold text-left">
          How to use the app?
        </h1>
        <div className="text-md text-left mb-6">
          <ul>
            <li>
              - How to add CYF topic to your dashboard? How to discover the
              topic description? & How to review the topic?
            </li>
            <li>
              - How to create a new topic from CYF modules? How to add it into
              your dashboard? & How to review the topic?
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold underline pb-4">Watch the Video:</h2>
          <div className="flex justify-center">
            <ReactPlayer
              controls={true}
              url="https://www.youtube.com/watch?v=efXxTET5J40"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
