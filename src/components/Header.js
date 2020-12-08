import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaList from "./SocialMediaList";
import { Waypoint } from "react-waypoint";

export default function Header({
  data,
  socialMedia,
  activeSection,
  handleShow,
  waypointOffset,
}) {
  const { titre, intitulé, intro } = data;
  const [isMenuOn, setIsMenuOn] = useState(false);

  const handleMenuToggleClick = () => {
    setIsMenuOn((isMenuOn) => !isMenuOn);
  };

  return (
    <Waypoint
      onEnter={() => handleShow("home")}
      topOffset={`${100 - waypointOffset - 1}%`}
      bottomOffset={`${waypointOffset}%`}
    >
      <header id="home">
        <nav id="nav-wrap">
          <div id="menu-toggle">
            <span
              onClick={handleMenuToggleClick}
              onDrag={(e) => e.preventDefault()}
            >
              <FontAwesomeIcon icon="bars" />
            </span>
          </div>
          <ul id="nav" className={isMenuOn ? "" : "menu-hidden"}>
            <li>
              <a
                href="#home"
                className={`nav-link${
                  activeSection === "home" ? " active" : ""
                }`}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link${
                  activeSection === "about" ? " active" : ""
                }`}
              >
                A propos
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={`nav-link${
                  activeSection === "resume" ? " active" : ""
                }`}
              >
                CV
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link${
                  activeSection === "projects" ? " active" : ""
                }`}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link${
                  activeSection === "contact" ? " active" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div id="intro-card" className="row">
          <h1>{titre}</h1>
          <h2>{intitulé}</h2>
          <p dangerouslySetInnerHTML={{ __html: intro }} />
          <SocialMediaList data={socialMedia} />
        </div>
        <a className="nav-link nav-arrow down" href="#about">
          <FontAwesomeIcon icon="chevron-circle-down" />
        </a>
      </header>
    </Waypoint>
  );
}
