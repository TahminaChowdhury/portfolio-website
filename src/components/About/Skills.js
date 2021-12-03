import React from 'react';

const Skills = () => {
    return (
        <div className="my-5 py-5">
            <div className="row">
                <h2 className="text-center">MY SKILLS</h2>
                <div className="row text-center mt-5">
                    <h4 className="text-start my-4">Expertise</h4>
                    <div className="col-4 mb-5">
                        <h6>HTML</h6>
                    </div>
                    <div className="col-4">
                        <h6>CSS</h6>
                    </div>

                    <div className="col-4">
                        <h6>JavaScript</h6>
                    </div>
                    <div className="col-4">
                        <h6>RecatJS</h6>
                    </div>
                    <div className="col-4">
                        <h6>Bootstrap</h6>
                    </div>
                    <div className="col-4">
                        <h6>Material UI</h6>   
                    </div>
                   
                </div>
                <div className="row text-center mt-5">
                <h4 className="text-start my-4">Comfortable</h4>
                <div className="col-3">
                        <h6>Node.js</h6>
                    </div>
                    <div className="col-3 mb-5">
                        <h6>Express.js</h6>
                    </div>
                    <div className="col-3">
                        <h6>Mongodb</h6>
                    </div>
                    <div className="col-3">
                        <h6>FirebaseE</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;