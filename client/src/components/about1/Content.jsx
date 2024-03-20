import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import Demo from "./Demo";

function Content() {
  return (
    <div>
      <div className="flex items-center justify-center bg-secondary min-h-screen">
        <div className="max-w-lg px-4 py-8 text-neutral-content">
          <h1 className="mb-3 text-3xl text-zinc-800 font-bold text-left">
            What is DEJA Review app?
          </h1>
          <div className="text-md mb-2 text-justify text-zinc-800">
            <p>
              DEJA Review is an app utilising spaced repetition, a powerful
              learning technique. It serves as a reminder to revisit topics
              you've previously covered multiple times for review. The app
              addresses the common issue of forgetting information shortly after
              learning it, especially when not actively using or reviewing it.
              With DEJA, you can ensure that knowledge retention is optimized
              over time. For more information on spaced repetition,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Spaced_repetition"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                click here
              </a>
              {" "}or watch the video below.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold underline pb-5 text-zinc-800">
              Watch the Video:
            </h2>
            <div className="flex justify-center">
              <ReactPlayer
                controls={true}
                url="https://www.youtube.com/watch?v=osK0Agqu7dc"
                width="100%"
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link to="demo" smooth={true} duration={700}>
              <button className="btn bg-green hover:bg-main text-secondary">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div name="demo">
        <Demo />
      </div>
    </div>
  );
}

export default Content;
