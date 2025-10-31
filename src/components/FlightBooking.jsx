import React, { useState } from 'react';
import './FlightBooking.css';

export function FlightBooking() {
  const [tripType, setTripType] = useState('oneWay');
  const [fromCity, setFromCity] = useState('Delhi (DEL)');
  const [toCity, setToCity] = useState('Mumbai (BOM)');
  const [departDate, setDepartDate] = useState('Sun, 02 Nov 25');
  const [passengers, setPassengers] = useState('1 Traveller, Economy');

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="flight-booking-container">
      <div className="flight-booking-card">
        {/* Trip Type Selection */}
        <div className="trip-type-selector">
          <label className="radio-option">
            <input
              type="radio"
              name="tripType"
              value="oneWay"
              checked={tripType === 'oneWay'}
              onChange={(e) => setTripType(e.target.value)}
            />
            <span className="radio-label">One Way</span>
          </label>
          
          <label className="radio-option">
            <input
              type="radio"
              name="tripType"
              value="roundTrip"
              checked={tripType === 'roundTrip'}
              onChange={(e) => setTripType(e.target.value)}
            />
            <span className="radio-label">Round Trip</span>
          </label>
        </div>

        {/* Main Booking Section */}
        <div className="booking-main">
          {/* From & To Section */}
          <div className="location-section">
            <div className="location-field">
              <label className="field-label">From</label>
              <input
                type="text"
                className="location-input"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
              />
            </div>

            <button className="swap-button" onClick={handleSwapCities}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 16V4M7 4L3 8M7 4L11 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8V20M17 20L21 16M17 20L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="location-field">
              <label className="field-label">To</label>
              <input
                type="text"
                className="location-input"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
              />
            </div>
          </div>

          {/* Date & Passenger Section */}
          <div className="details-section">
            <div className="detail-field">
              <label className="field-label">Depart</label>
              <input
                type="text"
                className="detail-input"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
              />
            </div>

            {tripType === 'roundTrip' && (
              <div className="detail-field">
                <label className="field-label">Return</label>
                <input
                  type="text"
                  className="detail-input return-input"
                  placeholder="Add Return"
                />
              </div>
            )}

            {tripType === 'oneWay' && (
              <div className="detail-field">
                <label className="field-label">Return</label>
                <button className="add-return-btn">Add Return</button>
              </div>
            )}

            <div className="detail-field">
              <label className="field-label">Passenger & Class</label>
              <input
                type="text"
                className="detail-input passenger-input"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
              <span className="dropdown-icon">▼</span>
            </div>

            <button className="search-flights-btn">Search Flights</button>
          </div>
        </div>

        {/* Special Fares Section */}
        <div className="special-fares-section">
          <div className="special-fares-header">
            <span className="fares-label">Special Fares (optional)</span>
            <span className="extra-savings">
              <span className="savings-icon">✓</span> Extra Savings
            </span>
          </div>

          <div className="fares-options">
            <div className="fare-option">
              <strong>Armed Forces</strong>
              <span className="fare-desc">Up to ₹600 off</span>
            </div>
            <div className="fare-option">
              <strong>Student</strong>
              <span className="fare-desc">Extra Baggage</span>
            </div>
            <div className="fare-option">
              <strong>Senior Citizen</strong>
              <span className="fare-desc">Up to ₹600 off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightBooking;