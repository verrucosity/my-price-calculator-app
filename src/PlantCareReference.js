import React, { useState } from 'react';

const PlantCareReference = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [lightFilter, setLightFilter] = useState('all');
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [toxicityFilter, setToxicityFilter] = useState('all'); // 'all', 'non-toxic', 'toxic'

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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Hard',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Mildly Toxic',
            toxicToDogs: 'Mildly Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Mildly Toxic',
            toxicToDogs: 'Mildly Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Hard',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Hard',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Mildly Toxic',
            toxicToDogs: 'Mildly Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Toxic',
            toxicToDogs: 'Toxic'
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
            difficulty: 'Moderate',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
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
            difficulty: 'Easy',
            toxicToCats: 'Non-toxic',
            toxicToDogs: 'Non-toxic'
        }
    ];

    const filteredPlants = plants.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            plant.tips.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesLight = lightFilter === 'all' || plant.category === lightFilter;
        
        const matchesDifficulty = difficultyFilter === 'all' || plant.difficulty === difficultyFilter;
        
        const matchesToxicity = toxicityFilter === 'all' || 
                               (toxicityFilter === 'non-toxic' && plant.toxicToCats === 'Non-toxic' && plant.toxicToDogs === 'Non-toxic') ||
                               (toxicityFilter === 'toxic' && (plant.toxicToCats !== 'Non-toxic' || plant.toxicToDogs !== 'Non-toxic'));
        
        return matchesSearch && matchesLight && matchesDifficulty && matchesToxicity;
    });

    const hasActiveFilters = lightFilter !== 'all' || difficultyFilter !== 'all' || toxicityFilter !== 'all' || searchTerm !== '';

    const resetFilters = () => {
        setSearchTerm('');
        setLightFilter('all');
        setDifficultyFilter('all');
        setToxicityFilter('all');
    };

    const applyQuickFilter = (lightVal, diffVal, toxVal) => {
        setLightFilter(lightVal);
        setDifficultyFilter(diffVal);
        setToxicityFilter(toxVal);
        setSearchTerm('');
    };

    const categories = [
        { value: 'all', label: 'All Plants' },
        { value: 'low-light', label: '🌑 Low Light' },
        { value: 'moderate-light', label: '🌤️ Moderate Light' },
        { value: 'bright-light', label: '☀️ Bright Light' }
    ];

    const difficulties = [
        { value: 'all', label: 'Any Difficulty' },
        { value: 'Easy', label: '✅ Easy' },
        { value: 'Moderate', label: '⚠️ Moderate' },
        { value: 'Hard', label: '🔥 Hard' }
    ];

    const toxicityOptions = [
        { value: 'all', label: 'Any Toxicity' },
        { value: 'non-toxic', label: '🟢 Pet-Safe (Non-toxic)' },
        { value: 'toxic', label: '🔴 Toxic to Pets' }
    ];

    return (
        <div className="plant-care-container">
            <h1>🌿 Indoor Plant Care Reference</h1>
            <p className="subtitle">Quick care guide for your favorite houseplants</p>

            <div className="control-panel">
                <input
                    type="text"
                    placeholder="Search by plant name or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                {/* Quick Filter Pills */}
                <div className="quick-filters">
                    <button 
                        className={`quick-filter-pill ${lightFilter === 'low-light' && difficultyFilter === 'Easy' && toxicityFilter === 'non-toxic' ? 'active' : ''}`}
                        onClick={() => applyQuickFilter('low-light', 'Easy', 'non-toxic')}
                    >
                        🟢 Beginner + Low Light + Pet-Safe
                    </button>
                    <button 
                        className={`quick-filter-pill ${lightFilter === 'bright-light' && difficultyFilter === 'Easy' ? 'active' : ''}`}
                        onClick={() => applyQuickFilter('bright-light', 'Easy', 'all')}
                    >
                        ☀️ Easy + Bright Light
                    </button>
                    <button 
                        className={`quick-filter-pill ${toxicityFilter === 'non-toxic' ? 'active' : ''}`}
                        onClick={() => applyQuickFilter('all', 'all', 'non-toxic')}
                    >
                        🐾 Pet-Safe
                    </button>
                </div>

                {/* Multi-Select Filters */}
                <div className="filter-group">
                    <div className="filter-section">
                        <label>Light Level:</label>
                        <div className="filter-buttons">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    className={`filter-btn ${lightFilter === cat.value ? 'active' : ''}`}
                                    onClick={() => setLightFilter(cat.value)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <label>Difficulty:</label>
                        <div className="filter-buttons">
                            {difficulties.map((diff) => (
                                <button
                                    key={diff.value}
                                    className={`filter-btn ${difficultyFilter === diff.value ? 'active' : ''}`}
                                    onClick={() => setDifficultyFilter(diff.value)}
                                >
                                    {diff.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <label>Pet Safety:</label>
                        <div className="filter-buttons">
                            {toxicityOptions.map((tox) => (
                                <button
                                    key={tox.value}
                                    className={`filter-btn ${toxicityFilter === tox.value ? 'active' : ''}`}
                                    onClick={() => setToxicityFilter(tox.value)}
                                >
                                    {tox.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reset Button */}
                {hasActiveFilters && (
                    <button className="reset-filters-btn" onClick={resetFilters}>
                        ✕ Clear All Filters
                    </button>
                )}
            </div>

            <div className="results-info">
                Showing {filteredPlants.length} of {plants.length} plants
                {hasActiveFilters && <span className="active-filter-count"> ({filteredPlants.length} results)</span>}
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
                                <div className="info-row">
                                    <strong>🐱 Toxic to Cats:</strong>
                                    <p>{plant.toxicToCats}</p>
                                </div>
                                <div className="info-row">
                                    <strong>🐕 Toxic to Dogs:</strong>
                                    <p>{plant.toxicToDogs}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>🌱 No plants found matching your filters.</p>
                        <p style={{ fontSize: '0.9em', marginTop: '8px' }}>Try adjusting your search or filters!</p>
                        {hasActiveFilters && (
                            <button style={{ marginTop: '12px' }} className="reset-filters-btn" onClick={resetFilters}>
                                ✕ Reset Filters
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlantCareReference;
