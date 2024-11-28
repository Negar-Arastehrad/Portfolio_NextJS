"use client";
import React from "react";
import Style from "../Styles/About.module.css";
import { motion } from "framer-motion";

// Framer Motion
const textVariants = {
  hidden1: {
    opacity: 0,
    y: -20,
  },

  hidden2: {
    opacity: 0,
    y: 20,
  },

  visible1: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },

  visible2: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const About = () => {
  return (
    <div className={Style.about} id="about">
      <div className={Style.container}>
        <p className="title">About</p>
        <h1>Get To know Me</h1>

        <div className={Style.mainContainer}>
          <div className={Style.left}>
            <motion.p
              variants={textVariants}
              initial="hidden1"
              whileInView="visible1"
              viewport={{ once: true }}
            >
              <span>A Little Bit About Me And My Soft Skills: </span>I am a
              motivated junior front-end developer and graduated in software
              engineering. I am currently studying for a master&#39;s degree in
              the same field. My specialities include quickly learning new
              skills, responsibility, and capability of time management. I have
              a teamwork spirit and adaptability, and I am persistent in
              learning.
            </motion.p>
          </div>
          <div className={Style.right}>
            <motion.p
              variants={textVariants}
              initial="hidden2"
              whileInView="visible2"
              viewport={{ once: true }}
            >
              <span>So far I have learned: </span>
              HTML, CSS, JavaScript, Bootstrap, Sass, Jquery, React, NextJs and
              I am well-informed about SEO, UI, and UX design. I am still
              enthusiastically grabbing onto any other programming languages,
              frameworks, or principles I can integrate into the coding web in
              my head. I am also advanced in English.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
