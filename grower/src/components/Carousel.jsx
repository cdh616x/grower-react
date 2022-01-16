//jshint esversion:6

import React from "react";

import shopfront from "../web-images/shop-front.jpeg";
import logo from "../web-images/logo.png";

import mammoth from "../images/logos/mammoth-recolor.png";
import mills from "../images/logos/mills.png";
import hydro from "../images/logos/general-hydro.webp";
import gaia from "../images/logos/gaia-green.webp";
import emerald from "../images/logos/emerald-harvest.png";
import advanced from "../images/logos/advanced-nutrients.png";
import hydrofarm from "../images/logos/hydro-farm.png";

export default function Carousel() {
  return (
    <>
    <div className="container-fluid">
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
   <div className="carousel-item">
     <img src={emerald} className="img-fluid" alt="..." />
   </div>
   <div className="carousel-item">
     <img src={advanced} className="img-fluid" alt="..." />
   </div>
   <div className="carousel-item">
     <img src={gaia} className="img-fluid" alt="..." />
   </div>
   <div className="carousel-item">
     <img src={hydrofarm} className="img-fluid" alt="..." />
   </div>
 </div>
</div>
</div>
    </>
  );
}
