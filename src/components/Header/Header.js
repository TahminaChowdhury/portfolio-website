import React from 'react';
import './Header.css'
import Typical from 'react-typical'
import img from '../../images/IMG_E6792-removebg-preview (1) (1).png'
import resume from '../../data/Tahmina-Chowdhury-Resume.pdf'


const Header = () => {
    return (
        <div>
            <div className="" id="home">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="myPic text-center mt-5">
                        <img src={img} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="header text-start mt-5 pt-5">
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
                            <a href={resume} download="Tahmina-Chowdhury-Resume.pdf">
                            <button className="resume-btn px-3 py-3 rounded-pill">Download Resume</button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;