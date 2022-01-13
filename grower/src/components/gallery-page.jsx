//jshint esversion:6

import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import nectar from "../images/nectar/zeus-juice.png";
import mammoth from "../images/mammoth/mammoth-p.png";

export default function GalleryPage(props) {
  return(
    <>
    <Navbar />
     <h1 className="page-title">{props.pagetitle}</h1>
     <div className="row">
       <div className="col-lg-4">
        <img src={nectar} className="img-responsive" />
        <h3>Nectar for the Gods</h3>

      </div>
      <div className="col-lg-4">
       <img src={mammoth} className="img-responsive" />
       <h3>Mammoth P</h3>

      </div>
      <div className="col-lg-4">

      </div>
     </div>
     <div className="row">
      <div className="col">

      </div>
      <div className="col">

      </div>
      <div className="col">

      </div>
     </div>
    <Footer />
    </>
  );
}
