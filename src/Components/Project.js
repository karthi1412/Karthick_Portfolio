import React from 'react';
import propelx from "../Assets/Images/PropelX.png";
import newme from "../Assets/Images/Newme.png";
import bitnevex from "../Assets/Images/Bitnevex.png";


function Project() {
    const projects = [
        {
            title: "PropelX",
            description: "PropelX is a decentralized multi-level marketing (MLM) project that allows users to earn cryptocurrency by inviting friends to join.",
            image: propelx,
            link: "https://propelx.io/"
        },
        {
            title: "NewMe",
            description: " NewMe is an e-commerce platform specializing in beauty products, offering a wide range of items for consumers.",
            image: newme,
            link: "https://www.new-me.in/"
        },
        {
            title: "Bitnevex",
            description: "Bitnevex is a centralized cryptocurrency exchange that provides a user-friendly platform for spot leveraged futures trading.",
            image: bitnevex,
            link: "https://www.bitnevex.com/"
        }
    ];

    return (
        <div className='container'>
            <section id="projects" className="projects-section">
                <h2 className="section-title">Projects</h2>
                <p className='fs-5'>In my previous companies, I helped create impactful tech solutions.</p>
                <div className='row align-items-center justify-content-center g-3 mt-5'>
                    {projects.map((project, index) => (
                        <div className='col-12 d-flex col-md-4 col-lg-4' key={index}>
                            <div className="card border-0">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text flex-grow-1">{project.description}</p>
                                    <button className="btn mt-auto live-link-btn">
                                    <a href={project.link} className='link-text' target="_blank" rel="noopener noreferrer">
                                        Live Link
                                    </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Project;
