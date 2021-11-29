import React from 'react';
import './Home.css'
import img from '../../images/IMG_E6792-removebg-preview.png'


const Home = () => {
    return (
        <div className="container my-5" id="home">
            <div className="row d-flex justify-content-around">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="myPic">
                        <img src={img} className="img-fluid rounded-3" alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="header">
                        <h1 className="title">I'M
                        TAHMINA CHOWDHURY
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;