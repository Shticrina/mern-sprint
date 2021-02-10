import React from 'react';
import { Modal } from "react-bootstrap";
import AddProjectForm from '../../components/forms/AddProjectForm';

const ProjectModal = (props) => {
	const project = props.currentproject;
	 
	function closeModal() {
	    console.log("have to close the modal!"); // ok
	}

	return (
      	<Modal
      		{...props}
      		backdrop="static"
      		keyboard={false}
	      	size="lg"
	      	aria-labelledby="contained-modal-title-vcenter"
	      	centered
      	>
	    	<Modal.Header closeButton centered="true">
	    		<Modal.Title id="contained-modal-title-vcenter">{ props.type === 'add' ? 'Add new project' : 'Edit project ' + (project ? project.title : '') }</Modal.Title>
	    	</Modal.Header>

	    	<Modal.Body className="col-10 mx-auto">
	    		<AddProjectForm projects={props.projects} type={props.type} currentproject={project ? project : ''}  onChildClick={closeModal}></AddProjectForm>
    		</Modal.Body>
	    </Modal>
    );
};

export default ProjectModal;