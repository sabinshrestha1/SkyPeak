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



                <div className="hero__buttons">

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
