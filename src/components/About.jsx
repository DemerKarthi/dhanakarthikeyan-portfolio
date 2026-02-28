const About = () => {
    return (
        <section id="about">
            <div className="about-grid">
                <div className="about-text reveal">
                    <div className="section-label">About Me</div>
                    <div className="section-title">Building things<br />that <span>matter.</span></div>
                    <p>
                        I'm a Full Stack Developer with 1.5+ years of professional experience building and deploying scalable web applications in fast-paced startup environments.
                    </p>
                    <p>
                        My expertise spans React, Node.js, GraphQL, MySQL, and real-time systems using Socket.IO. I've worked on AI-powered products, social media automation agents, and booking platforms — from idea to production.
                    </p>
                    <p>
                        Currently, I'm the Founder & Full Stack Instructor at <strong>Clarithix</strong>, a tech-focused education platform where I build job-ready developers. I'm also actively open to remote full-stack roles globally.
                    </p>
                    <div style={{ marginTop: '28px' }}>
                        <a href="mailto:demerkarthi@gmail.com" className="btn btn-primary">Download Resume</a>
                    </div>
                </div>
                <div className="about-highlights reveal">
                    <div className="highlight-card">
                        <div className="highlight-icon">🤖</div>
                        <div>
                            <h4>AI & Automation</h4>
                            <p>Built Alfred — a social media automation agent supporting 3+ platforms with real-time updates</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">⚡</div>
                        <div>
                            <h4>Real-Time Systems</h4>
                            <p>Reduced event update latency by 40% using Socket.IO in production apps</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">💳</div>
                        <div>
                            <h4>Payment Integrations</h4>
                            <p>Integrated PayPal, Stripe & Libelula — reducing payment failures by ~25%</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">🎓</div>
                        <div>
                            <h4>RHCSA Certified</h4>
                            <p>Red Hat Certified System Administrator (RHEL 9) — Valid till Mar 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
