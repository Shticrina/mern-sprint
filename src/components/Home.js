import React from 'react';

const Home = (props) => {
    document.title = 'Home'; 
    // console.log(props.location);

    return (
        <section className="bg-light py-5">
        	<h3 className="text-center mt-5 mb-4 pb-2">Home page</h3>

        	<div className="container bg-white pt-3">
	            <div className="row first centered">
	                <div className="col-lg-9 mx-auto">
		                <p>Bla bla text.</p>
	                </div>
	            </div>
            </div>
        </section>
    );
}

export default Home;