//jshint esversion:6

import React from "react";

export default function GalleryItem(props) {
  return (
    <>
    <div className="col-lg-4 col-sm-12">
    <a href={props.href}>
     <img src={props.src} className="img-fluid" />
    </a>
     <h3 className="company">{props.companyName}</h3>
   </div>
   </>
  );
}
