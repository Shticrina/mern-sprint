import React from 'react';
import { Button, Modal } from "react-bootstrap";

const ProjectModal = (props) => {
	return (
      	<Modal
      		{...props}
      		backdrop="static"
      		keyboard={false}
	      	size="lg"
	      	aria-labelledby="contained-modal-title-vcenter"
	      	centered
      	>
	    	<Modal.Header closeButton>
	    		<Modal.Title id="contained-modal-title-vcenter">{props.type == 'add' ? 'Add new project' : 'Edit project x'}</Modal.Title>
	    	</Modal.Header>

	    	<Modal.Body>
	    		<h4>{props.type == 'add' ? 'Add new ' : 'Edit '} form</h4>
	    		<p>here will be the form</p>
	    		<p>title: {props.title}</p>
	    		<p>description: {props.description}</p>
    		</Modal.Body>

	    	<Modal.Footer>
	    		<Button variant="info">{props.type == 'add' ? 'Add' : 'Update'}</Button>
    		</Modal.Footer>
	    </Modal>
    );
};

export default ProjectModal;