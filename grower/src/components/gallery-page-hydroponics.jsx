//jshint esversion:6

import React from "react";
import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";

import ItemUpgraded from "./ItemUpgraded.jsx";

import activeAqua from "../images/logos/active-aqua.png";
import floodTable from "../images/active-aqua/flood-table.png";
import waterChiller from "../images/active-aqua/waterChiller.png";
import tubing from "../images/active-aqua/tubing.png";
import growFlow from "../images/active-aqua/growflow.png";

import hydrofarm from "../images/logos/hydrofarm.png";
import netPot from "../images/hydrofarm/netpot.png";
import dosatron from "../images/hydrofarm/dosatron.png";
import widelip from "../images/hydrofarm/widelip.png";

import currentCulture from "../images/logos/current-culture-logo.png";
import dwc from "../images/current-culture/dwc.png";

export default function GalleryPageHydroponics(props) {
  return (
    <>
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

    <ItemUpgraded src={activeAqua}
    href="http://www.activeaquahydroponics.com/"
    alt="Active Aqua"
    producttype="Hydroponic Products"
    media_img={floodTable}
    item="Flood Tables 2X4 - 4X8"
    malt="Active Aqua Flood Tables"
    media_img1={waterChiller}
    item1="Water Chiller"
    malt1="Active Aqua Water Chiller"
    media_img2={tubing}
    item2="Tubing - Black & White"
    malt2="Active Aqua White and Black Tubing"
    media_img3={growFlow}
    item3="Grow Flow Controller"
    malt3="Active Aqua Grow Flow Ebb and Gro Controller Unit w/ 2 Pumps" />

    <ItemUpgraded src={hydrofarm}
    href="https://www.hydrofarm.com/hydroponics"
    alt="Hydrofarm"
    media_img={netPot}
    item='Net Pot 2"-6"'
    malt="HydroFarm Net Pot"
    media_img1={dosatron}
    item1="Dosatron Doser - 11 GPM"
    malt1="Dosatron Water Powered Doser 11"
    media_img2={widelip}
    item2='Wide Lip Bucket - 10"'
    otherProducts="Other Products:"
    otherItems="Dosatron Doser - 14 GPM" />

    <ItemUpgraded src={currentCulture}
    href="https://cch2o.com/uc-solo/"
    alt="Current Culture - Leaders in Hydroponics"
    media_img100={dwc}
    item100="DWC Hydroponics Systems"
    malt100="Current Culture DWC Hydroponics Systems" />

    <Footer />
    </>
  );
}
