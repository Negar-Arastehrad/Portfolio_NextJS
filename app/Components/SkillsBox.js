import React from "react";
import Style from "../Styles/SkillsBox.module.css";
import Image from "next/image";

const SkillsBox = ({ image, name }) => {
  return (
    <div className={Style.box}>
      <Image src={image} className={Style.img} quality={100} alt="Skills"/>
      <p className={Style.name}>{name}</p>
    </div>
  );
};

export default SkillsBox;
