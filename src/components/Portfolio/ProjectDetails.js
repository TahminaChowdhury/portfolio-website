import React, { useEffect, useState } from 'react';
import './ProjectDetails.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ProjectDetails = () => {
    const {id} = useParams();
    const [projectDetails, setProjectDetails] = useState([]);

   useEffect(() => {
    fetch('https://raw.githubusercontent.com/TahminaChowdhury/portfolio-website/main/public/data.json')
    .then(res => res.json())
    .then(data => {
        const projects = data.find( project => project.id == id)
        console.log(projects)
        setProjectDetails(projects);
    })
   },[id])
    return (
        <div>
        <div className="mt-5 py-5">
            <div className="row project">
                <div className="container w-75">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="d-flex justify-content-between">
                            <h4>Description</h4>
                            <div>
                            <a href={projectDetails.liveLink}>
                                <button className="me-2 px-3 py-2  rounded-pill btn-regular">Live Site</button>
                            </a>
                            <a href={projectDetails.clientSideCode}>
                                <button className="me-2 px-3 py-2  rounded-pill btn-regular">Client Side</button>
                            </a>
                            <a href={projectDetails.serverCode}>
                                <button className="me-2 px-3 py-2  rounded-pill btn-regular">Server Side</button>
                            </a>
                            </div>
                        </div>
                        <div className="my-5">
                        <h5>{projectDetails.description}</h5>
                        </div>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={projectDetails.img1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={projectDetails.img2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={projectDetails.img3} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProjectDetails;


