import React, { useEffect } from "react";
import projects from "../projectsData";
import defaultPic from "../assets/default.png";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      
      <div className="projects-page">
        {projects.projects.map((project) => {
          let currentScreen =
            project.screenshot === "" ? defaultPic : project.screenshot;
          return (
            <div key={project.title} >
                <div className="project-title">{project.title}</div>
                <div className="project-tile">
                <div>
                  <Image
                    alt="project screenshot"
                    src={currentScreen}
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
