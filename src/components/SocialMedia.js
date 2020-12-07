import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SocialMedia({ data }) {
  const { url, icon } = data;
  return (
    <li>
      <a href={url} className="nav-link" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={["fab", icon]} />
      </a>
    </li>
  );
}
