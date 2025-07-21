// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css'; // Creeremo questo file CSS
import lillyPhoto from "../assets/images/lillyBrillyProfilePic.png"



export default function AboutSection() {
    return (
        <section className="about-section-wrapper">
            <div className="about-content-container">
                {/* Immagine della squadra */}
                <div className="about-image-container">
                    <img src={lillyPhoto} alt="Lilly the founder" />
                </div>

                {/* Contenuto testuale */}
                <div className="about-text-container">
                    <p className="about-eyebrow">Meet the Founder</p>
                    <h2 className="about-title">Lilly. Your Trusted Cleaning Partner</h2>
                    <p className="about-description">
                        Founded by <span style={{ fontWeigth:"600" }}>Lilly</span>, a cleaning veteran with over 30 years of extensive experience, Lilly's Cleaning brings unparalleled expertise to homes, offices, luxury boutiques, dental practices, and more across Luxembourg. Lilly's journey has been dedicated to perfecting the art of clean, setting the highest standards in the industry.
                    </p>

                    <p className="about-products-highlight">
                     At Lilly's Cleaning, we believe a pristine environment is the foundation for a better life and work. Our mission is to transform your spaces, ensuring every family enjoys a healthier home and every office fosters enhanced productivity. We achieve this by exclusively using **eco-friendly, high-quality cleaning products** that are effective, yet safe for your family, pets, and the environment. Experience the difference of a truly clean and caring service.🧼 
                    </p>
                </div>
            </div>
        </section>
    );
}