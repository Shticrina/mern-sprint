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
	    		<Modal.Title id="contained-modal-title-vcenter">{props.type == 'add' ? 'Add new ' : 'Edit '} project</Modal.Title>
	    	</Modal.Header>

	    	<Modal.Body>
	    		<h4>Centered Modal</h4>
	    		<p>here will be the form</p>
    		</Modal.Body>

	    	<Modal.Footer>
	    		<p>modal footer</p>
	    		<Button>Submit form</Button>
    		</Modal.Footer>
	    </Modal>
    );
};

export default ProjectModal;