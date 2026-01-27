import './Parallax.css';

function Parallax({
    image = '/parallax-mountains.jpg',
    title,
    subtitle,
    height = '400px'
}) {
    return (
        <section
            className="parallax"
            style={{
                backgroundImage: `url(${image})`,
                height
            }}
        >
            <div className="parallax__overlay"></div>
            <div className="parallax__content">
                {title && <h2 className="parallax__title">{title}</h2>}
                {subtitle && <p className="parallax__subtitle">{subtitle}</p>}
            </div>
        </section>
    );
}

export default Parallax;
