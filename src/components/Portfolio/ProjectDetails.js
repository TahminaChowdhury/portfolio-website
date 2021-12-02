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
        <div className="my-5 py-5">
            <div className="row project">
                <div className="container w-50">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={projectDetails.img} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={projectDetails.img1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={projectDetails.img2} class="d-block w-100" alt="..."/>
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
    );
};

export default ProjectDetails;