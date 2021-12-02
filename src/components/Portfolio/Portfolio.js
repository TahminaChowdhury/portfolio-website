import React, {useState, useEffect} from 'react';
import MyProjects from './MyProjects';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id="portflio" className="container">
            <div className="row">
                <h4 className="text-center mb-5">My Projects</h4>
                {
                    projects.map(project => <MyProjects project={project}></MyProjects>)
                }
            </div>
        </div>
    );
};

export default Portfolio;