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

import superhps from "../images/hortilux/superhps.png";
import blue from "../images/hortilux/blue.png";

import double from "../images/hydrofarm/double-sided.png";
import sodium from "../images/hydrofarm/sodium.png";
import white from "../images/hydrofarm/natural-white.png";

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

    <DirtItem src={hortilogo}
    href="https://eyehortilux.com/"
    producttype="PowerVeg Series - 420, 460, 633, 660, FS + UV"
    producttype2="Grow Lamps"
    products21="HTL Blue 1000W, 600W, 400W"
    products22="Super HPS 1000W, 600W, 400W"
    products23="MH 1000W"
    media_img={superhps}
    media_img1={blue} />

    <DirtItem src={hydrologo}
    href=""
    producttype="AgroSun"
    products1="Double-ended 750W, Red Sodium 1000W"
    producttype2="XtraSun"
    products21="Natural White 1000W, Sky Blue 400W"
    media_img={double}
    media_img1={sodium}
    media_img2={white} />

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
