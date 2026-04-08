import React, { useState } from 'react';

const EmojiCodeGuide = () => {
    const [copied, setCopied] = useState('');

    const emojiCodes = [
        // Outdoor Maintenance
        '✂️', '♻️', '🗜️', '⛳', '🌱', '💦', '🗻', '⚰️', '🎉',
        // Soil & Planting
        '💐', '💊', '🌳', '🌿', '🌹', '🌺', '❤️', '💛', '💚', '💙',
        // Equipment/Material
        '💪', '🪜', '⛏️', '🏺',
        // Diagnostics
        '🎬', '📦', '⏰', '🔥', '🔧', '🔭', '🛏️',
        // Holiday & Seasonal
        '🎄', '🎀', '💡', '❇️', '➿', '♨️', '🪚',
        // Billing
        '✅', '💰', '💵', '🏛️', '❌'
    ];

    const copyEmoji = (emoji) => {
        navigator.clipboard.writeText(emoji);
        setCopied(emoji);
        setTimeout(() => setCopied(''), 1500);
    };

    const copyAll = () => {
        const allEmojis = emojiCodes.join(' ');
        navigator.clipboard.writeText(allEmojis);
        setCopied('all');
        setTimeout(() => setCopied(''), 1500);
    };

    return (
        <div className="emoji-quick-guide">
            <h1>📋 Emoji Codes</h1>
            <button onClick={copyAll} className="copy-all">
                {copied === 'all' ? '✓ Copied All!' : 'Copy All Emojis'}
            </button>
            <div className="emoji-grid">
                {emojiCodes.map((emoji, index) => (
                    <div
                        key={index}
                        className={`emoji-box ${copied === emoji ? 'copied' : ''}`}
                        onClick={() => copyEmoji(emoji)}
                        title="Click to copy"
                    >
                        {emoji}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmojiCodeGuide;
