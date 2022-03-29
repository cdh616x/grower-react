//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";
import PestItem from "./PestItem.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

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

import safeSpray from "../images/safer-brand/spray.png";
import safeConc from "../images/safer-brand/concentrate.png";

import dntBugMe from "../images/foxfarms/dont-bug-me.png";
import bshDoctr from "../images/foxfarms/bushdoctor.png";

import spr_Conc from "../images/biogreen/spray-and-concentrate.png";

import ipm from "../images/athena/ipm.png";
import athMild from "../images/athena/mildew.png";

import mighty from "../images/npk-industries/mighty.png";
import wash from "../images/npk-industries/wash.png";

import montespray from "../images/monterey/insect-spray.png";
import nuke from "../images/flying-skull/nuke.png";
import plantwash from "../images/lost-coast/plant-wash.png";
import canncontrol from "../images/mammoth/canncontrol.png";
import azamax from "../images/general-hydroponics/azamax1.png";
import gognats from "../images/earth-juice/gognats.png";

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

    <ItemUpgraded src={saferlogo}
    organic={omri}
    href="https://safergro.com/products/pest-out"
    alt="SaferGro Online Store"
    producttype="Broad Spectrum Pesticide"
    item100="Pest Out"
    media_img100={pestout}
    malt100="Safer Gro Pest Out Broad Spectrum Pesiticide" />

    <ItemUpgraded src={hydrologo}
    organic={omri}
    href="https://generalhydroponics.com/products/azamax/"
    producttype="Botanical Pesticide"
    item100="Azamax"
    media_img100={azamax}
    malt100="Azamax Botanical Pesticide from HydroFarm" />

    <ItemUpgraded src={saferbrandlogo}
    organic={omri}
    href="https://www.saferbrand.com/store/garden/plant-disease-prevention-fungicide"
    alt="Safer Brand"
    producttype="Garden Fungicide"
    item="Fungicide Spray"
    media_img={safeSpray}
    malt="Safer Brand Garden Fungicide Spray"
    item1="Fungicide Concentrate"
    media_img1={safeConc}
    malt1="Safer Brand Garden Fungicide Concentrate" />

    <ItemUpgraded src={foxlogo}
    organic={omri}
    alt="Fox Farm"
    href="https://foxfarm.com/product/dont-bug-me-insecticide"
    producttype="Fungicide | Insecticide"
    item="Don't Bug Me Spray"
    media_img={dntBugMe}
    malt="Fox Farm Don't Bug Me Insect Spray"
    item1="Force of Nature"
    media_img1={bshDoctr}
    malt1="Bush Doctor Force of Nature Fungicide" />

    <ItemUpgraded src={earjuilogo}
    href="https://www.earthjuice.com/products/gognats-liquid-poison-free-pest-control"
    alt="Earth Juice"
    producttype="Insecticide"
    item100="GoGnats Liquid Insect Control"
    media_img100={gognats}
    malt100="Earth Juice GoGnats Liquid Insect Control" />

    <ItemUpgraded src={biogreenlogo}
    href="https://biogreenclean.com/"
    alt="Bio Green Clean - World's Toughest All Natural Cleaner"
    producttype="Multipurpose Equipment Cleaner"
    item100="Spray & Concentrate"
    media_img100={spr_Conc}
    malt100="Bio Green Clean - Spray and Concentrate" />

    <ItemUpgraded src={montlogo}
    organic={omri}
    alt="Monterey Lawn & Garden"
    href="https://www.montereylawngarden.com/product/monterey-garden-insect-spray/"
    producttype="Broad Spectrum Insecticide"
    item100="Garden Insect Spray"
    media_img100={montespray}
    malt100="Monterey Lawn & Garden Garden Insect Spray" />

    <ItemUpgraded src={flyinglogo}
    organic={omri}
    href="https://www.flyingskull.net/NukeEm.html"
    alt="Flying Skull Plant Products"
    producttype="Insecticide & Fungicide"
    item100="Nuke Em"
    media_img100={nuke}
    malt100="Flying Skull Plant Products Nuke Em Insectice & Fungicide" />

    <ItemUpgraded src={loscoslogo}
    href="https://www.lostcoastplanttherapy.com/collections/home-page"
    alt="Lost Coast Plant Therapy"
    item100="Plant Wash Concentrate"
    producttype="Broad Spectrum Insecticide & Fungicide"
    media_img100={plantwash}
    malt100="Lost Coast Plant Therapy Plant Wash Concentrate" />

    <ItemUpgraded src={athenalogo}
    href="https://www.athenaproducts.com/ipm"
    alt="Athena"
    producttype="Garden Threat Control"
    item="IPM"
    media_img={ipm}
    malt="Athena IPM"
    item1="Mildew Control"
    media_img1={athMild}
    malt1="Athena Mildew Control" />

    <ItemUpgraded src={mammothlogo}
    href="https://mammothmicrobes.com/product/mammoth-canncontrol/"
    alt="Mammoth"
    producttype="Pesticide & Fungicide"
    item100="CannControl"
    media_img100={canncontrol}
    malt100="Mammoth CannControl" />

    <Item
    title="Wipe Out" />

    <ItemUpgraded src={npklogo}
    href="https://npk-industries.com/collections/controls"
    alt="NPK Industries"
    producttype="Garden Control"
    item="Spider Miticide Concentrate"
    media_img={mighty}
    malt="NPK Industries Mighty"
    item1="Plant Cleaner Concentrate"
    media_img1={wash}
    malt1="NPK Industries PM Wash" />

    <ItemUpgraded src={marronelogo}
    organic={omri}
    href="https://marronebio.com/products/regalia/"
    alt="Marrone Bio Innovations"
    producttype="Bio-Fungicide"
    item100="Bio-Fungicide"
    media_img100={regalia}
    malt100="Marrone Bio Innovations Regalia" />

    <ItemUpgraded src={bigtimelogo}
    producttype="Pesticide Concentrate"
    alt="Big Time"
    item100="Exterminator"
    href="https://bigtimezyme.com/shop/product/exterminator/"
    media_img100={exterminator}
    malt100="Big Time Exterminator" />

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
