import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectModal from '../../components/modals/ProjectModal';

const Projects = () => {
	const [display, setDisplay] = useState(false);
	const [type, setType] = useState('');
	const [requiredProject, setRequiredProject] = useState('');
	const [projects, setProjects] = useState([]);

	const handleRemove = (id) => {
	    api.delete(`projects/delete/${id}`)
		.then(res => {
			if (res.status === 200) {
				// show success message
				toast.success("Project successfuly removed.", {className: 'toast-success'});

				// update projects
				setProjects(previousProjects => {
					return previousProjects.filter(p => p._id !== id);
				});
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

  	function addproject() {
  		console.log('here will add new project');

  		/*setProjects(previousProjects => {
			return [...previousProjects, newProject];
		});*/
  	}

  	/*function updateProject() {
  		console.log('here will update one project');
  		// const projectList = [...projects];

	  	/*setProjects({
	    	projectList[0].recipe: newProject
	  	});
  	}*/

    return (
    	<>
    		<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick
			/>
	    	<ProjectModal show={display} onHide={() => setDisplay(false)} type={type} currentproject={requiredProject} addproject={() => addproject()} projects={projects} setProjects={setProjects}></ProjectModal>

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
								<td><small>{project._id}</small></td>
								<td>{project.title}</td>
								<td>{project.description}</td>
								<td>
									<Moment format="D MMM YYYY" withTitle>{project.createdAt}</Moment>
								</td>
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