import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/ListProjects';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<Router>
			<div className="App">
			  	<Header />

			  	<Route path="/" exact component={Home} />
			  	<Route path="/about" component={About} />
			  	<Route path="/projects" component={Projects} />
			  	<Route path="/contact" component={Contact} />
			  	<Route path="/dashboard" component={Dashboard} />

			  	<Footer />
			</div>
	  	</Router>
  	);
}

export default App;