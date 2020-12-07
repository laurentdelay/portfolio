import React from "react";
import SocialMedia from "./SocialMedia";

export default function SocialMediaList({ data }) {
  return (
    <ul className="social-media">
      {data.map((item) => (
        <SocialMedia key={item.icon} data={item} />
      ))}
    </ul>
  );
}
