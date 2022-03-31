//jshint esversion:6

import React from "react";
import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";

import ItemUpgraded from "./ItemUpgraded.jsx";

import andenlogo from "../images/logos/anden.png";
import _210 from "../images/anden/210.png";
import _320 from "../images/anden/320.png";

import quest from "../images/logos/quest.png";
import __110 from "../images/quest/110.png";
import __225 from "../images/quest/225.png";
import humidistat from "../images/quest/humidistat.png";
import mover from "../images/quest/mover.png";

import activeAir from "../images/logos/active-air.png";
import _110 from "../images/active-air/110.png";
import _190 from "../images/active-air/190.png";
import canister from "../images/active-air/canister.png";

import idealAir from '../images/logos/ideal-air.png';
import dehume from "../images/idealair/dehumidifiers.png";
import hume from "../images/idealair/humidifier.png";
import handc from "../images/idealair/handc.png";
import overhead from "../images/idealair/overhead.png";

export default function CC(props) {
  return (
    <>
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

    <ItemUpgraded src={andenlogo}
    href="https://www.anden.com/product_category/dehumidifier/"
    alt="Hydrofarm Climate Control"
    producttype="Dehumidifiers"
    media_img={_210}
    item="Anden 210 Industrial Dehumidifier"
    malt="Anden 210 Pints/Day Industrial Dehumidifier"
    media_img1={_320}
    item1="Anden 320 Industrial Dehumidifier"
    malt1="Anden 320 Pints/Day Industrial Dehumidifier" />

    <ItemUpgraded src={quest}
    href="https://www.questclimate.com/"
    alt="Quest"
    producttype="Dehumidifiers"
    item="Dual Overhead Dehumidifier 110"
    media_img={__110}
    malt="Quest Dual 110 Overhead Dehumidifier"
    item1="Dual Overhead Dehumidifier 225"
    media_img1={__225}
    malt1="Quest Dual 225 Overhead Dehumidifier"
    item2="Wall Mounted Humidistat"
    media_img2={humidistat}
    malt2="Quest Wall Mounted Humidistat"
    item3="F9 Industrial Air Mover"
    media_img3={mover}
    malt3="Quest F9 Industrial Air Mover/Fan"
    otherProducts="Other Products:"
    otherItems="165, 205 Overhead Dehumidifier"
    otherItems1="H5 HEPA Air Mover" />

    <ItemUpgraded src={activeAir}
    href="https://www.hydrofarm.com/p/active-air-dehumidifier-110-pint/aadhc1002p"
    alt="Active Air"
    producttype="Dehumidifiers & CO2"
    item="Dehumidifier, 110 Pint"
    media_img={_110}
    malt="Active Air Dehumidifier, 110 Pint"
    item1="Dehumidifer, 190 Pint"
    media_img1={_190}
    malt1="Active Air Dehumidifier, 190 Pint"
    item2="20 & 50lbs CO2 Tanks"
    media_img2={canister}
    malt2="Ideal Air CO2 Tanks" />

    <ItemUpgraded src={idealAir}
    alt="Ideal Air Growing Climate Solutions"
    href="https://www.ideal-air.com/"
    producttype="Climate Controllers"
    item="22, 30, & 50 Pint Dehumidifiers"
    media_img={dehume}
    malt="Ideal Air Dehumidifiers"
    item1="Humidifier"
    media_img1={hume}
    malt1="Ideal Air Humidifiers"
    item2="24,000 BTU Heating & Cooling"
    media_img2={handc}
    malt2="Ideal Air Heating & Coolin"
    item3="Ceiling Mount Heating & Cooling Cassette"
    media_img3={overhead}
    malt3="Ideal Air Pro-Dual 24,000 BTU Multi-Zone Heating & Cooling Ceiling Mount Cassette" />

    <Footer />
    </>
  );
}
