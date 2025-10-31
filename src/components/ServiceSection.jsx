import React from "react";
import "./ServiceSection.css";
import { Link } from "react-router-dom";


import paytmupi from "../assets/paytmupi_logo.png";
import googleplay from "../assets/googleplay.avif";
import appstore from "../assets/apple_appstore.avif";
import ServicePoster from "../assets/banner8.avif";
import smallupi from "../assets/smallupi.png";
import investment_poster from"../assets/banner11.avif";
import paytm_money from"../assets/paytm_money_symbol.webp";
import paytm_Business from"../assets/paytm_business.png";
import payment_poster from"../assets/banner12.avif";
import banner10 from"../assets/banner10.avif";
import banner9 from"../assets/banner9.avif";
import credit_cards from"../assets/credit_cards.avif";
 import insurance_broking from"../assets/insurance_broking.png";




export const ServiceSection = () => {
  return (
    <>
      {/* ---- Main Service Section ---- */}
      <section className="service-section">
        {/* LEFT SIDE - Text Content */}
        <div className="service-content">
          <img src={paytmupi} alt="Paytm UPI" className="upi-logo" />
          <h1>
            Pay anyone directly <br /> from your{" "}
            <span className="highlight">bank account</span>
          </h1>
          <p>
            Pay anyone, everywhere. Make contactless & secure payments in-stores
            or online using Paytm UPI or directly from your Bank Account. Plus,
            send & receive money from anyone.
          </p>

          <div className="store-buttons">
            <img src={appstore} alt="App Store" />
            <img src={googleplay} alt="Google Play" />
          </div>
        </div>

        {/* RIGHT SIDE - Image/Poster */}
        <div className="service-image">
          <img src={ServicePoster} alt="Service Poster" />
        </div>
      </section>



      {/* ---- Customer Care Section ---- */}
      <div className="Customercare_add">
        <img src={smallupi} alt="Customer Support" />
        <h3>24x7 Trusted customer support to assist and help you</h3>
        <button className="customer_support">Learn More</button>
      </div>







 <section className="dual-service">
  <div className="dual-card-container">
    {/* Mini Card 1 */}
    <div className="mini-card">
      <div className="mini-content">
        <img src={credit_cards} alt="Credit Cards" className="mini-logo" />
        <h2>
          One destination for <span>Credit Cards</span>
        </h2>
        <p>
          Paytm HDFC, SBI & Axis Bank Credit Cards with assured Cashback
          and incredible offers.
        </p>
        <Link to="/CreditCards" className="mini-button">Apply Now →</Link>
      </div>

      <div className="mini-image">
        <img src={banner9} alt="Credit Card Banner" />
      </div>
    </div>

    {/* Mini Card 2 */}
    <div className="mini-card">
      <div className="mini-content">
        <img
          src={insurance_broking}
          alt="Insurance Broking"
          className="mini-logo"
        />
        <h2>
          Insurance ka <span>Super Market</span>
        </h2>
        <p>
          A Smart, Simple & Transparent Platform to Explore & Purchase
          Insurance.
        </p>
        <Link to="/LicInsurance"className="mini-button">Get It Now →</Link>
      </div>

      <div className="mini-image">
        <img src={banner10} alt="Insurance Banner" />
      </div>
    </div>
  </div>
</section>













 {/*second service card*/}

        <section className="service-section">
        {/* LEFT SIDE - Text Content */}
        <div className="service-content">
          <img src={paytm_money} alt="Paytm UPI" className="upi-logo" />

          <h1>
            Everything you need to start your <br />
            <span className="highlight">investment journey</span>
          </h1>

          <p>
            Whether you're a beginner or pro, Paytm Money helps you invest smarter
            and achieve financial independence. Get access to expert opinion,
            mutual fund SIP, F&O trading, and much more — all in one app.
          </p>

          <button className="investment_journey">Learn More</button>
        </div>

        {/* RIGHT SIDE - Image/Poster */}
        <div className="service-image">
          <img src={investment_poster} alt="Investment Poster" />
        </div>
      </section>





    {/* third service card */}  
        <section className="service-section">
        {/* LEFT SIDE - Text Content */}
        <div className="service-content">
          <img src={paytm_Business} alt="Paytm UPI" className="upi-logo" />

          <h1>
            Except payments  <br />
            <span className="highlight">Online and offline</span>
          </h1>

          <p>
            Millions of small & big businesses use Paytm to accept
             payments anywhere any time with a wide range of solutions
              for all kind of merchants
          </p>

          <button className="Paytm_business">Learn More</button>
        </div>

        {/* RIGHT SIDE - Image/Poster */}
        <div className="service-image">
          <img src={payment_poster} alt="Investment Poster" />
        </div>
      </section>





 

    </>
 
    
  );
};

  
