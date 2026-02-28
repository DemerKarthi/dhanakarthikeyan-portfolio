const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-wrapper">
                <div className="reveal">
                    <div className="section-label">Tech Stack</div>
                    <div className="section-title">Skills &amp; <span>Technologies</span></div>
                </div>
                <div className="skills-category reveal">
                    <div className="skills-category-title">Frontend</div>
                    <div className="skills-grid">
                        <div className="skill-chip"><span className="skill-icon">⚛️</span>React.js</div>
                        <div className="skill-chip"><span className="skill-icon">🌐</span>HTML5</div>
                        <div className="skill-chip"><span className="skill-icon">🎨</span>CSS3</div>
                        <div className="skill-chip"><span className="skill-icon">✨</span>JavaScript</div>
                        <div className="skill-chip"><span className="skill-icon">🚀</span>Next.js</div>
                    </div>
                </div>
                <div className="skills-category reveal">
                    <div className="skills-category-title">Backend</div>
                    <div className="skills-grid">
                        <div className="skill-chip"><span className="skill-icon">🟢</span>Node.js</div>
                        <div className="skill-chip"><span className="skill-icon">🔷</span>GraphQL</div>
                        <div className="skill-chip"><span className="skill-icon">🐍</span>Python</div>
                        <div className="skill-chip"><span className="skill-icon">⚡</span>FastAPI</div>
                        <div className="skill-chip"><span className="skill-icon">🔌</span>REST APIs</div>
                        <div className="skill-chip"><span className="skill-icon">🔄</span>Socket.IO</div>
                    </div>
                </div>
                <div className="skills-category reveal">
                    <div className="skills-category-title">Database & DevOps</div>
                    <div className="skills-grid">
                        <div className="skill-chip"><span className="skill-icon">🗄️</span>MySQL</div>
                        <div className="skill-chip"><span className="skill-icon">🍃</span>MongoDB</div>
                        <div className="skill-chip"><span className="skill-icon">🔥</span>Firebase</div>
                        <div className="skill-chip"><span className="skill-icon">🐙</span>Git/GitHub</div>
                        <div className="skill-chip"><span className="skill-icon">🖥️</span>Linux</div>
                        <div className="skill-chip"><span className="skill-icon">⚙️</span>Nginx</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
