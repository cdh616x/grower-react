//jshint esversion:6

import React from "react";

export default function Flip(props) {
  return (
    <>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={props.src} alt="Src" className="img-fluid" />
          <h1>{props.title}</h1>
        </div>
        <div class="flip-card-back">
          <h1>{props.title}</h1>
          <h3>{props.sizes}</h3>
          <hr />
          <p className="prod">{props.products1}</p>
          <p className="prod">{props.products2}</p>
          <p className="prod">{props.products3}</p>
          <a href={props.href} target="_blank">
          <button type="button" class="btn btn-primary">To Website</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
