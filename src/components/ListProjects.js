import React, { useState, useEffect } from 'react';
import api from '../api';
// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Project from '../components/partials/Project';
// import pp from '../controllers/ProjectController';

const getOneProject = async () => await api.get('projects/find');

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [count, setCount] = useState(0);

	// Same as componentDidMount and componentDidUpdate
  	useEffect(() => {
	    document.title = `Vous avez cliqué ${count} fois`;

	    async function getProjects() {
	    	const response = await api.get('projects/all');
	    	console.log(response.data);

	    	setProjects(response.data);
		}

		getProjects();

		getOneProject().then(response => {
	    	const one_project = response.data;
			console.log(one_project);
		});
  	}, []);	

    return (
      	<section className="bg-light py-5">
        	<h3 className="text-center mt-5 mb-4 pb-2">Projects</h3>

        	<div className="container d-flex justify-content-end mb-3">
	      		<button onClick={() => setCount(count + 1)} className="btn btn-info mr-4">Cliquez ici</button>
	            <p>Vous avez cliqué {count} fois</p>
	            <span className="text-danger ml-3"><FontAwesomeIcon icon={faCoffee} /></span>
            </div>

        	<div className="container bg-white pt-3">
	            <div className="row first centered">
	                <div className="col-lg-12 mx-auto">
		                <ul className="list-group">
				          	{projects.map((project) => (
				          		<Project key={project._id} project={project} />
			          		))}
				        </ul>
	                </div>
	            </div>
            </div>

        </section>
    );
}

export default Projects;