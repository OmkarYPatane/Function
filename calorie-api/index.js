const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Mock data
const calorieData = {
  dishName: "Idli Vada Combo",
  items: [
    { name: "Idli", quantity: 2, calories: 100 },
    { name: "Vada", quantity: 1, calories: 200 },
    { name: "Sambhar", quantity: 1, calories: 120 },
    { name: "Chutney", quantity: 1, calories: 80 },
  ],
};

// API route to fetch calorie data
app.get("/api/calories", (req, res) => {
  res.json(calorieData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
