import React, { useState } from 'react';

const PriceCalculator = () => {
    const [basePrice, setBasePrice] = useState('');
    const [finalPrice, setFinalPrice] = useState('0.00');
    const [isRetail, setIsRetail] = useState(false);
    const [gallonSize, setGallonSize] = useState('1');

    const MIN_PRICES = {
        '1': 22.99, // Minimum price for 1 gallon perennials for retail
        '2': 25.99, // Replace with your actual 2-gallon minimum price for retail
        '3': 30.99  // Replace with your actual 3-gallon minimum price for retail
    };

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
        calculateFinalPrice(e.target.value, document.getElementById('vendorSelect').value, isRetail, gallonSize);
    };

    const handleVendorChange = (e) => {
        calculateFinalPrice(basePrice, e.target.value, isRetail, gallonSize);
    };

    const handleGallonSizeChange = (e) => {
        setGallonSize(e.target.value);
        calculateFinalPrice(basePrice, document.getElementById('vendorSelect').value, isRetail, e.target.value);
    };

    const handleIsRetailChange = (e) => {
        setIsRetail(e.target.checked);
        if (!e.target.checked) {
            setGallonSize('1'); // Reset gallon size if not retail
        }
        calculateFinalPrice(basePrice, document.getElementById('vendorSelect').value, e.target.checked, gallonSize);
    };

    const calculateFinalPrice = (base, multiplier, retail, size) => {
        let price = parseFloat(base) * parseFloat(multiplier);
        price = Math.ceil(price) - 0.01; // Round up to the nearest whole number and subtract one penny

        // Apply the minimum price for retail only if the calculated price is lower
        if (retail && MIN_PRICES[size] && price < MIN_PRICES[size]) {
            price = MIN_PRICES[size];
        }

        setFinalPrice(price.toFixed(2)); // Format the price to 2 decimal places
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
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isRetail}
                        onChange={handleIsRetailChange}
                    />
                    Is this for Retail?
                </label>
            </div>
            {isRetail && (
                <div>
                    <label>Gallon Size:</label>
                    <select value={gallonSize} onChange={handleGallonSizeChange}>
                        <option value="1">1 gallon</option>
                        <option value="2">2 gallons</option>
                        <option value="3">3 gallons</option>
                    </select>
                </div>
            )}
            <p>Final Price: ${finalPrice}</p>
        </div>
    );
};

export default PriceCalculator;
