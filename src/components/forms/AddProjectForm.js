import React, { useState, useRef, useEffect } from 'react';
import { Button, Form } from "react-bootstrap";
import api from '../../api';

const AddProjectForm = (props) => {
	const [projects, setProjects] = useState(props.projects);
	const [input, setInput] = useState([{
		title: '',
		description: ''
	}]);
	// const projectTitle = useRef();
	// const projectDescription = useRef();

	const handleChange = (e) => {
		const {name, value} = e.target;
		// projectTitle.current.value = ;
		setInput(prevInput => {
			return {...prevInput, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// let titleValue = projectTitle.current.value;
		// let descriptionValue = projectDescription.current.value;

		let titleValue = input.title;
		let descriptionValue = input.description;

		if (titleValue === '') return;
		if (descriptionValue === '') return;

		/*let newProject = {
			title: titleValue,
			description: descriptionValue
		};*/

		// api.post('projects/create', newProject);
		api.post('projects/create', input);

		/*setProjects(prevProjects => {
			return [...prevProjects, newProject];
		});*/

		// reset the form
		setInput({
			title: '',
			description: ''
		});

		// projectTitle.current.value = projectDescription.current.value = null;

		// update projects in the table
		// hide Modal window
		// show success message
	};

    return (
      	<Form className="pb-4" onSubmit={handleSubmit}>
			<Form.Group controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" name="title" value={input.title} onChange={handleChange} />
				<Form.Text className="text-muted d-none">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="description">
			    <Form.Label>Description</Form.Label>
			    <Form.Control as="textarea" name="description" value={input.description} onChange={handleChange} rows={3} />
		  	</Form.Group>

			<Form.Group controlId="image">
				<Form.Label>Image</Form.Label>
				<Form.Control type="text" name="image" />
			</Form.Group>

			<Button variant="info" type="submit" className="mt-4" block>Create new</Button>
		</Form>
    );
}

export default AddProjectForm;