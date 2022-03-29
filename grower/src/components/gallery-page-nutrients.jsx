//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";
import PestItem from "./PestItem.jsx";
import CloneItem from "./CloneItem.jsx";

import spartan from "../schedules/spartan.png";
import foxsched from "../schedules/fox-sched1.png";
import housesched from "../schedules/house-garden.png";
import emeraldsched from "../schedules/emerald.png";
import advancedsched from "../schedules/adv.png";
import athenasched from "../schedules/athena.png";
import florasched from "../schedules/flora-sched.png";
import rootssched from "../schedules/roots.png";
import biobizzsched from "../schedules/biobizz.png";
import vegamatrixsched from "../schedules/vegamatrix.png";
import millssched from "../schedules/mills.png";
import sched16 from "../schedules/16.png";
import cycosched from "../schedules/cyco.png";
import botanisched from "../schedules/botanicare.png";
import cessched from "../schedules/ces-img.png";
import cultsched from "../schedules/culture.png";
import hcosched from "../schedules/hco.png";

import OregonPDF from "../schedules/oregons-only-schedules.pdf";
import HouseSchedule from "../schedules/house-sched.pdf";
import FoxSchedule from "../schedules/fox-sched.jpeg";
import EmeraldSched from "../schedules/emerald-harvest-feed.pdf";
import AdvancedSched from "../schedules/adv-nut.pdf";
import AthenaSched from "../schedules/athena-sched.pdf";
import FloraSched from "../schedules/flora-sched.pdf";
import RootsSched from "../schedules/roots.pdf";
import BioBizzSched from "../schedules/biobizz.pdf";
import VegaSched from "../schedules/vegamatrix.pdf";
import MillsSched from "../schedules/millssched.pdf";
import SixteenSched from "../schedules/16.pdf";
import CycoSched from "../schedules/cyco.pdf";
import BotaniSched from "../schedules/botanicare.pdf";
import CesSched from "../schedules/ces-full.png";
import CultSched from "../schedules/culture.pdf";
import HcoSched from "../schedules/hco-full.jpeg";


import tappinlogo from "../images/logos/tappin-roots.png";
import maxilogo from "../images/logos/maxicrop.png";
import spraylogo from "../images/logos/sprayngrow.png";
import mammothlogo from "../images/logos/mammoth.png";
import nectarlogo from "../images/logos/nectarlogo1.png";
import hydrologo from "../images/logos/general-hydro.png";
import rootslogo from "../images/logos/roots-logo.png";
import foxlogo from "../images/logos/fox.png";
import millslogo from "../images/logos/mills.png";
import gaialogo from "../images/logos/gaia-green.webp";
import cycologo from "../images/logos/cyco-logo.png";
import emeraldlogo from "../images/logos/emerald-harvest.png";
import botanicarelogo from "../images/logos/botanicare-logo.png";
import hcologo from "../images/logos/hco.png";
import culturelogo from "../images/logos/current-culture-logo.png";
import houselogo from "../images/logos/house-garden.png";
import athenalogo from "../images/logos/athena.png";
import advancedlogo from "../images/logos/advanced2.png";
import ceslogo from "../images/logos/ces-logo.png";
import dtelogo from "../images/logos/dte.png";
import biobizzlogo from "../images/logos/biobizz-logo-dark.png";
import vegalogo from "../images/logos/vegamatrix.png";
import heavylogo from "../images/logos/heavy16logo.png";
import bioaglogo from "../images/logos/bioag.png";
import supremelogo from "../images/logos/supreme.png";
import earthlogo from "../images/logos/earth-juice.png";
import microbelogo from "../images/logos/microbe-life.png";
import reallogo from "../images/logos/real-growers.png";
import greatwhitelogo from "../images/logos/great-white.png";
import madlogo from "../images/logos/mad-farmer.png";
import ghorglogo from "../images/logos/organics.png";

import organic from "../images/cdfa.png";

import stages from "../images/tappin-roots/all-stages.png";
import seaweed from "../images/maxicrop/seaweed.png";
import fish from "../images/maxicrop/liquid-fish.png";
import micro from "../images/sprayngro/micronutes.png";

export default function GalleryPageNutrients(props) {
  return(
    <>
    <div className="gallery">
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

     <Item src={nectarlogo}
     title="Nectar for the Gods"
     logo_alt="Nectar for the Gods"
     organic={organic}
     href="https://www.oregonsonly.com/nectar-for-the-gods-products/"
     producttype="Liquid Nutrients"
     products1="Medusa's Magic, Gaia Mania, Athena's Aminas, Demeter's Destiny"
     products2="The Kraken, Mega Morpheus, Zeus Juice, Herculean Harvest"
     products3="Triton's Trawl, Pegasus Potion, Persephone's Palate, Bloom Khaos"
     products4="Poseidonzime, Hygeia's Hydration, Aphrodite's Extraction"
     producttype2="Granular Nutrients"
     products21="One Shot"
     schedulehref={OregonPDF}
     schedule={spartan} />

     <Item src={mammothlogo}
     organic={organic}
     logo_alt="Mammoth Microbes"
     href="https://mammothmicrobes.com/product/mammoth-p/"
     producttype="Liquid Nutrients"
     products1="Mammoth P, Mammoth SI"
     products2="Mammoth Starter Plugs, Mammoth Biocontrol-PI" />

     <Item src={foxlogo}
     logo_alt="Fox Farm"
     href="https://foxfarm.com/product-category/liquid-fertilizers"
     organic={organic}
     producttype="Brands"
     products1="Fox Farms, Tiger Bloom, Cultivation Nation, Bush Doctor"
     producttype2="Liquid Nutrients"
     products21="Grow, Micro, Bloom, Bembé, Boomerang, Flower's Kiss, Kangaroots"
     products22="Kelp Me Kelp You, CalMag, Liquid Iron, Manganese, Microbe Brew"
     products23="Wholly Mackerel, Soil Liquid Trio Pack, Hydro Liquid Trio Pack"
     schedulehref={FoxSchedule}
     schedule={foxsched} />

     <Item src={emeraldlogo}
     logo_alt="Emerald Harvest"
     href="https://www.emeraldharvest.co/"
     producttype="Liquid Nutrients"
     products1="Cali Pro, Grow Micro Bloom, Honey Chome, Root Wizard"
     products2="Sturdy Stalk, Hydra Clear, Emerald Goddess, King Kola"
     schedulehref={EmeraldSched}
     schedule={emeraldsched} />

     <Item src={houselogo}
     logo_alt="House & Garden"
     href="https://house-garden.us/"
     producttype="Liquid Nutrients"
     products1="Aqua Flakes A&B, Hydro A&B, Cocos A&B, Soil A&B"
     products2="Bio 1-Component, 1-Component"
     producttype2="Additives"
     products21="Multi Zen, Drip Clean, Roots Excelurator, Magin Green, Starter Kits"
     products22="Algen Extract, Amino Treatment, Nitrogen Boost Bud-XL, Rhizo Force"
     products23="Top Booster, Shooting Powder, Top Shooter, PH Stabilizer, Magnesium Boost"
     schedulehref={HouseSchedule}
     schedule={housesched} />

     <Item src={advancedlogo}
     logo_alt="Advanced Nutrients"
     href="https://www.advancednutrients.com/products/all-products/"
     organic={organic}
     producttype="Liquid Nutrients"
     products1="Ancient Earth, B-52 Fertilizer Booster, Big Bud, Coco, Bud Candy, Sensizym, Tarantula"
     products2="Bud Factor X, Bug Ignitor, Flawless Finish, Grandma Enggy's F-1, Iguana Juice Bloom, Voodoo Juice"
     products3="Iguana Juice Grow, Mother Earth Super Tea, Nirvana, Overdrive, ph Perfect Connoiseur"
     products4="Sensei Bloom, Sensei Growth, Piranha Beneficial Fungi, Revive, Rhino Skin, Cal-Mag Xtra"
     schedulehref={AdvancedSched}
     schedule={advancedsched} />

     <PestItem src={tappinlogo}
     href="https://tappinroots.com/shop/all-stages/"
     alt="Tappin' Roots"
     producttype="Natual All Stages Plant Fertilizer"
     media_img={stages}
     malt="Tappin' Roots Natural All Stages Plant Nutrients" />

     <CloneItem src={maxilogo}
     href="https://maxicrop.com/"
     alt="Ohrstrom's Maxicrop"
     producttype="Liquid Fish"
     producttype2="Liquid Seaweed"
     media_img={seaweed}
     malt="Liquid Seaweed"
     media_img1={fish}
     malt1="Liquid Fish" />

     <PestItem src={spraylogo}
     href="https://www.spray-n-growgardening.com/Spray-N-Grow-Micronutrients/products/17/"
     alt="Spray-N-Grow"
     producttype="Micronutrients"
     media_img={micro}
     malt="Spray-N-Grow Micronutrients" />

     <Item src={athenalogo}
     logo_alt="Athena"
     href="https://www.athenaproducts.com/pro-line?page=1"
     producttype="Blended Line - Liquid Nutrients"
     products1="Cleance, CaMg, PK, Grow A, Grow B"
     products2="Bloom A, Bloom B, Stack, Balance"
     producttype2="Pro Line - Granular Nutrients"
     products21="Core, Grow, Bloom"
     schedulehref={AthenaSched}
     schedule={athenasched} />

     <Item src={gaialogo}
     logo_alt="Gaia Green"
     href="https://www.gaiagreen.com/"
     organic={organic}
     producttype="Organic Fertilizer - Granular Nutrients"
     products1="All Purpose, Power Bloom, Soluble Seaweed Extract, Super Fly Insect Frass"
     products2="Living Soil, Greensand, Mineralized Phosphate, Gypsum, Bone Meal"
     products3="Diatomaceous Earth, Oyster Shell Flour, Alfalfa Meal, Blood Meal, Feather Meal"
     products4="Fishbone Mean, Kelp Meal, Glacial Rock Dust, Rock Phosphate, Basalt Rock Dust" />

     <Item src={ghorglogo}
      logo_alt="General Organics"
      href="https://www.hawthornegc.com/"
      organic={organic}
      producttype="Liquid Nutrients"
      products1="BioThrive Grow, BioThrive Bloom, BioRoot, BioBud, BioWeed"
      products2="Diamond Black, BioMarine, CaMg+" />

     <Item src={hydrologo}
     logo_alt="General Hydroponics"
     href="https://generalhydroponics.com/products/categories/nutrients/"
     producttype="Liquid Nutrients: BioThrive | FloraGro"
     products1="Grow, Bloom | Gro, Micro, Bloom"
     schedulehref={FloraSched}
     schedule={florasched} />

     <Item src={rootslogo}
     logo_alt="Roots Organic"
     href="https://www.aurorainnovations.com/roots-organics-liquid-nutrients"
     organic={organic}
     producttype="Liquid Nutrients & Supplements"
     products1="Buddha Grow, Buddha Bloom, Surge, Trinity, Extreme Serene, Ancient Amber"
     products2="HP2, HPK, Rain, CalMag"
     schedulehref={RootsSched}
     schedule={rootssched} />

     <Item src={dtelogo}
     logo_alt="Down to Earth"
     href="https://downtoearthfertilizer.com/"
     organic={organic}
     producttype="Blended Fertilizer"
     products1="Acid Mix, All Purpose, Bio-Fish, Bio-Live, Bio-Turf"
     products2="Citrus Mix, Fruit Tree, Rose & Flower, Starter Mix"
     products3="Tree & Shrub, Vegan Mix, Vegetable Garden" />

     <Item src={biobizzlogo}
     logo_alt="BioBizz"
     href="https://www.biobizz.com/products/"
     organic={organic}
     producttype="Liquid Nutrients"
     products1="Microbes, CalMag, Bio-Up, Bio-Down, Fish-Mix, Bio-Grow"
     products2="Bio-Bloom, Top-Max, Root-Juice, Alg-A-Mic, Bio-Heaven"
     products3="Acti-Vera, Leaf Coat"
     schedulehref={BioBizzSched}
     schedule={biobizzsched} />

     <Item src={vegalogo}
     logo_alt="Vegamatrix"
     href="https://purelifeveganix.com/"
     organic={organic}
     producttype="Liquid Nutrients"
     products1="Grow, Bloom, Boost(CaMg), Prime Zyme, Amp-It"
     products2="Phyre, Hypha, Hard-N-Quick, Big-N-Sticky"
     schedulehref={VegaSched}
     schedule={vegamatrixsched} />

     <Item src={millslogo}
     logo_alt="Mills Nutrients"
     href="https://millsnutrients.com/"
     producttype="Liquid Nutrients"
     products1="Basis A & B, Start R, C4, Ultimate PK, Vitalize"
     schedulehref={MillsSched}
     schedule={millssched} />

     <Item src={heavylogo}
     logo_alt="Heavy 16"
     href="https://www.heavy16.com/products/"
     producttype="Liquid Nutrients"
     products1="Veg A & B, Bud A & B, Prime, Fire, Roots, Foliar, Finish"
     schedulehref={SixteenSched}
     schedule={sched16} />

     <Item src={cycologo}
     logo_alt="Cyco"
     href="https://cycoflower.com/usa/#"
     producttype="Liquid Nutrients"
     products1="Grow A & B, B1 Boost, Dr. Repair, Bloom A & B"
     products2="Silica, Potash Plus, Swell"
     schedulehref={CycoSched}
     schedule={cycosched} />

     <Item src={botanicarelogo}
     logo_alt="Botanicare"
     href="https://www.botanicare.com/nutrients/"
     producttype="Liquid Nutrients"
     products1="Pro Bloom, Pro Grow, Rhizo Blast, Liquid Karma"
     products2="Cal-Mag Plus, Silica Blast, Sweet, Hydroplex"
     schedulehref={BotaniSched}
     schedule={botanisched} />

     <Item src={ceslogo}
     logo_alt="Cutting Edge Solutions"
     href="https://cuttingedgesolutions.com/nutrients/"
     producttype="Liquid Nutrients"
     products1="Micro, Grow, Bloom, Uncle John's Blend, Bulletproof SI"
     products2="CalMag Amplified, Sugarfree, Sour Dee"
     schedulehref={CesSched}
     schedule={cessched} />

     <Item src={culturelogo}
     logo_alt="Current Culture Solutions"
     href="https://cch2o.com/cultured-solutions-premium-hydroponic-nutrients/"
     producttype="Liquid Nutrients"
     products1="UC Roots, Coco Cal, Veg A, Bloom A, Clear Line"
     products2="Bud Booster - Early, Mid, Late"
     schedulehref={CultSched}
     schedule={cultsched} />

     <Item src={hcologo}
     logo_alt="Humboldt County's Own"
     href="https://humboldtcountysown.com/"
     producttype="Nutrients"
     products1="Micro, Grow, Bloom, Magnum, Crystal Burst, Sonic Bloom"
     products2="Deep Breath, G-10, Snow Storm Ultra, Purple Maxx, Killer Tea"
     schedulehref={HcoSched}
     schedule={hcosched} />

     <Item src={bioaglogo}
     logo_alt="BioAG"
     href="https://www.bioag.com/products-biostimulant-fertilizers/"
     producttype="Grandular Nutrients"
     products1="CytoPlus"
     producttype2="Liquid Supplements"
     products21="Full Power"
     organic={organic} />

     <Item src={supremelogo}
     logo_alt="Supreme Growers"
     href="https://supremegrowers.us/simply-silica-8oz.html"
     producttype="Simply Silica"
     organic={organic} />

     <Item src={earthlogo}
     logo_alt="Earth Juice"
     organic={organic}
     producttype="Liquid Nutrients"
     products1= "Microblast, Meta-K, Xatalyst the Crucial Link"
     products2= "Bloom Original Formula, Grow Original Formula" />

     <Item src={microbelogo}
     logo_alt="Microbe Life"
     organic={organic}
     producttype="Premium Liquid Nutrients"
     products1="Nourish-L, Veg/Fruit Yield Enhancer, Photosynthesis Plus"
     products2="PH Down, BMC Biological Mosquito Control" />

     <Item src={reallogo}
     logo_alt="Real Growers"
     href="https://www.realgrowers.com/"
     producttype="Microbes"
     products1="Recharge"
     producttype2="Granular Nutrients"
     products21="Grow Dots"
     organic={organic} />

     <Item src={madlogo}
     logo_alt="Mad Farmer"
     title="Mad Farmer"
     href="https://www.madfarmerproducts.com/"
     producttype="Products"
     products1="N.U.T.S, M.O.A.B."
      />

    <Footer />
    </div>
    </>
  );
}
