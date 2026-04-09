import React, { useState } from 'react';

const PriceCalculator = () => {
    const [basePrice, setBasePrice] = useState('');
    const [finalPrice, setFinalPrice] = useState('0.00');
    const [isRetail, setIsRetail] = useState(false);
    const [gallonSize, setGallonSize] = useState('1');
    const [vendor, setVendor] = useState('0');
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState('');

    const MIN_PRICES = {
        '1': 23.99, // Minimum price for 1 gallon perennials for retail
        '2': 26.99, // 2-gallon minimum price for retail
        '3': 31.99  // 3-gallon minimum price for retail
    };

    const vendors = [
        { name: "Select a vendor", multiplier: "1" },
        { name: "A.N.T Nursery", multiplier: "3.09" },
        { name: "Alexander Hay Greenhouses", multiplier: "3.09" },
        { name: "Arett Sales (General)", multiplier: "2.06" },
        { name: "Arett Sales (Holiday)", multiplier: "2.3175" },
        { name: "Arett Sales (Pottery)", multiplier: "2.3175" },
        { name: "Chief Mountain Farms", multiplier: "3.8625" },
        { name: "Cornell's True Value", multiplier: "1.545" },
        { name: "Crescent Gardens (Pottery)", multiplier: "2.575" },
        { name: "De Groot & Sons", multiplier: "3.09" },
        { name: "Dean's Evergreen's", multiplier: "3.09" },
        { name: "Digging Dog Nursery (Plugs)", multiplier: "3.8625" },
        { name: "Edgar Joyce Nursery", multiplier: "3.605" },
        { name: "Emma's Garden", multiplier: "3.09" },
        { name: "Eshraghi Nurseries, LLC.", multiplier: "3.09" },
        { name: "Fernbrook", multiplier: "3.09" },
        { name: "Glover Perennials", multiplier: "3.09" },
        { name: "Hardscrabble Farms (Zino Nursery)", multiplier: "2.575" },
        { name: "Home Depot", multiplier: "1.545" },
        { name: "Howe Product (Soils, Mulchs, etc.)", multiplier: "3.605" },
        { name: "Johnson Farms", multiplier: "3.09" },
        { name: "Kurt Lee (Ribbons)", multiplier: "3.09" },
        { name: "Lowe's", multiplier: "1.545" },
        { name: "Massarelli's", multiplier: "2.06" },
        { name: "Masonry Depot", multiplier: "1.545" },
        { name: "McEnroe Farms", multiplier: "3.09" },
        { name: "Mindful Source Pottery (ECOPOTS)", multiplier: "2.575" },
        { name: "Napco", multiplier: "3.09" },
        { name: "Netherland Bulb", multiplier: "2.575" },
        { name: "Perennial Farm", multiplier: "3.605" },
        { name: "Plainview Growers", multiplier: "3.09" },
        { name: "Pride's Corner Farms", multiplier: "3.09" },
        { name: "Prospero Farms", multiplier: "2.3175" },
        { name: "Sunset Farmstead", multiplier: "3.09" },
        { name: "Tuckahoe Nursery", multiplier: "4.12" },
        { name: "Van Vugt Greenhouses", multiplier: "3.09" },
        { name: "Van Windgerden Kenneth Greenhouses", multiplier: "3.09" },
        { name: "Van Wingerden Greenhouses", multiplier: "3.09" }
    ];

    const handleBasePriceChange = (e) => {
        setBasePrice(e.target.value);
        setError('');
        calculateFinalPrice(e.target.value, vendor, isRetail, gallonSize);
    };

    const handleVendorChange = (e) => {
        setVendor(e.target.value);
        setError('');
        calculateFinalPrice(basePrice, e.target.value, isRetail, gallonSize);
    };

    const handleGallonSizeChange = (e) => {
        setGallonSize(e.target.value);
        setError('');
        calculateFinalPrice(basePrice, vendor, isRetail, e.target.value);
    };

    const handleIsRetailChange = (e) => {
        setIsRetail(e.target.checked);
        setError('');
        if (!e.target.checked) {
            setGallonSize('1'); // Reset gallon size if not retail
        }
        calculateFinalPrice(basePrice, vendor, e.target.checked, gallonSize);
    };

    const calculateFinalPrice = (base, vendorIndex, retail, size) => {
        if (!base || parseFloat(base) <= 0) {
            setFinalPrice('0.00');
            return;
        }

        if (vendorIndex === '0') {
            setError('Please select a vendor');
            setFinalPrice('0.00');
            return;
        }

        const multiplier = vendors[parseInt(vendorIndex)].multiplier;
        let price = parseFloat(base) * parseFloat(multiplier);
        price = Math.ceil(price) - 0.01; // Round up to the nearest whole number and subtract one penny

        // Apply the minimum price for retail only if the calculated price is lower
        if (retail && MIN_PRICES[size] && price < MIN_PRICES[size]) {
            price = MIN_PRICES[size];
        }

        setFinalPrice(price.toFixed(2));
        setError('');
    };

    const handleReset = () => {
        setBasePrice('');
        setFinalPrice('0.00');
        setIsRetail(false);
        setGallonSize('1');
        setVendor('0');
        setError('');
        setCopied(false);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(finalPrice);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="price-calculator-container">
            <h1>Price Calculator</h1>
            {error && <p className="error-message">{error}</p>}
            <div>
                <label>Enter Base Price:</label>
                <input
                    type="number"
                    value={basePrice}
                    onChange={handleBasePriceChange}
                    placeholder="Base Price"
                    min="0"
                />
            </div>
            <div>
                <label>Select a vendor:</label>
                <select value={vendor} onChange={handleVendorChange}>
                    {vendors.map((v, index) => (
                        <option key={index} value={index}>
                            {v.name}
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
            <p className="final-price">Final Price: ${finalPrice}</p>
            <div className="button-group">
                <button onClick={handleCopyToClipboard}>{copied ? '✓ Copied!' : 'Copy Price'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default PriceCalculator;
