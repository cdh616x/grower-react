//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

import hurricane from "../images/logos/hurricane.png";
import wall16 from "../images/hurricane/wall16.png";

import activeair from "../images/logos/active-air.png";
import wall_16 from "../images/active-air/wall16.png";
import inline8 from "../images/active-air/inline8.png";
import floor12 from "../images/active-air/floor12.png";
import ducting from "../images/active-air/ducting.png";

import phat from "../images/logos/phat.png";
import trio from "../images/phat/trio.png";

import idealair from "../images/logos/ideal-air.png";
import iducting from "../images/idealair/ducting.png";

import canfilt from "../images/logos/can-filters.png";
import one2five from "../images/can/125.png";
import maxfan from "../images/can/maxfan.png";

import jeterex from "../images/logos/jeterex.png";
import cfm720 from "../images/jeterex/cfm720.png";
import cfm1700 from "../images/jeterex/cfm1700.png";

import ona from "../images/logos/ona.png";
import onapro from "../images/ona/pro.png";
import apple from "../images/ona/apple.png";

export default function GalleryPageAir(props) {
  const inventory = "inventory";
  return (
    <>
     <Navbar inventory={inventory} />

      <h1 className="page-title">{props.pagetitle}</h1>

      <ItemUpgraded src={hurricane}
      alt="Hurricane"
      href="https://www.hurricane-fans.com/shop/product/hurricane-supreme-wall-mount-fan-16-in?brandId=hurricane&categoryId=supreme-fans"
      producttype="Oscillating Wall Mount Fan"
      item100='16" Wall Mount Fan'
      media_img100={wall16}
      malt100="Hurricane Supreme Oscillating Wall Mount Fan 16 in" />

      <ItemUpgraded src={activeair}
      alt="Active Air"
      href="https://www.hydrofarm.com/active-air?pagenumber=2"
      producttype="Air Purification"
      media_img={wall_16}
      item='16" Wall Mount Fan'
      malt="Active Air 16 inch Wall Mount Fan"
      media_img1={inline8}
      item1='8" Inline Fan'
      malt1="Active Air 8 inch Inline fan"
      media_img2={floor12}
      item2='12" Floor Fan'
      malt2="Active Air 12 inch Floor Fan"
      media_img3={ducting}
      item3="Premium Ducting"
      malt3="Active Air 3-Ply Premium Ducting" />

      <ItemUpgraded src={phat}
      alt="Phat Filters - Hyrdrofarm"
      href="https://www.phatfilter.com/phat-filters"
      producttype="PHAT Filters"
      media_img100={trio}
      item100="Phat Filters"
      malt100="Phat Filters of varying sizes"
      otherProducts="Other Products:"
      otherItems="CFM 950, CFM 800"
      otherItems1="CFM 500, CFM 350" />

      <ItemUpgraded src={idealair}
      href="https://www.ideal-air.com/"
      alt="Ideal Air Growing Climate Solutions"
      producttype="Ducting"
      media_img100={iducting}
      item100="Supreme Ducting"
      malt100="Ideal Air Supreme Ducting (Silver/Black)" />

      <ItemUpgraded src={canfilt}
      href="https://canfilters.com/products/filters/can-filter/"
      alt="The Original Can Filters"
      producttype="Can-Filters"
      media_img={one2five}
      item="Can 125"
      malt="Can-Filters Can 125"
      media_img1={maxfan}
      item1='MaxFan 8"'
      malt1="Max-Fan 8 inch Pro Series"
      otherProducts="Other Products:"
      otherItems="We can order different configurations! Ask us!" />

      <ItemUpgraded src={jeterex}
      href="https://jeterex.com/"
      alt="JeterEx - Purifying Your Water and Air"
      producttype="Air Filters"
      media_img={cfm720}
      item="CFM 720"
      malt="JeterEx CFM 720 Air Filter"
      media_img1={cfm1700}
      item1="CFM 1700"
      malt1="JeterEx CFM 1700 Air Filter" />

      <ItemUpgraded src={ona}
      href="https://onaonline.com/"
      alt="ona"
      producttype="Natural Odor Neutralizers"
      media_img={onapro}
      item="Pro Gel"
      malt="Ona Pro Gel"
      media_img1={apple}
      item1="Apple Crumble Spray"
      malt1="Ona Apple Crumble Spray Can"
      otherProducts="Other Products:"
      otherItems="Pro Gel - 3.65L Pail" />

     <Footer />
    </>
  )
}
