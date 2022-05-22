//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import EnvItem from "./EnvItem.jsx";
import ItemUpgraded from "./ItemUpgraded.jsx";

import titanlogo from "../images/logos/titan.png";
import helios from "../images/titan/helios.png";
import atlas from "../images/titan/atlas.png";
import eos from "../images/titan/eos.png";

import autologo from "../images/logos/autopilot.png";
import co2 from "../images/autopilot/co2.png";
import lightCont from "../images/autopilot/light-controller.png";
import monitor from "../images/autopilot/monitor.png";
import timer from "../images/autopilot/timer.png";

import airlogo from "../images/logos/active-air.png";
import co2System from "../images/active-air/co2-system.png";

export default function GalleryPageEC(props) {
  const inventory = "inventory";
  return (
    <>
     <Navbar inventory={inventory} />
      <h1 className="page-title">{props.pagetitle}</h1>

      <ItemUpgraded src={titanlogo}
       href="https://www.titancontrols.net/"
       alt="Titan Controls"
       producttype="Environmental Controllers"
       item="Helios 11 & 12"
       item1="Atlas 2"
       item2="EOS-1"
       media_img={helios}
       malt="Titan Controls Helios 12 - 8 Light 240 Volt Controller w/ Dual Trigger Cords"
       media_img1={atlas}
       malt1="Titan Controls Atlas 2 - Preset CO2 Monitor/Controller"
       media_img2={eos}
       malt2="Titan Controls Eos Complete Humidity Controller (6/Cs)" />

      <ItemUpgraded src={autologo}
       href="https://www.autopilotcontrollers.com/Environmental-and-Master-Controllers"
       alt="autopilot Environmental Controllers"
       producttype="CO2 Monitors"
       producttype2="CO2 Burners"
       item="Master Digital Timer"
       item1="HID Controller"
       item2="CO2 Generator"
       item3="APC 8200 - CO2 Monitor and Controller"
       media_img={co2}
       malt="autopilot CO2 Generator"
       media_img1={monitor}
       malt1="autopilot Light Controller"
       media_img2={lightCont}
       malt2="autopilot CO2 Monitor"
       media_img3={timer}
       malt3="autopilot Master Digital Timer" />

      <ItemUpgraded src={airlogo}
       alt="Active Air"
       href="https://www.hydrofarm.com/p/active-air-timer/cosys20"
       producttype="CO2 System with Timer"
       media_img100={co2System}
       malt100="Active Air CO2 System with Timer, 1-20 cubic ft per hour" />

     <Footer />
    </>
  );
}
