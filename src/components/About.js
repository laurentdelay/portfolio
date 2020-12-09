import React from "react";
import { Waypoint } from "react-waypoint";
import ContactInfo from "./ContactInfo";

export default function About({ data, waypointOffset, handleShow }) {
  const { photo, bio, contact } = data;
  return (
    <Waypoint
      onEnter={() => handleShow("about")}
      topOffset={`${100 - waypointOffset - 1}%`}
      bottomOffset={`${waypointOffset}%`}
      onLeave={() => console.log("leaving about")}
    >
      <section id="about">
        <div className="row">
          <div className="column small">
            <img
              className="profile-pic"
              src={`/images/${photo.nom}`}
              alt={photo.alt}
            />
          </div>
          <div className="column large bio">
            <h2>Qui je suis</h2>
            <p dangerouslySetInnerHTML={{ __html: bio }} />
            <div className="row">
              <ContactInfo contact={contact} />
              <div className="column resume-dl">
                <a
                  href="https://drive.google.com/uc?export=download&id=1Wtwa3cS7bHtx-O8fno0EKZh7Bw3vpV60"
                  className="nav-link"
                >
                  Télécharger le CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Waypoint>
  );
}
