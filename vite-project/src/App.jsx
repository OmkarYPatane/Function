// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import QRGenerator from "./components/QRGenerator";
import CalorieTracker from "./components/CalorieTracker";

const App = () => {
  const navigate = useNavigate();

  // Function to handle the QR scan and navigate to the calorie tracker
  const handleScanQR = (qrData) => {
    navigate("/tracker", { state: { qrData } }); // Navigate to the calorie tracker route with QR data
  };

  return (
    <Routes>
      {/* Route for QR Code Generator */}
      <Route path="/" element={<QRGenerator onScanQR={handleScanQR} />} />
      {/* Route for Calorie Tracker */}
      <Route path="/tracker" element={<CalorieTracker />} />
    </Routes>
  );
};

// AppWrapper adds the Router to the main App component
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
