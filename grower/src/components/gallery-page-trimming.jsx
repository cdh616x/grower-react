//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

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

import fiskars from "../images/logos/fiskars.png";
import orange from "../images/fiskars/orange.png";
import sharpener from "../images/fiskars/sharp.png";


export default function GalleryPageTrimming(props) {
  const inventory = "inventory";
  return (
    <>
     <Navbar inventory={inventory} />

     <h1 className="page-title">{props.pagetitle}</h1>

     <ItemUpgraded src={hydrologo}
     alt="Hydrofarm Horticultural Products"
     href="https://www.hydrofarm.com/search?q=trim%20fast&isc=true&sid=true&cid=0"
     producttype="Trim Fast Pruners"
     producttype2="Trimming Solutions"
     item="Lightweight Precision Pruners"
     item1="Bypass Heavy Duty Pruners"
     item2="TrimBag"
     item3="Stack!t Drying Racks"
     media_img={gretrim}
     malt="Trim Fast Precision Pruners"
     media_img1={blutrim}
     malt1="Trim Fast Bypass Heavy Duty Pruners"
     media_img2={trimbag}
     malt2="TrimBag"
     media_img3={stackit}
     malt3="Stack!t Drying Rack"
     otherProducts="Other Products: "
     otherItems="Trim Fast Curved Pruners"
     otherItems1="Trim Fast Anti-Fatigue Pruners" />

     <ItemUpgraded src={fiskars}
     href="https://www.fiskars.com/en-us/gardening-and-yard-care/ideas-and-how-tos/pruning-and-trimming"
     alt="Fiskars"
     producttype="Trimming Products"
     item="Micro Tip Pruning Snips"
     media_img={orange}
     malt="Fiskars Softouch Micro Tip Pruning Snips"
     item1="Universal Scissors Sharpener"
     media_img1={sharpener}
     malt1="Fiskars Universal Scissors Sharpener" />

     <ItemUpgraded src={tomslogo}
     alt="Tom's Tumbeler"
     href="https://www.tomstumbletrimmer.com/tumble-trimmers/trimmers-for-small-medium-harvests/"
     producttype="The Original Bladeless Trimmer"
     item100="Handcrank - 1600"
     media_img100={tumbeler}
     malt100="Tom's Tumbeler Original Bladeless Trimmer - Tabletop"
     otherProducts="Other Products:"
     otherItems="Original Bladeless Trimmer 1900, 3000" />

     <ItemUpgraded src={harvest}
     alt="HarvestMore"
     href="https://www.harvest-more.com/shop/trim-bin-complete-set/"
     producttype="Trimming Solutions"
     item100="TrimBin"
     media_img100={trimbin}
     malt100="HarvestMore TrimBin" />

     <ItemUpgraded src={twister}
     alt="Twister"
     href="https://www.twistertrimmer.com/twister-t6-trimmer/"
     producttype="Machine Trimmer"
     item="T4"
     item1="T6"
     media_img={t4}
     malt="Twister T4 Standard with Speed Control"
     media_img1={t6}
     malt1="Twister T6 Trimmer" />

     <ItemUpgraded src={centurion}
     alt="Centurion Pro"
     href="https://cprosolutions.com/tabletop/"
     producttype="Machine Trimmer"
     item="Mini Wet & Dry"
     item1="Tabletop Wet & Dry"
     item2="Silver Bullet"
     media_img={table}
     malt="Centurion Pro Tabletop Wet/Dry Trimmer"
     media_img1={mini}
     malt1="Centurion Pro Mini Wet/Dry Trimmer"
     media_img2={silver}
     malt2="Centurion Pro Silver Bullet" />

     <ItemUpgraded src={dl}
     alt="DL Wholesale"
     href="https://www.dlwholesale.com/hydroponics/777181-18-bowl-trimmer-w-clear-top.asp?catid=36DD64BB676D41EDA8ACE97C130010E0"
     producttype="Bowl Trimmer"
     item100='Clear Top 18"'
     media_img100={bowl}
     malt100="Clear Top 18in Bowl Trimmer" />

     <ItemUpgraded title="Harvest Keeper"
     href="https://www.harvest-keeper.com/shop/bycategory/Vacuum-Sealers-and-Storage-Bags"
     producttype="Storage Bags"
     item100="Vacuum Sealer Clear Rolls"
     media_img100={vacuum}
     malt100="Harvest Keeper Heavy Duty Vacuum Sealer Roll" />

     <ItemUpgraded src={madfarmer} title="Mad Farmer"
     alt="Mad Farmer"
     href="https://www.hydrofarm.com/p/mad-farmer-white-nitrile-gloves-box-of-100/mfwnl"
     producttype="White Nitrile Gloves"
     item100="Small, Medium, Large Sizes - Box of 100"
     media_img100={gloves}
     malt100="Mad Farmer White Nitrile Gloves" />

     <Footer />
    </>
  )
}
