import './Hero.css';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero__background">
                <video
                    className="hero__video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/skypeak.mp4" type="video/mp4" />
                </video>
                <div className="hero__overlay"></div>
                <div className="hero__particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="hero__particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="container hero__content">
                <h1 className="hero__title">
                    Every Thrill. <br />
                    <span className="hero__title-highlight">One Destination.</span>
                </h1>


                <div className="hero__buttons">
                    <a href="#experiences" className="btn btn-primary">
                        <span>Explore Experiences</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-number">1,500m</span>
                        <span className="hero__stat-label">Altitude</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">360°</span>
                        <span className="hero__stat-label">Panoramic Views</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">10+</span>
                        <span className="hero__stat-label">Adventures</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <span>Scroll to explore</span>
                <div className="hero__scroll-arrow"></div>
            </div>
        </section>
    );
}

export default Hero;
