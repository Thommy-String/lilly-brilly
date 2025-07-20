// src/components/ServicesSection.jsx
import React from 'react';
import './ServiceSection.css';

// Placeholder per le immagini (mantienili finché non hai quelle reali)
// Oppure sostituisci con i percorsi reali delle tue immagini
const regularCleaningImg = "https://i.pinimg.com/originals/20/57/c0/2057c06f9fcf3331b6045c86e97424e8.gif";
const deepCleaningImg = "https://i.pinimg.com/originals/b4/cc/37/b4cc376c6d382a2f07f90e5f09e104c1.gif";
const officeCleaningImg = "https://images.steamusercontent.com/ugc/913547991529879955/B94CA3409781B26DAAC9E996913E319DC2B896C1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

export default function ServicesSection() {
    return (
        <section className="services-section-wrapper">
            <h2>Our Services</h2>
            <p className="services-section-subtitle">Choose your perfect cleaning solution.</p>

            <div className="cards-container">

                {/* Card 1: Sparkle Weekly */}
                <div className="service-card">
                    <div className="card-image-container">
                        <img src={regularCleaningImg} alt="Sparkle Weekly Cleaning" />
                    </div>
                    <p className="card-eyebrow">✨ Your Weekly Shine</p>
                    <h3 className="card-title">Sparkle Weekly 🏠</h3>
                    <p className="card-description">Enjoy a consistently spotless home with our comprehensive weekly cleaning. Perfect for maintaining a fresh and inviting environment without the effort. <br/> <small>(e.g., a 100m² home would be €490/month)</small></p>
                    <p className="card-price">From €4.90/m²</p>
                </div>

                {/* Card 2: Deep Disinfect & Shine */}
                <div className="service-card">
                    <div className="card-image-container">
                        <img src={deepCleaningImg} alt="Deep Disinfect & Shine" />
                    </div>
                    <p className="card-eyebrow">🦠 For a Healthier Home</p>
                    <h3 className="card-title">Deep Disinfect & Shine 😷🫧</h3>
                    <p className="card-description">Go beyond the surface with our intensive deep cleaning, combined with powerful disinfection for ultimate hygiene. Ideal for a truly revitalized space. <br/> <small>(e.g., a 100m² home would be €990/month)</small></p>

                    <p className="card-price">From €9.90/m²</p>
                </div>

                {/* Card 3: Professional Workspace */}
                <div className="service-card">
                    <div className="card-image-container">
                        <img src={officeCleaningImg} alt="Professional Workspace Cleaning" />
                    </div>
                    <p className="card-eyebrow">📈 Optimize Your Business</p>
                    <h3 className="card-title">Professional Workspace 💼</h3>
                    <p className="card-description">Ensure a pristine and organized office environment. Our tailored service ensures a pristine space that boosts productivity and leaves a lasting impression. <br/> <small>(e.g., a 100m² office would be €890/month)</small></p>
                    <p className="card-price">Starting at €8.90/m²</p>
                </div>

            </div>
        </section>
    );
}