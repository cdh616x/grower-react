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

    <Route path="/nutrients" element={<Nutrients />} />
    <Route path="/growing-medias" element={<Medias />} />
    <Route path="/lighting" element={<Lighting />} />
    <Route path="/pesticides" element={<Pesticides />} />
    <Route path="/cloning" element={<Cloning />} />
    <Route path="/mychrize" element={<Mychrize />} />
    <Route path="/environment-control" element={<Ec />} />
    <Route path="/ph" element={<Ph />} />

   </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
