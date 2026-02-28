const Projects = () => {
    return (
        <section id="projects">
            <div className="reveal">
                <div className="section-label">Work</div>
                <div className="section-title">Featured <span>Projects</span></div>
            </div>
            <div className="projects-grid">
                <div className="project-card reveal">
                    <div className="project-num">01</div>
                    <div className="project-name">Alfred — Social Media Agent</div>
                    <p className="project-desc">AI-powered social media automation agent supporting posting and scheduling across 3+ platforms, reducing manual effort by 60%. Integrated Ayrshare API and real-time Socket.IO updates.</p>
                    <div className="exp-tags" style={{ marginBottom: '20px' }}>
                        <span className="tag">Node.js</span><span className="tag">Socket.IO</span><span className="tag">Ayrshare</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-num">02</div>
                    <div className="project-name">EnvisionShop</div>
                    <p className="project-desc">AI-based shopping platform with voice-controlled navigation, reducing user interaction time by 30%. Built with computer vision and natural language interfaces for hands-free browsing.</p>
                    <div className="exp-tags" style={{ marginBottom: '20px' }}>
                        <span className="tag">React</span><span className="tag">AI</span><span className="tag">Voice Control</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-num">03</div>
                    <div className="project-name">Rental Booking Platform</div>
                    <p className="project-desc">Full-stack booking platform with slot-based availability logic, supporting 1000+ user interactions. Integrated JWT auth, RBAC, Stripe/PayPal payments, and FCM push notifications.</p>
                    <div className="exp-tags" style={{ marginBottom: '20px' }}>
                        <span className="tag">React</span><span className="tag">GraphQL</span><span className="tag">Stripe</span><span className="tag">MySQL</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-num">04</div>
                    <div className="project-name">Wink-To-Scroll</div>
                    <p className="project-desc">Hands-free browsing system using wink-triggered scrolling via computer vision techniques. An innovative accessibility tool that enables navigation without physical interaction.</p>
                    <div className="exp-tags" style={{ marginBottom: '20px' }}>
                        <span className="tag">Python</span><span className="tag">Computer Vision</span><span className="tag">OpenCV</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-num">05</div>
                    <div className="project-name">AR Tourist Guide</div>
                    <p className="project-desc">Augmented reality navigation system built with Unity3D and Vuforia, overlaying real-world information for tourists. Combines AR technology with location-based data.</p>
                    <div className="exp-tags" style={{ marginBottom: '20px' }}>
                        <span className="tag">Unity3D</span><span className="tag">Vuforia</span><span className="tag">AR</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card reveal" style={{ background: 'var(--accent-pale)', borderColor: '#f0c8b0' }}>
                    <div className="project-num" style={{ color: '#f0c8b0' }}>06</div>
                    <div className="project-name">Clarithix Platform</div>
                    <p className="project-desc">Ed-tech platform for building job-ready developers. Designed structured Full Stack Development curriculum with hands-on project-based learning experiences.</p>
                    <div className="exp-tags" style={{ marginBottom: '20px' }}>
                        <span className="tag">Full Stack</span><span className="tag">EdTech</span><span className="tag">React</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
