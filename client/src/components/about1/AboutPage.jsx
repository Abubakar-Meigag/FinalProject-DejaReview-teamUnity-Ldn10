import React from "react";
import Content from "./Content";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import "../about1/aboutPage.css";

function AboutPage() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-lx">
            <h1 className="text-[55px] font-medium  text-sky-50">
              Welcome to <span className="underline font-bold">DEJA</span>{" "}
              Review
            </h1>
            <h1 className="mb-6 text-[32px] font-medium underline  text-sky-50">
              Spaced Repetition technique
            </h1>

            <div className="inline text-3xl  sm:text-3xl font-bold text-[#d4e0e5]">
              <h2 className="pl-16 text-4xl text-left">
                Where you always{" "}
                <TypeAnimation 
                  sequence={[
                    "be reminded ",
                    3000,
                    "can you plan ",
                    3000,
                    "be successful ",
                    3000,
                  ]}
                  cursorStyle={true}
                  repeat={Infinity}
                  style={{ fontSize: "1em", paddingLeft: "5px", color: "red" }}
                />
              </h2>
            </div>
            <span> </span>
            <Link to="content" smooth={true} duration={700}>
              <button className="btn btn-primary mt-9">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div name="content">
        <Content />
      </div>
    </div>
  );
}

export default AboutPage;
