import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExperiencesPage.css';

// All experiences available at SkyPeak
const allExperiences = [
    {
        images: ['/Capsule_Sky_Lift.webp'],
        title: 'Capsule Sky Lift',
        duration: '15-20 mins',
        difficulty: 'Easy',
        description: 'Glide through the clouds in our futuristic capsule with breathtaking panoramic views.',
    },
    {
        images: ['/Mechanical_Swing.webp'],
        title: 'Mechanical Swing',
        duration: '10-15 mins',
        difficulty: 'Thrilling',
        description: 'Feel the rush of adrenaline as you swing over the valley on our massive mechanical swing.',
    },
    {
        images: ['/Bungee_Jump_1.webp'],
        title: 'Bungee Jump',
        duration: '20-30 mins',
        difficulty: 'Extreme',
        description: 'Take the ultimate leap of faith with our world-class bungee jumping experience.',
    },
    {
        images: ['/Edge_Walk.webp'],
        title: 'Edge Walk',
        duration: '45 mins - 1 hour',
        difficulty: 'Thrilling',
        description: 'Experience the thrill of walking on the edge of the mountain with safety harness.',
    },
    {
        images: ['/Fly_Dining_1.webp', '/Fly_Dining_2.webp'],
        title: 'Fly Dining',
        duration: '1-2 hours',
        difficulty: 'Easy',
        description: 'Dine suspended in the sky with gourmet cuisine and spectacular mountain panoramas.',
    },
    {
        images: ['/Aadiyogi_Religious_Park.webp', '/Aadiyogi_Religious_Park_1.webp'],
        title: 'Aadiyogi Religious Park',
        duration: '1-2 hours',
        difficulty: 'Easy',
        description: 'Explore the serene spiritual sanctuary with magnificent sculptures and peaceful gardens.',
    },
    {
        images: ['/AVT_Jungle_Park.webp', '/Raniban_Jungle.webp'],
        title: 'Jungle Adventure Park',
        duration: '2-3 hours',
        difficulty: 'Moderate',
        description: 'Adventure through lush jungle parks including Raniban forest with exciting trails and wildlife encounters.',
    },
    {
        images: ['/Gaming_Zone.webp', '/Cafeteria.webp'],
        title: 'Entertainment & Dining',
        duration: '1-3 hours',
        difficulty: 'Easy',
        description: 'Enjoy VR gaming, arcade entertainment, and delicious cuisine with stunning mountain views.',
    },
    {
        images: ['/Metal_Tower_Climbing.webp', '/Cultural_Dress.webp'],
        title: 'Tower Climbing & Culture',
        duration: '45 mins - 1.5 hours',
        difficulty: 'Thrilling',
        description: 'Challenge yourself with our towering metal climbing structure and dress up in traditional Nepali attire.',
    },
    {
        images: ['/Mountain_Climbing.webp', '/Mountain_Cycling.webp'],
        title: 'Mountain Adventures',
        duration: '2-5 hours',
        difficulty: 'Moderate to Extreme',
        description: 'Conquer the peaks with climbing adventures or ride through scenic trails on mountain bikes.',
    },
    {
        images: ['/Planetarium.webp'],
        title: 'Planetarium',
        duration: '45 mins - 1 hour',
        difficulty: 'Easy',
        description: 'Journey through the cosmos in our immersive planetarium experience.',
    },

    {
        images: ['/Glass_Sky_Walk.webp'],
        title: 'Glass Sky Walk',
        duration: '30-45 mins',
        difficulty: 'Easy',
        description: 'Walk on air with transparent floors over dramatic cliffs and breathtaking valleys.',
    },
];

// Image Slideshow Component for cards with multiple images
function ImageSlideshow({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="experiences-page__slideshow">
            {images.map((img, index) => (
                <img
                    key={img}
                    src={img}
                    alt={`${title} ${index + 1}`}
                    className={`experiences-page__image ${index === currentIndex ? 'experiences-page__image--active' : ''}`}
                />
            ))}
            {images.length > 1 && (
                <div className="experiences-page__dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`experiences-page__dot ${index === currentIndex ? 'experiences-page__dot--active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function ExperiencesPage() {
    return (
        <div className="experiences-page">
            {/* Hero Section */}
            <section className="experiences-page__hero">
                <div className="container">
                    <h1 className="experiences-page__title">Adventure Experiences</h1>
                    <p className="experiences-page__subtitle">
                        From thrilling aerial adventures to unique dining experiences —
                        discover the excitement waiting for you at SkyPeak
                    </p>
                </div>
            </section>

            {/* All Experiences */}
            <section className="experiences-page__section">
                <div className="container">
                    <div className="experiences-page__section-header">
                        <h2 className="experiences-page__section-title">Choose Your Adventure</h2>
                        <p className="experiences-page__section-subtitle">{allExperiences.length} incredible experiences to make your visit unforgettable</p>
                    </div>

                    <div className="experiences-page__grid">
                        {allExperiences.map((exp, index) => (
                            <div
                                key={exp.title}
                                className="experiences-page__card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="experiences-page__image-wrapper">
                                    <ImageSlideshow images={exp.images} title={exp.title} />
                                </div>
                                <div className="experiences-page__content">
                                    <h3 className="experiences-page__card-title">{exp.title}</h3>
                                    <p className="experiences-page__description">{exp.description}</p>
                                    <div className="experiences-page__meta">
                                        <span className="experiences-page__duration">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 6v6l4 2" />
                                            </svg>
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="experiences-page__cta-section">
                <div className="container">
                    <div className="experiences-page__cta-content">
                        <h2>Ready for Your Adventure?</h2>
                        <p>Contact us to plan your perfect SkyPeak experience</p>
                        <div className="experiences-page__cta-buttons">
                            <a href="#contact" className="btn btn-primary">Contact Us</a>
                            <Link to="/" className="btn btn-secondary">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ExperiencesPage;
