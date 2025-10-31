import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar-grid">
          {/* Left: Logo Section */}
          <div className="logo-section">
            <img
              className="paytm-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
              alt="Paytm Logo"
            />
            {/* BHIM UPI logo (public CDN); fallback will show alt text if blocked */}
            <img
              className="bhimupi-logo"
              src="src\assets\bhim-upi-svg.svg"
              alt="BHIM UPI"
            />
          </div>

          {/* Center: Navigation Menu */}
          <ul className="nav-links" role="navigation">
       <ul className="nav-links" role="navigation">

      <li className="dropdown hover-only">
        <Link className="dropdown-toggle" to="#">
          Recharge & Bills <span className="caret">▼</span>
        </Link>
        <ul className="dropdown-menu">
          <li><Link to="/Recharge">Mobile Recharge</Link></li>
          <li><Link to="/Electricity">Electricity Bill</Link></li>
          <li><Link to="/DTH">DTH Recharge</Link></li>
        </ul>
      </li>

      <li className="dropdown hover-only">
        <Link className="dropdown-toggle" to="#">
          Ticket Booking <span className="caret">▼</span>
        </Link>
        <ul className="dropdown-menu">
          <li><Link to="/FlightBooking">Train Tickets</Link></li>
          <li><Link to="/FlightBooking">Bus Booking</Link></li>
          <li><Link to="/FlightBooking">Flight Booking</Link></li>
        </ul>
      </li>

      <li className="dropdown hover-only">
        <Link className="dropdown-toggle" to="#">
          Payments & Services <span className="caret">▼</span>
        </Link>
        <ul className="dropdown-menu">
          <li><Link to="/Loan">Loans</Link></li>
          <li><Link to="/LicInsurance">Insurance</Link></li>
          <li><Link to="/CreditCards">Credit Cards</Link></li>
        </ul>
      </li>

      <li className="dropdown hover-only">
        <Link className="dropdown-toggle" to="#">
          Paytm for Business <span className="caret">▼</span>
        </Link>
        <ul className="dropdown-menu">
          <li><Link to="/">Merchant Tools</Link></li>
          <li><Link to="/">Business Payments</Link></li>
          <li><Link to="/">POS Machines</Link></li>
        </ul>
      </li>

      <li className="dropdown hover-only">
        <Link className="dropdown-toggle" to="#">
          Company <span className="caret">▼</span>
        </Link>
        <ul className="dropdown-menu">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/investor-relations">Investor Relations</Link></li>
        </ul>
      </li>
    </ul>
  <li>
    <a href="#">Download App</a>
  </li>
</ul>
 

          {/* Right: Sign In Button */}
          <Link to="/PaytmLogin" className="login-btn">
            <button>
              <FaUser className="user-icon" /> Sign In
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
 