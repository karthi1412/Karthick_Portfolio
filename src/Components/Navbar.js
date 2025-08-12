import React, { useEffect, useState } from 'react';

const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact me'];

const Navbar = () => {
  const [active, setActive] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 90;

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActive(id);
    }
  };

  // Optional: Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* <nav className="navbar">
        <div className="logo">KARTHICK M V</div>
        <ul className="nav-links">
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => scrollToSection(sec)}
                className={`nav-btn ${active === sec ? 'active' : ''}`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav> */}


      <nav className="navbar navbar-expand-lg fixed-top top-navbar">
        <div className="container-fluid">
          <div className="logo" href="#home" style={{ cursor: "pointer" }}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            KARTHICK M V
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-links">
              {sections.map((sec) => (
                <li key={sec} className="nav-item">
                  <a
                    href={`#${sec}`}
                    className={`nav-btn ${active === sec ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(sec); }}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
