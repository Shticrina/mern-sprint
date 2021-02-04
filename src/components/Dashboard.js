import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUsers, faPalette, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="d-flex align-items-stretch pt-5">
			<nav id="sidebar" className="bg-white py-4 pl-4">
				<div className="sidebar-header pt-5">
					<h4 className="text-secondary mb-3">Dashboard</h4>
				</div>

				<ul className="nav flex-column">
					<li className="nav-item">
						<Link to="/about" className="nav-link text-uppercase text-dark active pl-1"><FontAwesomeIcon icon={faUsers} /> Users</Link>
					</li>

					<li className="nav-item">
						<Link to="/about" className="nav-link text-uppercase text-dark pl-1"><FontAwesomeIcon icon={faPalette} /> Projects</Link>
					</li>

					<li className="nav-item">
						<Link to="/about" className="nav-link text-uppercase text-dark pl-1"><FontAwesomeIcon icon={faCoffee} /> Backend</Link>
					</li>
				</ul>
			</nav>

			<div className="my-4 py-5 px-5 container-fluid bg-light">
				<div id="sidebarCollapsibleBtn">
					<button type="button" id="sidebarCollapse" className="btn btn-danger">
						<FontAwesomeIcon icon={faAngleDoubleLeft} />
					</button>
				</div>

				<div className="mt-4 d-flex justify-content-between">
					<h3 className="text-dark">Projects</h3>

					<button type="button" className="btn btn-info">
						Add new
					</button>
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
									<FontAwesomeIcon icon={faPencilAlt} className="text-info mr-3" />
									<FontAwesomeIcon icon={faTrash} className="text-danger" />
								</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>2020</td>
								<td>
									<FontAwesomeIcon icon={faPencilAlt} className="text-info mr-3" />
									<FontAwesomeIcon icon={faTrash} className="text-danger" />
								</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>2020</td>
								<td>
									<FontAwesomeIcon icon={faPencilAlt} className="text-info mr-3" />
									<FontAwesomeIcon icon={faTrash} className="text-danger" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>   
			</div>   
		</div>
	);
}

export default Dashboard;