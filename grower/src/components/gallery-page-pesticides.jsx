//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";

import DirtItem from "./DirtItem.jsx";
import PestItem from "./PestItem.jsx";

import omri from "../images/omri.png";

import mammothlogo from "../images/logos/mammoth.png";
import athenalogo from "../images/logos/athena.png";
import cycologo from "../images/logos/cyco-logo.png";
import ooologo from "../images/logos/ooo.png";
import saferlogo from "../images/logos/safergro.png";
import hydrologo from "../images/logos/general-hydro.png";
import saferbrandlogo from "../images/logos/safer-brand.png";
import foxlogo from "../images/logos/fox.png";
import earjuilogo from "../images/logos/earth-juice.png";
import biogreenlogo from "../images/logos/biogreen.png";
import montlogo from "../images/logos/monterey.png";
import flyinglogo from "../images/logos/flying-skull.png";
import loscoslogo from "../images/logos/lost-coast.png";

import pestout from "../images/safergro/pestout.png";
import dont_bug from "../images/foxfarms/dont-bug-me.png";
import safe_fung from "../images/safer-brand/saferbrand.png";
import bioclean from "../images/biogreen/clean.png";
import montespray from "../images/monterey/insect-spray.png";
import nuke from "../images/flying-skull/nuke.png";
import plantwash from "../images/lost-coast/plant-wash.png";
import ipm from "../images/athena/athena-pest.png";
import canncontrol from "../images/mammoth/canncontrol.png";

export default function Pesticides(props) {
  return (
    <>
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

    <PestItem src={saferlogo}
    producttype="Pest Out"
    products1="Broad spectrum Pesticide"
    organic={omri}
    media_img={pestout} />

    <Item src={hydrologo}
    producttype="Azamax"
    products1="Botanical Insecticide, Miticide, & Nematicide" />

    <PestItem src={saferbrandlogo}
    producttype="Garden Fungicide"
    products1="Spray & Concentrate"
    organic={omri}
    media_img={safe_fung} />

    <PestItem src={foxlogo}
    producttype="Don't Bug Me"
    products1="Insect Spray"
    media_img={dont_bug} />

    <Item src={earjuilogo}
    producttype="goGnats Insect Control"
    products1="Alternative Liquid Concentrate" />

    <PestItem src={biogreenlogo}
    producttype="Clean"
    products1="Natural Cleaner, Spray & Concentrate"
    media_img={bioclean} />

    <PestItem src={montlogo}
    producttype="Broad Spectrum Insecticide"
    products1="Garden Insect Spray"
    organic={omri}
    media_img={montespray} />

    <PestItem src={flyinglogo}
    producttype="Nuke Em"
    products1="Insecticide & Fungicide"
    organic={omri}
    media_img={nuke} />

    <PestItem src={loscoslogo}
    producttype="Plant Wash Concentrate"
    products1="Broad Spectrum Insecticide & Fungicide"
    media_img={plantwash}/>

    <PestItem src={athenalogo}
    producttype="IPM"
    products1="Broad Spectrum Insecticide and Pesticide"
    producttype2="Milldew Control"
    media_img={ipm} />

    <PestItem src={mammothlogo}
    producttype="CannControl"
    products1="Effective against mold, mildew, mites & insects"
    media_img={canncontrol} />

    <Item
    title="Wipe Out" />

    <Item
    title="NPK Industries" />

    <Item
    title="Regalia"
    organic={omri} />

    <Item
    title="BigTime" />

    <Item
    title="BushDoctor"
    organic={omri} />

    <Item
    title="Organicide"
    organic={omri} />

    <Item
    title="Supreme Growers" />

    <Item
    title="DynaGrow" />

    <Item
    title="Doktor Doom" />

    <Item
    title="Summit" />

    <Item
    title="Seabright Laboratories" />

    <Item
    title="Sierra Natural Science" />

    <Item
    title="The Amazing Doctor Zymes" />

    <Item
    title="General Organics" />

    <Item src={cycologo} />

    <Item src={ooologo}
    title="Nectar for the Gods" />

    <Footer />
    </>
  )
}
