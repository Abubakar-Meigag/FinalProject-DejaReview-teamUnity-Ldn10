import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import Demo from "./Demo";

function Content() {
  return (
    <div>
      <div className="flex items-center justify-center bg-pink-950 min-h-screen">
        <div className="max-w-lg px-4 py-8 text-neutral-content">
          <h1 className="mb-6 text-3xl font-bold text-left">
            What is Spaced Repetition?
          </h1>
          <div className="text-md mb-6 text-justify">
            <p>
              Spaced repetition is a learning technique that involves reviewing
              information at increasing intervals over time. Instead of cramming
              information all at once, spaced repetition spreads out review
              sessions, allowing for more effective retention of knowledge. This
              method is based on the psychological principle that spaced
              intervals of repetition lead to better long-term memory retention
              compared to massed practice or cramming. By revisiting material at
              spaced intervals, learners reinforce their memory and retention of
              the information, ensuring better recall over the long term. For
              more information{" "}
              <a
                href="https://en.wikipedia.org/wiki/Spaced_repetition"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                click here
              </a>
              .
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold underline pb-5">Watch the Video:</h2>
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
              <button className="btn btn-primary">Learn more</button>
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
