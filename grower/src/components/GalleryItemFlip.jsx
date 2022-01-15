//jshint esversion:6

import React from "react";

export default function GalleryItemFlip(props) {
  return (
    <>
    <div className="col-lg-4 col-sm-12 card-container">
      <div className="card-flip">
        <div className="front">
          <img src={props.src} className="img-fluid" />
          <div className="card-block">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.cardText}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-header">
            Available Products
          </div>
          <div className="card-block">
            <p className="card-text">{props.available1}</p>
            <p className="card-text">{props.available2}</p>
            <p className="card-text">{props.available3}</p>
            <p className="card-text">{props.available4}</p>
            <p className="card-text">{props.available5}</p>
            <p className="card-text">{props.available6}</p>
            <hr />
            <p className="card-title">{props.sizes}</p>
            <h1 className="button">
            <a href={props.href} className="btn btn-primary card-title" target="_blank">To Website</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
