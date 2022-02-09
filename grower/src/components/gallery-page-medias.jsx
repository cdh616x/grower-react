//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import DirtItem from "./DirtItem.jsx";

import omri from "../images/omri.png";

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
import wigglelogo from "../images/logos/wiggle-worm.png";
import grodanlogo from "../images/logos/grodan.png";

import strawberry from "../images/foxfarms/strawberry-fields.png";
import ocean from "../images/foxfarms/ocean-forest.png";
import frog from "../images/foxfarms/happy-frog.png";
import dog from "../images/foxfarms/lucky-dog.png";
import kokobop from "../images/foxfarms/kokobop.png";

import greenfield from "../images/roots-organic/greenfield.png";
import greenlite from "../images/roots-organic/greenlite.png";
import sevenoseven from "../images/roots-organic/707.png";

import four from "../images/nectar/number-four.png";

import basement from "../images/royal-gold/basement-mix.png";
import mendo from "../images/royal-gold/mendo-mix.png";
import tupur from "../images/royal-gold/tupur.png";

import stonington from "../images/coast-of-maine/stonington.png";
import lobster from "../images/coast-of-maine/lobster.png";

import coco from "../images/mother-earth/coco.png";
import terracraft from "../images/mother-earth/terracraft.png";

import bx from "../images/pro-mix/bx.png";
import hp from "../images/pro-mix/hp.png";
import cc from "../images/pro-mix/hpcc.png";

import sun4 from "../images/sun-gro/sunshine4.png";
import adv4 from "../images/sun-gro/advanced4.png";

import atamicocs from "../images/atami/cocos.png";

import clone from "../images/grodan/clone.png";
import delta from "../images/grodan/delta.png";
import hugo from "../images/grodan/hugo.png";
import mini from "../images/grodan/mini.png";

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
    producttype="Growing Medias"
    products1="Greenfields"
    products2="Greenlight"
    products3="Formula 707"
    media_img={greenfield}
    media_img1={greenlite}
    media_img2={sevenoseven} />

    <DirtItem src={nectrlogo}
    href="https://www.oregonsonly.com/nectar-soil-3/"
    title="Oregon's Only"
    producttype="Growing Medias"
    products1="Blend #4"
    media_img={four} />

    <DirtItem
    title="Potter's Gold"
    producttype="Growing Media"
    products1="Premium Potting Soil"
    media_img={potgologo} />

    <DirtItem src={atamilogo}
    href="https://atami.com/brands/atami-substrates/"
    producttype="Growing Media"
    products1="Cocos Substrate"
    media_img={atamicocs} />

    <DirtItem src={promxlogo}
    href="https://www.hydrofarm.com/p/pro-mix-hp-chunk-coir-mycorrhizae-3-8-cu-ft/pt2038130"
    producttype="Growing Medias"
    products1="HP"
    products2="BX"
    products3="HPCC"
    media_img={hp}
    media_img1={bx}
    media_img2={cc} />

    <DirtItem src={sungrlogo}
    href="https://www.sungro.com/retail-products/sunshine-mix-4/"
    producttype="Growing Medias"
    products1="Sunshine #4"
    products2="Advanced #4"
    media_img={sun4}
    media_img1={adv4} />

    <DirtItem src={comailogo}
    href="https://coastofmaine.com/"
    producttype="Growing Medias"
    products1="Stonington"
    products2="Lobster Compost"
    media_img={stonington}
    media_img1={lobster}
    organic={omri} />

    <DirtItem src={grodanlogo}
    href="https://www.grodan.com/product-overview/propagation-solutions/"
    producttype="Stonewool Blocks"
    products1="Hugo Block, Delta 10 Cubes, Mini Cubes"
    products2="A-OK Cloning Plugs"
    media_img={hugo}
    media_img1={delta}
    media_img2={clone} />

    <DirtItem src={earthlogo}
    href="https://www.mother-earthproducts.com/products/soils-and-amendments/"
    producttype="Growing Medias"
    products1="Coco"
    products2="Terracraft & Worm Castings"
    media_img={coco}
    media_img1={terracraft} />

    <DirtItem src={royallogo}
    href="https://royalgoldcoco.com/soils/"
    producttype="Growing Medias"
    products1="Mendo Mix"
    products2="Basement Mix"
    products3="Tupur"
    media_img={basement}
    media_img1={mendo}
    media_img2={tupur} />

    <DirtItem
    title="Wiggle Worm"
    producttype="Soil Supplement"
    products1="Wiggle Worm"
    organic={omri}
    media_img={wigglelogo} />

    <Footer />
    </>
  );
}
