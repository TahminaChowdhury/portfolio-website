import React from 'react';
import Typical from 'react-typical'
import './Home.css'
import myResume from '../../data/Tahmina-Chowdhury-Resume.pdf'
import img from '../../images/IMG_E6792-removebg-preview (2).png'
import NavigationBar from '../NavigationBar/NavigationBar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact'



const Home = () => {
    return (
        <div>
        <NavigationBar></NavigationBar>
        <div className="my-5 py-5 top-banner" id="home">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="myPic text-center mt-5">
                    <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="header text-start">
                        <div className="text-start mt-5 pt-5">
                        <h1>Hi, I'm <span className="name">Tahmina Chowdhury</span>
                        </h1>
                        <h2 className="py-3">
                            <Typical
                                
                                steps={['FRONT-END DEVELOPER', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h2>
                        <a href={myResume} download="Tahmina-Chowdhury-Resume.pdf">
                        <button className="resume-btn px-3 py-3 rounded-pill">Download Resume</button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </div>
    );
};

export default Home;