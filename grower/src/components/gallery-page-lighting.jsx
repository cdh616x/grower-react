//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";

import ushiologo from "../images/logos/ushio.png";
import hortilogo from "../images/logos/hortilux-logo.png";
import hydrologo from "../images/logos/hydrofarm.png";
import grochlogo from "../images/logos/growers-choice.png";
import gavitlogo from "../images/logos/gavita.png";
import luxlogo from "../images/logos/lux.png";
import phantomlogo from "../images/logos/phantom.png";

export default function GalleryPageLighting(props) {
  return (
    <>
    <Navbar />
    <h1 className="page-title">{props.pagetitle}</h1>

    <Item src={ushiologo} />

    <Item src={hortilogo} />

    <Item src={hydrologo}
    href=""
    producttype="Brands"
    products1="AgroSun, XtraSun" />

    <Item src={grochlogo}
    title="Grower's Choice" />

    <Item src={gavitlogo} />

    <Item src={luxlogo} />

    <Item src={phantomlogo} />

    <Footer />
    </>
  );
}
