//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import CloneItem from "./CloneItem.jsx";
import PestItem from "./PestItem.jsx";
import EnvItem from "./EnvItem.jsx";

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

      <PestItem src={cycologo}
      alt="Cyco Platinum Series Pharmaceutical Grade Ingredients"
      producttype="PH UP & PH DOWN"
      href="https://cycoflower.com/usa/ph-up-down/"
      media_img={cycoph}
      malt="Cyco Platinum Series pH Up & Down" />

      <CloneItem src={ooologo}
      href="https://www.oregonsonly.com/olympus-up/"
      alt="Oregon's Only Nectar for the Gods"
      title="Nectar for the Gods"
      producttype="Olympus Up"
      products1="PH Increaser (Basify)"
      producttype2="Hades Down"
      products21="PH Decreaser (Acidify)"
      media_img={olympus}
      malt="Olympus Up Fertilizer"
      media_img1={hades}
      malt1="Hades Down Fertilizer" />

      <CloneItem src={genhydrologo}
      alt="General Hydroponics"
      producttype="PH Up & PH Down"
      href="https://generalhydroponics.com/products/categories/maintenance/"
      media_img={phupdown}
      malt="pH Up & pH Down" />

      <EnvItem src={bluelogo}
      alt="Bluelab"
      href="https://bluelab.com/usa/shop/parameters/ph"
      producttype="Multimedia PH Meter w/ Leap"
      producttype1="pH Pen, ppm Pen"
      producttype2="Guardian Monitor"
      producttype3="Truncheon Nutrient Meter"
      media_img={guardian}
      malt="Bluelab Guardian Monitor"
      media_img1={multimedia}
      malt1="Bluelab Multimedia pH Meter"
      media_img5={pen}
      malt5="Bluelab pH Pen"
      media_img6={truncheon}
      malt6="Bluelab Truncheon Nutrient Meter" />

      <EnvItem src={aperalogo}
      alt="Apera Instruments - Fluid Precision since 1991"
      href="https://aperainst.com/grostar-gs1-ph-pen-tester"
      producttype="GroStar GS1 pH Pen Tester"
      media_img={gs1}
      malt="GroStar GS1 pH Pen Tester" />

      <EnvItem src={milwaukeelogo}
      alt="Milwaukee Instruments"
      href="https://milwaukeeinstruments.com/ph-tester/"
      producttype="PH600AQ Digital pH Pen"
      media_img={ph600}
      malt="Milwaukee pH600AQ Digital pH Pen" />

     <Footer />
    </>
  )
}
