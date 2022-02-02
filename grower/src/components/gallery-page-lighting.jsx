//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
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
import sunsyslogo from "../images/logos/sun-system.png";

import optired from "../images/ushio/optired.png";
import optiblue from "../images/ushio/optiblue.png";

import superhps from "../images/hortilux/superhps.png";
import blue from "../images/hortilux/blue.png";

import double from "../images/hydrofarm/double-sided.png";
import sodium from "../images/hydrofarm/sodium.png";
import white from "../images/hydrofarm/natural-white.png";
import powerveg from "../images/hydrofarm/powerveg.png";

import lec630 from "../images/sun-system/lec630.png";

import pro1000 from "../images/gavita/pro1000e.png";
import pro750 from "../images/gavita/pro750.png";

import ballast from "../images/phantom/mx.png";

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

    <DirtItem src={sunsyslogo}
    href="https://www.sunsystemlights.com/"
    producttype="Lamp & Reflector"
    products1="LEC 630 Watt Fixture"
    media_img={lec630} />

    <DirtItem src={hortilogo}
    href="https://eyehortilux.com/"
    producttype="PowerVeg Series"
    products1="420, 460, 633, 660, FS + UV"
    producttype2="Grow Lamps"
    products21="HTL Blue 1000W, 600W, 400W"
    products22="Super HPS 1000W, 600W, 400W"
    products23="MH 1000W"
    media_img={superhps}
    media_img1={blue}
    media_img2={powerveg} />

    <DirtItem src={hydrologo}
    href=""
    producttype="AgroSun"
    products1="Double-ended 750W, Red Sodium 1000W"
    producttype2="XtraSun"
    products21="Natural White 1000W, Sky Blue 400W"
    producttype3="agrobrite"
    products31="Flourescent Grow Lights"
    media_img={double}
    media_img1={sodium}
    media_img2={white} />

    <Item src={grochlogo}
    title="Grower's Choice"
    href="https://www.growersc.com/" />

    <DirtItem src={gavitlogo}
    href="https://gavita.com/retail/"
    producttype="Grow Lamp, Hardware & Reflector"
    products1="Pro 1000e DE 277-347/400"
    producttype2="Bulbs"
    products21="Pro 750 Watt Grow Lamp"
    media_img={pro1000}
    media_img1={pro750} />

    <Item src={luxxlogo}
    href="https://www.luxxlighting.com/" />

    <DirtItem src={phantomlogo}
    href="https://www.phantombio.com/"
    producttype="PhotoBio"
    products1="S4 Spectrum 340W - LED Fixture"
    media_img={ballast} />

    <Footer />
    </>
  );
}
