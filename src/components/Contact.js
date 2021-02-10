import React from 'react';

const Contact = () => {
    document.title = 'Contact';
    
    return (
        <section className="bg-light page-section" id="contactwrap">
            <h3 className="text-center mt-5 mb-4 pb-2">Leave me a message</h3>
            
            <div className="container bg-white pt-3">
                <div className="row first">
                    <div className="col-lg-8 col-sm-10 mx-auto">
                        <div id="contact-form-section">                        
                            <form id="contact-form" className="contact">        
                                <div className="form-group mb-4">
                                    <label><i className="display-5">Your name*</i>:</label>
                                    <input type="text" className="form-control" id="name" name="name" required />
                                    <span className="error-block text-danger" id="name_error"></span>
                                </div>

                                <div className="form-group mb-4">
                                    <label><i className="display-5">Your email*</i>:</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                    <span className="error-block text-danger" id="email_error"></span>
                                </div>

                                <div className="form-group mb-4">
                                    <label><i className="display-5">Your phone number*</i>:</label>
                                    <input type="text" className="form-control" id="phone" name="phone" placeholder="ex. 485 23 52 22" required />
                                    <span className="error-block text-danger" id="phone_error"></span>
                                </div>

                                <div className="form-group mb-4">
                                    <label><i className="display-5">Message*</i>:</label>
                                    <textarea rows="5" cols="100" className="form-control" id="message" name="message" required></textarea>
                                    <span className="error-block text-danger" id="message_error"></span>
                                </div>

                                <div className="form-group text-right">
                                    <button type="submit" className="btn btn-primary red" id="sendMessage">Send</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
}

export default Contact;