import React from "react";

export default function Skill({ data }) {
  const { image, nom, description } = data;

  return (
    <li className="skill">
      <img src={`/images/skills/${image.nom}`} alt={image.alt} />
      <h4>{nom}</h4>
      <p>{description}</p>
    </li>
  );
}
