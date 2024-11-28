"use client";
import React from "react";
import Style from "../Styles/Contact.module.css";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";

// Framer Motion
const contactVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  visible1: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 1.3,
      type: "spring",
    },
  },

  visible2: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.7,
      duration: 1.3,
      type: "spring",
    },
  },

  visible3: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.3,
      duration: 1.3,
      type: "spring",
    },
  },

  visible4: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.8,
      duration: 1.3,
      type: "spring",
    },
  },
};

const Contact = () => {
  return (
    <div className={Style.contact} id="contact">
      <div className={Style.container}>
        <p className="title">Contact</p>
        <h1>Get In Touch With Me</h1>

        <div className={Style.mainContainer}>
          <div className={Style.contactLine}>
            <Link
              href="https://linkedin.com/in/negar-arastehrad"
              target="_blank"
            >
              <span className={Style.icon}>
                <FaLinkedinIn />
              </span>
              <motion.p
                variants={contactVariants}
                initial="hidden"
                whileInView="visible1"
                viewport={{ once: true }}
              >
                My Linkedin Account
              </motion.p>
            </Link>
          </div>

          <div className={Style.contactLine}>
            <Link href="https://github.com/Negar-Arastehrad" target="_blank">
              <span className={Style.icon}>
                <RiGithubLine />
              </span>
              <motion.p
                variants={contactVariants}
                initial="hidden"
                whileInView="visible2"
                viewport={{ once: true }}
              >
                My Github Account
              </motion.p>
            </Link>
          </div>

          <div className={Style.contactLine}>
            <Link href="mailto:n.arasterad@gmail.com" target="_blank">
              <span className={Style.icon}>
                <SiGmail />
              </span>
              <motion.p
                variants={contactVariants}
                initial="hidden"
                whileInView="visible3"
                viewport={{ once: true }}
              >
                n.arasterad@gmail.com
              </motion.p>
            </Link>
          </div>

          <div className={Style.contactLine}>
            <Link href="https://vercel.com/negar-arastehrad" target="_blank">
              <span className={Style.icon}>
                <IoLogoVercel />
              </span>
              <motion.p
                variants={contactVariants}
                initial="hidden"
                whileInView="visible4"
                viewport={{ once: true }}
              >
                My Vercel Account
              </motion.p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
