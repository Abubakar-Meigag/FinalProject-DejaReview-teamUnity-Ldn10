import React from "react";
import ReactPlayer from "react-player";

function Demo() {
  return (
    <div className="flex items-start pt-2  justify-center bg-secondary min-h-screen">
      <div className="w-10/12 px-4 py-8 text-neutral-content">
        <h1 className="mb-6 text-3xl font-bold text-left text-zinc-800">
          How to use the app?
        </h1>
        <div className="text-lg text-left mb-6 text-zinc-800">
          <ul>
            <li>
              - How to add CYF topic to your dashboard? How to discover the
              topic description? How to review the topic?
            </li>
            <li>
              - How to create a new topic from CYF modules? How to add it into
              your dashboard? How to review the topic?
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold underline pb-4 text-zinc-800">
            Watch the Video:
          </h2>
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
