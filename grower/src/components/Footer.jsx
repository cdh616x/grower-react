//jshint esversion:6

import React from "react";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <h6 className="footer">Grower's Edge © {year}</h6>
  );
}
