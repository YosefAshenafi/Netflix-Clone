import React from "react";
import "./Frontpage.css";
function Frontpage() {
  return (
    <div className="frontpage">
      <div className="frontpage__background">
        <div className="frontpage__imageContainer">
          <img className="frontpage__img" src="frontpage.jpg" alt="frontpage"></img>
          <div class="frontpage__imgGradient"></div>
        </div>
      </div>
      <div className="frontpage__text">
        <h1 className="frontpage__texth1">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="frontpage__texth2">Watch anywhere. Cancel anytime. </h2>
        <form className="frontpage__form">
          <h3 className="frontpage__formh3">
            Read to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="frontpage__emailform">
            <ul className="frontpage__simpleForm">
              <li className="frontpage__fieldEmail">
                <div className="frontpage__fieldEmailContainer">
                  <div className="frontpage__inputPlacement">
                    <label className="frontpage__label">
                      <input
                        className="frontpage__input"
                        type="email"
                        placeholder="Email Address"
                      ></input>
                      <label className="frontpage__inputlabel"></label>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
            <div className="frontpage__buttonStory">
              <button className="frontpage__button">
                <span className="frontpage__buttonspan1">
                  GET STARTED {`>`}
                </span>
              </button>
            </div>
          </div>
        </form>
        <h3 className="frontpage__disclaimer"></h3>
      </div>
      <div className="frontopage__location"></div>
    </div>
  );
}

export default Frontpage;
