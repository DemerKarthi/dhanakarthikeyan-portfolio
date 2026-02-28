const Experience = () => {
    return (
        <section id="experience">
            <div className="exp-wrapper">
                <div className="reveal">
                    <div className="section-label">Career</div>
                    <div className="section-title">Work <span>Experience</span></div>
                </div>

                <div className="exp-item reveal">
                    <div className="exp-date">Feb 2026<br />— Present</div>
                    <div>
                        <div className="exp-company">🚀 Clarithix</div>
                        <div className="exp-role">Founder & Full Stack Instructor</div>
                        <ul className="exp-desc">
                            <li>Founded Clarithix, a tech-focused education platform for developers</li>
                            <li>Designed and delivered a structured Full Stack Development curriculum</li>
                            <li>Building job-ready developers through hands-on project-based learning</li>
                        </ul>
                        <div className="exp-tags">
                            <span className="tag">Full Stack Development</span>
                            <span className="tag">React.js</span>
                            <span className="tag">Remote</span>
                        </div>
                    </div>
                </div>

                <div className="exp-item reveal">
                    <div className="exp-date">Sep 2025<br />— Feb 2026</div>
                    <div>
                        <div className="exp-company">🤖 Dot Com Infoway</div>
                        <div className="exp-role">Full Stack Developer — AI Division</div>
                        <ul className="exp-desc">
                            <li>Developed "Alfred" — social media automation agent supporting 3+ platforms, reducing manual scheduling by ~60%</li>
                            <li>Integrated Ayrshare API enabling automated publishing of 100+ posts/day</li>
                            <li>Implemented real-time status updates via Socket.IO, improving latency by ~40%</li>
                            <li>Managed server deployment with Nginx and PM2</li>
                        </ul>
                        <div className="exp-tags">
                            <span className="tag">Node.js</span><span className="tag">Socket.IO</span>
                            <span className="tag">Mongoose</span><span className="tag">MySQL</span><span className="tag">Ayrshare API</span>
                        </div>
                    </div>
                </div>

                <div className="exp-item reveal">
                    <div className="exp-date">Sep 2024<br />— Aug 2025</div>
                    <div>
                        <div className="exp-company">💡 RadicalStart InfoLab</div>
                        <div className="exp-role">Full Stack Developer</div>
                        <ul className="exp-desc">
                            <li>Built 3+ full-stack web applications using React, Node.js, MySQL & GraphQL</li>
                            <li>Developed a rental booking platform with slot-based logic supporting 1000+ users</li>
                            <li>Integrated PayPal, Stripe & Libelula — reduced payment failures by ~25%</li>
                            <li>Implemented JWT auth, RBAC, FCM push notifications and SSR with Next.js</li>
                        </ul>
                        <div className="exp-tags">
                            <span className="tag">React</span><span className="tag">GraphQL</span>
                            <span className="tag">MySQL</span><span className="tag">Stripe</span><span className="tag">Next.js</span>
                        </div>
                    </div>
                </div>

                <div className="exp-item reveal">
                    <div className="exp-date">Dec 2023<br />— Mar 2024</div>
                    <div>
                        <div className="exp-company">🌐 Nexus Info</div>
                        <div className="exp-role">Web Developer Intern</div>
                        <ul className="exp-desc">
                            <li>Delivered 3 production-ready web projects including login systems and portfolios</li>
                            <li>Developed an AI-based accessibility tool for users with disabilities</li>
                            <li>Improved sign-up conversion rate by 25% via UI/UX optimizations</li>
                        </ul>
                        <div className="exp-tags">
                            <span className="tag">JavaScript</span><span className="tag">E-Commerce</span><span className="tag">Remote</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
