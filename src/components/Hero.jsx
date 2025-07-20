// src/components/Hero.jsx
import './Hero.css';

export default function Hero() {
    return(
        <div className="hero-section-wrapper">
            
            <div className="bg-emoji emoji-1">🧼</div>
            <div className="bg-emoji emoji-2">✨</div>
            <div className="bg-emoji emoji-3">🫧</div>
            <div className="bg-emoji emoji-4">🪣</div>
            <div className="bg-emoji emoji-5">🧹</div>

            <p className="hero-eyebrow">🇱🇺 LUXEMBOURG</p>
            <p className="hero-section-title ibm-plex-sans-thai-semibold">
                Lilly's Cleaning
            </p>
            <button>Book a cleaning</button>
        </div>
    );
}