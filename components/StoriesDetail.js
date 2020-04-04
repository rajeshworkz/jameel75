import React from "react";

export default function StoriesDetail({ title, subtitle, image, video, description }) {
  return (
    <div className="detail-scroll">
      <h3 className="anim-title wow fadeIn"  data-wow-delay="0.4s">{title}</h3>
      {image ? <div className="hero-image anim-img wow fadeIn"  data-wow-delay="0.6s" style={{backgroundImage:`url(${image})`}}></div> : null}

      {/* <div className="hero-image"><img src={image} className="img-fluid anim-img wow fadeIn"  data-wow-delay="0.6s"/></div> */}
     

     {video ? <div className="hero-video"><video width="320" height="" muted=""  loop="" autoPlay><source src={video} type="video/mp4" /></video></div> : null}
      
     
      <h4 className="anim-subtite wow fadeIn"  data-wow-delay="0.8s">{subtitle}</h4>
      <div className="anim-text wow fadeIn"  data-wow-delay="1s">{description}</div>
    </div>
  );
}
