//jshint esversion:6

import React from "react";

export default function DirtItem(props) {
  return (
    <>
    <div className="container-fluid">
     <div className="row product-row">
      <div className="col-5">
      <h2 className="product-title">{props.title}</h2>
       <img className="img-fluid product" src={props.src} />
       <div className="row">
       <img className="organic img-fluid" src={props.organic} />
       </div>
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
       <h5 className="product-type">{props.producttype3}</h5>
       <p className="info">{props.products31}</p>
       <h5 className="product-type">{props.producttype4}</h5>
       <p className="info">{props.products41}</p>
       <div className="container-fluid d">
       <img className="img-fluid dirt" src={props.media_img} />
       <img className="img-fluid dirt" src={props.media_img1} />
       <img className="img-fluid dirt" src={props.media_img2} />
       <img className="img-fluid dirt" src={props.media_img3} />
       <img className="img-fluid dirt" src={props.media_img4} />
       </div>
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
