import React from "react";
import "./payments.css";
import hdfc from "../assets/hdfc.png";
import sbi from "../assets/sbi.png";
import axis from "../assets/axis.webp";
import kotak from "../assets/kotak.webp";
import credit_cards from "../assets/creditcard_banner.avif"; 
import hdfc_cards from "../assets/creditcard_banner2.avif"; 
import hdfc_banner from "../assets/hdfcCoBrandedCC.webp";
import sbi_cards from "../assets/sbiCoBrandedCC.webp"; 
import sbi_banner from "../assets/sbi_card.avif";
import { FaRupeeSign, FaGem, FaCocktail, FaGasPump } from "react-icons/fa";

const CreditCards = () => {
  const benefits = [
    {
      icon: <FaRupeeSign className="benefit-icon" />,
      title: "Up to 5% Cashback",
    },
    {
      icon: <FaGem className="benefit-icon" />,
      title: "Benefits worth ₹50,000",
    },
    {
      icon: <FaCocktail className="benefit-icon" />,
      title: "Free Airport Lounge Access",
    },
    {
      icon: <FaGasPump className="benefit-icon" />,
      title: "Fuel Surcharge Waiver",
    },
  ];

  return (
    <div>
      {/* ===== Main Credit Card Section ===== */}
      <div className="creditcard-section">
        {/* Left Section */}
        <div className="creditcard-left">
          <h4 className="cc-subtitle">💳 Credit Card</h4>
          <h1 className="cc-title">
            India’s Most <br />
            Rewarding Credit Cards
          </h1>
          <p className="cc-desc">
            Perfect range of Credit Cards that offer unmatched Cashbacks,
            Lifestyle Benefits & much more.
          </p>

          <h5 className="cc-partner-heading">In partnership with</h5>
          <div className="cc-partners">
            <img src={hdfc} alt="HDFC" />
            <img src={sbi} alt="SBI" />
            <img src={axis} alt="Axis Bank" />
            <img src={kotak} alt="Kotak" />
          </div>
        </div>

        {/* Right Section */}
        <div className="creditcard-right">
          <img src={credit_cards} alt="Credit Card Stack" />
        </div>
      </div>

      {/* ===== Benefits Row Section ===== */}
      <div className="cc-benefits-section">
        <div className="benefit-row">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon-wrapper">{item.icon}</div>
              <p className="benefit-text">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="benefit-heading">
          <h2>Choose from the bouquet of our</h2>
          <h2>co-branded cards</h2>
        </div>
      </div>

      {/* ===== HDFC Co-Branded Card Section ===== */}
      <div className="cc-hdfc-section">
        <div className="cc-hdfc-left">
          <img src={hdfc_cards} alt="Paytm HDFC Credit Cards" />
        </div>

        <div className="cc-hdfc-right">
          <img src={hdfc_banner} alt="HDFC Bank Logo" className="hdfc-logo" />
          <h3 className="cc-hdfc-subtitle">CO-BRANDED CREDIT CARD</h3>
          <h1 className="cc-hdfc-title">
            Cashback, <br />
            Every time for Everyone!
          </h1>
          <p className="cc-hdfc-desc">
            Paytm HDFC Bank Credit Cards — A card with assured Cashback and
            incredible offers.
          </p>
          <button className="cc-hdfc-btn">Know More →</button>
        </div>
      </div>

        {/* ===== SBI Co-Branded Card Section ===== */}
      <div className="cc-hdfc-section">
        <div className="cc-hdfc-left">
          <img src={sbi_banner} alt="Paytm sbi Credit Cards" />
        </div>

        <div className="cc-hdfc-right">
          <img src={sbi_cards} alt="SBI Bank Logo" className="hdfc-logo" />
          <h3 className="cc-hdfc-subtitle">CO-BRANDED CREDIT CARD</h3>
          <h1 className="cc-hdfc-title">
           India’s Most Sincere<br/>
            Credit Card
          </h1>
          <p className="cc-hdfc-desc">
           Paytm SBI Card — With Intelligent Features & Great Rewards that Never Expire
          </p>
          <button className="cc-hdfc-btn">Know More →</button>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
