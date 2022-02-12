//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";

import DirtItem from "./DirtItem.jsx";

import omri from "../images/omri.png";

import mammothlogo from "../images/logos/mammoth.png";
import athenalogo from "../images/logos/athena.png";

export default function Pesticides(props) {
  return (
    <>
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

    <Item
    title="SaferGro"
    organic={omri} />

    <Item
    title="AzaMax" />

    <Item
    title="Safer Brand"
    organic={omri} />

    <Item
    title="goGnato" />

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
    title="Fox Farm" />

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
    title="General Hydroponics" />

    <Item
    title="General Organics" />

    <Item
    title="Cyco" />

    <Item
    title="Nectar for the Gods" />

    <Footer />
    </>
  )
}
