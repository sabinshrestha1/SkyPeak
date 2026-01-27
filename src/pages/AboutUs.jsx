import { useState } from 'react'
import './AboutUs.css'

function AboutUs() {
    // Helper to get initials from name
    const getInitials = (name) => {
        return name
            .replace(/^(Mr\.|Mrs\.|Ms\.)\s*/i, '')
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    }

    // Board of Directors data
    const boardMembers = [
        {
            id: 1,
            name: 'Mr. Ram Chandra Sharma',
            position: 'President & Managing Director',
            image: '/board/ram_chandra_sharma.png',
            featured: true
        },
        {
            id: 2,
            name: 'Mr. Post Bahadur Khadka',
            position: 'Executive Director',
            image: '/board/post_bahadur_khadka.png',
            featured: true
        },
        {
            id: 3,
            name: 'Mr. Purnasingh Thapa',
            position: 'Director',
            image: '/board/purnasingh_thapa.png',
            featured: false
        },
        {
            id: 4,
            name: 'Mrs. Rekha Baniya',
            position: 'Director',
            image: '/board/rekha_baniya.png',
            featured: false
        },
        {
            id: 5,
            name: 'Mr. Dhurba Paudel',
            position: 'Director',
            image: '/board/dhurba_paudel.png',
            featured: false
        }
    ]

    // Track failed images
    const [failedImages, setFailedImages] = useState(new Set())

    const handleImageError = (id) => {
        setFailedImages(prev => new Set([...prev, id]))
    }

    const renderPhoto = (member, size = 'normal') => {
        const showPlaceholder = !member.image || failedImages.has(member.id)
        const iconSize = size === 'featured' ? 64 : 48
        const fontSize = size === 'featured' ? '2.5rem' : '1.75rem'

        if (showPlaceholder) {
            return (
                <div className="about-board__photo-placeholder" style={{ fontSize }}>
                    {getInitials(member.name)}
                </div>
            )
        }

        return (
            <img
                src={member.image}
                alt={member.name}
                onError={() => handleImageError(member.id)}
            />
        )
    }

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero__background">
                    <div className="about-hero__overlay"></div>
                </div>
                <div className="container about-hero__content">
                    <div className="about-hero__badge">
                        <span className="about-hero__badge-icon">🏔️</span>
                        <span>Nepal's Premier Adventure Destination</span>
                    </div>
                    <h1 className="about-hero__title">
                        About <span className="about-hero__title-highlight">SkyPeak</span>
                    </h1>
                    <p className="about-hero__subtitle">
                        Where Innovation Meets Adventure
                    </p>
                </div>
            </section>

            {/* Company Summary Section */}
            <section className="about-summary section">
                <div className="container">
                    <div className="about-summary__content">
                        <h2 className="section-title">Who We Are</h2>
                        <p className="about-summary__text">
                            SKYPEAK Adventures Park Limited represents a transformational
                            tourism infrastructure investment with strong financial fundamentals,
                            iconic attractions, and scalable long-term growth potential. The project
                            aligns commercial success with sustainability, innovation, and national
                            tourism development.
                        </p>
                        <p className="about-summary__highlight">
                            We invite investors to participate in this landmark venture and be
                            part of Nepal's next global adventure tourism destination.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="about-vm section">
                <div className="container">
                    <div className="about-vm__grid">
                        {/* Vision Card */}
                        <div className="about-vm__card">
                            <div className="about-vm__icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3 className="about-vm__title">Our Vision</h3>
                            <p className="about-vm__text">
                                To create and sustain long-term value for stakeholders by providing unique,
                                high-quality adventure and leisure activities, becoming a benchmark for
                                innovation and operational excellence.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="about-vm__card">
                            <div className="about-vm__icon about-vm__icon--orange">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                                    <path d="m2 17 10 5 10-5" />
                                    <path d="m2 12 10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="about-vm__title">Our Mission</h3>
                            <p className="about-vm__text">
                                To deliver exhilarating and sustainable adventure experiences that inspire
                                love for nature, promote environmental stewardship, and positively impact
                                local communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board of Directors Section */}
            <section className="about-board section">
                <div className="container">
                    <h2 className="section-title">Board of Directors</h2>
                    <p className="section-subtitle">
                        Meet the visionary leaders driving SkyPeak's mission forward
                    </p>

                    {/* Featured Directors (President & Executive) */}
                    <div className="about-board__featured">
                        {boardMembers.filter(m => m.featured).map(member => (
                            <div key={member.id} className="about-board__card about-board__card--featured">
                                <div className="about-board__photo">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} />
                                    ) : (
                                        <div className="about-board__photo-placeholder">
                                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <h4 className="about-board__name">{member.name}</h4>
                                <span className="about-board__position">{member.position}</span>
                            </div>
                        ))}
                    </div>

                    {/* Directors Grid */}
                    <div className="about-board__grid">
                        {boardMembers.filter(m => !m.featured).map(member => (
                            <div key={member.id} className="about-board__card">
                                <div className="about-board__photo">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} />
                                    ) : (
                                        <div className="about-board__photo-placeholder">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <h4 className="about-board__name">{member.name}</h4>
                                <span className="about-board__position">{member.position}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta section">
                <div className="container">
                    <div className="about-cta__content">
                        <h2 className="about-cta__title">Experience the Adventure</h2>
                        <p className="about-cta__text">
                            Join us at Nepal's most iconic adventure destination
                        </p>
                        <div className="about-cta__buttons">
                            <a href="/#experiences" className="btn btn-primary">
                                <span>Explore Experiences</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="/#contact" className="btn btn-secondary about-cta__btn-secondary">
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
