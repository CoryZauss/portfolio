import React from "react";
import Image from 'next/image'

const Modal = ({ toggle, project }) => {
  return (
    <div className="modal-tile">
      <div className="modal-title">
      {project.title}
      </div>
      <div>
      {project.gif && <Image src={project.gif} alt="animated project preview" width="1800" height ="1200" />}
      </div>
      <div className="modal-title">
        {`Description: `}
      </div>
        {project.description}
      <div className="modal-title">
        {`TechStack: `}
      </div>
        {project.techStack}

    </div>
  );
};

export default Modal;
