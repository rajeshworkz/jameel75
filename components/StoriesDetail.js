import React from "react";

export default function StoriesDetail({ title, subtitle, image, description }) {
  return (
    <div className="detail-scroll">
      <h3>{title}</h3>
      <img src={image} className="img-fluid" />
      <h4>{subtitle}</h4>
      {description}
    </div>
  );
}
