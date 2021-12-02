import React from 'react';
import { Link } from 'react-router-dom';

const MyProjects = ({project}) => {
    const {id,img, name} = project;
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="h-100">
                <div>
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="d-flex justify-content-between">
                    <h6 className="mt-3">{name}</h6>
                    <Link to={`/projectdetails/${id}`}>
                        <button className="btn text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;