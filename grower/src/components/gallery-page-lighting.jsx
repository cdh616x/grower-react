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
import luxxlogo from "../images/logos/luxx.png";
import phantomlogo from "../images/logos/phantom.png";

export default function GalleryPageLighting(props) {
  return (
    <>
    <Navbar />
    <h1 className="page-title">{props.pagetitle}</h1>

    <Item src={ushiologo}
    href="https://www.ushio.com/leds/#led-lighting" />

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
