'use client'
import React from "react";
import Style from "../Styles/About.module.css";

const About = () => {

  return (
    <div className={Style.about} id="about">
      <div className={Style.container}>
        <p className="title">About</p>
        <h1>Get To know Me</h1>

        <div className={Style.mainContainer}>
          <div className={Style.left}>
            <p>
              <span>A Little Bit About Me And My Soft Skills: </span>
              I am a motivated junior front-end developer and graduated in
              software engineering. I am currently studying for a master&#39;s
              degree in the same field. My specialities include quickly learning
              new skills, responsibility, and capability of time management. I
              have a teamwork spirit and adaptability, and I am persistent in
              learning.
            </p>
          </div>
          <div className={Style.right}>
            <p>
              <span>So far I have learned: </span>
              HTML, CSS, JavaScript, Bootstrap, Sass,
              Jquery, React, NextJs and I am well-informed about SEO, UI, and UX
              design. I am still enthusiastically grabbing onto any other
              programming languages, frameworks, or principles I can integrate
              into the coding web in my head. I am also advanced in English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
