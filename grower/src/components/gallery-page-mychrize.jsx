//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import PestItem from "./PestItem.jsx";
import CloneItem from "./CloneItem.jsx";

import successlogo from "../images/logos/plant-success.png";
import fishlogo from "../images/logos/fishshit.png";
import realgrowlogo from "../images/logos/real-growers.png";
import elitelogo from "../images/logos/elite91.png";
import supgrologo from "../images/logos/supreme.png";
import xtremelogo from "../images/logos/xtreme-gardening.png";

import orca from "../images/plant-success/orca.png";
import shark from "../images/plant-success/great-white.png";
import chum from "../images/plant-success/mycochum.png";
import fishshit from "../images/fishshit/fishpoo.png";
import recharge from "../images/real-growers/recharge.png";
import jordan from "../images/elite91/myco-jordan.png";
import tea from "../images/supreme/tea.png";
import azos from "../images/xtreme-gardening/azos.png";
import mykos from "../images/xtreme-gardening/mykos.png";
import mykoswp from "../images/xtreme-gardening/mykos-wp.png";

import omri from "../images/omri.png";


export default function GalleryPageMychrize(props) {
  return (
    <>
     <Navbar />

      <h1 className="page-title">{props.pagetitle}</h1>

      <CloneItem src={successlogo}
      href="https://plantrevolution.com/products/orca"
      alt="Plant Success"
      producttype="Mycorrhizae"
      products1="Great White"
      products2="Orca"
      products3="Myco Chum"
      media_img={orca}
      malt="Orca Premium Liquid Mycorrhizae"
      media_img1={shark}
      malt1="Great White Premium Mycorrhizae"
      media_img2={chum}
      malt2="Myco Chum Premium Microbe Food" />

      <PestItem src={fishlogo}
      organic={omri}
      href="https://fishheadfarms.com/"
      alt="Fish Sh!t Organic Soil Fertilizer"
      producttype="Organic Soil Conditioner"
      media_img={fishshit}
      malt="Fish Sh!t Organic Soil Fertilizer" />

      <PestItem src={realgrowlogo}
      alt="Real Growers"
      href="https://www.realgrowers.com/"
      producttype="Microbes"
      products1="Recharge"
      media_img={recharge}
      malt="Real Growers Recharge Professional Strength Microbial Superpack" />

      <PestItem src={elitelogo}
      alt="Elite 91 - Ideal Plant Nutrients"
      href="https://elite91.com/product/professional-mycorrhizal-inoculant/"
      producttype="Myco Jordan"
      media_img={jordan}
      malt="Myco Jordan Professional Mycorrhizal Inoculant" />

      <PestItem src={supgrologo}
      alt="Supreme Growers"
      href="https://supremegrowers.us/supre-myco-tea-5-gram-stick-bundle-makes-5-ready-to-use-gallons.html"
      producttype="Sweet Myco Tea Sachets"
      media_img={tea}
      malt="Sweet Myco Tea Sachet" />

      <CloneItem src={xtremelogo}
      organic={omri}
      alt="Xtreme Gardening"
      href="https://www.xtreme-gardening.com/products"
      producttype="Mycorrhizae"
      products1="Azos Growth Promoting Bacteria"
      products2="Mykos Mycorrhizal Inoculants"
      products3="Mykos WP - Wettable Powder"
      media_img={azos}
      malt="Azos Growth Promoting Bacteria"
      media_img1={mykos}
      malt1="Mykos Mycorrhizal Inoculants"
      media_img2={mykoswp}
      malt2="Mykos WP Wettable Powder" />

     <Footer />
    </>
  )
}
