import React, { useState } from 'react';

const MulchCalculator = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [unit, setUnit] = useState('feet');

    // Bag sizes in cubic feet
    const bagSizes = [
        { size: '8 Qt', cubicFeet: 0.267, label: '8 Quart' },
        { size: '16 Qt', cubicFeet: 0.533, label: '16 Quart' },
        { size: '1 Cu Ft', cubicFeet: 1, label: '1 Cubic Foot' },
        { size: '2 Cu Ft', cubicFeet: 2, label: '2 Cubic Feet' },
        { size: 'Yard', cubicFeet: 27, label: 'Cubic Yard' }
    ];

    const getCalculation = () => {
        if (!length || !width || !depth) {
            return null;
        }

        let l = parseFloat(length);
        let w = parseFloat(width);
        let d = parseFloat(depth);

        if (l <= 0 || w <= 0 || d <= 0) {
            return null;
        }

        // Convert to feet if in inches
        if (unit === 'inches') {
            l = l / 12;
            w = w / 12;
            d = d / 12;
        }

        // Calculate cubic feet
        const cubicFeet = l * w * d;
        const cubicYards = cubicFeet / 27;

        // Calculate bags needed for each size
        const results = bagSizes.map(bag => {
            const bagsExact = cubicFeet / bag.cubicFeet;
            return {
                ...bag,
                bagsExact: bagsExact,
                bagsNeeded: bagsExact < 1 ? bagsExact.toFixed(2) : Math.ceil(bagsExact),
                bagsDisplay: bagsExact < 1 ? `${bagsExact.toFixed(2)} (less than 1)` : Math.ceil(bagsExact)
            };
        });

        return { cubicFeet, cubicYards, results };
    };

    const calculation = getCalculation();

    const handleReset = () => {
        setLength('');
        setWidth('');
        setDepth('');
        setUnit('feet');
    };

    return (
        <div className="mulch-calculator-container">
            <h1>🪴 Mulch/Soil Calculator</h1>
            <p className="subtitle">Calculate how much mulch or soil you need, then see bag options</p>

            <div className="calc-section">
                <h2>Measurements</h2>
                
                <div className="unit-selector">
                    <label>Unit of Measurement:</label>
                    <div className="radio-group">
                        <label>
                            <input 
                                type="radio" 
                                value="feet" 
                                checked={unit === 'feet'}
                                onChange={(e) => setUnit(e.target.value)}
                            />
                            Feet
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="inches" 
                                checked={unit === 'inches'}
                                onChange={(e) => setUnit(e.target.value)}
                            />
                            Inches
                        </label>
                    </div>
                </div>

                <div className="measurement-inputs">
                    <div className="input-group">
                        <label>Length ({unit === 'feet' ? 'Feet' : 'Inches'}) *</label>
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            placeholder="Enter length"
                            min="0"
                        />
                    </div>

                    <div className="input-group">
                        <label>Width ({unit === 'feet' ? 'Feet' : 'Inches'}) *</label>
                        <input
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            placeholder="Enter width"
                            min="0"
                        />
                    </div>

                    <div className="input-group">
                        <label>Depth ({unit === 'feet' ? 'Feet' : 'Inches'}) *</label>
                        <input
                            type="number"
                            value={depth}
                            onChange={(e) => setDepth(e.target.value)}
                            placeholder="Enter depth (recommend 2-3 inches)"
                            min="0"
                        />
                    </div>
                </div>
            </div>

            {calculation && (
                <div className="results-section">
                    <h2>📊 Results</h2>
                    
                    <div className="total-volume">
                        <div className="volume-card">
                            <div className="volume-label">Total Volume</div>
                            <div className="volume-value">{calculation.cubicFeet.toFixed(2)} Cu Ft</div>
                            <div className="volume-secondary">{calculation.cubicYards.toFixed(3)} Cu Yards</div>
                        </div>
                    </div>

                    <div className="bags-needed-section">
                        <h3>Bags Needed</h3>
                        <div className="bags-grid">
                            {calculation.results.map((result, idx) => (
                                <div key={idx} className="bag-option">
                                    <div className="bag-size">{result.size}</div>
                                    <div className="bag-label">{result.label}</div>
                                    <div className="bags-info">
                                        <div className="bags-needed-value">{result.bagsExact.toFixed(2)}</div>
                                        <div className="bags-count">{result.bagsDisplay} {result.bagsExact < 1 ? '' : 'bags'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="button-group">
                <button onClick={handleReset} className="reset-btn">🔄 Reset</button>
            </div>
        </div>
    );
};

export default MulchCalculator;
