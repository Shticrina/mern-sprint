import React, { useState, useEffect } from 'react';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Project from '../components/partials/Project';

const getOneProject = async () => await api.get('projects/find');

const Projects = () => {
	document.title = 'Projects';
	const [projects, setProjects] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
	    document.title = `Vous avez cliqué ${count} fois`;
  	}, [count]);

	// Same as componentDidMount and componentDidUpdate
  	useEffect(() => {
	    async function getProjects() {
	    	const response = await api.get('projects/all');
	    	console.log(response.data);

	    	setProjects(response.data);
		}

		getProjects();

		getOneProject().then(response => {
	    	const one_project = response.data;
			// console.log(one_project);
		});
  	}, []);	

    return (
      	<section className="bg-light py-5">
        	<h3 className="text-center mt-5 mb-4 pb-2">Projects</h3>

        	<div className="container d-flex justify-content-end align-items-center mb-3">
	      		<button onClick={() => setCount(count + 1)} className="btn btn-info mr-4">Cliquez ici</button>
	            <span>Vous avez cliqué {count} fois</span>
	            <span className="text-danger ml-3"><FontAwesomeIcon icon={faCoffee} /></span>
            </div>

        	<div className="container pt-3">
	            <div className="row">
			          	{projects.map((project) => (
			          		<Project key={project._id} project={project} />
		          		))}
	            </div>
            </div>
        </section>
    );
}

export default Projects;