import React from 'react';
// import './Experience.css';

const Experience = () => {
  return (
    <div className='container'>
      <section id="experience" className="experience-section">
        <h2 className="section-title">Experience</h2>

        <div className="">
          {/* <div className="timeline-item ">
          <div className='skill-card'>
            <h3>Software Engineer <span> | Jul 2022 – Present</span></h3>
            <ul>
              <li>Built and maintained reusable, scalable React components for dynamic and interactive web interfaces.</li>
              <li>Developed modular UI components based on JSON configurations for flexibility and reusability.</li>
              <li>Implemented robust state management using Redux and Context API to manage complex data flow.</li>
              <li>Collaborated with product teams and designers to accurately implement user interfaces and UX guidelines.</li>
              <li>Integrated RESTful and GraphQL APIs to power dynamic front-end content.</li>
              <li>Enhanced browser compatibility and responsiveness across devices using SCSS and Material UI.</li>
              <li>Led automated testing efforts using Jest and React Testing Library to improve code quality.</li>
              <li>Participated in Agile ceremonies and contributed to continuous improvement efforts.</li>
            </ul>
          </div>
        </div> */}

          <div className="timeline-item">
            <div className='skill-card'>
              <h3>Junior Front End Developer | Clarisco Solutions |<span> Jun 2023 – Jul 2025</span></h3>
              <ul>
                <li>
                  Specialized in building responsive and interactive web applications using HTML, CSS, JavaScript, React JS, Redux, Bootstrap, SCSS, Material UI and jQuery.
                </li>
                <li>
                  Developed reusable components and optimized application performance using lazy loading, code splitting, and efficient state management techniques.
                </li>
                <li>
                  Ensured cross-browser compatibility and responsive design, delivering a seamless user experience across multiple platforms and devices and resulting in a 30% boost in mobile usability.
                </li>
                <li>
                  Proficient in version control with GitHub, including pull request management, branch merging, conflict resolution to ensure code integrity and reducing deployment issues by 25%.
                </li>
                <li>
                  Experienced in integrating RESTful APIs to enhance application functionality and actively contributed to team discussions for continuous improvement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
