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
      <h3 className="info">Grower's Edge is an indoor garden supply store carrying everything you need for hydroponics, aeroponics, and soilless gardening. We carry lighting systems including bulbs, ballasts, and reflectors, hydroponic and organic nutrients, growing media including soil, coco,  rockwool, hydroton, and several other amendments; environmental controls and systems including controllers, air conditioners, dehumidifiers, fans, etc., odor control, Co2, and several other items you need to run a successful garden. Our friendly and knowledgeable staff has years of experience in hydroponics, aeroponics, and soilless gardening and we love helping all types of gardeners gain knowledge and maximize their yields!</h3>
     </div>
    </div>
    </div>
    </>
  );
}
