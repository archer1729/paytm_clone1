import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

import banner1 from "../assets/banner1.avif";
import DTHR from "../assets/DTHR.avif";
import ELECB from "../assets/ELECB.avif";
import EMI from "../assets/EMI.avif";
import FASTAG from "../assets/FASTAG.avif";
import VAP from "../assets/VAP.webp";
import MOBR from "../assets/MOBR.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.avif"; 
import banner4 from "../assets/banner4.avif";
import banner5 from "../assets/banner5.avif";
import banner6 from "../assets/banner6.avif";
import banner7 from "../assets/banner7.avif";
import paytm_travel from"../assets/Paytm_Travel_Logo.svg";
import aeroplane from"../assets/aeroplane.avif";
import train from "../assets/train.avif";
import bus from"../assets/bus.avif";
import intl_flights from "../assets/intl_flights.avif";












export const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Center Hero Image */}
      <div className="hero-center-image">
        <img src={banner1} alt="Hero" />
      </div>

      {/* Recharge & Bills Section */}
      <div className="hero-bottom-row">
        <div className="hero-icons-container">
          <h3 className="hero-icons-title">Recharge & Bills</h3>
          <div className="hero-icons">
             <Link to="/Recharge" className="icon-item">
              <img src={MOBR} alt="Mobile Recharge" />
              <p>Mobile Recharge</p>
            </Link>
             <Link to="/DTH" className="icon-item">
             <img src={DTHR} alt="DTH Recharge" />
                <p>DTH Recharge</p>
            </Link>

            <div className="icon-item">
              <img src={FASTAG} alt="FASTag Recharge" />
              <p>FASTag Recharge</p>
            </div>
          <Link to="/electricity-bill" className="icon-item">
            <img src={ELECB} alt="Electricity Bill" />
            <p>Electricity Bill</p>
          </Link>
            <div className="icon-item">
              <img src={EMI} alt="Loan EMI" />
              <p>Loan EMI</p>
            </div>
            <div className="icon-item">
              <img src={VAP} alt="View All Products" />
              <p>View All</p>
            </div>
          </div>
        </div>

        {/* Square Ad Banner */}
        <div className="hero-banner">
          <img src={banner2} alt="Ad Banner" />
        </div>
      </div>

      {/* Dual Banners */}
      <div className="hero-dual-banners">
        <Link to="/Recharge" className="banner-item">
          <img src={banner3} alt="Banner 3" />
        </Link>
        <Link to="/DTH" className="banner-item">
          <img src={banner4} alt="Banner 4" />
       </Link>
     </div> 

      {/* Three Banners */}
      <div className="hero-three-banners">
        <div className="banner-item">
          <img src={banner5} alt="Banner 5" />
        </div>
        <div className="banner-item">
          <img src={banner6} alt="Banner 6" />
        </div>
        <div className="banner-item">
          <img src={banner7} alt="Banner 7" />
        </div>
      </div>


{/* Travel Section */}
<div className="hero-travel-section">
  {/* LEFT: title above icons */}
  <div className="travel-left">
    <h3 className="travel-title">Book on Paytm</h3>

    <div className="travel-icons-wrapper">
      <Link to="/FlightBooking" className="travel-item">
        <img src={aeroplane} alt="Flights" />
        <p>Flights</p>
      </Link>

      <div className="travel-item">
        <img src={train} alt="Trains" />
        <p>Trains</p>
      </div>

      <div className="travel-item">
        <img src={bus} alt="Buses" />
        <p>Buses</p>
      </div>

      <div className="travel-item">
        <img src={intl_flights} alt="Intl flights" />
        <p>Intl. Flights</p>
      </div>
    </div>
  </div>

  {/* RIGHT: Paytm Travel logo (kept outside left block so it stays on the right) */}
  <div className="travel-banner">
    <img src={paytm_travel} alt="Paytm Travel Logo" />
  </div>
</div>



     </section>
  );
};

