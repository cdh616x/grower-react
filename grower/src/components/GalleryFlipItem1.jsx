//jshint esversion:6

import React from "react";

export default function Flip(props) {
  return (
    <>
    <div className="container">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.src} alt="Image" className="img-fluid" />
          <h4 className="card-title">{props.title}</h4>
        </div>
        <div className="flip-card-back">
        <a href={props.href} target="_blank">
          <h3 className="title">{props.title}</h3>
          </a>
          <p className="prod">{props.sizes}</p>
          <hr />
          <p className="prod">{props.products1}</p>
          <p className="prod">{props.products2}</p>
          <p className="prod">{props.products3}</p>
          <p className="prod">{props.products4}</p>
          <p className="prod">{props.products5}</p>
          <p className="prod">{props.products6}</p>

        </div>
      </div>
    </div>
    </div>
    </>
  );
}
