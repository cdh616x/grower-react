//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import LightItem from "./LightItem.jsx";
import Item from "./Item.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

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

    <ItemUpgraded src={gavitlogo}
    alt="Gavita"
    href="https://gavita.com/retail/"
    producttype="LEDs and Fixtures"
    item="Gavita Pro 1700e LED"
    item1="CT1930e LED"
    producttype2="Grow Lamp, Hardware & Reflector"
    item2="Pro 1000e DE 277-347/400"
    item3="Pro 750 Watt Grow Lamp"
    media_img={e1700}
    media_img1={e1930}
    media_img2={pro1000}
    media_img3={pro750} />

    <ItemUpgraded src={grochlogo}
    alt="Grower's Choice"
    title="Grower's Choice"
    href="https://www.growersc.com/"
    producttype="LED Fixtures"
    item="LED 720W"
    item1="LED 680W"
    item2="LED 200W"
    media_img={roi7}
    media_img1={roi6}
    media_img2={roi2} />

    <ItemUpgraded src={phantomlogo}
    alt="Phantom Bio"
    href="https://www.phantombio.com/"
    producttype="PhotoBio"
    item="S4 Spectrum 680W - LED Fixture"
    item1="Phantom II Digital Ballast"
    media_img={ballast}
    media_img1={phb2010} />

    <ItemUpgraded src={ushiologo}
    alt="USHIO"
    href="https://www.ushio.com/leds/#led-lighting"
    producttype="HiLux Gro Lamps"
    item="Opti-Red 1000W, 600W, 400W"
    item1="AMH Opti-Blue 1000W, 600W, 400W"
    media_img={optired}
    media_img1={optiblue} />

    <ItemUpgraded src={sunsyslogo}
    alt="Sun System"
    href="https://www.sunsystemlights.com/"
    producttype="Lamps & Reflectors"
    item="LEC 630 Watt Fixture"
    item1="Dominator XXL"
    media_img={lec630}
    media_img1={dominator} />

    <ItemUpgraded src={hortilogo}
    alt="Hortilux"
    href="https://eyehortilux.com/"
    producttype="PowerVeg Series"
    item="420, 460, 633, 660, FS + UV"
    producttype2="Grow Lamps"
    item1="HTL Blue 1000W, 600W, 400W"
    item2="Super HPS 1000W, 600W, 400W"
    item3="MH 1000W"
    media_img={powerveg}
    media_img1={blue}
    media_img2={superhps} />

    <ItemUpgraded src={hydrologo}
    href="https://www.hydrofarm.com/lighting"
    alt="Hydrofarm"
    producttype="AgroSun"
    item="Double-ended 750W, Red Sodium 1000W"
    producttype2="XtraSun"
    item2="Natural White 1000W, Sky Blue 400W"
    producttype3="agrobrite"
    products31="Flourescent Grow Lights"
    producttype4="Quantum"
    item3="600W Digital Ballast, 1000W Digital Ballast"
    media_img={double}
    media_img1={sodium}
    media_img2={white}
    media_img3={qt1000} />

    <Item src={luxxlogo}
    href="https://www.luxxlighting.com/" />

    <Footer />
    </>
  );
}
