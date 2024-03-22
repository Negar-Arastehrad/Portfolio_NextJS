"use client";

import React from "react";
import Style from "../Styles/Hero.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Me from "../../public/Me.png";


const Hero = () => {

  return (
    <div className={Style.hero}>
      <div className={Style.container}>
        <div className={Style.left}>
          <p>Hello, I&#39;m</p>
          <h1>Negar Arastehrad</h1>
          <p>Junior FrontEnd Developer</p>
          <button  className={Style.cv}>
          <a href="CV-NegarArastehrad.pdf" download="CV">
            Downoald My CV
          </a>
          </button>
          
          <div className={Style.icons}>
            <a href="https://github.com/Negar-Arastehrad" target="_blank">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/negar-arastehrad" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className={Style.right}>
          <p>.</p>
          <Image src={Me} quality={100} className={Style.image} alt="Me"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
