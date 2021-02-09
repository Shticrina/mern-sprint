import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUsers, faPalette, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import Home from '../components/dashboard/Home';
import Projects from '../components/dashboard/Projects';
import Users from '../components/dashboard/Users';

const Dashboard = () => {
	document.title = 'Dashboard';
	
	return (
		<>
		<div className="d-flex align-items-stretch pt-5">
			<nav id="sidebar" className="bg-white py-4 pl-4">
				<div className="sidebar-header pt-5">
					<h4 className="text-secondary mb-3">Dashboard</h4>
				</div>

				<ul className="nav flex-column">
					<li className="nav-item">
						<Link to="/dashboard" className="nav-link text-uppercase text-dark pl-1"><FontAwesomeIcon icon={faCoffee} /> Home</Link>
					</li>

					<li className="nav-item">
						<Link to="/dashboard/users" className="nav-link text-uppercase text-dark active pl-1"><FontAwesomeIcon icon={faUsers} /> Users</Link>
					</li>

					<li className="nav-item">
						<Link to="/dashboard/projects" className="nav-link text-uppercase text-dark pl-1"><FontAwesomeIcon icon={faPalette} /> Projects</Link>
					</li>
				</ul>
			</nav>

			<div className="my-4 py-5 px-5 container-fluid bg-light">
				<div id="sidebarCollapsibleBtn">
					<button type="button" id="sidebarCollapse" className="btn btn-danger">
						<FontAwesomeIcon icon={faAngleDoubleLeft} />
					</button>
				</div>

			  	<Route path="/dashboard" exact component={Home} />
				<Route path="/dashboard/projects" exact component={Projects} />
			  	<Route path="/dashboard/users" component={Users} />
			</div>  
		</div>
		</>
	);
}

export default Dashboard;