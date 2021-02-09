import React from 'react';

const Contact = () => {
    document.title = 'Contact'; 
    
    return (
        <section className="bg-light py-5">
        	<h3 className="text-center mt-5 mb-4 pb-2">Leave me a message</h3>

        	<div className="container bg-white pt-3">
	            <div className="row first centered">
	                <div className="col-lg-8 col-sm-10 mx-auto">
		                <p>Bla bla text.</p>
	                </div>
	            </div>
            </div>
        </section>
    );
}

export default Contact;