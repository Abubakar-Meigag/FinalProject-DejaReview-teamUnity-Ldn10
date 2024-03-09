import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md text-black">
          <h1 className="mb-5 text-5xl font-bold">Welcome at DEJA project</h1>

          <h3 className="text-left text-2xl font-semibold underline mb-2">
            About DEJA:
          </h3>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <span> </span>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
