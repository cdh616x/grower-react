//jshint esversion:6

import React from "react";
import SizeSelector from "./SizeSelector";

export default function Landing() {

  const screenWidth = window.innerWidth

  // const [screen, setScreen] = useState()
  return (
    <>
      <div className="landing">
        {/* <div className="row">
          <img src={shopfront} className="img-fluid" />
        </div> */}
        <div className="row">
          <h1 className="welcome-text">
            Hi! We are Jenn and Dan; welcome to our shop!
          </h1>
        </div>
        <div className="row landing-info">
          <h3 className="home-info">
            Grower's Edge is an indoor/outdoor garden supply store carrying
            everything you need for hydroponics, aeroponics, and soilless
            gardening. We carry lighting systems including LEDs, ceramic metal
            halides, bulbs, ballasts, and reflectors, hydroponic and organic
            nutrients, growing media including soil, coco, rockwool, hydroton,
            and several other amendments; environmental controls and systems
            including controllers, air conditioners, dehumidifiers, fans, etc.,
            odor control, Co2, and several other items you need to run a
            successful garden. Our friendly and knowledgeable staff has years of
            experience in hydroponics, aeroponics, and soilless gardening and we
            love helping all types of gardeners gain knowledge and maximize
            their yields!
          </h3>
        </div>
        <SizeSelector screenWidth={screenWidth} />
      </div>
    </>
  );
}
