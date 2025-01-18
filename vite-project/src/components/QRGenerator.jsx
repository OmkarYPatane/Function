// src/QRGenerator.jsx
import React, { useState } from "react";
import QRCode from "qrcode";
import { generateQRCodeData } from "../api";

const QRGenerator = ({ onScanQR }) => {
  const [qrCodeData, setQrCodeData] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleGenerateQR = async () => {
    setLoading(true);
    const data = await generateQRCodeData();
    const qrDataString = JSON.stringify(data);
    const qrCode = await QRCode.toDataURL(qrDataString);
    setQrCodeData(data);
    setQrCodeUrl(qrCode);
    setLoading(false);
  };

  const handleSimulateScan = () => {
    if (qrCodeData && onScanQR) {
      onScanQR(qrCodeData); // Pass the data to the parent component
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>QR Code Generator</h1>
      <button onClick={handleGenerateQR} disabled={loading}>
        {loading ? "Generating..." : "Generate QR"}
      </button>
      {qrCodeUrl && (
        <div>
          <h3>QR Code for: {qrCodeData.dishName}</h3>
          <img src={qrCodeUrl} alt="Generated QR Code" style={{ margin: "20px auto" }} />
          <button onClick={handleSimulateScan}>Simulate Scan</button>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
