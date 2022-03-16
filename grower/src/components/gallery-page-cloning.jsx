//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import CloneItem from "./CloneItem.jsx";
import PestItem from "./PestItem.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

import dynalogo from "../images/logos/dynagro.png";
import grodanlogo from "../images/logos/grodan.png";
import oxylogo from "../images/logos/oxyclone.png";
import ezlogo from "../images/logos/ezclone.png";
import hdilogo from "../images/logos/hdilogo.png";
import jumplogo from "../images/logos/jumpstart.png";
import thrivelogo from "../images/logos/super-thrive.png";
import diplogo from "../images/logos/dip-n-grow.png";
import hormexlogo from "../images/logos/hormex.png";
import groteclogo from "../images/logos/growth-tech.png";
import technalogo from '../images/logos/technaflora.png';
import cycologo from "../images/logos/cyco-logo.png";
import sproutlogo from "../images/logos/super-sprouter.png";
import ihortlogo from "../images/logos/ihort.png";
import genhylogo from "../images/logos/general-hydro.png";

import kln from "../images/dynagro/kln.png";

import ez64 from "../images/ezclone/64.png";
import clearrez from "../images/ezclone/clearrez.png";

import sys20 from "../images/oxyclone/20sys.png";

import tray50 from "../images/hdi/50tray.png";
import bag100 from "../images/hdi/100bag.png";

import accelaroot from "../images/jumpstart/accelaroot.png";
import smartfloat from "../images/jumpstart/smart-float.png";

import superthrive from "../images/superthrive/superthrive.png";

import rootingkit from "../images/dip/rooting-kit.png";

import hormones from "../images/hormex/b1.png";

import clxgel from "../images/clonex/rootgel.png";
import clxnut from "../images/clonex/nutrients.png";

import roottech from "../images/technaflora/roottech.png";

import cyclone from "../images/cyco/sachet.png";

import thermostat from "../images/super-sprouter/thermostat.png";
import heatmat from "../images/super-sprouter/heatmat.png";

import ghplugs from "../images/general-hydroponics/plugs.png";

import grodanplugs from "../images/grodan/plugs.png";

import qplugs from "../images/ihort/q-plugs.png";

export default function GalleryPageCloning(props) {
  return (
    <>
     <Navbar />
     <h1 className="page-title">{props.pagetitle}</h1>

     <ItemUpgraded src={ezlogo}
     alt="EZ-Clone"
     href="https://www.ezclone.com/store/"
     producttype="Plant Cloning System"
     item="System 64"
     producttype2="Clear Rez"
     item1="Clear Rez Cloning Solution"
     media_img={ez64}
     malt="EZ-Clone Low Pro 64, 128 Systems"
     media_img1={clearrez}
     malt1="EZ-Clone Clear Rez Solution"
     otherProducts="Other Products:"
     otherItems="Clear Rez Cloning Gel"
     otherItems1="EZ-Clone System 32, System 16" />

     <ItemUpgraded src={oxylogo}
     alt="Oxyclone"
     href="https://www.hydrofarm.com/p/oxyclone-cloning-systems/ox20sys"
     producttype="20 Site Pro Series"
     media_img100={sys20}
     malt100="oxyCLONE 20 Site System" />

     <ItemUpgraded src={hdilogo}
     alt="Hydrodynamics International"
     href="https://www.hydrodynamicsintl.com/product-category/root-riot-plant-starter-cubes-root-riots-for-plant-propagation/"
     producttype="Root Riot"
     item="50 Cube Tray"
     item1="100 Cube Bag"
     media_img={tray50}
     malt="Root Riot Plant Starter Cubes | Root Riot Tray"
     media_img1={bag100}
     malt1="Root Riot Plant Starter Cubes | Root Riot Bags" />

     <ItemUpgraded src={jumplogo}
     alt="Jumpstart"
     href="http://www.hydrofarmcommercial.com/products/seed-starting/products/jump-start-smart-float-55-cell-grow-tray-wplugs"
     producttype="50+ Cell Tray w/ Insert and Starter Plugs"
     item="Accelaroot"
     item1="SmartFloat"
     media_img={accelaroot}
     malt="Jump start AccelaROOT 50+ Cell Tray w/ Insert and Starter Plugs"
     media_img1={smartfloat}
     malt1="Jump Start Smart Float 55-Cell Grow Tray w/ Plugs" />

     <ItemUpgraded src={thrivelogo}
     alt="SUPERthrive - essential vitamin solution"
     href="https://superthrive.com/"
     producttype="SUPERthrive Liquid Concentrate"
     media_img100={superthrive}
     malt100="SUPERthrive - The Original Vitamin Solution"
     otherProducts="Other Products:"
     otherItems="Different sizes and configurations" />

     <ItemUpgraded src={diplogo}
     alt="Dip 'N Grow"
     href="https://dipngrow.com/buy-online/"
     producttype="Liquid Concentrate Rooting Kit"
     media_img100={rootingkit}
     malt100="Dip'n Grow 2 Oz. Rooting Kit"  />

     <ItemUpgraded src={hormexlogo}
     alt="Hormex"
     href="https://hormex.com/pages/vitamin-b1-and-rooting-hormone-concentrate"
     producttype="Vitamin B-1 and Hormone Concentrate"
     media_img100={hormones}
     malt100="Hormex Vitamin B1 and Hormone Concentrate" />

     <ItemUpgraded src={groteclogo}
     alt="Clonex"
     href="https://www.hydrodynamicsintl.com/product/clonex-rooting-gel/"
     producttype="Clonex"
     item100="Rooting Gel"
     media_img100={clxgel}
     malt100="Clonex Rooting Gel"
     otherProducts="Other Products:"
     otherItems="Clone & Seedling Nutrients"
     otherItems1="Root Maximizer" />

     <ItemUpgraded src={technalogo}
     alt="Root Tech"
     href="https://www.technaflora.com/product/rootech-cloning-gel/"
     producttype="Root Tech"
     item100="Cloning Gel"
     media_img100={roottech}
     malt100="Roottech Cloning Gel" />

     <ItemUpgraded src={cycologo}
     alt="Cyco Flower"
     href="https://cycoflower.com/usa/cyco-platinum-series-cyclone-rooting-gel/"
     producttype="Cyclone Rooting Gel"
     item100="Cloning Gel Sachets"
     media_img100={cyclone}
     malt100="Cyco Platinum Series Cyclone Rooting Gel" />

     <ItemUpgraded src={sproutlogo}
     alt="Super Sprouter"
     href="https://www.supersprouter.com/shop/bycategory/heat-mats-and-thermostats"
     producttype="Environment Controls"
     item="Seedling Heat Mat"
     item1="Digital Heat Mat Thermostat"
     media_img={heatmat}
     malt="Super Sprouter® Seedling Heat Mat"
     media_img1={thermostat}
     malt1="Super Sprouter® Seedling Heat Mat Digital Thermostat" />

     <ItemUpgraded src={dynalogo}
     href="https://dyna-gro.com/product/k-l-n-concentrate-c/"
     alt="Dyna-Gro Advanced Science Simplified"
     producttype="K-L-N Rooting Concentrate"
     media_img100={kln}
     malt100="Dyna-Gro Liquid K-L-N Rooting Concentrate" />

     <ItemUpgraded src={genhylogo}
     alt="General Hydroponics"
     href="https://generalhydroponics.com/"
     producttype="Rapid Root Plant Starter"
     media_img100={ghplugs}
     malt100="General Hydroponics Rapid Rooter Natural Plant Starter Plugs" />

     <ItemUpgraded src={grodanlogo}
     alt="Grodan"
     href="https://www.grodan101.com/product-overview/grodan-starter-plugs/"
     producttype="Starter Cubes"
     media_img100={grodanplugs}
     malt100="Grodan Starter Plugs™" />

     <ItemUpgraded src={ihortlogo}
     alt="iHort"
     producttype="Q Plugs"
     item100="40/40 Refills"
     media_img100={qplugs}
     malt100="Q Plug 40/40"  />

     <Footer />
    </>
  )
}
