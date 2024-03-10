import React from "react";
import ReactPlayer from "react-player";

function Demo() {
  return (
    <div className="flex items-start  pl-7 pt-5 w-full bg-cover bg-pink-950 min-h-screen">
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lx">
          <h1 className="mb-2 text-2xl text-left font-bold">
            How to use the app?
          </h1>

          <div>
            <div className="w-[60rem] text-xl text-justify">
              <div className="">
                <p>
                  In the below Video you will discover: <br />
                  <h2>Part 1</h2>
                  <span>
                    How to add CYF topic to your dashboard?. How to discover the
                    topic desorption?. & How to review the topic?{" "}
                  </span>
                  <h2>Part 2</h2>
                  <span>
                    How to create new topic from CYF modules?. How to add it
                    into your dashboard?. & How to review the topic?{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <br />
          <span className=" mb-3 inline-block h-1 w-[800px] rounded bg-gray-300 "></span>

          <div className="">
            <h1 className="mb-2 text-3xl text-left font-bold underline">
              Watch this:
            </h1>

            <div className="flex justify-center items-center embed-responsive-item">
              <ReactPlayer url="https://www.youtube.com/watch?v=efXxTET5J40" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
