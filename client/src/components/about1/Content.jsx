import React from "react";
import "../about1/aboutPage.css";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import Demo from "./Demo";

function Content() {
  return (
    <div>
      <div
        className="flex items-start pl-7 pt-2 w-full bg-cover bg-pink-900 min-h-screen"
        id="content"
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lx">
            <h1 className="mb-2 text-2xl text-left font-bold">
              What is Spaced Repetition?
            </h1>

            <div>
              <div className="w-[60rem] text-xl text-justify">
                <div className="">
                  <p>
                    Spaced repetition is a learning technique that involves
                    reviewing information at increasing intervals over time.
                    Instead of cramming information all at once, spaced
                    repetition spreads out review sessions, allowing for more
                    effective retention of knowledge. This method is based on
                    the psychological principle that spaced intervals of
                    repetition lead to better long-term memory retention
                    compared to massed practice or cramming. By revisiting
                    material at spaced intervals, learners reinforce their
                    memory and retention of the information, ensuring better
                    recall over the long term.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <span className=" mb-3 inline-block h-1 w-[800px] rounded bg-gray-300 "></span>

            <div className="">
              <h1 className="mb-2 text-3xl text-left font-bold underline">
                Watch the Video:
              </h1>

              <div className="flex justify-center items-center embed-responsive-item">
                     <ReactPlayer url='https://www.youtube.com/watch?v=osK0Agqu7dc' />
              </div>

              <Link to="demo" smooth={true} duration={700}>
              <button className="btn btn-primary mt-10 scroll-smooth">
                Learn more
              </button>
            </Link>

            </div>
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
