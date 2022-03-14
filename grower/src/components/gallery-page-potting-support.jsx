//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import EnvItem from "./EnvItem.jsx";

import hydrologo from "../images/logos/hydrofarm.png";
import dirtpot from "../images/hydrofarm/dirtpot.png";
import nurspot from "../images/hydrofarm/nursery.png";
import smartpot from "../images/hydrofarm/smartpot.png";
import bamboo from "../images/hydrofarm/bamboo.png";
//-------------
import greenstring from "../images/hydrofarm/garden-string.png";
import netting from "../images/hydrofarm/netting.png";
import twist from "../images/hydrofarm/twist.png";

import groprologo from "../images/logos/gropro-logo.png";
import grobag from "../images/gropro/grow-ba.png";

import groedglogo from "../images/logos/growers-edge-logo.png";
import clips from "../images/growers-edge/clips.png";
import trellisNetting from "../images/growers-edge/trellis-netting.png";

export default function GalleryPagePS(props) {
  return (
    <>
     <Navbar />

     <h1 className="page-title">{props.pagetitle}</h1>

     <EnvItem src={hydrologo}  title="Potting Products"
     alt="Hydrofarm Horticultural Products"
     href="https://www.hydrofarm.com/pots-containers?breadcrumbs=true&specs=4636"
     producttype="Dirt Pot"
     products1="Flexible Portable Planter || 25gal-1gal"
     producttype2="Pro Cal Nursery Pot"
     products21="Plastic Planter || 25gal-1gal"
     producttype3="SmartPot"
     products31="Flexible Aeration Container"
     producttype4="GROW!T"
     products41="24 Bamboo Stakes || 4' & 8'"
     media_img={dirtpot}
     malt="DirtPot Flexible Portable Container"
     media_img1={nurspot}
     malt1="Pro Cal Premium Nursery Pot"
     media_img5={smartpot}
     malt5="SmartPot Aeration Container"
     media_img6={bamboo}
     malt6="GROW!T Bamboo Stakes" />

     <EnvItem src={hydrologo} title="Plant Support Products"
     alt="Hydrofarm Horticultural Products"
     href="https://www.hydrofarm.com/garden-accessories"
     producttype="Soft Rubber Garden String, 100ft"
     producttype2="Twist Tie"
     producttype3="Trellis Netting"
     products31="Mesh || Various Sizes"
     media_img={greenstring}
     malt="Hydrofarm Soft Rubber Garden String, 100 Feet"
     media_img1={twist}
     malt1="Hydrofarm Twist Tie"
     media_img5={netting}
     malt5="Hydrofarm Trellis Netting Mesh" />

     <EnvItem src={groprologo}
     alt="Gro Pro"
     href="https://www.gro-pro.net/shop/ByCategory/gropro-fabric-pots"
     producttype="Premium Round Fabric Pots - Black"
     media_img={grobag}
     malt="Gro Pro Premium Round Fabric Pots - Black" />

     <EnvItem src={groedglogo}
     alt="Grower's Edge"
     href="https://www.growers-edge.net/shop/ByBrandCategories/growers-edge"
     producttype="Crop Clips - 100 clips"
     producttype2="Commercial Grade White Trellis Netting"
     media_img={clips}
     malt="Crop Clips - 100 Clips"
     media_img1={trellisNetting}
     malt1="Commercial Grade White Trellis Netting" />

     <Footer />
    </>
  )
}
