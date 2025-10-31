import React, { useState } from "react";
import "./Recharge.css";

// 🔹 Top Icons (same as in Recharge.jsx)
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

// 🔹 Operator icons
import airtel from "../assets/airtel.avif";
import bsnl from "../assets/bsnl.avif";
import jio from "../assets/jio.avif";
import mtnl from "../assets/mtnl.avif";
import vi from "../assets/vi.avif";
 

const DTH = () => {
  const [selectedOperator, setSelectedOperator] = useState(null);

  const operators = [
    { name: "Airtel DTH", icon: airtel },
    { name: "BSNL", icon: bsnl },
    { name: "Jio DTH", icon: jio },
    { name: "MTNL", icon: mtnl },
    { name: "Vi", icon: vi },
   
  ];

  return (
    <div className="recharge-page">

      {/* 🔹 Top Icon Bar (same as Recharge.jsx) */}
      <div className="recharge-topbar">
        <div className="recharge-icon">
          <img src={mobileIcon} alt="Mobile" />
          <p>Prepaid/Postpaid</p>
        </div>
        <div className="recharge-icon">
          <img src={electricityIcon} alt="Electricity" />
          <p>Electricity</p>
        </div>
        <div className="recharge-icon active">
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

      {/* 🔸 DTH Operator Selection */}
      <div className="dth-container">
        <h2>DTH Recharge</h2>
        <p>Select your DTH operator</p>

        <div className="operator-container">
          {operators.map((op, index) => (
            <div
              key={index}
              className={`operator-card ${
                selectedOperator === op.name ? "active" : ""
              }`}
              onClick={() => setSelectedOperator(op.name)}
            >
              <img src={op.icon} alt={op.name} />
              <p>{op.name}</p>
            </div>
          ))}
        </div>

        {selectedOperator && (
          <div className="selected-operator">
            <p>
              Selected: <strong>{selectedOperator}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DTH;
