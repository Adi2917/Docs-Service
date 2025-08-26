import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__container">
        {/* Left Side */}
        <div className="intro__content">
          <h1 className="intro__title">
            Trusted Document <br /> Services at Your Doorstep
          </h1>
          <p className="intro__desc">
            Our mission is to make essential services simpler, faster, and
            accessible.
          </p>
          <button className="intro__btn">Get Started</button>
        </div>

        {/* Right Side */}
        <div className="intro__visual">
          <img
            src="src/assets/intro-img.png"  // dusri image ka path do
            alt="Clipboard"
            className="doc-image large"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
