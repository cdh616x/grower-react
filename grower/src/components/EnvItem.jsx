//jshint esversion:6

import React from "react";

export default function EnvItem(props) {
  return (
    <>
    <div className="container-fluid">
     <div className="row product-row">
      <div className="col-5">
      <h2 className="product-title">{props.title}</h2>
       <img className="img-fluid product" src={props.src} alt={props.alt}/>
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
       <div className="container-fluid insect">
       <img className="img-fluid env1" src={props.media_img} alt={props.malt} />
       <img className="img-fluid env1" src={props.media_img1} alt={props.malt1} />
       <img className="img-fluid env1" src={props.media_img5} alt={props.malt5} />
       <img className="img-fluid env1" src={props.media_img6} alt={props.malt6} />
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
