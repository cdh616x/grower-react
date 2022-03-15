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

import tomslogo from "../images/logos/toms.png";
import tumbeler from "../images/toms/tumbeler.png";

import harvest from "../images/logos/harvestmore.png";
import trimbin from "../images/harvestmore/trimbin.png";

import twister from "../images/logos/twister.png";
import t4 from "../images/twister/t4.png";
import t6 from "../images/twister/t6.png";

import centurion from "../images/logos/centurion.png";
import table from "../images/centurion/tabletop.png";
import mini from "../images/centurion/mini.png";
import silver from "../images/centurion/silver.png";

import dl from "../images/logos/dl-logo.png";
import bowl from "../images/DL/bowl.png";

import vacuum from "../images/harvestkeeper/vacuum.png";

import madfarmer from "../images/logos/mad-farmer.png";
import gloves from "../images/mad-farmer/gloves.png";

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

     <EnvItem src={tomslogo}
     alt="Tom's Tumbeler"
     href="https://www.tomstumbletrimmer.com/tumble-trimmers/trimmers-for-small-medium-harvests/"
     producttype="Tom's Tumbeler"
     products1="The Original Bladeless Trimmer - 1600, 1900, 3000"
     media_img={tumbeler}
     malt="Tom's Tumbeler Original Bladeless Trimmer - Tabletop" />

     <EnvItem src={harvest}
     alt="HarvestMore"
     href="https://www.harvest-more.com/shop/trim-bin-complete-set/"
     producttype="TrimBin"
     media_img={trimbin}
     malt="HarvestMore TrimBin" />

     <EnvItem src={twister}
     alt="Twister"
     href="https://www.twistertrimmer.com/twister-t6-trimmer/"
     producttype="Twister Trimmer"
     products1="T4"
     products2="T6"
     media_img={t4}
     malt="Twister T4 Standard with Speed Control"
     media_img1={t6}
     malt1="Twister T6 Trimmer" />

     <EnvItem src={centurion}
     alt="Centurion Pro"
     href="https://cprosolutions.com/tabletop/"
     producttype="Automatic Trimmer"
     products1="Mini Wet & Dry"
     products2="Tabletop Wet & Dry"
     products3="Silver Bullet"
     media_img={table}
     malt="Centurion Pro Tabletop Wet/Dry Trimmer"
     media_img1={mini}
     malt1="Centurion Pro Mini Wet/Dry Trimmer"
     media_img5={silver}
     malt5="Centurion Pro Silver Bullet" />

     <EnvItem src={dl}
     alt="DL Wholesale"
     href="https://www.dlwholesale.com/hydroponics/777181-18-bowl-trimmer-w-clear-top.asp?catid=36DD64BB676D41EDA8ACE97C130010E0"
     producttype="Bowl Trimmer"
     products1='Clear Top 18"'
     media_img={bowl}
     malt="Clear Top 18in Bowl Trimmer" />

     <EnvItem title="Harvest Keeper"
     href="https://www.harvest-keeper.com/shop/bycategory/Vacuum-Sealers-and-Storage-Bags"
     producttype="Storage Bags"
     products1="Vacuum Sealer Clear Rolls"
     media_img={vacuum}
     malt="Harvest Keeper Heavy Duty Vacuum Sealer Roll" />

     <EnvItem src={madfarmer} title="Mad Farmer"
     alt="Mad Farmer"
     href="https://www.hydrofarm.com/p/mad-farmer-white-nitrile-gloves-box-of-100/mfwnl"
     producttype="White Nitrile Gloves"
     products1="Small, Medium, Large Sizes - Box of 100"
     media_img={gloves}
     malt="Mad Farmer White Nitrile Gloves" />

     <Footer />
    </>
  )
}
