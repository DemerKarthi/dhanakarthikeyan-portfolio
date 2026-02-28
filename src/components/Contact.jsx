const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-wrapper">
                <div className="reveal">
                    <div className="section-label">Get In Touch</div>
                    <div className="section-title">Let's <span>Work</span><br />Together.</div>
                    <p className="contact-text">
                        I'm actively looking for remote full-stack opportunities. If you have a role or project in mind, I'd love to connect!
                    </p>
                    <div className="contact-links">
                        <a href="mailto:demerkarthi@gmail.com" className="contact-link">
                            <div className="contact-link-icon">✉️</div>
                            demerkarthi@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/dhanakarthikeyan" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <div className="contact-link-icon">💼</div>
                            linkedin.com/in/dhanakarthikeyan
                        </a>
                        <a href="https://github.com/DemerKarthi" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <div className="contact-link-icon">🐙</div>
                            github.com/DemerKarthi
                        </a>
                        <a href="tel:+917339347755" className="contact-link">
                            <div className="contact-link-icon">📞</div>
                            +91 7339347755
                        </a>
                    </div>
                </div>
                <div className="contact-form reveal">
                    <input type="text" className="form-input" placeholder="Your Name" />
                    <input type="email" className="form-input" placeholder="Your Email" />
                    <input type="text" className="form-input" placeholder="Subject" />
                    <textarea className="form-input" placeholder="Your Message..."></textarea>
                    <button className="btn-send" onClick={() => alert('Thanks for reaching out! I\'ll get back to you soon 🚀')}>Send Message →</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
