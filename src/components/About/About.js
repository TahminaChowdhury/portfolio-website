import React from 'react';
import './About.css'
import html from '../../images/html5.png'
import css from '../../images/css3-logo-png-transparent.png'
import react from '../../images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg'
import js from '../../images/javascript-logo-8892AEFCAC-seeklogo.com.png'
import bootstrap from '../../images/png-transparent-responsive-web-design-web-development-bootstrap-cascading-style-sheets-web-browser-world-wide-web-purple-web-design-violet.png'


const About = () => {
    return (
        <div id="about" className="container my-5 py-5 about-section">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                    <h3 className="title">ABOUT ME</h3>
                    <h5>I'm a Front End Developer from Dhaka,Bangladesh</h5>
                    <p>I enjoy building attractive, accessible and user-friendly web interfaces.</p>
                    </div>
                </div>
            </div>

            {/* skills div */}

            <div className="row">
                <h4 className="text-center">My skills</h4>
                <div className="row text-center mt-5">
                    <h4 className="text-start my-4">Expertise</h4>
                    <div className="col-4 mb-5">
                        <h6>HTML</h6>
                    </div>
                    <div className="col-4">
                        <h6>CSS</h6>
                    </div>

                    <div className="col-4">
                        <h6>JavaScript</h6>
                    </div>
                    <div className="col-4">
                        <h6>RecatJS</h6>
                    </div>
                    <div className="col-4">
                        <h6>Bootstrap</h6>
                    </div>
                    <div className="col-4">
                        <h6>Material UI</h6>   
                    </div>
                   
                </div>
                <div className="row text-center mt-5">
                <h4 className="text-start my-4">Comfortable</h4>
                <div className="col-3">
                        <h6>Node.js</h6>
                    </div>
                    <div className="col-3 mb-5">
                        <h6>Express.js</h6>
                    </div>
                    <div className="col-3">
                        <h6>Mongodb</h6>
                    </div>
                    <div className="col-3">
                        <h6>FirebaseE</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;