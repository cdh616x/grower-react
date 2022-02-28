//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";
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
import npklogo from "../images/logos/npk.png";
import marronelogo from "../images/logos/marrone.png";
import bigtimelogo from "../images/logos/bigtime.png";
import supremelogo from "../images/logos/supreme.png";
import dynalogo from "../images/logos/dynagro.png";
import orglablogo from "../images/logos/organic-labs.png";
import doomlogo from "../images/logos/doom.png";
import summitlogo from "../images/logos/summit.gif";
import seabrightlogo from "../images/logos/seabright.png";
import snslogo from "../images/logos/sns.png";
import zymeslogo from "../images/logos/zymes.png";

import pestout from "../images/safergro/pestout.png";
import dont_bug from "../images/foxfarms/fox-pesticide.png";
import safe_fung from "../images/safer-brand/saferbrand.png";
import bioclean from "../images/biogreen/clean.png";
import montespray from "../images/monterey/insect-spray.png";
import nuke from "../images/flying-skull/nuke.png";
import plantwash from "../images/lost-coast/plant-wash.png";
import ipm from "../images/athena/athena-pest.png";
import canncontrol from "../images/mammoth/canncontrol.png";
import azamax from "../images/general-hydroponics/azamax1.png";
import gognats from "../images/earth-juice/gognats.png";
import npk from "../images/npk-industries/npk-industries.png";
import regalia from "../images/regalia/fungicide.png";
import exterminator from "../images/bigtime/exterminator.png";
import banish_smite from "../images/supreme/supreme-bottles.png";
import neemoil from "../images/dynagro/neem.png";
import organicide from "../images/organicide/organicide.png";
import dokdoom from "../images/doom/doktor-doom.png";
import musquito from "../images/summit/musquito.png";
import sticky from "../images/seabright/sticky-traps.png";
import sns from "../images/sns/sns-prod.png";
import eliminator from "../images/zymes/eliminator1.png";
import cycoph from "../images/cyco/ph.png";
import olympus from "../images/nectar/olympus.png";

export default function Pesticides(props) {
  return (
    <>
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

    <PestItem src={saferlogo}
    href="https://safergro.com/products/pest-out"
    producttype="Pest Out"
    products1="Broad spectrum Pesticide"
    organic={omri}
    media_img={pestout} />

    <PestItem src={hydrologo}
    href="https://generalhydroponics.com/products/azamax/"
    producttype="Azamax"
    products1="Botanical Insecticide, Miticide, & Nematicide"
    media_img={azamax} />

    <PestItem src={saferbrandlogo}
    href="https://www.saferbrand.com/store/garden/plant-disease-prevention-fungicide"
    producttype="Garden Fungicide"
    products1="Spray & Concentrate"
    organic={omri}
    media_img={safe_fung} />

    <PestItem src={foxlogo}
    href="https://foxfarm.com/product/dont-bug-me-insecticide"
    producttype="Don't Bug Me"
    products1="Insect Spray"
    producttype2="BushDoctor: Force of Nature"
    products21="OMRI Listed Fungicide"
    media_img={dont_bug} />

    <PestItem src={earjuilogo}
    href="https://www.earthjuice.com/products/gognats-liquid-poison-free-pest-control"
    producttype="goGnats Insect Control"
    products1="Alternative Liquid Concentrate"
    media_img={gognats} />

    <PestItem src={biogreenlogo}
    href="https://biogreenclean.com/"
    producttype="Clean"
    products1="Natural Cleaner, Spray & Concentrate"
    media_img={bioclean} />

    <PestItem src={montlogo}
    href="https://www.montereylawngarden.com/product/monterey-garden-insect-spray/"
    producttype="Broad Spectrum Insecticide"
    products1="Garden Insect Spray"
    organic={omri}
    media_img={montespray} />

    <PestItem src={flyinglogo}
    href="https://www.flyingskull.net/NukeEm.html"
    producttype="Nuke Em"
    products1="Insecticide & Fungicide"
    organic={omri}
    media_img={nuke} />

    <PestItem src={loscoslogo}
    href="https://www.lostcoastplanttherapy.com/collections/home-page"
    producttype="Plant Wash Concentrate"
    products1="Broad Spectrum Insecticide & Fungicide"
    media_img={plantwash}/>

    <PestItem src={athenalogo}
    href="https://www.athenaproducts.com/ipm"
    producttype="IPM"
    products1="Broad Spectrum Insecticide and Pesticide"
    producttype2="Mildew Control"
    media_img={ipm} />

    <PestItem src={mammothlogo}
    href="https://mammothmicrobes.com/product/mammoth-canncontrol/"
    producttype="CannControl"
    products1="Effective against mold, mildew, mites & insects"
    media_img={canncontrol} />

    <Item
    title="Wipe Out" />

    <PestItem src={npklogo}
    href="https://npk-industries.com/collections/controls"
    producttype="Mighty"
    products1="Spider Miticide Concentrate"
    producttype2="PM Wash"
    products21="Plant Cleaner Concentrate"
    media_img={npk} />

    <PestItem src={marronelogo}
    href="https://marronebio.com/products/regalia/"
    producttype="Regalia"
    products1="Bio-Fungicide"
    organic={omri}
    media_img={regalia} />

    <PestItem src={bigtimelogo}
    producttype="Exterminator"
    products1="Pesticide Concentrate"
    href="https://bigtimezyme.com/shop/product/exterminator/"
    media_img={exterminator} />

    <PestItem src={orglablogo}
    href="https://organiclabs.com/o/organocide-bee-safe-3-in-1-garden-spray/"
    producttype="BeeSafe 3-1 Pesticide"
    products1="Spray & Concentrate"
    producttype2="Plant Doctor"
    products21="Systemic Fungicide"
    organic={omri}
    media_img={organicide} />

    <PestItem src={supremelogo}
    href="https://supremegrowers.us/natural-pesticides.html"
    producttype="Banish"
    products1="Fungicide Concentrate"
    producttype2="Smite"
    products21="Spider Miticide Concentrate"
    media_img={banish_smite} />

    <PestItem src={dynalogo}
    href="https://dyna-gro.com/product/neem-oil/"
    producttype="Neem Oil"
    products1="Leaf Polish"
    media_img={neemoil} />

    <PestItem src={doomlogo}
    href="https://www.hawthornegc.com/shop/bybrand/doktor-doom"
    producttype="Sprays"
    products1="Total Release Fogger, Spider Mite Knock-Out"
    producttype2="Formula 420"
    products21="Professional 3-1 Pesticide Concentrate"
    media_img={dokdoom} />

    <PestItem src={summitlogo}
    href="https://summitchemical.com/mosquito-solutions/"
    producttype="Mosquito Solutions"
    products1="Mosquito Dunks"
    products2="Musquito Bits"
    media_img={musquito} />

    <PestItem src={seabrightlogo}
    href="https://www.seabrightlabs.com/"
    producttype="Sticky Insect Traps"
    products1="Aphid/Whitefly Paper"
    products2="Thrip/Leafminer Paper"
    media_img={sticky} />

    <PestItem src={snslogo}
    href="https://sierranaturalscience.com/shopping/"
    producttype="OMRI Listed Pesticides"
    products1="203 Root Drench"
    products2="209 Systemic Pest Control"
    products3="217c Spider Mite Control"
    organic={omri}
    media_img={sns} />

    <PestItem src={zymeslogo}
    href="https://doctorzymes.com/pesticide-free-insecticide.php"
    producttype="Eliminator"
    products1="Insecticide & Fungicide Concentrate"
    products2="Insecticide & Fungicide Spray"
    media_img={eliminator} />

    <Footer />
    </>
  )
}
