import React from "react";

export default function ContactInfo({ contact }) {
  const { nom, adresse, postal, ville, pays, tel, mail } = contact;
  return (
    <div className="column contact-info">
      <h2>Me contacter</h2>
      <p>
        <span>{nom}</span>
        <br />
        <span>{adresse}</span>
        <br />
        <span>{`${postal} ${ville}, ${pays}`}</span>
        <br />
        <span>{tel}</span>
        <br />
        <span>
          <a className="nav-link" href={`mailto:${mail}`}>
            {mail}
          </a>
        </span>
      </p>
    </div>
  );
}
