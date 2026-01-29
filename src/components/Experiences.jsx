import { Link } from 'react-router-dom';
import './Experiences.css';

// Featured experiences for homepage
const featuredExperiences = [
    {
        image: '/Laila_Majum.webp',
        title: 'Laila Majum',
        duration: '30-45 mins',
        difficulty: 'Easy',
        description: 'Experience the legendary romantic viewpoint with stunning panoramic mountain vistas.',
    },
    {
        image: '/Glass_Cantilever.webp',
        title: 'Glass Cantilever',
        duration: '30-45 mins',
        difficulty: 'Moderate',
        description: 'Walk on transparent glass extending over the cliff edge with stunning valley views.',
    },
    {
        image: '/Sky_Tower_Water_Fall.webp',
        title: 'Sky Tower Water Fall',
        duration: '45 mins - 1 hour',
        difficulty: 'Easy',
        description: 'Witness the majestic cascading waters from the towering heights of SkyPeak.',
    },
];

function Experiences() {
    return (
        <section id="experiences" className="experiences section">
            <div className="container">
                <h2 className="section-title">Signature Experiences</h2>
                <p className="section-subtitle">
                    Discover unforgettable adventures that await you at SkyPeak
                </p>

                <div className="experiences__grid">
                    {featuredExperiences.map((exp, index) => (
                        <div
                            key={exp.title}
                            className="experiences__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="experiences__image-wrapper">
                                <img src={exp.image} alt={exp.title} className="experiences__image" />
                            </div>
                            <div className="experiences__content">
                                <h3 className="experiences__title">{exp.title}</h3>
                                <p className="experiences__description">{exp.description}</p>
                                <div className="experiences__meta">
                                    <span className="experiences__duration">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                        {exp.duration}
                                    </span>
                                    <a href="#contact" className="experiences__link">
                                        Learn More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="experiences__cta">
                    <Link to="/experiences" className="btn btn-primary">
                        Explore All Adventures →
                    </Link>
                    <p className="experiences__cta-hint">
                        Discover 10+ more thrilling experiences waiting for you
                    </p>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="experiences__wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#E0F2FE" />
                </svg>
            </div>
        </section>
    );
}

export default Experiences;
