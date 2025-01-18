// src/CalorieTracker.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CalorieTracker = () => {
  const location = useLocation();
  const [data, setData] = useState(null);

  // Load QR data when the component mounts
  useEffect(() => {
    if (location.state?.qrData) {
      setData(location.state.qrData);
    }
  }, [location.state]);

  // Handle adding an item
  const handleAddItem = (index) => {
    const updatedItems = [...data.items];
    updatedItems[index].quantity += 1; // Increment quantity
    setData({ ...data, items: updatedItems });
  };

  // Handle removing an item
  const handleRemoveItem = (index) => {
    const updatedItems = [...data.items];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1; // Decrement quantity if greater than 0
      setData({ ...data, items: updatedItems });
    }
  };

  // Calculate the total calories
  const totalCalories = data
    ? data.items.reduce((total, item) => total + item.quantity * item.calories, 0)
    : 0;

  // Add a new dish dynamically
  const handleAddNewDish = () => {
    const newItem = { name: "New Dish", quantity: 1, calories: 150 }; // Default new dish
    setData({ ...data, items: [...data.items, newItem] });
  };

  return data ? (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>{data.dishName}</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span>
              {item.name} - {item.quantity} x {item.calories} kcal
            </span>
            <div>
              <button
                onClick={() => handleAddItem(index)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Add
              </button>
              <button
                onClick={() => handleRemoveItem(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total Calories: {totalCalories} kcal</h3>
      <button
        onClick={handleAddNewDish}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add New Dish
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CalorieTracker;
