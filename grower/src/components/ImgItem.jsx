//jshint esversion:6

import React from "react";

export default function ImgItem(props) {
  console.log(window.innerWidth);
  let logoSize = ""
  if (window.innerWidth > 600) {
    logoSize = "col-1 autoMargin"
  } else {
    logoSize = "col-3"
  }

  return (
    <>
    <div className={logoSize}>
     <img className="img-fluid" src={props.src} alt={props.alt} />
    </div>
    </>
  )
}
