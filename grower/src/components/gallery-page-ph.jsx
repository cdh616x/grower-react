//jshint esversion:6

import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";

export default function GalleryPagePH(props) {
  return (
    <>
     <Navbar />
      <h1 className="page-title">{props.pagetitle}</h1>
     <Footer />
    </>
  )
}
