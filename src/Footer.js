import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div class="footer__sitefooterwrapper">
        <div className="footer__divider"></div>
        <div class="footer__sitefooter">
          <p className="footer__top">
            <a className="footer__topa">Questions? Contact us.</a>
          </p>
          <ul className="footer__linkstructure">
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>FAQ</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Help Center</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Account</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Media Center</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Investor Relations</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Jobs</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Ways to Watch</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Terms of Use</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Privacy</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Cookie Preferences</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Corporate Information</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Contact Us</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Speed Test</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Watch for Free</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Legal Notices</span>
              </a>
            </li>
            <li className="footer__linkitem">
              <a className="footer__link">
                <span>Netflix Originals</span>
              </a>
            </li>
          </ul>
          <p className="footer__owner">
            Cloned by{" "}
            <a
              className="footer__ownerLink"
              href="http://www.yosefashenafi.com"
              target="_blank"
            >
              {" "}
              Yosef Ashenafi
            </a>
          </p>
        </div>
      </div>
      <div class="footer__location"></div>
    </div>
  );
}

export default Footer;
