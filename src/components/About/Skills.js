import React from 'react';
import './Skills.css'
import html from '../../images/html5.png'
import css from '../../images/464-4640184_css3-png-download-css-icon-transparent-png.png'
import js from '../../images/javascript-logo.png'
import react from '../../images/react-1-logo-png-transparent.png'
import bootstrap from '../../images/1_KWBfLD6aEEHNWyuYmL2CVw.png'
import materilaUi from '../../images/materila ui.png'
import nodejs from '../../images/nodejs-logo-vector-download.jpg'
import expressjs from '../../images/express-middlewares-complete-guide.png'
import mongodb from '../../images/MongoDB-logo-500x400.gif'
import firebase from '../../images/firebase.png'

const Skills = () => {
    return (
        <div className="my-5 pt-5 skills-section">
            <div className="row">
                <h2 className="text-center">MY SKILLS</h2>
                <div className="row text-center mt-3 ">
                    <h4 className="text-start my-5" style={{color: "#C400FF"}}>Expertise</h4>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div>
                        <img src={html} className="img-fluid" alt="" />
                        <h6 className="mt-3">HTML</h6>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <img src={css} className="img-fluid" alt="" />
                        <h6 className="mt-3">CSS</h6>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <img src={js} className="img-fluid" alt="" />
                        <h6 className="mt-3">JavaScript</h6>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <img src={react} className="img-fluid" alt="" />
                        <h6 className="mt-3">RecatJS</h6>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <img src={bootstrap} className="img-fluid" alt="" />
                        <h6 className="mt-3">Bootstrap</h6>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <img src={materilaUi} className="img-fluid" alt="" />
                        <h6 className="mt-3">Material UI</h6>   
                    </div>
                   
                </div>
                <div className="row text-center mt-5">
                <h4 className="text-start my-5" style={{color: "#C400FF"}}>Comfortable</h4>
                <div className="col-sm-6 col-md-3 col-lg-3">
                        <img src={nodejs} className="img-fluid" alt="" />
                        <h6 className="mt-3">Node.js</h6>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <img src={expressjs} className="img-fluid" alt="" />
                        <h6 className="mt-3">Express.js</h6>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <img src={mongodb} className="img-fluid" alt="" />
                        <h6 className="mt-3">Mongodb</h6>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <img src={firebase} className="img-fluid" alt="" />
                        <h6 className="mt-3">FirebaseE</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;