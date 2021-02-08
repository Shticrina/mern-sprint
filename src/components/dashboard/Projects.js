import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import ProjectModal from '../../components/modals/ProjectModal';

const Projects = () => {
	const [display, setDisplay] = useState(false);
	const [type, setType] = useState('');

    return (
    	<>
	    	<ProjectModal show={display} onHide={() => setDisplay(false)} type={type}></ProjectModal>

	        <div className="mt-4 d-flex justify-content-between">
				<h3 className="text-dark">Projects</h3>

				<Button variant="info" onClick={() => { setDisplay(true); setType('add'); }} >Add new</Button>
			</div>

			<div className="projects d-flex my-4 bg-white">
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Title</th>
							<th scope="col">Company</th>
							<th scope="col">Year</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>2020</td>
							<td>
								<Button variant="link" onClick={() => { setDisplay(true); setType('edit'); }}>
									<FontAwesomeIcon icon={faPencilAlt} className="text-info" />
								</Button>

								<Button variant="link">
									<FontAwesomeIcon icon={faTrash} className="text-danger" />
								</Button>
							</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>2020</td>
							<td>
								<Button variant="link">
									<FontAwesomeIcon icon={faPencilAlt} className="text-info" />
								</Button>

								<Button variant="link">
									<FontAwesomeIcon icon={faTrash} className="text-danger" />
								</Button>
							</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Larry</td>
							<td>the Bird</td>
							<td>2020</td>
							<td>
								<Button variant="link">
									<FontAwesomeIcon icon={faPencilAlt} className="text-info" />
								</Button>

								<Button variant="link">
									<FontAwesomeIcon icon={faTrash} className="text-danger" />
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
    );
};

export default Projects;