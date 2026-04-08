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
        },
        {
            id: 16,
            name: 'Dracaena',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water when soil is dry (2-3 weeks)',
            humidity: 'Low to average (20-40%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Tall, architectural plant. Many varieties. Extremely tolerant. Low maintenance.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            name: 'Heart-Leaf Philodendron',
            category: 'low-light',
            light: 'Low to moderate light',
            water: 'Water when soil is dry (1-2 weeks)',
            humidity: 'Average (30-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Tiny heart-shaped leaves. Great for shelves & desks. Trailing or climbing.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            name: 'String of Pearls',
            category: 'bright-light',
            light: 'Bright indirect to direct light',
            water: 'Water lightly, let dry between waterings',
            humidity: 'Low (20-30%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Unique round leaves. Drought tolerant. Perfect for hanging planters. Prefers drier conditions.',
            difficulty: 'Moderate'
        },
        {
            id: 19,
            name: 'Anthurium',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'High (60-80%)',
            temp: '65-80°F (18-27°C)',
            tips: 'Heart-shaped flowers (actually waxy spathes). Loves humidity. Blooms year-round.',
            difficulty: 'Moderate'
        },
        {
            id: 20,
            name: 'Pothos Marble Queen',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water when soil is dry (1-2 weeks)',
            humidity: 'Average (30-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Variegated white & green leaves. Same care as regular Pothos. Beautiful trailing vine.',
            difficulty: 'Easy'
        },
        {
            id: 21,
            name: 'Monstera Adansonii',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Smaller than regular Monstera. Unique split leaves. Trailing or climbing.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            name: 'Syngonium',
            category: 'low-light',
            light: 'Low to moderate indirect light',
            water: 'Water when soil is slightly dry',
            humidity: 'Moderate (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Arrow-shaped leaves. Comes in pink, red, white varieties. Climbing or trailing.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            name: 'Begonia',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Keep soil consistently moist',
            humidity: 'High (60-80%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Colorful textured leaves. Many varieties. Prefers humidity. Blooms throughout year.',
            difficulty: 'Moderate'
        },
        {
            id: 24,
            name: 'Neon Pothos',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water when soil is dry (1-2 weeks)',
            humidity: 'Average (30-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Bright neon green leaves. Same easy care as regular Pothos. Great for plant shelves.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            name: 'Aspidistra (Cast Iron Plant)',
            category: 'low-light',
            light: 'Low to moderate light',
            water: 'Water every 2-3 weeks',
            humidity: 'Low to average (20-40%)',
            temp: '50-70°F (10-21°C)',
            tips: 'Literally indestructible. Named Cast Iron for a reason. Tolerates neglect brilliantly.',
            difficulty: 'Easy'
        },
        {
            id: 26,
            name: 'Croton',
            category: 'bright-light',
            light: 'Bright indirect to direct light',
            water: 'Water when soil is dry to touch',
            humidity: 'High (60-80%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Incredibly colorful leaves (red, yellow, orange). Prefers stable conditions. Drops leaves if moved.',
            difficulty: 'Hard'
        },
        {
            id: 27,
            name: 'Scindapsus Pictus (Satin Pothos)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Silver-spotted heart-shaped leaves. Trailing or climbing. More humidity than regular Pothos.',
            difficulty: 'Moderate'
        },
        {
            id: 28,
            name: 'Alocasia',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when top inch is dry',
            humidity: 'High (60-80%)',
            temp: '65-80°F (18-27°C)',
            tips: 'Stunning arrow-shaped leaves with prominent veins. Drama queen. Needs humidity & warmth.',
            difficulty: 'Moderate'
        },
        {
            id: 29,
            name: 'Haworthia',
            category: 'bright-light',
            light: 'Bright indirect to direct light',
            water: 'Water lightly, let dry between waterings',
            humidity: 'Low (10-30%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Tiny succulent rosette. Stays small. Perfect for shelves. Very drought tolerant.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            name: 'Pilea Peperomioides (Chinese Money Plant)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate (40-50%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Unique round coin-shaped leaves. Rotates toward light. Produces pups for propagation.',
            difficulty: 'Easy'
        },
        {
            id: 31,
            name: 'Prayer Plant (Maranta)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Keep soil consistently moist',
            humidity: 'High (60-80%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Leaves fold up at night (like praying hands). Beautiful patterns. Needs humidity.',
            difficulty: 'Moderate'
        },
        {
            id: 32,
            name: 'Clivia (Clivia Miniata)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Average (30-50%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Bright orange flowers. Long strappy leaves. Blooms in spring. Low maintenance.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            name: 'Curcuma (Turmeric Plant)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Keep soil moist during growing season',
            humidity: 'High (60-80%)',
            temp: '70-80°F (21-27°C)',
            tips: 'Beautiful pink & white flower-like spathes. May go dormant. Loves warmth & humidity.',
            difficulty: 'Moderate'
        },
        {
            id: 34,
            name: 'Aglaonema (Chinese Evergreen)',
            category: 'low-light',
            light: 'Low to moderate indirect light',
            water: 'Water when soil is slightly dry',
            humidity: 'Average to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Colorful patterned leaves. Many varieties. Very low maintenance. Great for offices.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            name: 'Schefflera (Umbrella Plant)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Average (30-50%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Large umbrella-like leaves. Grows tall. Can handle some neglect. Air purifier.',
            difficulty: 'Easy'
        },
        {
            id: 36,
            name: 'String of Hearts',
            category: 'bright-light',
            light: 'Bright indirect to direct light',
            water: 'Water lightly, let dry between waterings',
            humidity: 'Low to average (20-40%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Tiny heart-shaped leaves on trailing vines. Very drought tolerant. Perfect for hanging baskets.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            name: 'Fittonia (Nerve Plant)',
            category: 'moderate-light',
            light: 'Bright indirect light (no direct sun)',
            water: 'Keep soil evenly moist',
            humidity: 'Very high (70-80%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Delicate veined leaves. Wilts dramatically when thirsty. Needs consistent care & humidity.',
            difficulty: 'Hard'
        },
        {
            id: 38,
            name: 'Echeveria (Succulent Rosette)',
            category: 'bright-light',
            light: 'Bright direct light (4-6 hours)',
            water: 'Water deeply, let dry completely between',
            humidity: 'Low (10-30%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Perfect rosette succulents. Produces beautiful flowers. Extremely drought tolerant & easy.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            name: 'Burro\'s Tail',
            category: 'bright-light',
            light: 'Bright indirect to direct light',
            water: 'Water lightly, let dry between waterings',
            humidity: 'Low (10-30%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Long trailing stems with chubby leaves. Very drought tolerant. Fragile leaves.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            name: 'Epipremnum Pinnatum',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Similar to Pothos but larger leaves. Develops fenestration (holes) as it matures. Stunning climber.',
            difficulty: 'Easy'
        },
        {
            id: 41,
            name: 'Zamioculcas (ZZ Plant Raven)',
            category: 'low-light',
            light: 'Low to bright indirect light',
            water: 'Water every 2-3 weeks, let dry',
            humidity: 'Low to average (20-40%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Dark glossy black leaflets. Dramatic look. Extremely easy. Toxic if ingested.',
            difficulty: 'Easy'
        },
        {
            id: 42,
            name: 'Hoya Carnosa (Wax Plant)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate (40-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Waxy flowers with sweet fragrance. Trailing or climbing. Blooms regularly with proper care.',
            difficulty: 'Easy'
        },
        {
            id: 43,
            name: 'Rhaphidophora Tetrasperma (Mini Monstera)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Looks like Monstera but smaller! Fenestrated leaves. Climbing vines. Stunning addition.',
            difficulty: 'Easy'
        },
        {
            id: 44,
            name: 'Dischidia (Watermelon Plant)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate (40-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Watermelon-patterned leaves. Trailing or climbing. Prefers humidity. Rare & unique.',
            difficulty: 'Moderate'
        },
        {
            id: 45,
            name: 'Kalanchoe Blossfeldiana (Flaming Katy)',
            category: 'bright-light',
            light: 'Bright indirect to direct light',
            water: 'Water when soil is dry',
            humidity: 'Low to average (20-40%)',
            temp: '60-75°F (15-24°C)',
            tips: 'Bright clusters of tiny flowers. Blooms in winter. Needs cool temps to trigger blooming.',
            difficulty: 'Easy'
        },
        {
            id: 46,
            name: 'Epipremnum Pinnatum Cebu Blue',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate to high (40-60%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Blue-ish silvery foliage. Climbing vines. Develops fenestration. Rare houseplant.',
            difficulty: 'Moderate'
        },
        {
            id: 47,
            name: 'Thaumatococcus Danielis (Articificial Fig)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Keep soil moist but not waterlogged',
            humidity: 'High (60-80%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Large sculptural leaves. Makes a statement. Slower grower. Needs humidity.',
            difficulty: 'Moderate'
        },
        {
            id: 48,
            name: 'Pseudorhaphidophora (Mini Money Tree)',
            category: 'moderate-light',
            light: 'Bright indirect light',
            water: 'Water when soil is dry to touch',
            humidity: 'Moderate (40-50%)',
            temp: '65-75°F (18-24°C)',
            tips: 'Compact with coin-shaped leaflets. Trailing or upright. Forgiving & attractive.',
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
