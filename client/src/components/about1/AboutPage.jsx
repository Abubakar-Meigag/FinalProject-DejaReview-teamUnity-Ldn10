import React from "react";
import Content from "./Content";
import { Link } from "react-scroll";

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
            <h1 className="text-[45px] font-medium  text-sky-50">
              Welcome to <span className="underline font-bold">DEJA</span> Review 
            </h1>
            <h1 className="mb-6 text-[32px] font-medium underline  text-sky-50">
              Spaced Repetition technique
            </h1>

            <div className="text-2xl mb-6 text-sky-50 font-semibold">
              <p>Where you always be reminded</p>
              <p>Where you always can you plan</p>
              <p>Where you always be successful</p>
            </div>
            <span> </span>
            <Link to="content" smooth={true} duration={700}>
              <button className="btn btn-primary mt-5">
                Get Started
              </button>
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
