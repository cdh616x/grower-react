//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import GalleryItem from "./GalleryItem.jsx";
import GalleryItemFlip from "./GalleryItemFlip.jsx";

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
    <Navbar />
     <h1 className="page-title">{props.pagetitle}</h1>
     <div className="row">

       <GalleryItemFlip src={nectar}
       title="Nectar for the Gods"
       available1="Medusa's Magic, Gaia Mania, Athena's Aminas"
       available2="Demeter's Destiny, Hygeia's Hydration, Olympus Up"
       available3="The Kraken, Mega Morpheus, Zeus Juice"
       available4="Herculean Harvest, Aphrodite's Extraction"
       available5="Poseidonzime, Triton's Trawl, Pegasus Potion"
       available6="Persephone's Palate, Bloom Khaos, Hades Down"
       sizes="Qt, Gal, 2.5Gal, 5Gal"
       href="https://www.oregonsonly.com/nectar-for-the-gods-products/" />

       <GalleryItemFlip src={mammoth}
        title="Mammoth P" />

       <GalleryItemFlip src={athena}
        title="Athena"
        available1="Balance, Cleanse, CaMg, PK"
        available2="Grow B, Grow A"
        available3="Bloom A, Bloom B" />
     </div>
     <div className="row">
      <GalleryItem src={roots} companyName="Roots Organic" />
      <GalleryItem src={hydro} companyName="General Hydroponics" />
      <GalleryItem src={fox} companyName="Fox Farms" />
     </div>
     <div className="row">
      <GalleryItem src={matrix} companyName="Vegamatrix" />
      <GalleryItem src={mills} companyName="Mills" />
      <GalleryItem src={heavy} companyName="Heavy Sixteen" />
     </div>
     <div className="row">
      <GalleryItem src={gaia} companyName="Gaia Green" />
      <GalleryItem src={cyco} companyName="Cyco Flower" />
      <GalleryItem src={emerald} companyName="Emerald Harvest" />
     </div>
     <div className="row">
      <GalleryItem src={botanicare} companyName="Botanicare" />
      <GalleryItem src={humboldt} companyName="Humboldt County's Own" />
      <GalleryItem src={culture} companyName="Current Culture" />
     </div>
     <div className="row">
      <GalleryItem src={house} companyName="House and Garden" />
      <GalleryItem src={advanced} companyName="Advanced Nutrients" />
      <GalleryItem src={cutting} companyName="Cutting Edge Solutions" />
     </div>
     <div className="row">
      <GalleryItemFlip src={emerald} />
     </div>
    <Footer />
    </>
  );
}
