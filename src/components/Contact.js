import React from "react";
import { Waypoint } from "react-waypoint";
import ContactInfo from "./ContactInfo";

export default function Contact({ data, handleShow, waypointOffset }) {
  return (
    <Waypoint
      onEnter={() => handleShow("contact")}
      topOffset={`${100 - waypointOffset - 1}%`}
      bottomOffset={`${waypointOffset}%`}
    >
      <section id="contact">
        <div className="row">
          <h3>{data.intro}</h3>
          <ContactInfo contact={data} />
        </div>
      </section>
    </Waypoint>
  );
}
