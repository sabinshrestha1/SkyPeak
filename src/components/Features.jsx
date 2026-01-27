import './Features.css';

const features = [
    {
        icon: '🪂',
        title: 'Bungee Jump',
        description: 'Take the ultimate leap of faith from Nepal\'s highest bungee platform with breathtaking valley views.',
    },
    {
        icon: '🌉',
        title: 'Glass Cantilever Walk',
        description: 'Walk on transparent glass floors suspended over dramatic cliffs for a thrilling perspective of the valley below.',
    },
    {
        icon: '🍽️',
        title: 'Fly Dining',
        description: 'Enjoy a gourmet meal suspended high in the sky with panoramic mountain views all around you.',
    },
    {
        icon: '🏎️',
        title: 'ATV Jungle Safari',
        description: 'Explore rugged trails and lush forests on an exciting all-terrain vehicle adventure through the wilderness.',
    },
];

function Features() {
    return (
        <section id="features" className="features section">
            <div className="container">
                <h2 className="section-title">Why SkyPeak?</h2>
                <p className="section-subtitle">
                    Discover what makes SkyPeak Nepal's most sought-after destination
                </p>

                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="features__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="features__icon">{feature.icon}</div>
                            <h3 className="features__title">{feature.title}</h3>
                            <p className="features__description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
