//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import DirtItem from "./DirtItem.jsx";

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

import strawberry from "../images/foxfarms/strawberry-fields.png";
import ocean from "../images/foxfarms/ocean-forest.png";
import frog from "../images/foxfarms/happy-frog.png";
import dog from "../images/foxfarms/lucky-dog.png";
import kokobop from "../images/foxfarms/kokobop.png";

import greenfield from "../images/roots-organic/greenfield.png";
import greenlite from "../images/roots-organic/greenlite.png";
import sevenoseven from "../images/roots-organic/707.png";

export default function GalleryPageMedias(props) {
  return (
    <>
    <Navbar />
    <h1 className="page-title">{props.pagetitle}</h1>

    <DirtItem src={foxfalogo}
    href="https://foxfarm.com/product-category/soil-soil-conditioners"
    producttype="Brands"
    products1="Happy Frog, Strawberry Fields, Lucky Dog, Ocean Forest, KokoBop"
    producttype2="Medium Types"
    products21="Coco Coir, Perlite, Soil Conditioner, Earthworm Castings"
    media_img={frog}
    media_img1={ocean}
    media_img2={dog}
    media_img3={strawberry}
    media_img4={kokobop} />

    <DirtItem src={rootslogo}
    media_img={greenfield}
    media_img1={greenlite}
    media_img2={sevenoseven} />

    <DirtItem src={nectrlogo}
    title="Oregon's Only" />

    <DirtItem src={potgologo} />

    <DirtItem src={atamilogo} />

    <DirtItem src={promxlogo} />

    <DirtItem src={sungrlogo} />

    <DirtItem src={comailogo}
    href="https://coastofmaine.com/"
    producttype="Growing Medias"
    products1="Stonington, Lobster Compost" />

    <DirtItem src={earthlogo} />

    <DirtItem src={royallogo} />

    <DirtItem src={hydrotonlogo}
    title="Hydroton" />

    <DirtItem
    title="Wiggle Worm" />

    <Footer />
    </>
  );
}
