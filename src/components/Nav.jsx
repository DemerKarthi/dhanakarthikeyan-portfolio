const Nav = () => {
  return (
    <nav>
      <a href="#" className="nav-logo">DK<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:demerkarthi@gmail.com" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>Hire Me</a>
    </nav>
  );
};

export default Nav;
