import React from "react";

import "./FrontSection3.css";

function FrontSection3() {
  return (
    <div className="frontsection3">
      <div class="frontsection3__animationcard">
        <div class="frontsection3__text">
          <h1 className="frontsection3__texth1">Watch everywhere.</h1>
          <h2 className="frontsection3__texth2">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
        <div class="frontsection3__imagecontainer">
          <div class="frontsection3__imageanimations">
            <img className="frontsection3__img" src="section3img.png" />
            <div class="frontsection3__imganimationcard">
              <video loop autoPlay className="frontsection3__video">
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
                Your browser does not support the video tag. I suggest you
                upgrade your browser.
              </video>
              <div class="frontsection3__animationtext"></div>
            </div>
          </div>
        </div>
        <div class="frontsection3__location"></div>
      </div>
    </div>
  );
}

export default FrontSection3;
