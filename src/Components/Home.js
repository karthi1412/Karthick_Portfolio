import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content fade-in">
        <h1>
          Hi, I'm <span className="highlight">KARTHICK M V</span>
        </h1>
        <h1>
          A Passionate <span className="highlight">Front End Developer</span>
        </h1>
        <p>I specialize in building beautiful and performant web apps using modern tools and technologies.</p>
         <div className="footer-icons">
                  <a href="https://github.com/karthi1412" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/karthick-mv1412/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthickmsd23@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
      </div>
    </section>
  );
};

export default Home;
