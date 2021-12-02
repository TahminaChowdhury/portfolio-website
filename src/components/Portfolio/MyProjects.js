import React from 'react';
import './MyProjects.css'
import { Link } from 'react-router-dom';

const MyProjects = ({project}) => {
    const {id,img, name} = project;
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 mb-5 pb-5">
            <div className="h-100">
                <div>
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="d-flex justify-content-between">
                    <h4 className="mt-3">{name}</h4>
                    <Link to={`/projectdetails/${id}`} className="details py-3">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;