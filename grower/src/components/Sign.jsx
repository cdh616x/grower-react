//jshint esversion:6

import React from "react";

import open from "../web-images/open.jpeg";
import closed from "../web-images/closed.jpeg";

export default function Sign() {
  let day = new Date().getDay();
  let hour = new Date().getHours();
  let sign = open;

  if ((day === 1 || 2 || 3 || 4 || 5) && (hour < 10 || hour >= 19)) {
    sign = closed;
  } else if ((day === 6 || 7) && (hour < 11 || hour >= 16)) {
    sign = closed;
  } else {
    sign = open;
  }
  return (
    <>
     <img src={sign} className="img-fluid sign" />
    </>
  )
}
