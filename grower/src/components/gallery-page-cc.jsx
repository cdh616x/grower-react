//jshint esversion:6

import React from "react";
import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";

import ItemUpgraded from "./ItemUpgraded.jsx";

export default function CC(props) {
  return (
    <>
    <Navbar />

    <h1 className="page-title">{props.pagetitle}</h1>

    <Footer />
    </>
  );
}
