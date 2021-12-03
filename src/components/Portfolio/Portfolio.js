import React, {useState, useEffect} from 'react';
import MyProjects from './MyProjects';
import Slide from 'react-reveal/Slide';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/TahminaChowdhury/portfolio-website/main/public/data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <Slide bottom>
            <div id="portfolio" className="container">
                <div className="row">
                    <h2 className="text-center mb-5">MY PROJECTS</h2>
                    
                    {
                        projects.map(project => <MyProjects project={project}></MyProjects>)
                    }
                </div>
            </div>
        </Slide>
    );
};

export default Portfolio;