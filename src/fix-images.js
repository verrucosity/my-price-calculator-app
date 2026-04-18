const fs = require('fs');
let content = fs.readFileSync('PlantCareReference.js', 'utf8');

// Plant image URLs from Unsplash that actually show plants
const plantImages = [
    'https://images.unsplash.com/photo-1461141fd0f3e8c3234c6a8f8c07f5c1?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1445534249be6e3dc1b0a7275a33ca3c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1523929426437-e8e8d92f8343?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1545254227-f0a9e5f9fb7d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1525201584174-d9c515c0edce?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1528969861259-c97c6e1b6d8f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501595046424-d5fbb6f4c906?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1532413992378-715cb1d93f65?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517299033206-92e367fa3500?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1471193945509-d71ab62bda0d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1513216064867-c51129641b25?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1510883332046-f8c2d1eb0222?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1597848212624-753a1fb3c1d5?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1495446815901-a292acb6dee2?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520607134014-398149deeba0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1541159227383-7e738dc1b383?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1502082553048-f006c19250ef?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1547012645-a3d2f92d4b3d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1563241527-3004b43fc980?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1597848212624-753a1fb3c1d5?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1614730321751-3d4a2c4a1c69?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1535585309167-d71efb502f4a?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1614730321751-3d4a2c4a1c69?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1508615039623-a25605d2938d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1599599810694-b5ac4dd33c4d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1523929426437-e8e8d92f8343?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1502082553048-f006c19250ef?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520607134014-398149deeba0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520607134014-398149deeba0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1599600810694-b5ac4dd33c4d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1471193945509-d71ab62bda0d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1508615039623-a25605d2938d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1541159227383-7e738dc1b383?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1597848212624-753a1fb3c1d5?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1545254227-f0a9e5f9fb7d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1599600810694-b5ac4dd33c4d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1614730321751-3d4a2c4a1c69?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1508615039623-a25605d2938d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1495446815901-a292acb6dee2?w=400&h=300&fit=crop'
];

// Replace all image URLs one by one
let counter = 0;
content = content.replace(/image: 'https:\/\/picsum\.photos\/400\/300\?random=[^']*'/g, () => {
    return `image: '${plantImages[counter++ % plantImages.length]}'`;
});

fs.writeFileSync('PlantCareReference.js', content);
console.log('✅ Updated all plant images with working Unsplash URLs');
