//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import DirtItem from "./DirtItem.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

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
    alt="Fox Farm"
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

    <ItemUpgraded src={rootslogo}
    alt="Roots Organic"
    producttype="Growing Medias"
    item="Greenfields"
    item1="Greenlight"
    item2="Formula 707"
    media_img={greenfield}
    malt="Roots Organic Greenfields"
    media_img1={greenlite}
    malt1="Roots Organic Greenlite"
    media_img2={sevenoseven}
    malt2="Roots Organic Formula 707" />

    <ItemUpgraded src={nectrlogo}
    alt="Oregon's Only"
    href="https://www.oregonsonly.com/nectar-soil-3/"
    title="Oregon's Only"
    producttype="Growing Medias"
    item100="Blend #4"
    media_img100={four}
    malt100="Oregon's Only Blend #4" />

    <DirtItem
    alt="Potter's Gold"
    title="Potter's Gold"
    producttype="Growing Media"
    products1="Premium Potting Soil"
    media_img={potgologo} />

    <ItemUpgraded src={atamilogo}
    alt="Atami"
    href="https://atami.com/brands/atami-substrates/"
    producttype="Growing Media"
    item100="Cocos Substrate"
    media_img100={atamicocs}
    malt100="Atami Cocos Substrate" />

    <ItemUpgraded src={promxlogo}
    alt="Pro Mix"
    href="https://www.hydrofarm.com/p/pro-mix-hp-chunk-coir-mycorrhizae-3-8-cu-ft/pt2038130"
    producttype="Growing Medias"
    item="HP"
    item1="BX"
    item2="HPCC"
    media_img={hp}
    malt="ProMix HP"
    media_img1={bx}
    malt1="ProMix BX"
    media_img2={cc}
    malt2="ProMix HPCC" />

    <ItemUpgraded src={sungrlogo}
    alt="SunGro Horticulture"
    href="https://www.sungro.com/retail-products/sunshine-mix-4/"
    producttype="Growing Medias"
    item="Sunshine #4"
    item1="Advanced #4"
    media_img={sun4}
    malt="Sunshine Mix #4"
    media_img1={adv4}
    malt1="Sunshine Mix #4 Advanced" />

    <ItemUpgraded src={comailogo}
    alt="Coast of Maine"
    href="https://coastofmaine.com/"
    producttype="Growing Medias"
    item="Stonington Blend"
    item1="Lobster Compost"
    media_img={stonington}
    malt="Coast of Maine Stonington Blend"
    media_img1={lobster}
    malt1="Coast of Maine Compost Blend with Lobster & Crab"
    organic={omri} />

    <ItemUpgraded src={grodanlogo}
    alt="Grodan"
    href="https://www.grodan.com/product-overview/propagation-solutions/"
    producttype="Stonewool Blocks"
    item="Hugo Block"
    item1="Delta 10 Cubes"
    item2="A-OK Cloning Plugs"
    media_img={hugo}
    malt="Grodan Hugo Block"
    media_img1={delta}
    malt1="Grodan Delta 10 Cubes"
    media_img2={clone}
    malt2="Grodan A-OK Cloning Plugs" />

    <ItemUpgraded src={earthlogo}
    alt="Mother Earth Expertly Crafted Medias & Amendments"
    href="https://www.mother-earthproducts.com/products/soils-and-amendments/"
    producttype="Growing Medias"
    item="Coco"
    item1="Terracraft & Worm Castings"
    media_img={coco}
    malt="Mother Earth Coco"
    media_img1={terracraft}
    malt1="Mother Earth Terracraft Potting Soil" />

    <ItemUpgraded src={royallogo}
    alt="Royal Gold"
    href="https://royalgoldcoco.com/soils/"
    producttype="Growing Medias"
    item="Basement Mix"
    item1="Mendo Mix"
    item2="Tupur"
    media_img={basement}
    malt="Royal Gold Basement Mix"
    media_img1={mendo}
    malt1="Royal Gold Mendo Mix"
    media_img2={tupur}
    malt2="Royal Gold Tupur" />

    <ItemUpgraded
    title="Wiggle Worm"
    producttype="Soil Supplement"
    item100="Organic Fertilizer"
    organic={omri}
    media_img100={wigglelogo}
    malt100="Wiggle Worm Pure Worm Castings" />

    <Footer />
    </>
  );
}
