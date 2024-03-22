import React from "react";
import Style from "../Styles/Skills.module.css";
import SkillsBox from "./SkillsBox";

import firebase from '../../public/firebase.png'
import html from '../../public/html.png'
import js from '../../public/javascript.png'
import nextjs from '../../public/nextjs.png'
import react from '../../public/react.png'
import css from '../../public/css.png'

const Skills = () => {
  return (
    <div className={Style.skills} id="skills">
      <div className={Style.container}>
        <p className="title">Skills</p>
        <h1>What I&#39;ve Known So Far</h1>

        <div className={Style.mainContainer}>
          <SkillsBox
            image={react}
            name={"React"}
          />
          <SkillsBox
            image={nextjs}
            name={"Next.js"}
          />
          <SkillsBox
            image={html}
            name={"HTML5"}
          />
          <SkillsBox
            image={css}
            name={"CSS"}
          />
          <SkillsBox
            image={js}
            name={"JavaScript"}
          />
          <SkillsBox
            image={firebase}
            name={"Firebase"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
