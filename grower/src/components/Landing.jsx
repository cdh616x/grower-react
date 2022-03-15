//jshint esversion:6

import React from "react";

import shopfront from "../web-images/shop-front.jpeg";

import Carousel from "./Carousel.jsx";
import ImgItem from "./ImgItem.jsx";

import athena from "../images/logos/athena.png";
import mammoth from "../images/logos/mammoth.png";
import hydrofarm from "../images/logos/hydrofarm.png";
import roots from "../images/logos/roots-logo.png";
import genhydro from "../images/logos/general-hydro.png";
import mills from "../images/logos/mills.png";
import gavita from "../images/logos/gavita.png";
import phantom from "../images/logos/phantom.png";
import promix from "../images/logos/promix.png";
import motherearth from "../images/logos/mother-earth.png";
import titan from "../images/logos/titan.png";
import fox from "../images/logos/fox.png";
import sungro from "../images/logos/sungro.png";
import sns from "../images/logos/sns.png";
import success from "../images/logos/plant-success.png";
import sunsystem from "../images/logos/sun-system.png";
import gold from "../images/logos/royal-gold.png";
import gaia from "../images/logos/gaia-green.webp";
import ez from "../images/logos/ezclone.png";
import advanced from "../images/logos/advanced2.png";
import cyco from "../images/logos/cyco-logo.png";
import dynagro from "../images/logos/dynagro.png";
import earthjuice from "../images/logos/earth-juice.png";
import emerald from "../images/logos/emerald-harvest.png";

export default function Landing() {
  return (
    <>
    <div className="landing">

     <div className="row">
     <img src={shopfront} className="img-fluid" />
     </div>
     <div className="row">
      <h1 className="welcome-text">Hi! We are Jenn and Dan; welcome to our shop!</h1>
     </div>
     <div className="row landing-info">
      <h3 className="home-info">Grower's Edge is an indoor garden supply store carrying everything you need for hydroponics, aeroponics, and soilless gardening. We carry lighting systems including bulbs, ballasts, and reflectors, hydroponic and organic nutrients, growing media including soil, coco,  rockwool, hydroton, and several other amendments; environmental controls and systems including controllers, air conditioners, dehumidifiers, fans, etc., odor control, Co2, and several other items you need to run a successful garden. Our friendly and knowledgeable staff has years of experience in hydroponics, aeroponics, and soilless gardening and we love helping all types of gardeners gain knowledge and maximize their yields!</h3>
    </div>
    <div className="row">
     <ImgItem src={athena} />
     <ImgItem src={roots} />
     <ImgItem src={mills} />
     <ImgItem src={advanced} />
    </div>
    <div className="row">
     <ImgItem src={hydrofarm} />
     <ImgItem src={mammoth} />
     <ImgItem src={genhydro} />
     <ImgItem src={sunsystem} />
    </div>
    <div className="row">
     <ImgItem src={gavita} />
     <ImgItem src={phantom} />
     <ImgItem src={promix} />
     <ImgItem src={ez} />
    </div>
    <div className="row">
     <ImgItem src={motherearth} />
     <ImgItem src={titan} />
     <ImgItem src={fox} />
     <ImgItem src={sungro} />
    </div>
    <div className="row">
     <ImgItem src={gaia} />
     <ImgItem src={sns} />
     <ImgItem src={cyco} />
     <ImgItem src={gold} />
    </div>
    <div className="row">
     <ImgItem src={success} />
     <ImgItem src={dynagro} />
     <ImgItem src={earthjuice} />
     <ImgItem src={emerald} />
    </div>
    </div>
    </>
  );
}
