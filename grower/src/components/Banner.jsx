//jshint esversion:6

import React from "react";

import logo from "../web-images/logo.png";

export default function Banner() {
  return (
    <>
     <div className="row">
      <div className="col-lg-7">
       <img src={logo} />
      </div>
      <div className="col-lg-5">
       <h1>Information</h1>
      </div>
     </div>
    </>
  );
}
