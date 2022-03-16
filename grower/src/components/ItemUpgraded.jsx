//jshint esversion:6

import React from "react";

export default function ItemUpgraded(props) {
  return (
    <>
    <div className="container-fluid">
     <div className="row product-row">
      <div className="col-5">
      <h2 className="product-title">{props.title}</h2>
       <img className="img-fluid product" src={props.src} alt={props.alt} />
       <div className="row">
       <img className="organic img-fluid" src={props.organic} />
       </div>
      </div>
      <div className="col-7 product-info">
      <h3>{props.producttype}</h3>
      <h3>{props.producttype2}</h3>
      <h3>{props.producttype3}</h3>
      <h3>{props.producttype4}</h3>
      <hr className="item-type-hr" />
       <div className="container-fluid">
       <div className="row">
       <div className="col-6">
        <img className="img-fluid env" src={props.media_img} alt={props.malt} />
        <h4>{props.item}</h4>
      </div>
       <div className="col-6">
        <img className="img-fluid env" src={props.media_img1} alt={props.malt1} />
        <h4>{props.item1}</h4>
      </div>
      </div>
      </div>
      <div className="container-fluid">
      <div className="row">
      <div className="col-6">
       <img className="img-fluid env" src={props.media_img2} alt={props.malt2} />
       <h4>{props.item2}</h4>
       </div>
       <div className="col-6">
       <img className="img-fluid env" src={props.media_img3} alt={props.malt3} />
       <h4>{props.item3}</h4>
      </div>
      </div>
      </div>
      </div>
      <a className="product-link" href={props.href} target="_blank">To Website</a>
      <hr className="item-hr" />
      </div>
      </div>
    </>
  )
}
