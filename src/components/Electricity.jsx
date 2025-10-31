import React, { useState } from "react";
import "./Recharge.css";

// 🔹 Reuse the same top icons
import mobileIcon from "../assets/mobile_flat_icon.avif";
import electricityIcon from "../assets/bulb_flat_icon.avif";
import dthIcon from "../assets/dth_flat_icon.avif";
import metroIcon from "../assets/metro_flat_icon.avif";
import landline from "../assets/landlinebill.avif";
import Education from "../assets/education.avif";
import payloan from "../assets/loans.webp";
import invest_stocks from "../assets/stocks.png";
import cylinder from "../assets/cylinder.png";
import paytm_first from "../assets/paytm_first.webp";
import insurance_lic from "../assets/insurance.avif";

const Electricity = () => {
  const [selectedState, setSelectedState] = useState("");
  const [customerId, setCustomerId] = useState("");

  const states = [
    "Maharashtra",
    "Gujarat",
    "Karnataka",
    "Tamil Nadu",
    "Delhi",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Rajasthan",
    "Punjab",
    "Haryana",
  ];

  return (
    <div className="recharge-page">
      {/* 🔹 Top Icon Bar (Same as Recharge.jsx) */}
      <div className="recharge-topbar">
        <div className="recharge-icon">
          <img src={mobileIcon} alt="Mobile" />
          <p>Prepaid/Postpaid</p>
        </div>
        <div className="recharge-icon active">
          <img src={electricityIcon} alt="Electricity" />
          <p>Electricity</p>
        </div>
        <div className="recharge-icon">
          <img src={dthIcon} alt="DTH" />
          <p>DTH</p>
        </div>
        <div className="recharge-icon">
          <img src={metroIcon} alt="Metro" />
          <p>Metro</p>
        </div>
        <div className="recharge-icon">
          <img src={landline} alt="Landline" />
          <p>Landline Bill</p>
        </div>
        <div className="recharge-icon">
          <img src={Education} alt="Education" />
          <p>Education</p>
        </div>
        <div className="recharge-icon">
          <img src={payloan} alt="Loan" />
          <p>Pay Loan</p>
        </div>
        <div className="recharge-icon">
          <img src={invest_stocks} alt="Stocks" />
          <p>Invest in Stocks</p>
        </div>
        <div className="recharge-icon">
          <img src={cylinder} alt="Cylinder" />
          <p>Book a Cylinder</p>
        </div>
        <div className="recharge-icon">
          <img src={paytm_first} alt="Paytm First" />
          <p>Paytm First</p>
        </div>
        <div className="recharge-icon">
          <img src={insurance_lic} alt="Insurance" />
          <p>Insurance/LIC</p>
        </div>
      </div>

      {/* ⚡ Electricity Bill Container */}
      <div className="electricity-container">
        <h2>Pay Electricity Bill</h2>
        <p>Select your state and enter customer ID to continue.</p>

        <div className="form-group">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Customer ID / Account Number"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </div>

        <button
          className="recharge-btn"
          disabled={!selectedState || !customerId}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Electricity;
