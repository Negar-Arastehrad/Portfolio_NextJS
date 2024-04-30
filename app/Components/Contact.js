import React from "react";
import Style from "../Styles/Contact.module.css";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={Style.contact} id="contact">
      <div className={Style.container}>
        <p className="title">Contact</p>
        <h1>Get In Touch With Me</h1>

        <div className={Style.mainContainer}>
          <div className={Style.contactLine}>
            <Link href="www.linkedin.com/in/negar-arastehrad" target="_blank">
              <span className={Style.icon}>
                <FaLinkedinIn />
              </span>
              <p>My Linkedin Account</p>
            </Link>
          </div>

          <div className={Style.contactLine}>
            <Link href="https://github.com/Negar-Arastehrad" target="_blank">
              <span className={Style.icon}>
                <RiGithubLine />
              </span>
              <p>My Github Account</p>
            </Link>
          </div>

          <div className={Style.contactLine}>
            <span className={Style.icon}>
              <SiGmail />
            </span>
            <p className={Style.Gmail}>n.arasterad@gmail.com</p>
          </div>

          <div className={Style.contactLine}>
            <Link href="https://vercel.com/negar-arastehrad" target="_blank">
              <span className={Style.icon}>
                <IoLogoVercel />
              </span>
              <p>My Vercel Account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
