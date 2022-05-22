//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

import hydrologo from "../images/logos/hydrofarm.png";
import dirtpot from "../images/hydrofarm/dirtpot.png";
import nurspot from "../images/hydrofarm/nursery.png";
import smartpot from "../images/hydrofarm/smartpot.png";
import bamboo from "../images/hydrofarm/bamboo.png";

import greenstring from "../images/hydrofarm/garden-string.png";
import netting from "../images/hydrofarm/netting.png";
import twist from "../images/hydrofarm/twist.png";

import groprologo from "../images/logos/gropro-logo.png";
import grobag from "../images/gropro/grow-ba.png";

import groedglogo from "../images/logos/growers-edge-logo.png";
import clips from "../images/growers-edge/clips.png";
import trellisNetting from "../images/growers-edge/trellis-netting.png";

export default function GalleryPagePS(props) {
  const inventory = "inventory";
  return (
    <>
     <Navbar inventory={inventory} />

     <h1 className="page-title">{props.pagetitle}</h1>

     <ItemUpgraded src={hydrologo}
     alt="Hydrofarm Horticultural Products"
     href="https://www.hydrofarm.com/pots-containers?breadcrumbs=true&specs=4636"
     producttype="Potting Solutions"
     item="Dirt Pot || 25g-1g"
     item1="Pro Cal Nursery Pot || 25g-1g"
     item2="SmartPot Aeration Container"
     item3="GROW!T 24 Bamboo stakes"
     media_img={dirtpot}
     malt="DirtPot Flexible Portable Container"
     media_img1={nurspot}
     malt1="Pro Cal Premium Nursery Pot"
     media_img2={smartpot}
     malt2="SmartPot Flexible Aeration Container"
     media_img3={bamboo}
     malt3="GROW!T Bamboo Stakes" />

     <ItemUpgraded src={hydrologo}
     alt="Hydrofarm Horticultural Products"
     href="https://www.hydrofarm.com/garden-accessories"
     producttype="Plant Support Solutions"
     item="Soft Rubber Garden String, 100ft"
     item1="Twist Tie"
     item2="Trellis Netting"
     media_img={greenstring}
     malt="Hydrofarm Soft Rubber Garden String, 100 Feet"
     media_img1={twist}
     malt1="Hydrofarm Twist Tie"
     media_img2={netting}
     malt2="Hydrofarm Trellis Netting Mesh" />

     <ItemUpgraded src={groprologo}
     alt="Gro Pro"
     href="https://www.gro-pro.net/shop/ByCategory/gropro-fabric-pots"
     producttype="Potting Solutions"
     item100="Premium Round Fabric Pots - Black"
     media_img100={grobag}
     malt100="Gro Pro Premium Round Fabric Pots - Black" />

     <ItemUpgraded src={groedglogo}
     alt="Grower's Edge"
     href="https://www.growers-edge.net/shop/ByBrandCategories/growers-edge"
     producttype="Plant Support Solutions"
     item="Crop Clips - 100 clips"
     item1="Commercial Grade White Trellis Netting"
     media_img={clips}
     malt="Crop Clips - 100 Clips"
     media_img1={trellisNetting}
     malt1="Commercial Grade White Trellis Netting" />

     <Footer />
    </>
  )
}
