// import React, { useState, useRef } from 'react';
import React, { useRef } from 'react';
import { Button, Form } from "react-bootstrap";
import api from '../../api';

const AddProjectForm = ({projects, type, currentproject, onChildClick}) => {
	// const [projects, setProjects] = useState(props.projects);
	/*const [input, setInput] = useState([{
		title: '',
		description: ''
	}]);*/

	const projectTitle = useRef();
	const projectDescription = useRef();
	const projectImage = useRef();

	if (type === 'add' && currentproject !== '') {
		currentproject = '';
	}
	// console.log(currentproject); // ok

	/*const handleChange = (e) => {
		const {name, value} = e.target;
		setInput(prevInput => {
			return {...prevInput, [name]: value };
		});
	};*/

	const handleSubmit = (e) => {
		e.preventDefault();

		let titleValue = projectTitle.current.value;
		let descriptionValue = projectDescription.current.value;
		let imageValue = projectImage.current.value;

		/*let titleValue = input.title;
		let descriptionValue = input.description;*/

		if (titleValue === '') return;
		if (descriptionValue === '') return;
		if (imageValue === '') return;

		let newProject = {
			title: titleValue,
			description: descriptionValue,
			image: imageValue
		};

		// api.post('projects/create', newProject);

		if (type === 'edit' && currentproject !== '') {
			api.post(`projects/update/${currentproject._id}`, newProject);
		} else {
			api.post('projects/create', newProject);
		}

		/*setProjects(prevProjects => {
			return [...prevProjects, newProject];
		});*/

		// reset the form
		/*setInput({
			title: '',
			description: ''
		});*/

		projectTitle.current.value = projectDescription.current.value = projectImage.current.value= null;

		// update projects in the table
		// hide Modal window
		// show success message
	};

    return (
      	<Form className="pb-4" onSubmit={handleSubmit}>
			<Form.Group controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" name="title" defaultValue={currentproject.title} ref={projectTitle} />
				<Form.Text className="text-muted d-none">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="description">
			    <Form.Label>Description</Form.Label>
			    <Form.Control as="textarea" name="description" defaultValue={currentproject.description} ref={projectDescription} rows={3} />
		  	</Form.Group>

			<Form.Group controlId="image">
				<Form.Label>Image</Form.Label>
				<Form.Control type="text" name="image" defaultValue={currentproject.image} ref={projectImage} />
			</Form.Group>

			<Button variant="info" type="submit" className="mt-4" onClick={onChildClick} block>Submit</Button>
		</Form>
    );
}

export default AddProjectForm;