import React, { useState } from 'react';

const PlantCareReference = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    const plants = [
        {
            id: 1,
            name: 'Pothos (Devil\'s Ivy)',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water when soil is dry (1-2 weeks)',
            humidity: 'Average (30-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Very forgiving. Can tolerate low light. Grows quickly. Great for beginners.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            name: 'Snake Plant (Sansevieria)',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water every 3-4 weeks, let dry out',
            humidity: 'Low to average (20-40%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Extremely drought tolerant. Purifies air. Practically indestructible.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            name: 'ZZ Plant',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water every 2-3 weeks, let dry',
            humidity: 'Low to average (20-40%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Tolerates neglect. Glossy leaves. Slow grower but worth it.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            name: 'Monstera Deliciosa',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when top 1-2 inches dry (weekly)',
            humidity: 'High (50-70%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Requires support as it grows. Aerial roots develop. Loves humidity.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            name: 'Fiddle Leaf Fig',
            category: 'bright-light',
            light: 'Bright indirect light (6+ hours)',
            water: 'Water when soil is moist but not wet',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Can be finicky. Avoid drafts & cold. Prefers stable location. Tall statement plant.',
            difficulty: 'Moderate'
        },
        {
            id: 6,
            name: 'Rubber Plant',
            category: 'bright-light',
            light: 'Bright indirect light',
            water: 'Water when top 1 inch is dry',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Stunning dark leaves. Grows tall. Wipe leaves monthly for shine.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            name: 'Spider Plant',
            category: 'low-light',
            light: 'Bright indirect to low light',
            water: 'Water when soil is dry (1-2 weeks)',
            humidity: 'Average (30-50%)',
            temp: '55-70°F (13-21°C)',
            tips: 'Produces baby plantlets. Very hardy. Great air purifier. Perfect for hanging baskets.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            name: 'Philodendron',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water when soil is moist (1-2 weeks)',
            humidity: 'Average (30-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Heart-shaped leaves. Climber. Easy to propagate. Similar to Pothos but different leaf shape.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            name: 'African Violet',
            category: 'moderate-light',
            light: 'Bright indirect light (12-16 hours)',
            water: 'Keep soil moist, water from below',
            humidity: 'High (50-70%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Blooms frequently with proper care. Water from bottom to avoid leaf spots.',
            difficulty: 'Moderate'
        },
        {
            id: 10,
            name: 'Peace Lily',
            category: 'low-light',
            light: 'Low to moderate indirect light',
            water: 'Water when soil is slightly dry',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Beautiful white flowers. Droops when thirsty (great indicator!). Air purifier.',
            difficulty: 'Easy'
        },
        {
            id: 11,
            name: 'Calathea',
            category: 'moderate-light',
            light: 'Bright indirect light, no direct sun',
            water: 'Keep soil consistently moist',
            humidity: 'High (60-80%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Stunning patterned leaves. Leaves move throughout day. Needs humidity. Picky about water.',
            difficulty: 'Hard'
        },
        {
            id: 12,
            name: 'Succulents (Aloe, Jade)',
            category: 'bright-light',
            light: 'Bright direct light (4+ hours)',
            water: 'Water deeply, then let dry completely',
            humidity: 'Low (10-30%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Store water in leaves. Perfect for forgetful waterers. Extremely low maintenance.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            name: 'Orchid',
            category: 'bright-light',
            light: 'Bright indirect light',
            water: 'Water 1x per week, use orchid medium',
            humidity: 'High (50-70%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Blooms last months. Special potting medium needed. Prefers not to sit in water.',
            difficulty: 'Moderate'
        },
        {
            id: 14,
            name: 'Boston Fern',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Keep soil moist but not waterlogged',
            humidity: 'High (60-80%)',
            temp: '60-70°F (15-21°C)',
            tips: 'Delicate fronds. Loves humidity (mist regularly). Sensitive to dry air.',
            difficulty: 'Moderate'
        },
        {
            id: 15,
            name: 'Peperomia',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when top inch is dry',
            humidity: 'Average (30-50%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Compact & cute. Slow grower. Toxic to pets if ingested. Great for desks.',
            difficulty: 'Easy'
        }
    ];

    const filteredPlants = plants.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || plant.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = [
        { value: 'all', label: 'All Plants' },
        { value: 'low-light', label: '🌑 Low Light' },
        { value: 'moderate-light', label: '🌤️ Moderate Light' },
        { value: 'bright-light', label: '☀️ Bright Light' }
    ];

    return (
        <div className="plant-care-container">
            <h1>🌿 Indoor Plant Care Reference</h1>
            <p className="subtitle">Quick care guide for your favorite houseplants</p>

            <div className="control-panel">
                <input
                    type="text"
                    placeholder="Search by plant name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                <div className="filter-buttons">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            className={`filter-btn ${filterCategory === cat.value ? 'active' : ''}`}
                            onClick={() => setFilterCategory(cat.value)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="results-info">
                Showing {filteredPlants.length} of {plants.length} plants
            </div>

            <div className="plants-grid">
                {filteredPlants.length > 0 ? (
                    filteredPlants.map((plant) => (
                        <div key={plant.id} className="plant-card">
                            <div className="plant-header">
                                <h2>{plant.name}</h2>
                                <span className={`difficulty ${plant.difficulty.toLowerCase()}`}>
                                    {plant.difficulty}
                                </span>
                            </div>

                            <div className="plant-info">
                                <div className="info-row">
                                    <strong>💡 Light:</strong>
                                    <p>{plant.light}</p>
                                </div>
                                <div className="info-row">
                                    <strong>💧 Watering:</strong>
                                    <p>{plant.water}</p>
                                </div>
                                <div className="info-row">
                                    <strong>💨 Humidity:</strong>
                                    <p>{plant.humidity}</p>
                                </div>
                                <div className="info-row">
                                    <strong>🌡️ Temperature:</strong>
                                    <p>{plant.temp}</p>
                                </div>
                                <div className="info-row">
                                    <strong>✨ Tips:</strong>
                                    <p className="tips">{plant.tips}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>No plants found matching your search. Try a different name or filter!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlantCareReference;
