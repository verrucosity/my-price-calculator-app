import React, { useState } from 'react';

const EmojiCodeGuide = () => {
    const [selectedCodes, setSelectedCodes] = useState({});
    const [copied, setCopied] = useState(false);

    const codeCategories = {
        'Outdoor Maintenance': [
            { emoji: '✂️', name: 'Scissor', description: 'Pruning trees, shrubs, or bushes.' },
            { emoji: '♻️', name: 'Recycle', description: 'General clean-up.' },
            { emoji: '🗜️', name: 'Clamp', description: 'Irrigation work.' },
            { emoji: '⛳', name: 'Golf Course', description: 'Grass cutting.' },
            { emoji: '🌱', name: 'Sapling', description: 'Seeding grass.' },
            { emoji: '💦', name: 'Droplets', description: 'Manual watering job.' },
            { emoji: '🗻', name: 'Mountain', description: 'Masonry or stone work.' },
            { emoji: '⚰️', name: 'Coffin', description: 'Cemetery job.' },
            { emoji: '🎉', name: 'Events', description: 'Farm animals, butterfly release, planting class, lectures.' }
        ],
        'Soil & Planting': [
            { emoji: '💐', name: 'Arrangement', description: 'Planting in pots, tubs, hanging baskets, or ground containers.' },
            { emoji: '💊', name: 'Fertilizer', description: 'Applying nutrients (Holly-tone, Lawn food, etc.).' },
            { emoji: '🌳', name: 'Tree', description: 'Tree planting.' },
            { emoji: '🌿', name: 'Leaf Sprig', description: 'Shrub-related jobs.' },
            { emoji: '🌹', name: 'Perennial', description: 'Perennial planting.' },
            { emoji: '🌺', name: 'Hibiscus', description: 'Annual planting.' },
            { emoji: '❤️', name: 'Red Heart', description: 'Compost.' },
            { emoji: '💛', name: 'Yellow', description: 'Top Soil.' },
            { emoji: '💚', name: 'Green', description: 'Mulch.' },
            { emoji: '💙', name: 'Blue', description: 'Compost and Top Soil mix.' }
        ],
        'Equipment/Material Needed': [
            { emoji: '💪', name: 'Heavy Labor', description: 'Demanding tasks and high-intensity stacking.' },
            { emoji: '🪜', name: 'Ladder Required', description: 'Tasks requiring high-reach equipment.' },
            { emoji: '⛏️', name: 'Pickaxe', description: 'Special tools needed (Aerator, de-thatcher, big mower).' },
            { emoji: '🏺', name: 'Urn', description: 'Pots and window boxes.' }
        ],
        'Diagnostics Specifications': [
            { emoji: '🎬', name: 'Clapper Board', description: 'Job roll over.' },
            { emoji: '📦', name: 'Delivery', description: 'Transporting items directly to your specified destination.' },
            { emoji: '⏰', name: 'Alarm Clock', description: 'Strict Appointment – Must be there at the exact time.' },
            { emoji: '🔥', name: 'Fire', description: 'Urgent/Rush – Must be completed within 24 hours.' },
            { emoji: '🔧', name: 'Fix & Repair', description: 'Troubleshooting and functional repairs.' },
            { emoji: '🔭', name: 'Telescope', description: 'Survey or Consultation (Designer/Foreman visit).' },
            { emoji: '🛏️', name: 'Bed', description: 'Indoor job (Inside home or business).' }
        ],
        'Holiday & Seasonal': [
            { emoji: '🎄', name: 'Christmas Tree', description: 'Full service (setup, stand, design).' },
            { emoji: '🎀', name: 'Décor & Ribbons', description: 'Custom bows and finishing touches.' },
            { emoji: '💡', name: 'Lighting', description: 'Installation and bulb troubleshooting.' },
            { emoji: '❇️', name: 'Wreath', description: 'Expert hanging and styling.' },
            { emoji: '➿', name: 'Double Curly', description: 'Garland installation.' },
            { emoji: '♨️', name: 'Firewood Service', description: 'Delivery and/or stacking.' },
            { emoji: '🪚', name: 'Saw', description: 'Wood work.' }
        ],
        'Billing': [
            { emoji: '✅', name: 'Green Check Mark', description: 'Job or task is done; though the work might be complete, it might still need to be billed (🏛️ AR account) or Paid (💰 cash, check or credit card).' },
            { emoji: '💰', name: 'Money Bag', description: 'Paid.' },
            { emoji: '💵', name: 'Cash', description: 'Deposit received for order.' },
            { emoji: '🏛️', name: 'Classical Building', description: '(House Account) Billed to AR.' },
            { emoji: '❌', name: 'Cross Mark', description: 'Cancelled job/event.' }
        ]
    };

    const toggleCode = (category, index) => {
        const key = `${category}-${index}`;
        setSelectedCodes(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const copySelectedCodes = () => {
        let textToCopy = '';
        Object.entries(codeCategories).forEach(([category, codes]) => {
            codes.forEach((code, index) => {
                const key = `${category}-${index}`;
                if (selectedCodes[key]) {
                    textToCopy += code.emoji + ' ';
                }
            });
        });

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy.trim());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const copySingleCode = (emoji, name, description) => {
        navigator.clipboard.writeText(emoji);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const selectAll = () => {
        const newSelected = {};
        Object.entries(codeCategories).forEach(([category, codes]) => {
            codes.forEach((_, index) => {
                newSelected[`${category}-${index}`] = true;
            });
        });
        setSelectedCodes(newSelected);
    };

    const clearAll = () => {
        setSelectedCodes({});
    };

    const selectedCount = Object.values(selectedCodes).filter(Boolean).length;

    return (
        <div className="emoji-code-container">
            <h1>📋 Emoji Job Code Guide</h1>
            <p className="subtitle">Click codes to select, then copy all at once!</p>

            <div className="code-controls">
                <button onClick={selectAll} className="control-btn">Select All</button>
                <button onClick={clearAll} className="control-btn">Clear All</button>
                <span className="selected-count">Selected: {selectedCount}</span>
                <button 
                    onClick={copySelectedCodes} 
                    className="copy-all-btn"
                    disabled={selectedCount === 0}
                >
                    {copied ? '✓ Copied!' : '📋 Copy Selected'}
                </button>
            </div>

            <div className="codes-sections">
                {Object.entries(codeCategories).map(([category, codes]) => (
                    <div key={category} className="code-section">
                        <h2>{category}</h2>
                        <div className="codes-grid">
                            {codes.map((code, index) => {
                                const key = `${category}-${index}`;
                                const isSelected = selectedCodes[key];

                                return (
                                    <div 
                                        key={key}
                                        className={`code-item ${isSelected ? 'selected' : ''}`}
                                        onClick={() => toggleCode(category, index)}
                                    >
                                        <div className="code-emoji">{code.emoji}</div>
                                        <div className="code-checkbox">
                                            <input 
                                                type="checkbox" 
                                                checked={isSelected}
                                                onChange={() => {}}
                                            />
                                        </div>
                                        <div className="code-content">
                                            <div className="code-name">{code.name}</div>
                                            <div className="code-description">{code.description}</div>
                                        </div>
                                        <button 
                                            className="copy-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                copySingleCode(code.emoji, code.name, code.description);
                                            }}
                                            title="Copy this code"
                                        >
                                            📋
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmojiCodeGuide;
