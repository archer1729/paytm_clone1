import React from "react";
import "./payments.css";

import insurancePhone from "../assets/insurance_plan.png";
import car from "../assets/car_insurance.svg";
import bike from "../assets/bike_insurance.svg";

// New icons for Why Choose Paytm section
import fast from "../assets/quick.svg";
import deals from "../assets/best_deal.svg";
import paperless from "../assets/paperless.svg";
import support from "../assets/chain_support.svg";
import nocalls from "../assets/no_spams.svg";
import compare from "../assets/buy.svg";

// Image for Paytm Advantage right section
import paytmAdvantage from "../assets/get_quote.avif";

// Partner logos
import icici from "../assets/icici_in.avif";
import hdfcLife from "../assets/hdfc_Life_logo_.avif";
import sbi from "../assets/sbi_General_logo.avif";
import hdfcErgo from "../assets/hdfc_Ergo_logo.avif";
import bandhan from "../assets/aegon_Life_logo.avif";
import digit from "../assets/digit_logo.avif";
import reliance from "../assets/reliance_logo.avif";
import star from "../assets/star_logo.avif";
import tata from "../assets/tata_Aig_logo.avif";
import iffco from "../assets/iffco_logo.avif";
import birla from "../assets/birla_Sun_Life.avif";
import bajaj from "../assets/bajaj_logo.avif";




















const Insurance = () => {
  return (
    <>
      {/* ------------------ FIRST CONTAINER ------------------ */}
      <section className="insurance-section">
        <div className="insurance-left">
          <h1 className="insurance-title">
            Insurance ka <br /> Super Market
          </h1>
          <p className="insurance-subtitle">
            A Smart, Simple & Secure Platform to Compare and Buy Insurance
          </p>

          <div className="insurance-icons">
            <div className="icon-item">
              <div className="icon-circle">
                <img src={car} alt="Car Insurance" />
              </div>
              <p>Car Insurance</p>
            </div>

            <div className="icon-item">
              <span className="badge">From ₹1.5/day</span>
              <div className="icon-circle">
                <img src={bike} alt="Bike Insurance" />
              </div>
              <p>Bike Insurance</p>
            </div>

            <div className="icon-item">
              <span className="badge new">New</span>
              <div className="icon-circle">
                <img src={car} alt="Taxi Insurance" />
              </div>
              <p>Taxi Insurance</p>
            </div>
          </div>
        </div>

        <div className="insurance-right">
          <img
            src={insurancePhone}
            alt="Insurance Mockup"
            className="insurance-image"
          />
        </div>
      </section>

      {/* ------------------ WHY CHOOSE PAYTM ------------------ */}
      <section className="why-choose-section">
        <h2 className="why-title">Why choose Paytm to buy insurance?</h2>

        <div className="why-grid">
          <div className="why-card">
            <img src={fast} alt="Quick & hassle free" />
            <h3>Quick & hassle free</h3>
            <p>Policy issuance in just 2 minutes</p>
          </div>

          <div className="why-card">
            <img src={deals} alt="Best available deals" />
            <h3>Best available deals</h3>
            <p>Top deals from India’s leading insurers</p>
          </div>

          <div className="why-card">
            <img src={paperless} alt="Completely Paperless" />
            <h3>Completely Paperless</h3>
            <p>Complete digital experience</p>
          </div>

          <div className="why-card">
            <img src={support} alt="24×7 claim support" />
            <h3>24×7 claim support</h3>
            <p>We are just a call away to help you with your queries</p>
          </div>

          <div className="why-card">
            <img src={nocalls} alt="No spams, no calls!" />
            <h3>No spams, no calls!</h3>
            <p>We promise not to disturb you with unnecessary calls</p>
          </div>

          <div className="why-card">
            <img src={compare} alt="Compare & buy" />
            <h3>Compare & buy</h3>
            <p>Buy at best prices from top-rated insurance companies</p>
          </div>
        </div>
      </section>

      {/* ------------------ PAYTM ADVANTAGE ------------------ */}
       <section className="advantage-container">
        <div className="advantage-left">
          <h2 className="advantage-title">Paytm Advantage</h2>
          <p className="advantage-highlight">
            <span className="orange">Seamless.</span>{" "}
            <span className="green">Paperless.</span>{" "}
            <span className="blue">Contactless.</span>
          </p>
          <p className="advantage-text">
            Elevate your insurance buying experience on Paytm with more than 28
            partners. More curated insurance products coming your way.
          </p>
        </div>

        <div className="advantage-right">
          <img
            src={paytmAdvantage}
            alt="Paytm Advantage"
            className="advantage-image"
          />
        </div>
      </section>


        {/* --- Partners Section --- */}
      <section className="partners-section">
        <h2>Get the best insurance policies from our partners</h2>

        <div className="partners-logos">
          {[icici, hdfcLife, sbi, hdfcErgo, bandhan, digit, reliance, star, tata, iffco, birla, bajaj].map(
            (logo, index) => (
              <div key={index} className="partner-card">
                <img src={logo} alt="partner" />
              </div>
            )
          )}
        </div>

        <button className="partners-btn">View All Partners ⌄</button>
      </section>
    </>
  );
};

export default Insurance;

