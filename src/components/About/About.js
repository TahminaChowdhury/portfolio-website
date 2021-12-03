import React from 'react';
import './About.css'
import img from '../../images/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'

import Skills from './Skills';


const About = () => {
    return (
        <div id="about" className="container my-5 pb-5 about-section">
            <h2 className="text-center mb-5 pb-3">ABOUT ME</h2>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div>
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div>
                        <p  className="py-4">Hello World! I’m Tahmina Chowdhury. I'm a Front-end Web Developer. I have always been interested in web
                        development. I love to get new experiences and always learn from my surroundings.
                            <br/>
                            <br/>
                            I have been working as a web developer for 4 months and I have done some projects by using front-end technologies. You can check it through portfolio section on this website. I have a good understanding of HTML, CSS, JavaScript, React, Bootstrap, and Material UI.Also, I'm familir with Back-end technologies such as Node.js, Express.js, MongoDB, Firebase Authentication.
                            <br/>
                            <br/>
                            I always put quality on top of anything, and whatever projects I made were real-life projects. Along with these technical skills, I possess good communication skills. I looking forward to any opportunities and challenges.
                        </p>
                    </div>
                </div>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default About;