import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SocialMediaList from "./SocialMediaList";

export default function Footer({ data }) {
  return (
    <footer>
      <SocialMediaList data={data} />
      <a href="#home" className="nav-arrow up">
        <FontAwesomeIcon icon="angle-up" />
      </a>
    </footer>
  );
}
