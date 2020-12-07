import React from "react";

export default function ProjectLinks({ links = {} }) {
  const { live, github } = links;
  return (
    <div className="links">
      {live && (
        <a href={live} className="button" target="_blank" rel="noreferrer">
          Visiter
        </a>
      )}
      {github && (
        <a href={github} className="button" target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
    </div>
  );
}
