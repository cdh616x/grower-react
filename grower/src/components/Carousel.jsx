//jshint esversion:6

import React from "react";

import shopfront from "../web-images/shop-front.jpeg";
import logo from "../web-images/logo.png";

import mammoth from "../images/logos/mammoth.png";
import mills from "../images/logos/mills.png";
import hydro from "../images/logos/general-hydro.webp";

export default function Carousel() {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={mammoth} className="img-fluid" alt="..." />
   </div>
   <div className="carousel-item">
     <img src={hydro} className="img-fluid" alt="..." />
   </div>
   <div className="carousel-item">
     <img src={mills} className="img-fluid" alt="..." />
   </div>
 </div>
</div>
    </>
  );
}
