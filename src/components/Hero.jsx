const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-tag">Open to Remote Work</div>
                <h1>
                    Dhanakarthikeyan<br />
                    <em>P.</em>
                </h1>
                <p className="hero-sub">
                    Full Stack MERN Developer building scalable web apps, real-time systems, and AI-powered products. Based in Madurai, India — working globally.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Get In Touch</a>
                    <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </div>
                <div className="hero-stats">
                    <div>
                        <div className="stat-num">1.5<span>+</span></div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div>
                        <div className="stat-num">3<span>+</span></div>
                        <div className="stat-label">Companies</div>
                    </div>
                    <div>
                        <div className="stat-num">10<span>+</span></div>
                        <div className="stat-label">Projects Shipped</div>
                    </div>
                    <div>
                        <div className="stat-num">8.19</div>
                        <div className="stat-label">CGPA</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
