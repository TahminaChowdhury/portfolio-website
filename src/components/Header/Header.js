import React from 'react';
import './Header.css'
import Typical from 'react-typical'
import img from '../../images/IMG_E6792-removebg-preview (1) (1).png'
import resume from '../../data/Tahmina-Chowdhury-Resume.pdf'


const Header = () => {
    return (
        <div>
            <div className="container" id="home">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="myPic text-center">
                        <img src={img} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="header pt-5">
                            <div className="text-start">
                            <h2>Hi, I'm <span className="name">Tahmina Chowdhury</span>
                            </h2>
                            <h2 className="py-3">
                                <Typical
                                    
                                    steps={['FRONT-END DEVELOPER', 1000]}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </h2>
                            <a href={resume} download="Tahmina-Chowdhury-Resume.pdf">
                            <button className="resume-btn px-4 py-2 rounded-pill">Resume</button>
                            </a>
                            {/* <div>
                                <a href=""></a>
                                <a href=""></a>
                                <a href=""></a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;