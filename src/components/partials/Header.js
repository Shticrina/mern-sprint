import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = (props) => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  	const location = useLocation();
	const url = location.pathname;
	// console.log(url.substring(1));

	return (
      	<nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
			<div className="container-fluid">
				<div className="navbar-header col-lg-2">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="flex-fill d-flex align-items-center">
						<Link to="/" className="navbar-brand js-scroll-trigger w-25 p-0">
							<img src="/images/default_user.png" className="w-100" alt="logo" />
						</Link>

						<small className="text-danger">({ url.substring(1) !== '' ? url.substring(1) : 'home' })</small>
					</div>
				</div>

				<div className={`${isNavCollapsed ? 'collapse' : ''} mx-auto navbar-collapse col-lg-9`} id="navbarResponsive">
					<ul className="nav navbar-nav text-uppercase">
						<li className="nav-item px-5 active">
							<Link to="/" className="nav-link ">Home</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/about" className="nav-link ">About</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/projects" className="nav-link ">Projects</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/contact" className="nav-link ">Contact</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/dashboard" className="nav-link ">Dashboard</Link>
						</li>
					</ul>
				</div>
		  	</div>
		</nav>
    );
};

export default Header;