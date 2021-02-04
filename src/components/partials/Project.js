import React from 'react';

const Project = ({ project }) => {
	// console.log(project._id);
    return (
        <li className="list-group-item text-info my-1"><img src={project.image} className="" style={{height: 60+ 'px'}} alt="logo" /> / {project.title} / {project.description} / {project.created_at}</li>
    );
}

export default Project;