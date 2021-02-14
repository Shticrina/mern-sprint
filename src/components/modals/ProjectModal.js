import React, { useRef } from 'react';
import { Modal } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectModal2 = (props) => {
	const project = props.currentproject;
	const type = props.type;
	const index = props.index ? props.index : '';

	const projectTitle = useRef();
	const projectDescription = useRef();
	const projectImage = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		let titleValue = projectTitle.current.value;
		let descriptionValue = projectDescription.current.value;
		let imageValue = projectImage.current.value;

		if (titleValue === '') return;
		if (descriptionValue === '') return;

		let newProject = {
			title: titleValue,
			description: descriptionValue,
			image: imageValue
		};

		const projects = [...props.projects]; // Get a copy of the projects array

		if (type === 'edit' && project !== '') {
			api.post(`projects/update/${project._id}`, newProject);			
	        
	        newProject._id = project._id;
	        projects.splice(index, 1, newProject); // Replace the current project

	        props.setprojects(projects); // Update the parent state
			toast.success("Project successfuly updated.", {className: 'toast-success'});
		} else {
			async function addNewProject(newProject) {
		    	const response = await api.post('projects/create', newProject);
		    	// console.log(response.data); // ok
		    	let project = response.data;
				newProject._id = project._id;

				projects.unshift(newProject); // add project to projects array
				props.setprojects(projects); // Update the parent state
				toast.success("Project successfuly created.", {className: 'toast-success'});
			}

			addNewProject(newProject);
		}

		// reset the form
		projectTitle.current.value = projectDescription.current.value = projectImage.current.value= null; 
	};

	return (
		<>
    	<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={true}
			newestOnTop={true}
			closeOnClick
		/>

      	<Modal
      		{...props}
      		backdrop="static"
      		keyboard={false}
	      	size="lg"
	      	aria-labelledby="contained-modal-title-vcenter"
	      	centered
      	>
	    	<Modal.Header closeButton centered="true">
	    		<Modal.Title id="contained-modal-title-vcenter">{ type === 'add' ? 'Add new project' : 'Edit project ' + (project ? project.title : '') }</Modal.Title>
	    	</Modal.Header>

	    	<Modal.Body className="col-10 mx-auto">
	    		<Form className="pb-4" onSubmit={handleSubmit}>
					<Form.Group controlId="title">
						<Form.Label>Title</Form.Label>
						<Form.Control type="text" name="title" defaultValue={project ? project.title : ''} ref={projectTitle} />
						<Form.Text className="text-muted d-none">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="description">
					    <Form.Label>Description</Form.Label>
					    <Form.Control as="textarea" name="description" defaultValue={project ? project.description : ''} ref={projectDescription} rows={3} />
				  	</Form.Group>

					<Form.Group controlId="image">
						<Form.Label>Image</Form.Label>
						<Form.Control type="text" name="image" defaultValue={project ? project.image : ''} ref={projectImage} />
					</Form.Group>

					<Button variant="info" type="submit" className="mt-4" onClick={props.onHide} block>Submit</Button>
				</Form>
    		</Modal.Body>
	    </Modal>
	    </>
    );
};

export default ProjectModal2;