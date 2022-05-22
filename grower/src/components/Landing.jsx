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
import grodan from "../images/logos/grodan.png";
import bluelab from "../images/logos/bluelab.png";
import hands from "../images/logos/house-garden.png";
import lostcoast from "../images/logos/lost-coast.png";
import atamiLogo from "../images/logos/atami-logo.png";
import biobizz from "../images/logos/biobizz-logo-dark.png";
import currentCulture from "../images/logos/current-culture-logo.png";
import technaFlora from "../images/logos/technaflora.png";
import npk from "../images/logos/npk.png";
import vegamatrix from "../images/logos/vegamatrix.png";
import bioAg from "../images/logos/bioag.png";
import microbeLife from "../images/logos/microbe-life.png";
import heavy16 from "../images/logos/heavy16logo.png";
import elite from "../images/logos/elite91.png";
import botanicare from "../images/logos/botanicare-logo.png";
import dte from "../images/logos/dte.png";
import activeAqua from "../images/logos/active-aqua.png";
import activeAir from "../images/logos/active-air.png";
import hdi from "../images/logos/hdilogo.png";
import hawthorne from "../images/logos/hawthorne.png";
import nectar from "../images/logos/nectarBlack.png";
import ageOld from "../images/logos/ageold.png";
import remo from "../images/logos/remo.jpeg";
import ces from "../images/logos/ces-logo.png";
import hydroton from "../images/logos/hydroton.png";
import SizeSelector from "./SizeSelector";

export default function Landing() {

  const screenWidth = window.innerWidth

  // const [screen, setScreen] = useState()
  return (
    <>
      <div className="landing">
        {/* <div className="row">
          <img src={shopfront} className="img-fluid" />
        </div> */}
        <div className="row">
          <h1 className="welcome-text">
            Hi! We are Jenn and Dan; welcome to our shop!
          </h1>
        </div>
        <div className="row landing-info">
          <h3 className="home-info">
            Grower's Edge is an indoor/outdoor garden supply store carrying
            everything you need for hydroponics, aeroponics, and soilless
            gardening. We carry lighting systems including LEDs, ceramic metal
            halides, bulbs, ballasts, and reflectors, hydroponic and organic
            nutrients, growing media including soil, coco, rockwool, hydroton,
            and several other amendments; environmental controls and systems
            including controllers, air conditioners, dehumidifiers, fans, etc.,
            odor control, Co2, and several other items you need to run a
            successful garden. Our friendly and knowledgeable staff has years of
            experience in hydroponics, aeroponics, and soilless gardening and we
            love helping all types of gardeners gain knowledge and maximize
            their yields!
          </h3>
        </div>
        <SizeSelector screenWidth={screenWidth} />
      </div>
    </>
  );
}
