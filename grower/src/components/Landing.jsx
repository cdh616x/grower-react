//jshint esversion:6

import React from "react";

import shopfront from "../web-images/shop-front.jpeg";

import Carousel from "./Carousel.jsx";

export default function Landing() {
  return (
    <>
    <div className="landing">
     <div className="row">
     <img src={shopfront} className="img-fluid" />
     </div>
     <div className="row landing-info">
     <div className="col-lg-6">
      <Carousel />
     </div>
     <div className="col-lg-6">
      <h1>Hi! We are Jenn and Dan; welcome to our shop!</h1>
      <h3>Grower's Edge specializes in from-the-bottom grow desires, offering top-of-the-line hardware and nutrients, and expert knowledge regarding plant life-cycle and hardware setup. Come in and check us out!</h3>
     </div>
    </div>
    </div>
    </>
  );
}
