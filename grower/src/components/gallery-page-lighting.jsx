//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import DirtItem from "./DirtItem.jsx";
import LightItem from "./LightItem.jsx";
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
import qt1000 from "../images/hydrofarm/qt1000.png";

import lec630 from "../images/sun-system/lec630.png";
import dominator from "../images/sun-system/dominator.png";

import pro1000 from "../images/gavita/pro1000e.png";
import pro750 from "../images/gavita/pro750.png";
import e1700 from "../images/gavita/1700e.png";
import e1930 from "../images/gavita/1930e.png";

import ballast from "../images/phantom/mx.png";
import phb2010 from "../images/phantom/phb2010.png";

import roi2 from "../images/growers-choice/roi2001.png";
import roi6 from "../images/growers-choice/roi680.png";
import roi7 from "../images/growers-choice/roi720.png";

export default function GalleryPageLighting(props) {
  return (
    <>
    <Navbar />
    <h1 className="page-title">{props.pagetitle}</h1>

    <LightItem src={ushiologo}
    href="https://www.ushio.com/leds/#led-lighting"
    producttype="HiLux Gro"
    products1="Opti-Red 1000W, 600W, 400W"
    products2="AMH Opti-Blue 1000W, 600W, 400W"
    media_img={optired}
    media_img1={optiblue} />

    <LightItem src={sunsyslogo}
    href="https://www.sunsystemlights.com/"
    producttype="Lamp & Reflector"
    products1="LEC 630 Watt Fixture"
    products2="Dominator XXL"
    media_img={lec630}
    media_img1={dominator} />

    <LightItem src={hortilogo}
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

    <LightItem src={hydrologo}
    href=""
    producttype="AgroSun"
    products1="Double-ended 750W, Red Sodium 1000W"
    producttype2="XtraSun"
    products21="Natural White 1000W, Sky Blue 400W"
    producttype3="agrobrite"
    products31="Flourescent Grow Lights"
    producttype4="Quantum"
    products41="600W Digital Ballast, 1000W Digital Ballast"
    media_img={double}
    media_img1={sodium}
    media_img2={white}
    media_img3={qt1000} />

    <LightItem src={grochlogo}
    title="Grower's Choice"
    href="https://www.growersc.com/"
    producttype="LED Fixtures"
    products1="LED 720W, LED 680W, LED 200W"
    media_img={roi7}
    media_img1={roi6}
    media_img2={roi2} />

    <LightItem src={gavitlogo}
    href="https://gavita.com/retail/"
    producttype="LEDs and Fixtures"
    products1="Gavita Pro 1700e LED"
    products2="CT1930e LED"
    producttype2="Grow Lamp, Hardware & Reflector"
    products21="Pro 1000e DE 277-347/400"
    products22="Pro 750 Watt Grow Lamp"
    media_img={e1700}
    media_img1={e1930}
    media_img2={pro1000}
    media_img3={pro750} />

    <Item src={luxxlogo}
    href="https://www.luxxlighting.com/" />

    <LightItem src={phantomlogo}
    href="https://www.phantombio.com/"
    producttype="PhotoBio"
    products1="S4 Spectrum 680W - LED Fixture"
    products2="Phantom II Digital Ballast"
    media_img={ballast}
    media_img1={phb2010} />

    <Footer />
    </>
  );
}
