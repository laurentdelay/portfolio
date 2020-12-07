import React from "react";

export default function ResumeItem({ data }) {
  const { nom, intitulé, dates, description } = data;

  return (
    <div>
      <h3>{nom}</h3>
      <p className="info-title">
        <em>{intitulé}</em>
        <span>&bull;</span>
        {dates}
      </p>

      <p className="description">{description}</p>
    </div>
  );
}
