//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import PestItem from "./PestItem.jsx";
import CloneItem from "./CloneItem.jsx";

import dynalogo from "../images/logos/dynagro.png";
import tappinlogo from "../images/logos/tappin-roots.png";
import maxilogo from "../images/logos/maxicrop.png";
import spraylogo from "../images/logos/sprayngrow.png";
import successlogo from "../images/logos/plant-success.png";
import fishlogo from "../images/logos/fishshit.png";

import kln from "../images/dynagro/kln.png";
import stages from "../images/tappin-roots/all-stages.png";
import seaweed from "../images/maxicrop/seaweed.png";
import fish from "../images/maxicrop/liquid-fish.png";
import micro from "../images/sprayngro/micronutes.png";
import orca from "../images/plant-success/orca.png";
import shark from "../images/plant-success/great-white.png";
import chum from "../images/plant-success/mycochum.png";
import fishshit from "../images/fishshit/fishpoo.png";

import omri from "../images/omri.png";


export default function GalleryPageMychrize(props) {
  return (
    <>
     <Navbar />

      <h1 className="page-title">{props.pagetitle}</h1>

      <PestItem src={dynalogo}
      href="https://dyna-gro.com/product/k-l-n-concentrate-c/"
      alt="Dyna-Gro Advanced Science Simplified"
      producttype="K-L-N Rooting Concentrate"
      media_img={kln}
      malt="Dyna-Gro Liquid K-L-N Rooting Concentrate" />

      <PestItem src={tappinlogo}
      href="https://tappinroots.com/shop/all-stages/"
      alt="Tappin' Roots"
      producttype="Natual All Stages Plant Fertilizer"
      media_img={stages}
      malt="Tappin' Roots Natural All Stages Plant Nutrients" />

      <CloneItem src={maxilogo}
      href="https://maxicrop.com/"
      alt="Ohrstrom's Maxicrop"
      producttype="Liquid Fish"
      producttype2="Liquid Seaweed"
      media_img={seaweed}
      malt="Liquid Seaweed"
      media_img1={fish}
      malt1="Liquid Fish" />

      <PestItem src={spraylogo}
      href="https://www.spray-n-growgardening.com/Spray-N-Grow-Micronutrients/products/17/"
      alt="Spray-N-Grow"
      producttype="Micronutrients"
      media_img={micro}
      malt="Spray-N-Grow Micronutrients" />

      <CloneItem src={successlogo}
      href="https://plantrevolution.com/products/orca"
      alt="Plant Success"
      producttype="Mycorrhizae"
      products1="Great White"
      products2="Orca"
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

     <Footer />
    </>
  )
}
