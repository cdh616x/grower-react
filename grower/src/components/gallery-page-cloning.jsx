//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import CloneItem from "./CloneItem.jsx";

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

     <CloneItem src={ezlogo}
     alt="EZ Clone"
     href="https://www.ezclone.com/store/"
     producttype="Plant Cloning System"
     products1="System 64"
     products2="System 32"
     products3="System 16"
     producttype2="Clear Rez"
     products21="Rooting Compound"
     products22="Water Treatment Concentrate"
     media_img={ez64}
     media_img1={clearrez} />

     <CloneItem src={oxylogo}
     alt="OxyClone"
     href="https://www.oxyclone.com/products/oxyclone-cloning-systems"
     producttype="20 Site Pro Series"
     media_img2={sys20} />

     <CloneItem src={hdilogo}
     alt="Hydrodynamics International"
     href="https://www.hydrodynamicsintl.com/product-category/root-riot-plant-starter-cubes-root-riots-for-plant-propagation/"
     producttype="Root Riot"
     products1="50 Cube Tray"
     products2="100 Cube Bag"
     media_img={tray50}
     media_img1={bag100} />

     <CloneItem src={jumplogo}
     alt="Jumpstart"
     href="http://www.hydrofarmcommercial.com/products/seed-starting/products/jump-start-smart-float-55-cell-grow-tray-wplugs"
     producttype="Accelaroot"
     producttype2="Smart Float"
     media_img={accelaroot}
     media_img1={smartfloat} />

     <CloneItem src={thrivelogo}
     alt="SUPERthrive - essential vitamin solution"
     href="https://superthrive.com/"
     producttype="SUPERthrive Liquid Concentrate"
     media_img2={superthrive} />

     <CloneItem src={diplogo}
     alt="Dip 'N Grow"
     href="https://dipngrow.com/buy-online/"
     producttype="Liquid Concentrate Rooting Kit"
     media_img2={rootingkit}  />

     <CloneItem src={hormexlogo}
     alt="Hormex"
     href="https://hormex.com/pages/vitamin-b1-and-rooting-hormone-concentrate"
     producttype="Vitamin B-1 and Hormone Concentrate"
     media_img2={hormones} />

     <CloneItem src={groteclogo}
     alt="Clonex"
     href="https://www.hydrodynamicsintl.com/product/clonex-rooting-gel/"
     producttype="Clonex"
     products1="Rooting Gel"
     products2="Clone & Seedling Nutrients"
     products3="Root Maximizer"
     media_img2={clxgel} />

     <CloneItem src={technalogo}
     alt="Root Tech"
     href="https://www.technaflora.com/product/rootech-cloning-gel/"
     producttype="Root Tech"
     products1="Rooting Gel"
     media_img2={roottech} />

     <CloneItem src={cycologo}
     alt="Cyco Flower"
     href="https://cycoflower.com/usa/cyco-platinum-series-cyclone-rooting-gel/"
     producttype="Cyclone Rooting Gel"
     media_img2={cyclone} />

     <CloneItem src={sproutlogo}
     alt="Super Sprouter"
     href="https://www.supersprouter.com/shop/bycategory/heat-mats-and-thermostats"
     producttype="Seedling Heat Mat"
     producttype2="Digital Heat Mat Thermostat"
     media_img={heatmat}
     media_img1={thermostat} />

     <CloneItem src={genhylogo}
     alt="General Hydroponics"
     href="https://generalhydroponics.com/"
     producttype="Rapid Root Plant Starter"
     media_img2={ghplugs} />

     <CloneItem src={grodanlogo}
     alt="Grodan"
     href="https://www.grodan101.com/product-overview/grodan-starter-plugs/"
     producttype="Starter Cubes"
     media_img2={grodanplugs} />

     <CloneItem src={ihortlogo}
     alt="iHort"
     producttype="Q Plugs"
     products1="40/40 Refills"
     media_img2={qplugs}  />

     <Footer />
    </>
  )
}
