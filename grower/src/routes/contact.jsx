//jshint esversion:6

import React from "react";

import Navbar from "../components/Navbar3.jsx";
import Footer from "../components/Footer.jsx";
import Form from "../components/Form.jsx";

export default function ContactPage() {
  return (
    <>
     <Navbar />
     <div className="row contact-row">
     <div className="col-lg-7 col-sm-12">
      <Form />
      </div>
      <div className="col-lg-5 col-sm-12">
      <h1>Give us a call!</h1>
      <h1>616.863.9095</h1>
      <h2>4252 14 Mile Rd, Rockford MI</h2>
      <h2>growersedge1@gmail.com</h2>
       <h2><a href="https://www.facebook.com/growersedge/" target="_blank"><i class="fab fa-facebook"></i></a></h2>
     </div>
     </div>
     <Footer />
    </>
  )
}
