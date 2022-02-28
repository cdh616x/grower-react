//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import PestItem from "./PestItem.jsx";

import ooologo from "../images/logos/ooo.png";
import cycologo from "../images/logos/cyco-logo.png";
import genhydrologo from "../images/logos/general-hydro.png";

import cycoph from "../images/cyco/ph.png";
import olympus from "../images/nectar/olympus.png";
import phupdown from "../images/general-hydroponics/ph-products.png";

export default function GalleryPagePH(props) {
  return (
    <>
     <Navbar />
      <h1 className="page-title">{props.pagetitle}</h1>

      <PestItem src={cycologo}
      alt="Cyco Platinum Series Pharmaceutical Grade Ingredients"
      producttype="PH UP & PH DOWN"
      href="https://cycoflower.com/usa/ph-up-down/"
      media_img={cycoph}
      malt="Cyco Platinum Series pH Up & Down" />

      <PestItem src={ooologo}
      href="https://www.oregonsonly.com/olympus-up/"
      alt="Oregon's Only Nectar for the Gods"
      title="Nectar for the Gods"
      producttype="Olympus Up"
      products1="PH Increaser (Basify)"
      producttype2="Hades Down"
      products21="PH Decreaser (Acidify)"
      media_img={olympus}
      malt="Olympus Up & Hades Down Fertilizer" />

      <PestItem src={genhydrologo}
      alt="General Hydroponics"
      producttype="PH Up & PH Down"
      href="https://generalhydroponics.com/products/categories/maintenance/"
      media_img={phupdown} />

     <Footer />
    </>
  )
}
