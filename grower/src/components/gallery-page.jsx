//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import GalleryItem from "./GalleryItem.jsx";
import GalleryItemFlip from "./GalleryItemFlip.jsx";
import Flip from "./GalleryFlipItem1.jsx";

import nectar from "../images/nectar/medusa.png";
import mammoth from "../images/mammoth/mam-resize.png";
import athena from "../images/athena/athena.png";

import fox from "../images/foxfarms/big-bloom1.png";
import hydro from "../images/general-hydroponics/general-hydro.png";
import roots from "../images/roots-organic/roots-organic.png";

import matrix from "../images/vegamatrix/grow2.png";
import mills from "../images/mills/bottles.png";
import heavy from "../images/heavy-sixteen/veg-a-b.png";

import gaia from "../images/gaia-green/all-purpose.png";
import cyco from "../images/cyco/swell.png";
import emerald from "../images/emerald-harvest/sturdy-stalk1.png";

import botanicare from "../images/botanicare/pure2.png";
import humboldt from "../images/humboldt/killer-tea.jpeg";
import culture from "../images/current-culture/tri2.png";

import house from "../images/house-garden/bud-xl.png";
import advanced from "../images/advanced-nutrients/b-52.png";
import cutting from "../images/cutting-edge/b-grow.png";

export default function GalleryPage(props) {
  return(
    <>
    <div className="gallery">
    <Navbar />
     <h1 className="page-title">{props.pagetitle}</h1>
     <div className="row">

       <Flip src={nectar}
       title="Nectar for the Gods"
       products1="Medusa's Magic, Gaia Mania, Athena's Aminas"
       products2="Demeter's Destiny, Hygeia's Hydration, Olympus Up"
       products3="The Kraken, Mega Morpheus, Zeus Juice"
       available4="Herculean Harvest, Aphrodite's Extraction"
       available5="Poseidonzime, Triton's Trawl, Pegasus Potion"
       available6="Persephone's Palate, Bloom Khaos, Hades Down"
       sizes="Qt - Gal - 2.5Gal - 5Gal"
       href="https://www.oregonsonly.com/nectar-for-the-gods-products/" />

       <Flip src={mammoth}
        title="Mammoth P"
        products1="MAMMOTH P, MAMMOTH Canncontrol"
        products2="MAMMOTH SI, MAMMOTH Starter Plugs"
        products3="MAMMOTH Biocontrol-PI"
        sizes="#"
        href="https://mammothmicrobes.com/mm-products/" />

       <Flip src={athena}
        title="Athena"
        products1="Balance, Cleanse, CaMg, PK"
        products2="Grow B, Grow A"
        products3="Bloom A, Bloom B"
        href="https://www.athenaproducts.com/blended-line?page=1" />
     </div>
     <div className="row">
      <Flip src={roots} title="Roots Organic" />
      <Flip src={hydro} title="General Hydroponics" />
      <Flip src={fox} title="Fox Farms" />
     </div>
     <div className="row">
      <Flip src={matrix} title="Vegamatrix" />
      <Flip src={mills} title="Mills" />
      <Flip src={heavy} title="Heavy Sixteen" />
     </div>
     <div className="row">
      <Flip src={gaia} title="Gaia Green" />
      <Flip src={cyco} title="Cyco Flower" />
      <Flip src={emerald} title="Emerald Harvest" />
     </div>
     <div className="row">
      <Flip src={botanicare} title="Botanicare" />
      <Flip src={humboldt} title="Humboldt County's Own" />
      <Flip src={culture} title="Current Culture" />
     </div>
     <div className="row">
      <Flip src={house}
       title="House and Garden"
       a />
      <Flip src={advanced} title="Advanced Nutrients" />
      <Flip src={cutting} title="Cutting Edge Solutions" />
     </div>
    <Footer />
    </div>
    </>
  );
}
