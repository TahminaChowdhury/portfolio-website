import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const {id} = useParams();
    const [project, setProject] = useState([]);

   
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default ProjectDetails;