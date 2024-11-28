"use client";
import React from "react";
import Style from "../Styles/Hero.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Me from "../../public/Me.png";
import { motion } from "framer-motion";

// Framer Motion
const iconVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible1: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3,
      duration: 1,
      type: "spring",
    },
  },

  visible2: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8,
      duration: 1,
      type: "spring",
    },
  },
};

const Hero = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.container}>
        <div className={Style.left}>
          <p>Hello, I&#39;m</p>
          <h1>Negar Arastehrad</h1>
          <p>Junior FrontEnd Developer</p>
          <button className={Style.cv}>
            <a href="CV-NegarArastehrad.pdf" download="CV">
              Downoald My CV
            </a>
          </button>

          <div className={Style.icons}>
            <motion.a
              href="https://github.com/Negar-Arastehrad"
              target="_blank"
              variants={iconVariants}
              initial="hidden"
              animate="visible1"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/negar-arastehrad/"
              target="_blank"
              variants={iconVariants}
              initial="hidden"
              animate="visible2"
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>

        <div className={Style.right}>
          <p>.</p>
          <Image src={Me} quality={100} className={Style.image} alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
