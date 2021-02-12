import React, { useRef } from 'react';
import { Button, Form } from "react-bootstrap";
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProjectForm = ({type, currentproject, onChildClick, addproject}) => {
	const projectTitle = useRef();
	const projectDescription = useRef();
	const projectImage = useRef();

	if (type === 'add' && currentproject !== '') {
		currentproject = '';
	}

	/*const handleChange = (e) => {
		const {name, value} = e.target;
		setInput(prevInput => {
			return {...prevInput, [name]: value };
		});

		// updateproject() ????
	};*/
	// console.log(type, currentproject);

	const handleSubmit = (e) => {
		e.preventDefault();

		let titleValue = projectTitle.current.value;
		let descriptionValue = projectDescription.current.value;
		let imageValue = projectImage.current.value;

		// if (titleValue === '') return;
		// if (descriptionValue === '') return;

		let newProject = {
			title: titleValue,
			description: descriptionValue,
			image: imageValue
		};

		if (type === 'edit' && currentproject !== '') {
			api.post(`projects/update/${currentproject._id}`, newProject);
			// updateproject()
			toast.success("Project successfuly updated.", {className: 'toast-success'});
		} else {
			// api.post('projects/create', newProject);
			addproject();
			toast.success("Project successfuly created.", {className: 'toast-success'});
		}

		// reset the form
		projectTitle.current.value = projectDescription.current.value = projectImage.current.value= null;
	};

    return (
    	<>
    	<ToastContainer
			position="top-center"
			autoClose={50000}
			hideProgressBar={true}
			newestOnTop={true}
			closeOnClick
		/>
      	<Form className="pb-4" onSubmit={handleSubmit}>
			<Form.Group controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" name="title" defaultValue={currentproject ? currentproject.title : ''} ref={projectTitle} />
				<Form.Text className="text-muted d-none">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="description">
			    <Form.Label>Description</Form.Label>
			    <Form.Control as="textarea" name="description" defaultValue={currentproject ? currentproject.description : ''} ref={projectDescription} rows={3} />
		  	</Form.Group>

			<Form.Group controlId="image">
				<Form.Label>Image</Form.Label>
				<Form.Control type="text" name="image" defaultValue={currentproject ? currentproject.image : ''} ref={projectImage} />
			</Form.Group>

			<Button variant="info" type="submit" className="mt-4" onClick={onChildClick} block>Submit</Button>
		</Form>
		</>
    );
}

export default AddProjectForm;