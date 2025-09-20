"use client"
import React from "react";
import Style from "../Styles/Skills.module.css";
import SkillsBox from "./SkillsBox";
import { motion } from "framer-motion";

import html from "../../public/html.png";
import js from "../../public/javascript.png";
import nextjs from "../../public/nextjs.png";
import react from "../../public/react.png";
import css from "../../public/css.png";
import TypeScript from "../../public/Typescript.png"

// Framer Motion
const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

const createVariant = (delay) => ({
  opacity: 1,
  y: 0,
  transition: {
    delay,
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible1: createVariant(isMobile ? 0.3 : 0.4),
  visible2: createVariant(isMobile ? 0.6 : 1.6),
  visible3: createVariant(isMobile ? 0.9 : 2.3),
  visible4: createVariant(isMobile ? 1.2 : 2.8),
  visible5: createVariant(isMobile ? 1.5 : 3.3),
  visible6: createVariant(isMobile ? 1.8 : 3.8),
};


const Skills = () => {
  return (
    <div className={Style.skills} id="skills">
      <div className={Style.container}>
        <p className="title">Skills</p>
        <h1>What I&#39;ve Known So Far</h1>

        <div className={Style.mainContainer}>
          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible1"
            viewport={{ once: true }}
          >
            <SkillsBox image={react} name={"React"} />
          </motion.div>

          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible2"
            viewport={{ once: true }}
          >
            <SkillsBox image={nextjs} name={"Next.js"} />
          </motion.div>

           <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible3"
            viewport={{ once: true }}
          >
            <SkillsBox image={TypeScript} name={"TypeScript"} />
          </motion.div>

          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible4"
            viewport={{ once: true }}
          >
            <SkillsBox image={html} name={"HTML5"} />
          </motion.div>

          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible5"
            viewport={{ once: true }}
          >
            <SkillsBox image={css} name={"CSS"} />
          </motion.div>

          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible6"
            viewport={{ once: true }}
          >
            <SkillsBox image={js} name={"JavaScript"} />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
