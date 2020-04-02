import React from "react";

export default function StoriesDetail({ title, subtitle, image, description }) {
  return (
    <div className="detail-scroll">
      <h3 className="anim-title wow fadeIn"  data-wow-delay="0.4s">{title}</h3>
      <img src={image} className="img-fluid anim-img wow fadeIn"  data-wow-delay="0.6s"/>
      <h4 className="anim-subtite wow fadeIn"  data-wow-delay="0.8s">{subtitle}</h4>
      <div className="anim-text wow fadeIn"  data-wow-delay="1s">{description}</div>
    </div>
  );
}
