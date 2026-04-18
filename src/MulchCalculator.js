import React, { useState } from 'react';

const MulchCalculator = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [lengthUnit, setLengthUnit] = useState('inches');
    const [widthUnit, setWidthUnit] = useState('inches');
    const [depthUnit, setDepthUnit] = useState('inches');

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

        // Convert each measurement to feet based on its own unit
        if (lengthUnit === 'inches') {
            l = l / 12;
        }
        if (widthUnit === 'inches') {
            w = w / 12;
        }
        if (depthUnit === 'inches') {
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
        setLengthUnit('inches');
        setWidthUnit('inches');
        setDepthUnit('inches');
    };

    return (
        <div className="mulch-calculator-container">
            <h1>🪴 Mulch/Soil Calculator</h1>
            <p className="subtitle">Calculate how much mulch or soil you need, then see bag options</p>

            <div className="calc-section">
                <h2>Measurements</h2>

                <div className="measurement-inputs">
                    <div className="input-group">
                        <div className="input-label-with-unit">
                            <label>Length *</label>
                            <select 
                                value={lengthUnit} 
                                onChange={(e) => setLengthUnit(e.target.value)}
                                className="unit-select"
                            >
                                <option value="inches">Inches</option>
                                <option value="feet">Feet</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            placeholder={lengthUnit === 'feet' ? 'Enter length in feet' : 'Enter length in inches'}
                            min="0"
                        />
                    </div>

                    <div className="input-group">
                        <div className="input-label-with-unit">
                            <label>Width *</label>
                            <select 
                                value={widthUnit} 
                                onChange={(e) => setWidthUnit(e.target.value)}
                                className="unit-select"
                            >
                                <option value="inches">Inches</option>
                                <option value="feet">Feet</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            placeholder={widthUnit === 'feet' ? 'Enter width in feet' : 'Enter width in inches'}
                            min="0"
                        />
                    </div>

                    <div className="input-group">
                        <div className="input-label-with-unit">
                            <label>Depth *</label>
                            <select 
                                value={depthUnit} 
                                onChange={(e) => setDepthUnit(e.target.value)}
                                className="unit-select"
                            >
                                <option value="inches">Inches</option>
                                <option value="feet">Feet</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            value={depth}
                            onChange={(e) => setDepth(e.target.value)}
                            placeholder={depthUnit === 'feet' ? 'Enter depth in feet (recommend 0.17-0.25)' : 'Enter depth in inches (recommend 2-3)'}
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
