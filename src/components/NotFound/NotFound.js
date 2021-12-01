import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
import img from '../../images/glitch-error-404-page_23-2148105403.jpg'

const NotFound = () => {
    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={img} alt="" />
                </div>
                <div className="col-12 text-center">
                        <div>
                            <Link to='/home'>
                            <button className="btn-regular px-3 py-2 rounded-pill">Go Home</button></Link>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;