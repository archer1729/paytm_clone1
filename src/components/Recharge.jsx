// src/components/Recharge.jsx
import React, { useState } from "react";
import "./Recharge.css";
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
import airtel from"../assets/airtel.avif";
import bsnl from "../assets/bsnl.avif";
import jio from"../assets/jio.avif";
import mtnl from"../assets/mtnl.avif";
import vi from"../assets/vi.avif";


const Recharge = () => {
  const [type, setType] = useState("prepaid");

  return (
    <div className="recharge-page">

      {/* 🔷 Top Icon Bar */}
      <div className="recharge-topbar">
        <div className="recharge-icon">
          <img src={mobileIcon} alt="Mobile" />
          <p>Prepaid/Postpaid</p>
        </div>
        <div className="recharge-icon">
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
          <img src={landline} alt="Loan" />
          <p>Landline bill</p>
        </div>
        <div className="recharge-icon">
          <img src={Education} alt="Education" />
          <p>Education</p>
        </div>
    
       
        <div className="recharge-icon">
          <img src={payloan} alt="payloan" />
          <p>Pay Loan</p>
        </div>
        
         <div className="recharge-icon">
          <img src={invest_stocks} alt="Stocks" />
          <p>Invest in Stocks</p>
        </div>
         <div className="recharge-icon">
          <img src={cylinder} alt="cylinder" />
          <p>Book a cylinder</p>
        </div>
         <div className="recharge-icon">
          <img src={paytm_first} alt="paytm_first" />
          <p>Paytm First</p>
        </div>
           <div className="recharge-icon">
          <img src={insurance_lic} alt="lic" />
          <p>insurance/Lic Premium</p>
        </div>
   </div>

      {/* ⚪ Recharge Form Card */}
      <div className="recharge-container">
        <h2>Recharge or Pay Mobile Bill</h2>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              checked={type === "prepaid"}
              onChange={() => setType("prepaid")}
            />
            Prepaid
          </label>
          <label>
            <input
              type="radio"
              checked={type === "postpaid"}
              onChange={() => setType("postpaid")}
            />
            Postpaid
          </label>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Mobile Number" />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Operator" />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Amount" />
          <a href="#">Browse Plans</a>
        </div>

        <button className="recharge-btn">Proceed to Recharge</button>
      </div>
    
   
   </div>



 


  );
};

export default Recharge;
