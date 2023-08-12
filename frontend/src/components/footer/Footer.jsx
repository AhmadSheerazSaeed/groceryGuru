import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import footerCss from "./footer.module.css";
import { Link } from "react-router-dom";
import ShippingAndDeliveryPolicy from "../shippingAndDeliveryPolicy/ShippingAndDeliveryPolicy";

function Footer() {
  return (
    <section className={footerCss.footerSection}>
      <div className={footerCss.footerContainer}>
        {/* >>=========== first column Information ===========<< */}
        <div className={footerCss.sectionContainer}>
          <h5 className={footerCss.sectionHeading}>Information</h5>
          <Link className={footerCss.links} to={"/underDevelopment"}>
            About Us
          </Link>

          <Link className={footerCss.links} to={"/privacyPolicy"}>
            Privacy Policy
          </Link>

          <Link className={footerCss.links} to={"/underDevelopment"}>
            Blog
          </Link>
        </div>

        {/* >>=========== second column why buy from us ===========<< */}

        <div className={footerCss.sectionContainer}>
          <h5 className={footerCss.sectionHeading}>Why Buy From Us</h5>

          <Link className={footerCss.links} to={"/ShippingAndDeliveryPolicy"}>
            Shipping & Delivery
          </Link>
          <Link className={footerCss.links} to={"/underDevelopment"}>
            Secure payment
          </Link>
          <Link className={footerCss.links} to={"/frequentlyAskedQuestions"}>
            FAQ
          </Link>
          <Link className={footerCss.links} to={"/termsAndConditions"}>
            Terms & Conditions
          </Link>
        </div>

        {/* >>=========== third column contact us ===========<< */}

        <div className={footerCss.sectionContainer}>
          <h5 className={footerCss.sectionHeading}>Contact Us</h5>
          <div className={footerCss.sectionChildContainer}>
            <FontAwesomeIcon
              className={footerCss.awesomeIcon}
              icon={faMobileAlt}
            />
            <h7>(123)456-7890</h7>
          </div>

          <div className={footerCss.sectionChildContainer}>
            <FontAwesomeIcon
              className={footerCss.awesomeIcon}
              icon={faLocationDot}
            />
            <div className={footerCss.contactUsAddressContainer}>
              <p className={footerCss.pTag}>E-Comm, 4578</p>
              <p className={footerCss.pTag}>Marmora Road,</p>
              <p className={footerCss.pTag}>Glasgow D04 89GR</p>
            </div>
          </div>
        </div>

        {/* >>=========== forth columd follow us ===========<< */}

        <div className={footerCss.sectionContainer}>
          <h5 className={footerCss.sectionHeading}>Follow Us</h5>
          <div
            className={`${footerCss.sectionChildContainer} ${footerCss.sectionChildContainerFollowUsIcons}`}
          >
            <FontAwesomeIcon
              className={footerCss.awesomeIcon}
              icon={faFacebookSquare}
            />

            <FontAwesomeIcon
              className={footerCss.awesomeIcon}
              icon={faTwitterSquare}
            />
          </div>
        </div>
      </div>
      <hr />
      <p className={footerCss.rightReserved}>© 2023 All rights reserved</p>
    </section>
  );
}

export default Footer;
