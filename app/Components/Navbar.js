"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Style from "../Styles/Navbar.module.css";
import { FaCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { ThemeContext } from "../Context/ThemeContext";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      {nav ? <div className={Style.overlay}></div> : ""}

      <div
        className={`${
          shadow ? Style["navbar"] + " " + Style["shadow"] : Style.navbar
        }`}
      >
        <div className={Style.container}>
          <div className={Style.logo}>
            <Link href='/'>Negar Arastehrad</Link>
            <p>
              <FaCircle />
            </p>
          </div>
          <ul
            className={`${
              nav ? Style["active"] + " " + Style["links"] : Style.links
            }`}
          >
            <li onClick={closeNav}>
              <Link href="/#about">About</Link>
            </li>
            <li onClick={closeNav}>
              <Link href="/#skills">Skills</Link>
            </li>
            <li onClick={closeNav}>
              <Link href="/#projects">Projects</Link>
            </li>
            <li onClick={closeNav}>
              <Link href="/#contact">Contact</Link>
            </li>
            <li onClick={() => {toggleTheme(); closeNav();}}>
              {theme === "light" ? <FaRegMoon /> : <FiSun />}
            </li>
          </ul>

          <div className={Style.hamburger} onClick={handleNav}>
            {nav ? <IoCloseOutline /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
