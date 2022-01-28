//jshint esversion:6

import React from "react";

export default function Item(props) {
  return (
    <>
    <div className="container-fluid">
     <div className="row product-row">
      <div className="col-5">
      <h2 className="product-title">{props.title}</h2>
       <img className="img-fluid product" src={props.src} />
      </div>
      <div className="col-7 product-info">

       <h5 className="product-type">{props.producttype}</h5>
       <p className="info">{props.products1}</p>
       <p className="info">{props.products2}</p>
       <p className="info">{props.products3}</p>
       <p className="info">{props.products4}</p>
       <h5 className="product-type">{props.producttype2}</h5>
       <p className="info">{props.products21}</p>
       <p className="info">{props.products22}</p>
       <p className="info">{props.products23}</p>
       <h5 className="schedule">
       <a href={props.schedulehref} target="_blank">
       <img className="img-fluid" style={{height: "auto"}} src={props.schedule} />
       </a>
       </h5>
       <a className="product-link" href={props.href} target="_blank">
        <h5>To Website</h5>
        </a>
      </div>
     </div>
     <hr />
    </div>
    </>
  );
}
