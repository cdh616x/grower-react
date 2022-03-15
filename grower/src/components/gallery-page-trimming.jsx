//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import EnvItem from "./EnvItem.jsx";

import hydrologo from "../images/logos/hydrofarm.png";
import gretrim from "../images/hydrofarm/green-trimmer.png";
import blutrim from "../images/hydrofarm/blue-trimmer.png";
import trimbag from "../images/hydrofarm/trimbag.png";
import stackit from "../images/hydrofarm/stack.png";

export default function GalleryPageTrimming(props) {
  return (
    <>
     <Navbar />

     <h1 className="page-title">{props.pagetitle}</h1>

     <EnvItem src={hydrologo}
     alt="Hydrofarm Horticultural Products"
     href="https://www.hydrofarm.com/search?q=trim%20fast&isc=true&sid=true&cid=0"
     producttype="Trim Fast Precision Pruners"
     products1="Anti-Fatigue Lightweight Pruner"
     products2="Curved Precision Pruner"
     products3="Bypass Heavy Duty Pruners"
     producttype2="TrimBag"
     producttype3="Stack!t"
     products31="24in & 38in Drying Rack"
     media_img={gretrim}
     malt="Trim Fast Precision Pruners"
     media_img1={blutrim}
     malt1="Trim Fast Bypass Heavy Duty Pruners"
     media_img5={trimbag}
     malt5="TrimBag"
     media_img6={stackit}
     malt6="Stack!t Drying Rack" />

     <Footer />
    </>
  )
}
