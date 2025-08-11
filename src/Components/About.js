import React from 'react';
// import './About.css';

const About = () => {
  return (
    <div className='container'>
      <section id="about" className="about-section info-card">

        <h2>About Me</h2>
        <p>
          I’m a passionate and experienced <strong>Front End Developer</strong> with over 2 years of hands-on experience crafting responsive and high-performance <strong>Web Applications</strong>. My technical toolkit includes <strong>React.js</strong>, <strong>JavaScript (ES6)</strong>, <strong>HTML5</strong>, <strong>CSS3/SCSS</strong>, and seamless integration with <strong>RESTful APIs</strong>.
        </p>
        <p>
          I specialize in building scalable, maintainable front-end architectures using modern React features such as <strong>Hooks</strong>
          {/* (<code>useState</code>, <code>useEffect</code>, <code>useContext</code>) */}
          , <strong>Redux</strong>, <strong>Redux Toolkit</strong>, and <strong>React Router</strong>. I’m proficient in handling complex state management, implementing dynamic user interfaces, and optimizing app performance.
        </p>
        <p>
          Beyond React, I have working knowledge of Node.js, MongoDB, and API communication using <strong>Axios</strong> and the <strong>Fetch API</strong>. I'm also well-versed in <strong>Git</strong>, <strong>GitHub</strong>, and <strong>GitLab</strong>, which helps me collaborate smoothly in <strong>Agile/Scrum teams</strong>.
        </p>
        <p>
          I take pride in writing <strong>clean, reusable code</strong>, following best practices, and solving challenging UI/UX problems efficiently. Whether working solo or as part of a cross-functional team, I strive to deliver quality software that meets user needs and business goals.
        </p>
      </section>
    </div>

  );
};

export default About;
