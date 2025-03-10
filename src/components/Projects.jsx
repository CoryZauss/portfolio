import React, { useEffect, useState } from "react";
import projects from "../projectsData";
import defaultPic from "../assets/default.png";
import Image from "next/image";
import BackDrop from "./BackDrop";
import Modal from "./Modal";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState({});
  const [fadeIn, setFadeIn] = useState(false);


  const toggleModal = (project = {}) => {
    setModalProject(project)
    setShowModal((prev) => !prev)
    if (!showModal) {
      setTimeout(() => {
        setFadeIn(true)
      }, 100);
    } else {
      setFadeIn(false)
    }
  };



  return (
    <>
      {showModal && <BackDrop toggle={toggleModal} />}
      {showModal && (
        <Modal project={modalProject} fadeIn={fadeIn} toggle={toggleModal} />
      )}

      <div className="projects-page ">
        
        {projects.projects.map((project) => {
          let currentScreen = project.gif === "" ? defaultPic : project.gif;
          return (
            <div
            key={project.title}
            onClick={() => {
              setModalProject(project);
              toggleModal(project);
            }}
            >
              <div className="project-title">{project.title}</div>
              <div className="project-tile ">
                <div>
                  {project ? (
                    <Image
                      alt="project screenshot"
                      src={currentScreen}
                      layout="fill"
                    ></Image>
                  ) : (
                    <div> Loading...</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
