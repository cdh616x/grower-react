//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";

import foxfalogo from "../images/logos/fox.png";
import rootslogo from "../images/logos/roots-logo.png";
import nectrlogo from "../images/logos/ooo.png";
import potgologo from "../images/logos/potters-gold.png";
import atamilogo from "../images/logos/atami-logo.png";
import promxlogo from "../images/logos/promix.png";
import sungrlogo from "../images/logos/sungro.png";
import comailogo from "../images/logos/com.png";
import earthlogo from "../images/logos/mother-earth.png";
import royallogo from "../images/logos/royal-gold.png";
import hydrotonlogo from "../images/logos/hydroton.png";

export default function GalleryPageMedias(props) {
  return (
    <>
    <Navbar />
    <h1 className="page-title">{props.pagetitle}</h1>

    <Item src={foxfalogo}
    href="https://foxfarm.com/product-category/soil-soil-conditioners"
    producttype="Brands"
    products1="Happy Frog, Strawberry Fields, Salamander Soil, Lucky Dog, Bushdoctor"
    producttype2="Medium Types"
    products21="Coco Coir, Perlite, Soil Conditioner, Earthworm Castings" />

    <Item src={rootslogo} />

    <Item src={nectrlogo}
    title="Oregon's Only" />

    <Item src={potgologo} />

    <Item src={atamilogo} />

    <Item src={promxlogo} />

    <Item src={sungrlogo} />

    <Item src={comailogo} />

    <Item src={earthlogo} />

    <Item src={royallogo} />

    <Item src={hydrotonlogo}
    title="Hydroton" />

    <Footer />
    </>
  );
}
