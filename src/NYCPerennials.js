import React, { useState } from 'react';

const NYCPerennials = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [bloomFilter, setBloomFilter] = useState('all');
    const [zoneFilter, setZoneFilter] = useState('all');
    const [sunFilter, setSunFilter] = useState('all');

    const perennials = [
        {
            id: 1,
            name: 'Black-Eyed Susan (Rudbeckia)',
            bloom: 'July-October',
            zone: 'Zone 3-9',
            height: 'Medium to tall (18-36")',
            sunlight: 'Full sun to part shade',
            water: 'Moderate, drought tolerant when established',
            tips: 'Easy native perennial. Cut flowers. Attracts butterflies & bees. Divide every 3-4 years.',
            color: 'Yellow with dark center',
            maintenance: 'Easy'
        },
        {
            id: 2,
            name: 'Purple Coneflower (Echinacea)',
            bloom: 'June-September',
            zone: 'Zone 3-8',
            height: 'Medium (18-24")',
            sunlight: 'Full sun',
            water: 'Drought tolerant once established',
            tips: 'Native wildflower. Attracts pollinators. Deadhead to extend blooms. Seeds for birds.',
            color: 'Pink, purple, white, orange',
            maintenance: 'Easy'
        },
        {
            id: 3,
            name: 'Daylily',
            bloom: 'May-August (depending on variety)',
            zone: 'Zone 3-11',
            height: 'Short to medium (12-36")',
            sunlight: 'Full sun to part shade',
            water: 'Moderate, very drought tolerant',
            tips: 'Extremely tough. Thousands of varieties. Each bloom lasts one day. Nearly indestructible.',
            color: 'Yellow, orange, red, pink, purple, bicolor',
            maintenance: 'Easy'
        },
        {
            id: 4,
            name: 'Hosta',
            bloom: 'Summer foliage focus (flowers too)',
            zone: 'Zone 3-9',
            height: 'Short to medium (6-24")',
            sunlight: 'Shade to part sun',
            water: 'Keep soil moist',
            tips: 'Perfect for shady NYC yards. Beautiful foliage all season. Divide every 4-5 years.',
            color: 'Many foliage patterns; lavender flowers',
            maintenance: 'Easy'
        },
        {
            id: 5,
            name: 'Sedum',
            bloom: 'Summer and fall (depending on variety)',
            zone: 'Zone 3-10',
            height: 'Short to medium (6-24")',
            sunlight: 'Full sun to part shade',
            water: 'Drought tolerant, low water',
            tips: 'Succulent perennial. No deadheading. Great for containers. Winter interest.',
            color: 'Pink, red, yellow, white',
            maintenance: 'Easy'
        },
        {
            id: 6,
            name: 'Peony',
            bloom: 'May-June',
            zone: 'Zone 3-8',
            height: 'Medium to tall (24-36")',
            sunlight: 'Full sun to part shade',
            water: 'Moderate, once established very drought tolerant',
            tips: 'Long-lived (50+ years). Fragrant flowers. Support with cages. Pest & disease free.',
            color: 'Pink, red, white, coral',
            maintenance: 'Easy'
        },
        {
            id: 7,
            name: 'Lavender',
            bloom: 'June-August',
            zone: 'Zone 3-9',
            height: 'Medium (18-24")',
            sunlight: 'Full sun',
            water: 'Drought tolerant, well-draining soil',
            tips: 'Fragrant flowers for cutting & drying. Attracts pollinators. Pest resistant.',
            color: 'Purple, pink, white varieties',
            maintenance: 'Easy'
        },
        {
            id: 8,
            name: 'Salvia (Perennial)',
            bloom: 'June-September',
            zone: 'Zone 4-9 (varies by type)',
            height: 'Short to tall (12-36")',
            sunlight: 'Full sun to part shade',
            water: 'Drought tolerant once established',
            tips: 'Hummingbird magnet. Different varieties for different conditions. Attracts pollinators.',
            color: 'Red, pink, purple, blue, white',
            maintenance: 'Easy'
        },
        {
            id: 9,
            name: 'Coreopsis (Tickseed)',
            bloom: 'June-September',
            zone: 'Zone 3-9',
            height: 'Short to medium (12-24")',
            sunlight: 'Full sun',
            water: 'Drought tolerant',
            tips: 'Native wildflower. Deadhead for continuous blooms. Very low maintenance native.',
            color: 'Yellow, pink, red varieties',
            maintenance: 'Easy'
        },
        {
            id: 10,
            name: 'Bee Balm (Monarda)',
            bloom: 'July-September',
            zone: 'Zone 4-9',
            height: 'Medium to tall (24-36")',
            sunlight: 'Full sun to part shade',
            water: 'Keep moist, drought tolerant when established',
            tips: 'Hummingbird & bee favorite. Aromatic leaves. Divide every 2-3 years. Self-seeds.',
            color: 'Red, pink, purple, white',
            maintenance: 'Moderate'
        },
        {
            id: 11,
            name: 'Russian Sage (Perovskia)',
            bloom: 'July-September',
            zone: 'Zone 3-9',
            height: 'Medium to tall (24-36")',
            sunlight: 'Full sun',
            water: 'Drought tolerant',
            tips: 'Airy, delicate foliage. Late-season bloomer. Cut back in spring. Attracts pollinators.',
            color: 'Purple-blue lavender flowers',
            maintenance: 'Easy'
        },
        {
            id: 12,
            name: 'Yarrow (Achillea)',
            bloom: 'June-September',
            zone: 'Zone 3-9',
            height: 'Medium (18-24")',
            sunlight: 'Full sun',
            water: 'Drought tolerant',
            tips: 'Native wildflower. Great for cutting & drying. Attracts butterflies. Divide every 2-3 years.',
            color: 'Yellow, red, pink, orange, white',
            maintenance: 'Easy'
        },
        {
            id: 13,
            name: 'Phlox (Perennial)',
            bloom: 'June-August',
            zone: 'Zone 3-8',
            height: 'Short to tall (6-36" depending on type)',
            sunlight: 'Full sun to part shade',
            water: 'Keep soil moist',
            tips: 'Fragrant flowers. Many varieties (creeping, garden). Divide every 2-3 years.',
            color: 'Pink, red, white, lavender, bicolor',
            maintenance: 'Moderate'
        },
        {
            id: 14,
            name: 'Geranium (Hardy Geranium)',
            bloom: 'May-July',
            zone: 'Zone 3-8',
            height: 'Short to medium (6-24")',
            sunlight: 'Full sun to part shade',
            water: 'Moderate drainage',
            tips: 'Not the tender geraniums - these are hardy perennials. Excellent ground cover. Self-seeds.',
            color: 'Pink, purple, blue, white',
            maintenance: 'Easy'
        },
        {
            id: 15,
            name: 'Catmint (Nepeta)',
            bloom: 'May-July (may rebloom)',
            zone: 'Zone 3-8',
            height: 'Medium (18-24")',
            sunlight: 'Full sun to part shade',
            water: 'Drought tolerant',
            tips: 'Beloved by bees. Aromatic foliage. Deadhead to encourage reblooming. Very hardy.',
            color: 'Lavender-blue, pink varieties',
            maintenance: 'Easy'
        },
        {
            id: 16,
            name: 'Bleeding Heart (Dicentra)',
            bloom: 'April-June',
            zone: 'Zone 3-9',
            height: 'Short to medium (12-30")',
            sunlight: 'Shade to part sun',
            water: 'Keep soil moist',
            tips: 'Unique heart-shaped flowers. Perfect for NYC shade gardens. Goes dormant in summer heat.',
            color: 'Pink, white varieties',
            maintenance: 'Easy'
        },
        {
            id: 17,
            name: 'Coral Bells (Heuchera)',
            bloom: 'Foliage focus, flowers spring',
            zone: 'Zone 4-9',
            height: 'Short (6-12")',
            sunlight: 'Part shade to shade',
            water: 'Keep consistently moist',
            tips: 'Stunning foliage colors year-round. Delicate flowers on thin spikes. Great for edging.',
            color: 'Purple, burgundy, lime green foliage; pink flowers',
            maintenance: 'Easy'
        },
        {
            id: 18,
            name: 'Lamium (Dead Nettle)',
            bloom: 'Foliage focus',
            zone: 'Zone 3-9',
            height: 'Short (6-12")',
            sunlight: 'Shade to part sun',
            water: 'Moderate',
            tips: 'Excellent ground cover for shade. Variegated silvery foliage. Low maintenance.',
            color: 'Silver variegated foliage; pink/white flowers',
            maintenance: 'Easy'
        },
        {
            id: 19,
            name: 'Lily of the Valley',
            bloom: 'May',
            zone: 'Zone 2-9',
            height: 'Short (6-8")',
            sunlight: 'Shade to part sun',
            water: 'Keep moist',
            tips: 'Fragrant spring blooms. Excellent shade ground cover. Spreads readily. Watch for aggressive spread.',
            color: 'White, pink varieties',
            maintenance: 'Easy'
        },
        {
            id: 20,
            name: 'Astilbe',
            bloom: 'June-July',
            zone: 'Zone 3-9',
            height: 'Medium (18-30")',
            sunlight: 'Shade to part sun',
            water: 'Keep soil moist',
            tips: 'Feathery plume-like flowers. Shade lover. Beautiful fern-like foliage. No deadheading needed.',
            color: 'Pink, red, white varieties',
            maintenance: 'Easy'
        }
    ];

    const filteredPerennials = perennials.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            plant.tips.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesBloom = bloomFilter === 'all' || plant.bloom.includes(bloomFilter);
        
        const matchesZone = zoneFilter === 'all' || plant.zone.includes('7');
        
        const matchesSun = sunFilter === 'all' || plant.sunlight.includes(sunFilter);
        
        return matchesSearch && matchesBloom && matchesZone && matchesSun;
    });

    const hasActiveFilters = bloomFilter !== 'all' || zoneFilter !== 'all' || sunFilter !== 'all' || searchTerm !== '';

    const resetFilters = () => {
        setSearchTerm('');
        setBloomFilter('all');
        setZoneFilter('all');
        setSunFilter('all');
    };

    return (
        <div className="plant-care-container">
            <h1>🌼 NYC Perennials Guide</h1>
            <p className="subtitle">Hardy perennials perfect for New York City gardens (Zone 7a/7b)</p>

            <div className="control-panel">
                <input
                    type="text"
                    placeholder="Search by plant name or keywords..."
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
                                className={`filter-btn ${bloomFilter === 'April' ? 'active' : ''}`}
                                onClick={() => setBloomFilter('April')}
                            >
                                Spring
                            </button>
                            <button
                                className={`filter-btn ${bloomFilter === 'June' ? 'active' : ''}`}
                                onClick={() => setBloomFilter('June')}
                            >
                                Summer
                            </button>
                            <button
                                className={`filter-btn ${bloomFilter === 'September' ? 'active' : ''}`}
                                onClick={() => setBloomFilter('September')}
                            >
                                Fall
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
                                Part Sun/Shade
                            </button>
                            <button
                                className={`filter-btn ${sunFilter === 'Full sun' ? 'active' : ''}`}
                                onClick={() => setSunFilter('Full sun')}
                            >
                                Full Sun
                            </button>
                        </div>
                    </div>

                    <div className="filter-section">
                        <label>Zone Hardiness:</label>
                        <div className="filter-buttons">
                            <button
                                className={`filter-btn ${zoneFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setZoneFilter('all')}
                            >
                                All Zones
                            </button>
                            <button
                                className={`filter-btn ${zoneFilter === '7' ? 'active' : ''}`}
                                onClick={() => setZoneFilter('7')}
                            >
                                Zone 7+ (NYC Safe)
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
                Showing {filteredPerennials.length} of {perennials.length} perennials
                {hasActiveFilters && <span className="active-filter-count"> ({filteredPerennials.length} results)</span>}
            </div>

            <div className="plants-grid">
                {filteredPerennials.length > 0 ? (
                    filteredPerennials.map((plant) => (
                        <div key={plant.id} className="plant-card">
                            <div className="plant-header">
                                <h2>{plant.name}</h2>
                                <span className={`difficulty ${plant.maintenance.toLowerCase()}`}>
                                    {plant.maintenance}
                                </span>
                            </div>

                            <div className="plant-info">
                                <div className="info-row">
                                    <strong>📅 Bloom Time:</strong>
                                    <p>{plant.bloom}</p>
                                </div>
                                <div className="info-row">
                                    <strong>❄️ Cold Hardiness:</strong>
                                    <p>{plant.zone}</p>
                                </div>
                                <div className="info-row">
                                    <strong>📏 Height:</strong>
                                    <p>{plant.height}</p>
                                </div>
                                <div className="info-row">
                                    <strong>☀️ Sunlight:</strong>
                                    <p>{plant.sunlight}</p>
                                </div>
                                <div className="info-row">
                                    <strong>💧 Watering:</strong>
                                    <p>{plant.water}</p>
                                </div>
                                <div className="info-row">
                                    <strong>🎨 Colors:</strong>
                                    <p>{plant.color}</p>
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
                        <p>No perennials match your filters. Try adjusting them!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NYCPerennials;
