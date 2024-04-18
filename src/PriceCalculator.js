// PriceCalculator.js

import React, { useState } from 'react';

const PriceCalculator = () => {
  const [basePrice, setBasePrice] = useState('');
  const [finalPrice, setFinalPrice] = useState(0);

  const vendors = [
    { name: "Select a vendor", value: "1" },
    { name: "A.N.T Nursery", value: "3.09" },
    { name: "Alexander Hay Greenhouses", value: "3.09" },
    { name: "Arett Sales (General)", value: "2.06" },
    { name: "Arett Sales (Holiday)", value: "2.3175" },
    { name: "Arett Sales (Pottery)", value: "2.3175" },
    { name: "Chief Mountain Farms", value: "3.8625" },
    { name: "Cornell's True Value", value: "1.545" },
    { name: "Crescent Gardens (Pottery)", value: "2.575" },
    { name: "De Groot & Sons", value: "3.09" },
    { name: "Dean's Evergreen's", value: "3.09" },
    { name: "Digging Dog Nursery", value: "3.8625" },
    { name: "Edgar Joyce Nursery", value: "3.605" },
    { name: "Emma's Garden", value: "3.09" },
    { name: "Eshraghi Nurseries, LLC.", value: "3.09" },
    { name: "Fernbrook", value: "3.09" },
    { name: "Glover Perennials", value: "3.09" },
    { name: "Hardscrabble Farms (Zino Nursery)", value: "2.575" },
    { name: "Home Depot", value: "1.545" },
    { name: "Howe Product (Soils, Mulchs, etc.)", value: "3.605" },
    { name: "Johnson Farms", value: "3.09" },
    { name: "Kurt Lee (Ribbons)", value: "3.09" },
    { name: "Lowe's", value: "1.545" },
    { name: "Massarelli's", value: "2.06" },
    { name: "McEnroe Farms", value: "3.09" },
    { name: "Mindful Source Pottery (ECOPOTS)", value: "2.575" },
    { name: "Napco", value: "3.09" },
    { name: "Netherland Bulb", value: "2.575" },
    { name: "Perennial Farm", value: "3.605" },
    { name: "Plainview Growers", value: "3.09" },
    { name: "Pride's Corner Farms", value: "3.09" },
    { name: "Prospero Farms", value: "2.3175" },
    { name: "Tuckahoe Nursery", value: "4.12" },
    { name: "Van Vugt Greenhouses", value: "3.09" },
    { name: "Van Wingerden Kenneth Greenhouses", value: "3.09" },
    { name: "Van Wingerden Greenhouses", value: "3.09" },
    { name: "Digging Dog Nursery (Plugs)", value: "3.605" }
  ];

  const handleBasePriceChange = (e) => {
    setBasePrice(e.target.value);
    calculatePrice(e.target.value, document.getElementById('vendorSelect').value);
  };

  const handleVendorChange = (e) => {
    calculatePrice(basePrice, e.target.value);
  };

  const calculatePrice = (base, multiplier) => {
    let price = parseFloat(base) * parseFloat(multiplier);
    // Round up to the nearest whole number and subtract one penny
    price = Math.ceil(price) - 0.01;
    setFinalPrice(price.toFixed(2));
  };

  return (
    <div>
      <h1>Price Calculator</h1>
      <div>
        <label>Enter Base Price:</label>
        <input
          type="number"
          value={basePrice}
          onChange={handleBasePriceChange}
          placeholder="Base Price"
        />
      </div>
      <div>
        <label>Select a vendor:</label>
        <select id="vendorSelect" onChange={handleVendorChange}>
          {vendors.map((vendor, index) => (
            <option key={index} value={vendor.value}>
              {vendor.name}
            </option>
          ))}
        </select>
      </div>
      <p>Final Price: ${finalPrice}</p>
    </div>
  );
};

export default PriceCalculator;