import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import ProjectModal from '../../components/modals/ProjectModal';

const Projects = () => {
	const [display, setDisplay] = useState(false);
	const [type, setType] = useState('');
	const [requiredProject, setRequiredProject] = useState('');
	const [projects, setProjects] = useState([]);

	const handleRemove = (id) => {
	    api.delete(`projects/delete/${id}`)
		.then(res => {
			console.log(res.status);

			if (res.status === 200) {
				// show success message
				console.log('Project successfuly removed.');

				// update projects
				/*setProjects(previousProjects => {
					return previousProjects.filter(p => p._id !== id);
				});*/
			}			
		})
		.catch(err => {
			console.log(err);
		});
	};

	useEffect(() => {
	    async function getProjects() {
	    	const response = await api.get('projects/all');
	    	setProjects(response.data);
		}

		getProjects();
  	}, []);	

    return (
    	<>
	    	<ProjectModal show={display} onHide={() => setDisplay(false)} type={type} currentproject={requiredProject} projects={projects}></ProjectModal>

	        <div className="mt-4 d-flex justify-content-between">
				<h3 className="text-dark">Projects</h3>

				<Button variant="info" onClick={() => { setDisplay(true); setType('add'); }} >Add new project</Button>
			</div>

			<div className="projects d-flex my-4 bg-white">
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th scope="col">#ID</th>
							<th scope="col">Title</th>
							<th scope="col">Description</th>
							<th scope="col">Created at</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>

					<tbody>
						{projects.map((project, index) => (	          		
							<tr key={index}>
								<td>{project._id}</td>
								<td>{project.title}</td>
								<td>{project.description}</td>
								<td>{project.createdAt}</td>
								<td>
									<Button variant="link" onClick={() => { setDisplay(true); setType('edit');  setRequiredProject(project); }}>
										<FontAwesomeIcon icon={faPencilAlt} className="text-info" />
									</Button>

									<Button variant="link" onClick={() => handleRemove(project._id)}>
										<FontAwesomeIcon icon={faTrash} className="text-danger" />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
    );
};

export default Projects;