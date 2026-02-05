import { Link } from 'react-router-dom';
import './Gallery.css';

const galleryImages = [
    {
        src: '/Aadiyogi_Religious_Park_1.webp',
        alt: 'Aadiyogi Religious Park',
        span: 'normal',
    },
    {
        src: '/AVT_Jungle_Park.webp',
        alt: 'ATV Jungle Safari',
        span: 'normal',
    },
    {
        src: '/Bungee_Jump_1.webp',
        alt: 'Bungee Jump Experience',
        span: 'normal',
    },
    {
        src: 'Gaming_Zone.webp',
        alt: 'Gaming Zone',
        span: 'normal',
    },
    {
        src: '/Mountain_Cycling.webp',
        alt: 'Mountain Cycling Adventure',
        span: 'normal',
    },
    {
        src: '/Fly_Dining_1.webp',
        alt: 'Fly Dining Experience',
        span: 'normal',
    },
];

function Gallery() {
    return (
        <section id="gallery" className="gallery section">
            <div className="container">
                <h2 className="section-title">Every Thrill. One Destination.</h2>
                <p className="section-subtitle">
                    Real moments, real altitude, real emotions from SkyPeak
                </p>

                <div className="gallery__grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`gallery__item ${image.span === 'large' ? 'gallery__item--large' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img src={image.src} alt={image.alt} className="gallery__image" />
                            <div className="gallery__overlay">
                                <span className="gallery__caption">{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery__cta">
                    <Link to="/gallery" className="btn btn-secondary" style={{ color: 'var(--deep-navy)', borderColor: 'var(--sky-blue)' }}>
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
