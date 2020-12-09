import React from "react";
import { Waypoint } from "react-waypoint";
import ProjectItem from "./ProjectItem";

export default function Projects({ data, handleShow, waypointOffset }) {
  const { projetsIntro, projets } = data;

  return (
    <Waypoint
      onEnter={() => handleShow("projects")}
      topOffset={`${100 - waypointOffset - 1}%`}
      bottomOffset={`${waypointOffset}%`}
    >
      <section id="projects">
        <h3>{projetsIntro}</h3>

        <ul className="row">
          {projets.map((projet) => (
            <ProjectItem data={projet} key={projet.nom} />
          ))}
        </ul>
      </section>
    </Waypoint>
  );
}
