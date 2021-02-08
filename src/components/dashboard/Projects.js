import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import ProjectModal from '../../components/modals/ProjectModal';

const Projects = () => {
	const [display, setDisplay] = useState(false);
	const [type, setType] = useState('');
	const [project, setProject] = useState({});
	const [projects, setProjects] = useState([]);

	useEffect(() => {
	    async function getProjects() {
	    	const response = await api.get('projects/all');
	    	console.log(response.data);

	    	setProjects(response.data);
		}

		getProjects();
  	}, []);	

    return (
    	<>
	    	<ProjectModal show={display} onHide={() => setDisplay(false)} type={type}></ProjectModal>

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
						{projects.map((project) => (	          		
							<tr key={project._id}>
								<td scope="row">{project._id}</td>
								<td>{project.title}</td>
								<td>{project.description}</td>
								<td>{project.created_at}</td>
								<td>
									<Button variant="link" onClick={() => { setDisplay(true); setType('edit');  setProject(project); }}>
										<FontAwesomeIcon icon={faPencilAlt} className="text-info" />
									</Button>

									<Button variant="link">
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