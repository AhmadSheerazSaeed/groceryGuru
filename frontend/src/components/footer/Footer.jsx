import React from "react";

import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-cards grid-container">
          {/* >>=========== right card ===========<< */}
          <div className="footer-card-right">
            <h5 className="h-five">Information</h5>
            <a className="link" href="#" style={{ textDecoration: "none" }}>
              <h6>About Us</h6>
            </a>
            <a className="link" href="#">
              <h6>Privacy Policy</h6>
            </a>
            <a className="link" href="#">
              <h6>Blog</h6>
            </a>
          </div>

          {/* >>=========== middle card ===========<< */}

          <div className="footer-card-middle">
            <h5 className="h-five">Why Buy From Us</h5>
            <a className="link" href="#">
              <h6>Shipping & Delivery</h6>
            </a>
            <a className="link" href="#">
              <h6>Secure payment</h6>
            </a>
            <a className="link" href="#">
              <h6>FAQ</h6>
            </a>
            <a className="link" href="#">
              <h6>Terms & Conditions</h6>
            </a>
          </div>

          {/* >>=========== left card ===========<< */}

          <div className="footer-card-right">
            <h5 className="h-five">Contact Us</h5>
            <ul className="contact-us">
              <li>
                <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                <h6 className="phone">(123)456-7890</h6>{" "}
              </li>

              <li>
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                <h7 className="location">
                  E-Comm, 4578
                  <br />
                  Marmora Road,
                  <br />
                  Glasgow D04 89GR
                </h7>
              </li>
            </ul>
          </div>

          {/* >>=========== follow us ===========<< */}

          <div className="follow-us">
            <h5 className="follow-us">Follow Us</h5>
            <div className="face-twit-icon">
              <FontAwesomeIcon
                className="icon facebook-icon"
                icon={faFacebookSquare}
              />

              <FontAwesomeIcon
                className="icon twitter-icon"
                icon={faTwitterSquare}
              />
            </div>
          </div>
        </div>
        <hr />
        <p className="copy-right">© 2021 All rights reserved</p>
      </section>
    </>
  );
}

export default Footer;
