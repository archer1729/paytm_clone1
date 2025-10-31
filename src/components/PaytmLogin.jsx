import React from "react";
import "./paytmLogin.css";
import qrImage from "../assets/paytmqr.png"; 
import apple from"../assets/apple_appstore.avif";

const PaytmLogin = ({ onClose }) => {
  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Login with your Paytm account</h2>

        <div className="login-content">
          {/* Left side: instructions */}
          <div className="login-steps">
            <h4>Steps to scan QR Code</h4>
            <ol>
              <li>Open Paytm App</li>
              <li>Tap <b>Scan</b> option available at the bottom</li>
              <li>Point Paytm Scan at QR Code to login</li>
            </ol>
          </div>

          {/* Right side: QR */}
          <div className="login-qr">
            <img src={qrImage} alt="Paytm QR Code" />
          </div>
        </div>

        <p className="login-footer">
          By signing in, you agree to our <a href="#">privacy policy</a> and{" "}
          <a href="#">terms of use</a>
        </p>

        <div className="download-section">
          <p>To create an account download Paytm App</p>
          <div className="store-buttons">
            <img
              src={apple}
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaytmLogin;
