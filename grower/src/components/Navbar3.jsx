//jshint esversion:6

import React from "react";

import icon from "../web-images/nav-icon.png";

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-#097969" style={{backgroundColor: "#097969"}}>
     <div className="container-fluid">
      <a className="navbar-brand" href="#/">
       <img id="icon" src={icon} style={{height: "50px"}} />
      </a>

       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Inventory
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#/air-purification">Air Purification</a></li>
            <li><a className="dropdown-item" href="#/cloning">Cloning</a></li>
            <li><a className="dropdown-item" href="#/environment-control">Environment Control</a></li>
            <li><a className="dropdown-item" href="#/growing-medias">Growing Medias</a></li>
            <li><a className="dropdown-item" href="#/lighting">Lighting</a></li>
            <li><a className="dropdown-item" href="#/mychrize">Mycorrhizae</a></li>
            <li><a className="dropdown-item" href="#/nutrients">Nutrients</a></li>
            <li><a className="dropdown-item" href="#/pesticides">Pesticides</a></li>
            <li><a className="dropdown-item" href="#/ph">PH</a></li>
            <li><a className="dropdown-item" href="#/potting-and-support">Potting & Plant Support</a></li>
            <li><a className="dropdown-item" href="#/trimming">Trimming</a></li>
            <li><a className="dropdown-item" href="#/water-purification">Water Purification</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="#/contact">Contact Us!</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
