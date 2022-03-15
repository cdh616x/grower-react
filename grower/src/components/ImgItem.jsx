//jshint esversion:6

import React from "react";

export default function ImgItem(props) {
  return (
    <>
    <div className="col-3">
     <img className="img-fluid" src={props.src} alt={props.alt} />
    </div>
    </>
  )
}
