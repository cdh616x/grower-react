import React from "react";

import Navbar from "./Navbar2.jsx";
import Footer from "./Footer.jsx";
import DirtItem from "./DirtItem.jsx";
import LightItem from "./LightItem.jsx";
import Item from "./Item.jsx";

export default function GalleryPageCloning(props) {
  return (
    <>
     <Navbar />
     <h1 className="page-title">{props.pagetitle}</h1>

     <Footer />
    </>
  )
}
