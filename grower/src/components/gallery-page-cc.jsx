//jshint esversion:6

import React from "react";
import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";

import ItemUpgraded from "./ItemUpgraded.jsx";

import hydrofarm from "../images/logos/anden.png";
import anden from "../images/anden/277VAC.png";

export default function CC(props) {
  return (
    <>
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

    <ItemUpgraded src={hydrofarm}
    href="https://www.anden.com/product_category/dehumidifier/"
    alt="Hydrofarm Climate Control"
    producttype="Dehumidifiers"
    media_img={anden}
    item="Anden 277VAC Dehumidifier"
    malt="Anden 277VAC Dehumidifier" />

    <Footer />
    </>
  );
}
