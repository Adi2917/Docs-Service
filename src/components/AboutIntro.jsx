import React from "react";
import "./AboutIntro.css";
import aboutintro from "../assets/About-Intro.png"

const AboutIntro = () => {
  return (
    <section className="about">
      <div className="about__container">
        {/* Left Side */}
        <div className="about__content">
          <h2 className="about__title">About Us</h2>
          <p className="about__desc">
            Our journey started with a simple vision – to make essential
            government and legal documentation services easier for everyone. 
            Whether it’s applying for a PAN Card, obtaining a Caste Certificate,
            or getting an Income Certificate, we focus on making the process
            smooth and hassle-free.
          </p>
          <p className="about__desc">
            We believe that trusted services should be accessible to all, without
            delays and complications. With our doorstep service, people no longer
            need to wait in long queues or struggle with paperwork.
          </p>
          <p className="about__desc">
            <strong>Started by Mr. Aditya Kumar</strong>, our mission is to
            provide simple, fast, and reliable documentation services that save
            time and bring convenience directly to you.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="about__visual">
          <img
            src={aboutintro}   // apna image path yahan do
            alt="About Documents"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
