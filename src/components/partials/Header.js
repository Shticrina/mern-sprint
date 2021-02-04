import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import logo from '../images/default_project.jpg';

const Header = () => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
      	<nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
			<div className="container-fluid">
				<div className="navbar-header col-lg-2">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="flex-fill pl-4">
						<Link to="/" className="navbar-brand js-scroll-trigger">
							<img src="/images/default_user.png" className="w-25" alt="logo" />
						</Link>
					</div>
				</div>

				<div className={`${isNavCollapsed ? 'collapse' : ''} mx-auto navbar-collapse col-lg-8`} id="navbarResponsive">
					<ul className="nav navbar-nav text-uppercase">
						<li className="nav-item px-5 active">
							<Link to="/" className="nav-link js-scroll-trigger">Home</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/about" className="nav-link js-scroll-trigger">About</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/projects" className="nav-link js-scroll-trigger">Projects</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/contact" className="nav-link js-scroll-trigger">Contact</Link>
						</li>
						<li className="nav-item px-5">
							<Link to="/dashboard" className="nav-link js-scroll-trigger">Dashboard</Link>
						</li>
					</ul>
				</div>
		  	</div>
		</nav>
    );
};

export default Header;