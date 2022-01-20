//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import GalleryItem from "./GalleryItem.jsx";
import GalleryItemFlip from "./GalleryItemFlip.jsx";
import Flip from "./GalleryFlipItem1.jsx";
import Item from "./Item.jsx";

import spartan from "../schedules/spartan.png";
import SpartanPDF from "../schedules/spartan.pdf";
import foxsched from "../schedules/fox-sched1.png";
import housesched from "../schedules/house-garden.png";
import FoxSchedule from "../schedules/fox-sched.jpeg";

import mammothlogo from "../images/logos/mammoth-recolor.png";
import nectarlogo from "../images/logos/ooo.png";
import hydrologo from "../images/logos/general-hydro.png";
import rootslogo from "../images/logos/roots-logo.png";
import foxlogo from "../images/logos/fox.png";
import millslogo from "../images/logos/mills.png";
import gaialogo from "../images/logos/gaia-green.webp";
import cycologo from "../images/logos/cyco-logo.png";
import emeraldlogo from "../images/logos/emerald-harvest.png";
import botanicarelogo from "../images/logos/botanicare-logo.png";
import hcologo from "../images/logos/hco.png";
import culturelogo from "../images/logos/current-culture-logo.png";
import houselogo from "../images/logos/house-garden.png";
import athenalogo from "../images/logos/athena.png";
import advancedlogo from "../images/logos/advanced2.png";
import ceslogo from "../images/logos/ces-logo.png";
import dtelogo from "../images/logos/dte.png";
import biobizzlogo from "../images/logos/biobizz-logo-dark.png";
import vegalogo from "../images/logos/vegamatrix.png";
import heavylogo from "../images/logos/heavy16logo.png";

export default function GalleryPage(props) {
  return(
    <>
    <div className="gallery">
    <Navbar />
    <h1 className="page-title">{props.pagetitle}</h1>

     <Item src={nectarlogo}
     title="Nectar for the Gods"
     href="https://www.oregonsonly.com/nectar-for-the-gods-products/"
     producttype="Liquid Nutrients"
     products1="Medusa's Magic, Gaia Mania, Athena's Aminas, Demeter's Destiny, Hygeia's Hydration"
     products2="Olympus Up, The Kraken, Mega Morpheus, Zeus Juice Herculean Harvest, Aphrodite's Extraction"
     products3="Poseidonzime, Triton's Trawl, Pegasus Potion, Persephone's Palate, Bloom Khaos, Hades Down"
     producttype2="Granular Nutrients"
     products21="One Shot from the Gods"
     schedulehref={SpartanPDF}
     schedule={spartan} />

     <Item src={mammothlogo}
     title="Mammoth P"
     href="https://mammothmicrobes.com/product/mammoth-p/"
     producttype="Liquid Nutrients"
     products1="Mammoth P, Mammoth Canncontrol, Mammoth SI"
     products2="Mammoth Starter Plugs, Mammoth Biocontrol-PI" />

     <Item src={foxlogo}
     href="https://foxfarm.com/product-category/liquid-fertilizers"
     producttype="Brands"
     products1="Fox Farms, Tiger Bloom, Cultivation Nation, Bush Doctor"
     producttype2="Liquid Nutrients"
     products21="Grow, Micro, Bloom, Bembé, Boomerang, Flower's Kiss, Kangaroots"
     products22="Kelp Me Kelp You, CalMag, Liquid Iron, Manganese, Microbe Brew"
     products23="Wholly Mackerel, Soil Liquid Trio Pack, Hydro Liquid Trio Pack"
     schedulehref={FoxSchedule}
     schedule={foxsched} />

     <Item src={emeraldlogo}
     href="https://www.emeraldharvest.co/"
     producttype="Liquid Nutrients"
     products1="Cali Pro, Grow Micro Bloom, Honey Chome, Root Wizard"
     products2="Sturdy Stalk, Hydra Clear, Emerald Goddess, King Kola" />

     <Item src={houselogo}
     href="https://house-garden.us/"
     producttype="Liquid Nutrients"
     products1="Aqua Flakes A&B, Hydro A&B, Cocos A&B, Soil A&B"
     products2="Bio 1-Component, 1-Component"
     producttype2="Additives"
     products21="Multi Zen, Drip Clean, Roots Excelurator, Magin Green, Starter Kits"
     products22="Algen Extract, Amino Treatment, Nitrogen Boost Bud-XL, Rhizo Force"
     products23="Top Booster, Shooting Powder, Top Shooter, PH Stabilizer, Magnesium Boost"
     schedulehref="https://house-garden.us/feeding-schedules/"
     schedule={housesched} />

     <Item src={advancedlogo}
     href="https://www.advancednutrients.com/products/all-products/" />

     <Item src={athenalogo}
     href="https://www.athenaproducts.com/pro-line?page=1" />

     <Item src={gaialogo}
     href="https://www.gaiagreen.com/" />

     <Item src={hydrologo}
     href="https://generalhydroponics.com/products/categories/nutrients/" />

     <Item src={rootslogo}
     href="https://www.aurorainnovations.com/roots-organics-liquid-nutrients" />

     <Item src={dtelogo}
     href="https://downtoearthfertilizer.com/" />

     <Item src={biobizzlogo}
     href="https://www.biobizz.com/products/" />

     <Item src={vegalogo}
     href="https://purelifeveganix.com/" />

     <Item src={millslogo}
     href="https://millsnutrients.com/" />

     <Item src={heavylogo}
     href="https://www.heavy16.com/products/" />

     <Item src={cycologo}
     href="https://cycoflower.com/usa/#" />

     <Item src={botanicarelogo}
     href="https://www.botanicare.com/nutrients/" />

     <Item src={ceslogo}
     href="https://cuttingedgesolutions.com/nutrients/" />

     <Item src={culturelogo}
     href="https://cch2o.com/cultured-solutions-premium-hydroponic-nutrients/" />

     <Item src={hcologo}
     href="https://humboldtcountysown.com/" />

    <Footer />
    </div>
    </>
  );
}
