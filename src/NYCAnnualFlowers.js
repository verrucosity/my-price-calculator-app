import React, { useState } from 'react';

const NYCAnnualFlowers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [bloomFilter, setBloomFilter] = useState('all');
    const [heightFilter, setHeightFilter] = useState('all');
    const [sunFilter, setSunFilter] = useState('all');

    const flowers = [
        {
            id: 1,
            name: 'Impatiens',
            bloom: 'Spring-Fall',
            height: 'Short (6-12")',
            sunlight: 'Shade to part sun',
            water: 'Keep soil moist',
            temp: '65-75°F (18-24°C)',
            plantTime: 'After last frost (May 15)',
            tips: 'Perfect for shady NYC gardens. Blooms all season. Great in containers.',
            color: 'Pink, red, orange, white, bicolor',
            maintenance: 'Easy'
        },
        {
            id: 2,
            name: 'Marigolds',
            bloom: 'June-October',
            height: 'Medium (12-24")',
            sunlight: 'Full sun (6+ hours)',
            water: 'Water when dry',
            temp: '70-85°F (21-29°C)',
            plantTime: 'After frost danger (May 20)',
            tips: 'Drought tolerant. Pest resistant. Great for cutting. Deadhead for continuous blooms.',
            color: 'Yellow, orange, red',
            maintenance: 'Easy'
        },
        {
            id: 3,
            name: 'Zinnias',
            bloom: 'June-October',
            height: 'Tall (18-36")',
            sunlight: 'Full sun (6+ hours)',
            water: 'Water regularly, keep moist',
            temp: '75-85°F (24-29°C)',
            plantTime: 'After frost (May 20)',
            tips: 'Heat lover. Excellent for cutting. Attracts butterflies & hummingbirds. Deadhead regularly.',
            color: 'Pink, red, orange, yellow, purple, white',
            maintenance: 'Easy'
        },
        {
            id: 4,
            name: 'Petunias',
            bloom: 'May-October',
            height: 'Short to medium (6-24")',
            sunlight: 'Full sun (6+ hours)',
            water: 'Water regularly',
            temp: '65-75°F (18-24°C)',
            plantTime: 'After last frost (May 15)',
            tips: 'Prolific bloomer. Trailing varieties great for hanging baskets. Deadhead faded flowers.',
            color: 'Pink, red, purple, white, bicolor',
            maintenance: 'Easy'
        },
        {
            id: 5,
            name: 'Begonias (Wax)',
            bloom: 'May-October',
            height: 'Short to medium (8-18")',
            sunlight: 'Shade to part sun',
            water: 'Keep soil moist but not waterlogged',
            temp: '65-75°F (18-24°C)',
            plantTime: 'After frost (May 15)',
            tips: 'Shade tolerant. Pretty foliage too. Good for containers. Remove spent flowers.',
            color: 'Red, pink, white',
            maintenance: 'Easy'
        },
        {
            id: 6,
            name: 'Dusty Miller',
            bloom: 'Foliage focus',
            height: 'Medium (12-18")',
            sunlight: 'Full sun',
            water: 'Drought tolerant once established',
            temp: '65-75°F (18-24°C)',
            plantTime: 'After frost (May 15)',
            tips: 'Silver-gray foliage adds contrast. Great spillover for containers. Very drought tolerant.',
            color: 'Small yellow flowers; silvery foliage',
            maintenance: 'Easy'
        },
        {
            id: 7,
            name: 'Celosia (Cockscomb)',
            bloom: 'July-October',
            height: 'Medium to tall (12-36")',
            sunlight: 'Full sun (6+ hours)',
            water: 'Water regularly but drought tolerant',
            temp: '70-85°F (21-29°C)',
            plantTime: 'After frost (May 20)',
            tips: 'Unique velvety flower heads. Heat lover. Great for cutting & drying. Tropical vibe.',
            color: 'Red, pink, orange, yellow, purple, white',
            maintenance: 'Easy'
        },
        {
            id: 8,
            name: 'Dahlias',
            bloom: 'July-October',
            height: 'Tall (24-48")',
            sunlight: 'Full sun (6+ hours)',
            water: 'Water regularly',
            temp: '65-75°F (18-24°C)',
            plantTime: 'Tubers after last frost (May 15)',
            tips: 'Spectacular blooms. Plant tubers, not seeds. Support tall varieties. Premium cutting flower.',
            color: 'Pink, red, orange, yellow, white, purple, bicolor',
            maintenance: 'Moderate'
        },
        {
            id: 9,
            name: 'Sunflowers',
            bloom: 'July-September',
            height: 'Tall (18-96")',
            sunlight: 'Full sun (6+ hours)',
            water: 'Water regularly when young',
            temp: '70-85°F (21-29°C)',
            plantTime: 'Direct seed after frost (May 20)',
            tips: 'Easy to grow from seed. Tall varieties need staking. Great for cut flowers. Kid-friendly.',
            color: 'Yellow, orange, red, bicolor',
            maintenance: 'Easy'
        },
        {
            id: 10,
            name: 'Cosmos',
            bloom: 'June-October',
            height: 'Tall (24-48")',
            sunlight: 'Full sun',
            water: 'Drought tolerant once established',
            temp: '65-80°F (18-27°C)',
            plantTime: 'Direct seed after frost (May 20)',
            tips: 'Airy, delicate flowers. Self-seeds for next year. Cuts well. Very low maintenance.',
            color: 'Pink, red, white, orange',
            maintenance: 'Easy'
        },
        {
            id: 11,
            name: 'Salvias (Annual)',
            bloom: 'June-October',
            height: 'Medium to tall (12-36")',
            sunlight: 'Full sun to part shade',
            water: 'Drought tolerant',
            temp: '70-85°F (21-29°C)',
            plantTime: 'After frost (May 15)',
            tips: 'Attracts hummingbirds & pollinators. Spiky flower spires. Heat & drought tolerant.',
            color: 'Red, pink, purple, blue, white',
            maintenance: 'Easy'
        },
        {
            id: 12,
            name: 'Alyssum (Sweet)',
            bloom: 'May-October',
            height: 'Short (6-12")',
            sunlight: 'Full sun to part shade',
            water: 'Keep moist',
            temp: '60-70°F (15-21°C)',
            plantTime: 'Early spring (late April) or fall',
            tips: 'Fragrant flowers. Edging plant. Cool season lover. Cascades nicely in containers.',
            color: 'White, pink, purple',
            maintenance: 'Easy'
        },
        {
            id: 13,
            name: 'Snapdragons',
            bloom: 'Spring & Fall',
            height: 'Short to tall (6-36")',
            sunlight: 'Full sun to part shade',
            water: 'Keep soil moist',
            temp: '60-70°F (15-21°C)',
            plantTime: 'Spring (April) or late summer (August)',
            tips: 'Cool season lover. Plant in spring & fall for best blooms. Excellent cut flowers.',
            color: 'Red, pink, orange, yellow, white, purple',
            maintenance: 'Moderate'
        },
        {
            id: 14,
            name: 'Calibrachoa (Million Bells)',
            bloom: 'May-October',
            height: 'Short (6-10")',
            sunlight: 'Full sun (6+ hours)',
            water: 'Keep moist, good drainage',
            temp: '65-75°F (18-24°C)',
            plantTime: 'After frost (May 15)',
            tips: 'Tiny petunia-like flowers. Ideal for hanging baskets & containers. All summer bloomer.',
            color: 'Pink, red, orange, yellow, purple, white',
            maintenance: 'Easy'
        },
        {
            id: 15,
            name: 'Verbena',
            bloom: 'May-October',
            height: 'Short to medium (6-18")',
            sunlight: 'Full sun',
            water: 'Drought tolerant once established',
            temp: '70-80°F (21-27°C)',
            plantTime: 'After frost (May 15)',
            tips: 'Heat & drought tolerant. Clustered flowers attract butterflies. Good spillover plant.',
            color: 'Pink, red, purple, white, bicolor',
            maintenance: 'Easy'
        }
    ];

    const filteredFlowers = flowers.filter(flower => {
        const matchesSearch = flower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            flower.tips.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesBloom = bloomFilter === 'all' || flower.bloom.includes(bloomFilter);
        
        const matchesHeight = heightFilter === 'all' || flower.height.includes(heightFilter);
        
        const matchesSun = sunFilter === 'all' || flower.sunlight.includes(sunFilter);
        
        return matchesSearch && matchesBloom && matchesHeight && matchesSun;
    });

    const hasActiveFilters = bloomFilter !== 'all' || heightFilter !== 'all' || sunFilter !== 'all' || searchTerm !== '';

    const resetFilters = () => {
        setSearchTerm('');
        setBloomFilter('all');
        setHeightFilter('all');
        setSunFilter('all');
    };

    return (
        <div className="plant-care-container">
            <h1>🌸 Annual Flowers Guide</h1>
            <p className="subtitle">Seasonal flowers perfect for New York City gardens (Zone 7a/7b)</p>

            <div className="control-panel">
                <input
                    type="text"
                    placeholder="Search by flower name or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                <div className="filter-group">
                    <div className="filter-section">
                        <label>Bloom Time:</label>
                        <div className="filter-buttons">
                            <button
                                className={`filter-btn ${bloomFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setBloomFilter('all')}
                            >
                                All Seasons
                            </button>
                            <button
                                className={`filter-btn ${bloomFilter === 'Spring' ? 'active' : ''}`}
                                onClick={() => setBloomFilter('Spring')}
                            >
                                Spring
                            </button>
                            <button
                                className={`filter-btn ${bloomFilter === 'Summer' ? 'active' : ''}`}
                                onClick={() => setBloomFilter('Summer')}
                            >
                                Summer
                            </button>
                            <button
                                className={`filter-btn ${bloomFilter === 'Fall' ? 'active' : ''}`}
                                onClick={() => setBloomFilter('Fall')}
                            >
                                Fall
                            </button>
                        </div>
                    </div>

                    <div className="filter-section">
                        <label>Height:</label>
                        <div className="filter-buttons">
                            <button
                                className={`filter-btn ${heightFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setHeightFilter('all')}
                            >
                                Any Height
                            </button>
                            <button
                                className={`filter-btn ${heightFilter === 'Short' ? 'active' : ''}`}
                                onClick={() => setHeightFilter('Short')}
                            >
                                Short (6-12")
                            </button>
                            <button
                                className={`filter-btn ${heightFilter === 'Medium' ? 'active' : ''}`}
                                onClick={() => setHeightFilter('Medium')}
                            >
                                Medium (12-24")
                            </button>
                            <button
                                className={`filter-btn ${heightFilter === 'Tall' ? 'active' : ''}`}
                                onClick={() => setHeightFilter('Tall')}
                            >
                                Tall (24"+)
                            </button>
                        </div>
                    </div>

                    <div className="filter-section">
                        <label>Sunlight:</label>
                        <div className="filter-buttons">
                            <button
                                className={`filter-btn ${sunFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setSunFilter('all')}
                            >
                                Any Sun
                            </button>
                            <button
                                className={`filter-btn ${sunFilter === 'Shade' ? 'active' : ''}`}
                                onClick={() => setSunFilter('Shade')}
                            >
                                Shade
                            </button>
                            <button
                                className={`filter-btn ${sunFilter === 'part' ? 'active' : ''}`}
                                onClick={() => setSunFilter('part')}
                            >
                                Part Sun
                            </button>
                            <button
                                className={`filter-btn ${sunFilter === 'Full sun' ? 'active' : ''}`}
                                onClick={() => setSunFilter('Full sun')}
                            >
                                Full Sun
                            </button>
                        </div>
                    </div>
                </div>

                {hasActiveFilters && (
                    <button onClick={resetFilters} className="reset-btn">
                        ✕ Clear Filters
                    </button>
                )}
            </div>

            <div className="results-info">
                Showing {filteredFlowers.length} of {flowers.length} annual flowers
                {hasActiveFilters && <span className="active-filter-count"> ({filteredFlowers.length} results)</span>}
            </div>

            <div className="plants-grid">
                {filteredFlowers.length > 0 ? (
                    filteredFlowers.map((flower) => (
                        <div key={flower.id} className="plant-card">
                            <div className="plant-header">
                                <h2>{flower.name}</h2>
                                <span className={`difficulty ${flower.maintenance.toLowerCase()}`}>
                                    {flower.maintenance}
                                </span>
                            </div>

                            <div className="plant-info">
                                <div className="info-row">
                                    <strong>📅 Bloom Time:</strong>
                                    <p>{flower.bloom}</p>
                                </div>
                                <div className="info-row">
                                    <strong>📏 Height:</strong>
                                    <p>{flower.height}</p>
                                </div>
                                <div className="info-row">
                                    <strong>☀️ Sunlight:</strong>
                                    <p>{flower.sunlight}</p>
                                </div>
                                <div className="info-row">
                                    <strong>💧 Watering:</strong>
                                    <p>{flower.water}</p>
                                </div>
                                <div className="info-row">
                                    <strong>🌡️ Temperature:</strong>
                                    <p>{flower.temp}</p>
                                </div>
                                <div className="info-row">
                                    <strong>🎨 Colors:</strong>
                                    <p>{flower.color}</p>
                                </div>
                                <div className="info-row">
                                    <strong>📍 Plant Time (NYC):</strong>
                                    <p className="plant-time">{flower.plantTime}</p>
                                </div>
                                <div className="info-row">
                                    <strong>✨ Tips:</strong>
                                    <p className="tips">{flower.tips}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>No flowers match your filters. Try adjusting them!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NYCAnnualFlowers;
