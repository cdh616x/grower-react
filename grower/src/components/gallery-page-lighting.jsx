//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import DirtItem from "./DirtItem.jsx";
import Item from "./Item.jsx";

import ushiologo from "../images/logos/ushio.png";
import hortilogo from "../images/logos/hortilux-logo.png";
import hydrologo from "../images/logos/hydrofarm.png";
import grochlogo from "../images/logos/growers-choice.png";
import gavitlogo from "../images/logos/gavita.png";
import luxxlogo from "../images/logos/luxx.png";
import phantomlogo from "../images/logos/phantom.png";

import optired from "../images/ushio/optired.png";
import optiblue from "../images/ushio/optiblue.png";

export default function GalleryPageLighting(props) {
  return (
    <>
    <Navbar />
    <h1 className="page-title">{props.pagetitle}</h1>

    <DirtItem src={ushiologo}
    href="https://www.ushio.com/leds/#led-lighting"
    producttype="HiLux Gro"
    products1="Opti-Red 1000W, 600W, 400W"
    products2="AMH Opti-Blue 1000W, 600W, 400W"
    media_img={optired}
    media_img1={optiblue} />

    <Item src={hortilogo}
    href="https://eyehortilux.com/" />

    <Item src={hydrologo}
    href=""
    producttype="Brands"
    products1="AgroSun, XtraSun" />

    <Item src={grochlogo}
    title="Grower's Choice"
    href="https://www.growersc.com/" />

    <Item src={gavitlogo}
    href="https://gavita.com/retail/" />

    <Item src={luxxlogo}
    href="https://www.luxxlighting.com/" />

    <Item src={phantomlogo}
    href="https://www.phantombio.com/" />

    <Footer />
    </>
  );
}
