// src/api.js
export const generateQRCodeData = async () => {
    const mockResponse = {
      dishName: "Idli Vada Combo",
      items: [
        { name: "Idli", quantity: 2, calories: 100 },
        { name: "Vada", quantity: 1, calories: 200 },
        { name: "Sambhar", quantity: 1, calories: 120 },
        { name: "Chutney", quantity: 1, calories: 80 },
      ],
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockResponse), 500);
    });
  };
  