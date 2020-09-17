import React from "react";

import "./FrontSection4.css";

function FrontSection4() {
  return (
    <div className="frontsection4">
      <div class="frontsection4__outstorycard">
        {/* <h1 className="frontsection4__h1">Frequently Asked Questions</h1>
        <ul className="frontsection4__ul">
          <li className="fronsection4__listitem">
            <button className="frontsection4__question">
              What is Netflix?
              <svg
                id="thin-x"
                viewBox="0 0 26 26"
                class="svg-icon svg-icon-thin-x svg-closed"
                focusable="true"
              >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div className="frontsection4__answer" closed>
              <span id data-uia>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </span>
            </div>
          </li>
          
        </ul> */}
        <form className="frontsection4__form">
          <h3 className="frontsection4__formh3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="frontsection4__emailform">
            <ul className="frontsection4__simpleformstructure">
              <li className="frontsection4__fieldemailwrapper">
                <div className="frontsection4__fieldemailcontainer">
                  <div class="frontsection4__inputplacement">
                    <label className="frontsection4__inputid">
                      <input
                        type="email"
                        className="frontsection4__nftextfield"
                        placeholder="Email Address"
                      />
                    </label>
                  </div>
                </div>
              </li>
            </ul>
            <div class="frontsection4__ourstorycta">
              <button className="frontsection4__button">
                <span className="frontsection4__ctabtn">GET STARTED</span>
                <span className="frontsection4__arrow">
                  <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                    <desc>chevron</desc>
                    <path
                      d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                      fill="none"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="frontsection4__location"></div>
    </div>
  );
}

export default FrontSection4;
