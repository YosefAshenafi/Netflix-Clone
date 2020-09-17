import React from "react";

import "./FrontSection2.css";

function FrontSection2() {
  return (
    <div className="frontsection2">
      <div className="frontsection2__cardanimation">
        <div className="frontsection2__text">
          <h1 className="frontsection2__texth1">
            Download your shows to watch offline.
          </h1>
          <h2 className="frontsection2__texth2">
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
        <div className="frontsection2__imgcontainer">
          <div className="frontsection2__imganimationcontainer">
            <img className="frontsection2__img" src="section2img.jpg" />
            <div className="frontsection2__imganimation">
              <div className="frontsection2__animationimage">
                <img
                  className="frontsection2__animationtextimg"
                  src="animationimg.png"
                />
              </div>
              <div className="frontsection2__animationtext">
                <div className="frontsection2__text0">Stranger Things</div>
                <div className="frontsection2__text1">Downloading...</div>
              </div>
              <div className="frontsection2__animationcarddownload"></div>
            </div>
          </div>
        </div>
        <div className="frontsection2__location"></div>
      </div>
    </div>
  );
}

export default FrontSection2;
