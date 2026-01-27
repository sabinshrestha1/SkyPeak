import { Link } from 'react-router-dom';
import './Experiences.css';

// Featured experiences for homepage
const featuredExperiences = [
    {
        image: '/Glass_Sky_Walk.png',
        title: 'Glass Sky Walk',
        duration: '30-45 mins',
        difficulty: 'Easy',
        description: 'Walk on air with transparent floors over dramatic cliffs and breathtaking valleys.',
    },
    {
        image: '/Glass_Cantilever.png',
        title: 'Glass Cantilever',
        duration: '30-45 mins',
        difficulty: 'Moderate',
        description: 'Walk on transparent glass extending over the cliff edge with stunning valley views.',
    },
    {
        image: '/Sky_Tower_Water_Fall.png',
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
        </section>
    );
}

export default Experiences;
