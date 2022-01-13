//jshint esversion:6

import React from "react";

import shopfront from "../web-images/shop-front.jpeg";
import logo from "../web-images/logo.png";

export default function Carousel() {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={shopfront} className="img-fluid" alt="..." />
   </div>
   <div className="carousel-item">
     <img src={logo} className="img-fluid" alt="..." />
   </div>
   <div className="carousel-item">
     <img src={shopfront} className="img-fluid" alt="..." />
   </div>
 </div>
</div>
    </>
  );
}
