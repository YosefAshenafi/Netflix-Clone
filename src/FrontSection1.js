import React from "react";
import * as ReactBootstrap from "react-bootstrap";

import "./FrontSection1.css";

function FrontSection1() {
  return (
    <div className="frontsection1">
      <div className="frontsection1__animationcard">
        <div className="frontsection1__text">
          <h1 className="frontsection__texth1">Enjoy on your TV.</h1>
          <h2 className="frontsection__texth2">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="frontsection1__imgcontainer">
          <div className="frontsection1__imganimation">
            <img className="frontsection1__img" src="section1img.png" />
            <div className="frontsection1__videoanimatin">
              <video loop autoPlay>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
                Your browser does not support the video tag. I suggest you
                upgrade your browser.
              </video>
            </div>
          </div>
        </div>
        <div className="frontsection1__location"></div>
      </div>
    </div>
  );
}

export default FrontSection1;
