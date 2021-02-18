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

	const optionsTechno = [
        {id: 1, value: "HTML"},
        {id: 2, value: "CSS"},
        {id: 3, value: "Bootstrap4"},
        {id: 4, value: "JavaScript"},
        {id: 5, value: "PHP"},
        {id: 6, value: "JQuery"},
        {id: 7, value: "Ajax"},
        {id: 8, value: "REST API's"},
        {id: 9, value: "Vue"},
        {id: 10, value: "React"},
        {id: 11, value: "Angular7"},
        {id: 12, value: "Laravel"},
        {id: 13, value: "Node.js"},
        {id: 14, value: "MySQL"},
        {id: 15, value: "Firebase"},
        {id: 16, value: "MongoDB"}
  	];

	const optionsFields = [
        {id: 1, value: "Front end"},
        {id: 2, value: "Back end"},
        {id: 3, value: "Web design"}
  	];

  	const optionsIntervention = [
        {id: 1, value: "Integration design"},
        {id: 2, value: "Two"},
        {id: 3, value: "Three"},
        {id: 4, value: "Quatro"}
  	];

	const projectTitle = useRef();
	const projectHeadline = useRef();
	const projectDescription = useRef();
	const projectWhen = useRef();
	const projectCompany = useRef();
	const projectTechno = useRef();
	const projectFields = useRef();
	const projectIntervention = useRef();
	const projectWebsite = useRef();
	const projectImage = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		let titleValue = projectTitle.current.value;
		let headlineValue = projectHeadline.current.value;
		let descriptionValue = projectDescription.current.value;
		let whenValue = projectWhen.current.value;
		let companyValue = projectCompany.current.value;
		let technoValues = projectTechno.current.selectedOptions;
		let fieldsValue = projectFields.current.selectedOptions;
		let interventionValue = projectIntervention.current.selectedOptions;
		let websiteValue = projectWebsite.current.value;
		let imageValue = projectImage.current.value;

		if (titleValue === '') return;
		if (descriptionValue === '') return;

		let  selectedTechno = [];
		let  selectedFields = [];
		let  selectedIntervention = [];
 
	    for (let i = 0; i < technoValues.length; i++) {
	        selectedTechno.push(technoValues.item(i).value);
	    }

	    for (let i = 0; i < fieldsValue.length; i++) {
	        selectedFields.push(fieldsValue.item(i).value);
	    }

	    for (let i = 0; i < interventionValue.length; i++) {
	        selectedIntervention.push(interventionValue.item(i).value);
	    }

		let newProject = {
			title: titleValue,
			headline: headlineValue,
			description: descriptionValue,
			when: whenValue,
			company: companyValue,
			techno: selectedTechno,
			fields: selectedFields,
			intervention: selectedIntervention,
			website: websiteValue,
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
		projectHeadline.current.value = projectWhen.current.value = projectCompany.current.value = null; 
		projectTechno.current.value = projectFields.current.value = null; 
		projectWebsite.current.value = projectIntervention.current.value = null; 
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
	      	centered>

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

					<Form.Group controlId="headline">
					    <Form.Label>Headline</Form.Label>
					    <Form.Control as="textarea" name="headline" defaultValue={project ? project.headline : ''} ref={projectHeadline} rows={2} />
				  	</Form.Group>

				  	<Form.Group controlId="description">
					    <Form.Label>Description</Form.Label>
					    <Form.Control as="textarea" name="description" defaultValue={project ? project.description : ''} ref={projectDescription} rows={3} />
				  	</Form.Group>

				  	<Form.Group controlId="when">
						<Form.Label>When</Form.Label>
						<Form.Control type="text" name="when" defaultValue={project ? project.when : ''} ref={projectWhen} />
					</Form.Group>

					<Form.Group controlId="company">
						<Form.Label>Company</Form.Label>
						<Form.Control type="text" name="company" defaultValue={project ? project.company : ''} ref={projectCompany} />
					</Form.Group>

					<Form.Group controlId="techno">
						<Form.Label>Techno</Form.Label>
						<Form.Control as="select" multiple name="techno" ref={projectTechno}  defaultValue={project ? project.techno : []} >
						    {optionsTechno.map(tech => (
						      	<option key={tech.id} value={tech.value}>
						        	{tech.value}
						      	</option>
						    ))}
	  					</Form.Control>
  					</Form.Group>

					<Form.Group controlId="fields">
						<Form.Label>Fields</Form.Label>
						<Form.Control as="select" multiple name="fields" defaultValue={project ? project.fields : []} ref={projectFields} >
							{optionsFields.map(field => (
						      	<option key={field.id} value={field.value}>
						        	{field.value}
						      	</option>
						    ))}
					    </Form.Control>
					</Form.Group>

					<Form.Group controlId="intervention">
						<Form.Label>Intervention</Form.Label>
						<Form.Control as="select" multiple name="intervention" defaultValue={project ? project.intervention : []} ref={projectIntervention} >
							{optionsIntervention.map(task => (
						      	<option key={task.id} value={task.value}>
						        	{task.value}
						      	</option>
						    ))}
					    </Form.Control>
					</Form.Group>

					<Form.Group controlId="image">
						<Form.Label>Image</Form.Label>
						<Form.Control type="text" name="image" defaultValue={project ? project.image : ''} ref={projectImage} />
					</Form.Group>

					<Form.Group controlId="website">
						<Form.Label>Website</Form.Label>
						<Form.Control type="text" name="website" defaultValue={project ? project.website : ''} ref={projectWebsite} />
					</Form.Group>

					<Button variant="info" type="submit" className="mt-4" onClick={props.onHide} block>Submit</Button>
				</Form>
    		</Modal.Body>
	    </Modal>
	    </>
    );
};

export default ProjectModal2;