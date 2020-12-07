import React from "react";
import { Waypoint } from "react-waypoint";
import ResumeItem from "./ResumeItem";
import Skill from "./Skill";

export default function Resume({ data, handleShow, waypointOffset }) {
  const { skillsIntro, cursus, experiences, skills } = data;

  return (
    <Waypoint
      onEnter={() => handleShow("resume")}
      topOffset={`${100 - waypointOffset - 1}%`}
      bottomOffset={`${waypointOffset}%`}
    >
      <section id="resume">
        <div className="row" id="cursus">
          <div className="column small">
            <h2>
              <span>Cursus</span>
            </h2>
          </div>
          <div className="column large">
            {cursus.map((cur) => (
              <ResumeItem data={cur} key={cur.nom} />
            ))}
          </div>
        </div>

        <div className="row" id="experience">
          <div className="column small">
            <h2>
              <span>Expérience</span>
            </h2>
          </div>
          <div className="column large">
            {experiences.map((exp) => (
              <ResumeItem data={exp} key={exp.nom} />
            ))}
          </div>
        </div>

        <div className="row" id="skills">
          <div className="column small">
            <h2>
              <span>Compétences</span>
            </h2>
          </div>
          <div className="column large">
            <p id="skills-intro">{skillsIntro}</p>
            <ul className="row" id="skills-list">
              {skills.map((skill) => (
                <Skill data={skill} key={skill.nom} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Waypoint>
  );
}
