import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
    return (
        <>
            <div className='container contact-section'>
                <section id="contact me" className="contact-section text-center">
                    <h2>Contact Me</h2>
                    <p className='text-one'>
                        Let’s connect ! For Collaborations, Inquiries or Professional Opportunities, Feel free to reach out via the contact details below.
                    </p>
                    <p>
                        <a href="tel:+918838471230" className='text-two'>+91 8838471230</a>
                    </p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthickmsd23@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className='text-two'>karthickmsd23@gmail.com</a>
                    <div className="footer-icons">
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
                </section>
            </div>
        </>
    )
}

export default Contact