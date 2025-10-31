import React from "react";
import "./payments.css";

// Right section image
import loanImg from "../assets/5_lakh.webp";

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

// Icons for later sections
import docIcon from "../assets/document_icon.avif";
import timeIcon from "../assets/loan_icon6.webp";

const Loan = () => {
  const partners = [
    icici,
    hdfcLife,
    sbi,
    hdfcErgo,
    bandhan,
    digit,
    reliance,
    star,
    tata,
    iffco,
    birla,
    bajaj,
  ];

  const controlFeatures = [
    {
      icon: "⚙️",
      title: "Flexible Loan & Tenure Options",
      desc: "Choose any loan amount from ₹10,000 to ₹5 Lakh and convert it into EMI.",
    },
    {
      icon: "👍",
      title: "Available 24X7",
      desc: "Apply for the loan anytime, anywhere with just your mobile.",
    },
    {
      icon: "📱",
      title: "Foreclose anytime",
      desc: "Take the loan to fulfill your need and repay the full amount whenever you wish to.",
    },
    {
      icon: "📈",
      title: "Enhance Your Credit Score",
      desc: "Make timely repayments to improve your credit score and become eligible for higher loan amounts.",
    },
  ];

  return (
    <>
      {/* ===================== MAIN LOAN SECTION ===================== */}
      <section className="loan-section">
        <div className="loan-left">
          <div className="loan-header">
            <div className="loan-icon">₹</div>
            <h2>Personal Loan</h2>
          </div>

          <h1>
            Instant Loan <br /> in <span className="highlight">2 Minutes</span>
          </h1>

          <p className="loan-subtext">
            Loan facility is provided by our Lending partners.
          </p>

          <div className="loan-partners">
            {partners.map((logo, index) => (
              <div key={index} className="loan-partner-card">
                <img src={logo} alt="partner logo" />
              </div>
            ))}
          </div>
        </div>

        <div className="loan-right">
          <img src={loanImg} alt="Loan Mockup" className="loan-image" />
        </div>
      </section>

      {/* ===================== NO DOCUMENTS SECTION ===================== */}
      <section className="loan-feature-section">
        <h2 className="loan-feature-heading">
          India's quickest multi-purpose loan
        </h2>

        <div className="loan-feature-card">
          <div className="loan-feature-left">
            <img
              src={docIcon}
              alt="Document Icon"
              className="loan-feature-icon"
            />
            <h3>No Documents Needed</h3>
          </div>

          <ul className="loan-feature-list">
            <li>100% digital</li>
            <li>Transparent paperless journey</li>
            <li>No sales calls</li>
          </ul>
        </div>
      </section>

      {/* ===================== CONTROL + 2 MINUTES SECTION ===================== */}
      <section className="loan-control-section">
        <h2 className="loan-control-heading">
          You're always in <span className="highlight">control.</span>
        </h2>

        <div className="loan-control-grid">
          {controlFeatures.map((item, index) => (
            <div key={index} className="loan-control-card">
              <div className="loan-control-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Green card */}
        <div className="loan-steps-card">
          <div className="loan-steps-left">
            <img src={timeIcon} alt="Time icon" className="loan-steps-icon" />
            <h3>
              2 minutes is all <br /> it takes.
            </h3>
          </div>
          <ul className="loan-steps-list">
            <li>💳 Enter PAN Number</li>
            <li>🕒 Get your Loan Offer</li>
            <li>🏦 Share Bank Account Details</li>
            <li>🎉 Yay! It's done.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Loan;
