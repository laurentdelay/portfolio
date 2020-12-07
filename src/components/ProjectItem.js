import React from "react";
import ProjectLinks from "./ProjectLinks";

export default function ProjectItem({ data }) {
  const { image, description, liens } = data;

  return (
    <li className="column project">
      <img src={`/images/projects/${image.nom}`} alt={image.alt} />
      <p>{description}</p>
      <ProjectLinks links={liens} />
    </li>
  );
}
