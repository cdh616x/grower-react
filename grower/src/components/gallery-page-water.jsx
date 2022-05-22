//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

import activeAqua from "../images/logos/active-aqua.png";
import subPump from "../images/active-aqua/pump.png";
import airPump from "../images/active-aqua/airpump.png";

import hydrologic from "../images/logos/hydrologic.png";
import smallBoy from "../images/hydrologic/smallboy.png";
import tallBoy from "../images/hydrologic/tallboy.png";
import stealthRO from "../images/hydrologic/stealthRO.png";
import tubing from "../images/hydrologic/tubing.png";

import mondi from "../images/logos/mondi.png";
import sumpPump from "../images/mondi/sumppump.png";

export default function GalleryPageWater(props) {
  const inventory = "inventory";
  return (
    <>
    <Navbar inventory={inventory} />

     <h1 className="page-title">{props.pagetitle}</h1>

     <ItemUpgraded src={activeAqua}
     href="http://www.activeaquahydroponics.com/"
     alt="Active Aqua"
     producttype="Pumps"
     media_img={subPump}
     item="Submersible Pump | 1000 - 160"
     malt="Active Aqua Sumbersible Pumps"
     media_img1={airPump}
     item1="Air Pump | 110 - 7.8"
     malt1="Active Aqua Air Pumps" />

     <ItemUpgraded src={hydrologic}
     href="https://www.hydrologicsystems.com/pages/hydroponics-gardening"
     alt="HydroLogic Purification Systems"
     producttype="Water Filtration"
     media_img={smallBoy}
     item="smallBoy"
     malt="Hydrologic smallBoy"
     media_img1={tallBoy}
     item1="tallBoy"
     malt1="Hydrologic tallBoy"
     media_img2={stealthRO}
     item2="Stealth RO"
     malt2="Hydrologic Stealth RO"
     media_img3={tubing}
     item3="Polyethelene Tubing"
     malt3="Hydrologic Polyethelene Tubing"
     otherProducts="Replacement Filters"
     otherItems="Chlorashield, Deionization Filter, Catalytic Carbon Converter"
     otherItems1="Stealth RO1000" />

     <ItemUpgraded src={mondi}
     href="https://mondiproducts.com/product/utility-sump-pump-1585x-gold-series/"
     alt="Mondi"
     producttype="Pumps"
     media_img100={sumpPump}
     item100="Utility & Sump Pump 1585x - Gold Series"
     malt100="Mondi Utility & Sump Pump 1585x - Gold Series" />

    <Footer />
    </>
  )
}
