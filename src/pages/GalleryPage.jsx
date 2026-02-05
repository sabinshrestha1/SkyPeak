import { Link } from 'react-router-dom';
import './GalleryPage.css';

const galleryImages = [
    { src: '/Aadiyogi_Religious_Park.webp', alt: 'Aadiyogi Religious Park' },
    { src: '/Aadiyogi_Religious_Park_1.webp', alt: 'Aadiyogi Religious Park' },
    { src: '/AVT_Jungle_Park.webp', alt: 'ATV Jungle Park' },
    { src: '/Bungee_Jump_1.webp', alt: 'Bungee Jump Experience' },
    { src: '/Cafeteria.webp', alt: 'Cafeteria' },
    { src: '/Capsule_Sky_Lift.webp', alt: 'Capsule Sky Lift' },
    { src: '/Cultural_Dress.webp', alt: 'Cultural Dress' },
    { src: '/Edge_Walk.webp', alt: 'Edge Walk' },
    { src: '/Fly_Dining_1.webp', alt: 'Fly Dining' },
    { src: '/Fly_Dining_2.webp', alt: 'Fly Dining' },
    { src: '/Gaming_Zone.webp', alt: 'Gaming Zone' },
    { src: '/Glass_Cantilever.webp', alt: 'Glass Cantilever' },
    { src: '/Glass_Sky_Walk.webp', alt: 'Glass Sky Walk' },
    { src: '/Glaswalk.webp', alt: 'Glass Walk' },
    { src: '/Kids_Zone.webp', alt: 'Kids Zone' },
    { src: '/Laila_Majum.webp', alt: 'Laila Majnu' },
    { src: '/Mechanical_Swing.webp', alt: 'Mechanical Swing' },
    { src: '/Metal_Tower_Climbing.webp', alt: 'Metal Tower Climbing' },
    { src: '/Mountain_Climbing.webp', alt: 'Mountain Climbing' },
    { src: '/Mountain_Cycling.webp', alt: 'Mountain Cycling' },
    { src: '/Planetarium.webp', alt: 'Planetarium' },
    { src: '/Raniban_Jungle.webp', alt: 'Raniban Jungle' },
    { src: '/Sky_Tower_Water_Fall.webp', alt: 'Sky Tower Waterfall' },
];

function GalleryPage() {
    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section className="gallery-page__hero">
                <div className="gallery-page__hero-bg"></div>
                <div className="container gallery-page__hero-content">
                    <h1 className="gallery-page__title">
                        Our <span className="gallery-page__title-highlight">Gallery</span>
                    </h1>
                    <p className="gallery-page__subtitle">
                        Explore the breathtaking moments captured at SkyPeak Nepal
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-page__content section">
                <div className="container">
                    <div className="gallery-page__grid">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="gallery-page__item"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="gallery-page__image"
                                    loading="lazy"
                                />
                                <div className="gallery-page__overlay">
                                    <span className="gallery-page__caption">{image.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gallery-page__cta">
                        <Link to="/" className="btn btn-primary">
                            <span>Back to Home</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GalleryPage;
