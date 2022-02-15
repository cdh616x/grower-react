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

import pestout from "../images/safergro/pestout.png";
import dont_bug from "../images/foxfarms/dont-bug-me.png";

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

    <Item src={saferbrandlogo}
    title="Safer Brand"
    organic={omri} />

    <PestItem src={foxlogo}
    producttype="Don't Bug Me"
    products1="Insect Spray"
    media_img={dont_bug} />

    <Item src={earjuilogo}
    producttype="goGnats Insect Control"
    products1="Alternative Liquid Concentrate" />

    <Item
    title="BioGreen" />

    <Item
    title="Monterey"
    organic={omri} />

    <Item
    title="Flying Skull Plant Products"
    organic={omri} />

    <Item
    title="Plant Wash" />

    <Item src={athenalogo} />

    <Item src={mammothlogo} />

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

    <Item src={cycologo}
    title="Cyco" />

    <Item src={ooologo}
    title="Nectar for the Gods" />

    <Footer />
    </>
  )
}
