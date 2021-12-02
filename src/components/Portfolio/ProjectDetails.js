import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const {id} = useParams();
    const [projectDetails, setProjectDetails] = useState([]);

   useEffect(() => {
    fetch('https://raw.githubusercontent.com/TahminaChowdhury/portfolio-website/main/public/data.json')
    .then(res => res.json())
    .then(data => {
        const projects = data.find( project => project.id === id)
        setProjectDetails(projects);
    })
   },[])
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default ProjectDetails;