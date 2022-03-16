//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import CloneItem from "./CloneItem.jsx";
import PestItem from "./PestItem.jsx";
import EnvItem from "./EnvItem.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

import ooologo from "../images/logos/ooo.png";
import cycologo from "../images/logos/cyco-logo.png";
import genhydrologo from "../images/logos/general-hydro.png";
import bluelogo from "../images/logos/bluelab.png";
import aperalogo from "../images/logos/apera.png";
import milwaukeelogo from "../images/logos/milwaukee.png";

import cycoph from "../images/cyco/ph.png";
import olympus from "../images/nectar/olympus.png";
import hades from "../images/nectar/hades.png";
import phupdown from "../images/general-hydroponics/ph-products.png";
import guardian from "../images/bluelab/guardian.png";
import multimedia from "../images/bluelab/multimedia.png";
import pen from "../images/bluelab/ph-pen.png";
import truncheon from "../images/bluelab/truncheon.png";
import gs1 from "../images/grostar/gs1-pen.png";
import ph600 from "../images/milwaukee/ph600.png";

export default function GalleryPagePH(props) {
  return (
    <>
     <Navbar />
      <h1 className="page-title">{props.pagetitle}</h1>

      <ItemUpgraded src={cycologo}
      alt="Cyco Platinum Series Pharmaceutical Grade Ingredients"
      producttype="PH Products"
      href="https://cycoflower.com/usa/ph-up-down/"
      item100="pH UP & pH Down"
      media_img100={cycoph}
      malt100="Cyco Platinum Series pH Up & Down" />

      <ItemUpgraded src={ooologo}
      href="https://www.oregonsonly.com/olympus-up/"
      alt="Oregon's Only Nectar for the Gods"
      title="Nectar for the Gods"
      producttype="PH Products"
      item="PH Increaser (Basify)"
      item1="PH Decreaser (Acidify)"
      media_img={olympus}
      malt="Olympus Up Fertilizer"
      media_img1={hades}
      malt1="Hades Down Fertilizer" />

      <ItemUpgraded src={genhydrologo}
      alt="General Hydroponics"
      producttype="PH Products"
      href="https://generalhydroponics.com/products/categories/maintenance/"
      item100="pH Down & pH Up"
      media_img100={phupdown}
      malt100="pH Up & pH Down" />

      <ItemUpgraded src={bluelogo}
      alt="Bluelab"
      href="https://bluelab.com/usa/shop/parameters/ph"
      producttype="PH Metering"
      item="Multimedia PH Meter w/ Leap"
      item1="pH Pen, ppm Pen"
      item2="Guardian Monitor"
      item3="Truncheon Nutrient Meter"
      media_img={guardian}
      malt="Bluelab Guardian Monitor"
      media_img1={multimedia}
      malt1="Bluelab Multimedia pH Meter"
      media_img2={pen}
      malt2="Bluelab pH Pen"
      media_img3={truncheon}
      malt3="Bluelab Truncheon Nutrient Meter" />

      <ItemUpgraded src={aperalogo}
      alt="Apera Instruments - Fluid Precision since 1991"
      href="https://aperainst.com/grostar-gs1-ph-pen-tester"
      producttype="PH Metering"
      item100="GroStar GS1 pH Pen Tester"
      media_img100={gs1}
      malt100="GroStar GS1 pH Pen Tester" />

      <ItemUpgraded src={milwaukeelogo}
      alt="Milwaukee Instruments"
      href="https://milwaukeeinstruments.com/ph-tester/"
      producttype="PH Metering"
      item100="PH600AQ Digital pH Pen"
      media_img100={ph600}
      malt100="Milwaukee pH600AQ Digital pH Pen" />

     <Footer />
    </>
  )
}
