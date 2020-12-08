import React from "react";
import ProjectLinks from "./ProjectLinks";

export default function ProjectItem({ data }) {
  const { image, nom, description, liens } = data;

  return (
    <li className="column project">
      <div>
        <img src={`/images/projects/${image.nom}`} alt={image.alt} />
        <h4>{nom}</h4>
        <p>{description}</p>
      </div>
      <ProjectLinks links={liens} />
    </li>
  );
}
