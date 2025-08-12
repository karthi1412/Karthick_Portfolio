import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import './Home.css';
import bannerone from "../Assets/Images/banner-two.webp"

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className='container-fluid'>
        <div className='row align-items-center flex-column-reverse flex-lg-row mt-3 justify-content-center'>
          <div className='col-lg-7 col-12'>
            <div className="home-content fade-in mt-2">

              <h1>
                Hi, I'm <span className="highlight">KARTHICK</span>
              </h1>
              <h1>
                A Passionate <span className="highlight">Front End Developer</span>
              </h1>
              <p className='home-text'>I specialize in building responsive and interactive web application using modern tools and technologies.</p>
              <div className="footer-icons justify-content-start">
                <a href="https://www.linkedin.com/in/karthick-mv1412/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthickmsd23@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://github.com/karthi1412" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
              <div className='d-flex gap-5 mt-3'>
                <div>
                  <a href={`${process.env.PUBLIC_URL}/Karthick_Frontend.pdf`} download className="resume-button">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-12 mt-3'>
            <img src={bannerone} alt='Technologies' className='banner-img' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
