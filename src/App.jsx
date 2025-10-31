import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Recharge from "./components/Recharge";
import DTH from "./components/DTH";
import Loan from "./components/Loan";
import Electricity from "./components/Electricity";
import Creditcards from "./components/CreditCards";
import LicInsurance from "./components/LicInsurance";
import FlightBooking from "./components/FlightBooking";
import PaytmLogin from "./components/PaytmLogin";
import {Footer} from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HeroSection /><ServiceSection /> <Footer /></>} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/DTH" element={<DTH />} />
        <Route path="/Electricity" element={<Electricity />} />
        <Route path="/CreditCards" element={<Creditcards />} />
         <Route path="/licInsurance" element={<LicInsurance />} />
         <Route path="/Loan" element={<Loan />} />
          <Route path="/FlightBooking" element={<FlightBooking  />} />
           <Route path="/PaytmLogin" element={<PaytmLogin  />} />
          
      </Routes>
    </>
  );
}

export default App;
