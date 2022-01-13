//jshint esversion:6

import React from "react";

import logo from "../web-images/logo.png";

export default function Banner() {
  return (
    <>
     <div className="row">
      <div className="col-lg-7">
       <img src={logo} className="img-fluid" />
       <h2>Monday - Friday | 10am - 7pm</h2>
       <h2>Saturday - Sunday | 11am - 4pm</h2>
      </div>
      <div className="col-lg-5 information">
       <h1>Give us a call!</h1>
       <h1>616.862.9095</h1>
       <h2>4252 14 Mile Rd, Rockford MI</h2>
       <h2>growersedge1@gmail.com</h2>
      </div>
     </div>
    </>
  );
}
