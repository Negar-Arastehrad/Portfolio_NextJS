"use client";

import React, { useState } from "react";
import Style from "../Styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "../../_data/ProjectData";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectData);

  const filterCategory = (category) => {
    const newProjects = ProjectData.filter((p) => p.category === category);
    setProjects(newProjects);
  };

  return (
    <div className={Style.projects} id="projects">
      <div className={Style.container}>
        <p className="title">Projects</p>
        <h1>What I&#39;ve Bulit So Far</h1>

        <div className={Style.mainContainer}>
          <div className={Style.buttons}>
            <button onClick={() => setProjects(ProjectData)}>All</button>
            <button onClick={() => filterCategory("React")}>React</button>
            <button onClick={() => filterCategory("Next.Js")}>Next.js</button>
          </div>
          <div className={Style.projectsContainer}>
            {projects.map((project) => {
              return (
                <div className={Style.box} key={project.id}>
                  <div className="img-container">
                    <Image
                      src={project.image}
                      alt={project.name}
                      quality={100}
                    />
                  </div>

                  <div className={Style.content}>
                    <p>{project.name}</p>
                    <Link href={project.githubLink} target="_blank">
                      Github
                    </Link>
                    <Link href={project.demoLink} target="_blank">
                      Live Demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
