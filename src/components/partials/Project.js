import React from 'react';
import { Link } from "react-router-dom";

const Project = ({ project }) => {
    return (
        <div className="col-md-4 col-sm-6 mx-auto px-5 mb-5">
        	<Link to="/" className="">
				<img className="img-fluid" src={project.image} alt={project.title} />
			</Link>

			<div className="text-uppercase text-center pt-3">
				<h5>{project.title}</h5>
			</div>
		</div>
    );
}

export default Project;