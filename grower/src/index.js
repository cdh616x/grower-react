//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App.js';

import Nutrients from "../src/routes/nutrients.jsx";
import Lighting from "../src/routes/lighting.jsx";
import Pesticides from "../src/routes/pesticides.jsx";
import Medias from "../src/routes/growing-medias.jsx";
import Cloning from "../src/routes/cloning.jsx";
import Mychrize from "../src/routes/mychrize.jsx";
import Ec from "../src/routes/ec.jsx";
import Ph from "../src/routes/ph.jsx";
import Contact from "../src/routes/contact.jsx";
import Trimming from "../src/routes/trimming.jsx";
import PS from "../src/routes/potting-and-support.jsx";
import Air from "../src/routes/air-purification.jsx";
import Water from "../src/routes/water-purification.jsx";
import CC from "../src/routes/climate-control.jsx";
import Hydroponics from "../src/routes/hydroponics.jsx";

import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <HashRouter>
   <Routes>

    <Route path="/" element={<App />} />

    <Route path="/contact" element={<Contact />} />

    <Route path="/nutrients" element={<Nutrients />} />
    <Route path="/growing-medias" element={<Medias />} />
    <Route path="/lighting" element={<Lighting />} />
    <Route path="/pesticides" element={<Pesticides />} />
    <Route path="/cloning" element={<Cloning />} />
    <Route path="/mychrize" element={<Mychrize />} />
    <Route path="/environment-control" element={<Ec />} />
    <Route path="/ph" element={<Ph />} />
    <Route path="/potting-and-support" element={<PS />} />
    <Route path="/trimming" element={<Trimming />} />
    <Route path="/air-purification" element={<Air />} />
    <Route path="/water-purification" element={<Water />} />
    <Route path="/climate-control" element={<CC />} />
    <Route path="/hydroponics" element={<Hydroponics />} />

   </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
