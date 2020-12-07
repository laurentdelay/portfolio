import React from "react";
import { Waypoint } from "react-waypoint";
import ContactInfo from "./ContactInfo";

export default function Contact({ data, handleShow, waypointOffset }) {
  return (
    <Waypoint
      onEnter={() => handleShow("projects")}
      topOffset={`${100 - waypointOffset - 1}%`}
      bottomOffset={`${waypointOffset}%`}
    >
      <section id="contact">
        <div className="row">
          <h1>{data.intro}</h1>
          <ContactInfo contact={data} />
        </div>
      </section>
    </Waypoint>
  );
}
