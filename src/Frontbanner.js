import React from "react";
import "./Frontbanner.css";

function Frontbanner() {
  return (
    <header
      className="frontbanner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "frontpage.jpg"
    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="frontbanner__contents">
        {/* title */}
        <h1 className="banner__title">
          <h1 className="banner__firstTitle">Unlimited movies, TV</h1>
          <h1 className="banner__secondTitle">shows, and more.</h1>
        </h1>
        <div className="frontbanner__description">
          <h2 className="frontbanner__desecriptionFirstTitle">
            Watch anywhere. Cancel anytime.
          </h2>
          <h3 className="frontbanner__desecriptionSecondTitle">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
        <div className="frontbanner__buttons">
          <div className="frontbanner__inputForm">
            <div className="frontbanner__inputFormResponsive">
              <input
                className="frontbanner__input"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="frontbanner__buttonAndIcon">
            <button className="frontbanner__button">
              <span className="frontbanner__getStarted">GET STARTED</span>
              <span className="frontbanner__icon">{`>`}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="frontbanner__fadeBottom"></div>
    </header>
  );
}

export default Frontbanner;
