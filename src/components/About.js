import React from 'react';

const About = (props) => {
    document.title = 'About';
    // console.log(props.location);

    return (
        <section className="bg-light page-section" id="aboutwrap">
            <h3 className="text-center mt-5 mb-4 pb-2">About me</h3>
            
            <div className="container bg-white pt-3">
                <div className="row first centered">
                    <div className="col-lg-9 mx-auto">
                        <p>After taking several courses in graphic design, photography and web development, I am now particularly focused on developing my coding skills and I am keen on starting new projects. Web development challenges me, offering me intellectual satisfaction. I would love to play an active role in my web projects, because it is only through practice that one can make progress in this field.</p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-lg-10 mx-auto pb20">
                        <h3>Computer skills</h3>
                        <hr className="pink mt10 w-30" />

                        <p><strong>BACK END</strong>: <i className="display-5">Laravel</i>, Symfony, Cake, Node.js, <i className="display-5">MySQL</i>, MongoDB</p>
                        <p><strong>FRONT END</strong>: AngularJS, <i className="display-5">Vue.js</i>, React, <i className="display-5">jQuery</i>, <i className="display-5">AJAX</i>, HTML, CSS, <i className="display-5">Bootstrap</i></p>
                        <p><strong>DESIGN</strong>: <i className="display-5">Photoshop</i>, InDesign, <i className="display-5">Illustrator</i>, CAD for textile design</p>
                        <p><strong>OTHER</strong>: <i className="display-5">Git</i>, Jira, <i className="display-5">Trello</i>, WordPress</p>
                    </div>
                </div>

                <div className="row text-right">
                    <div className="col-lg-10 mx-auto pb-5">
                        <h3>Professional experience</h3>
                        <hr className="pink2 mt10 w-50 ml-auto" />

                        <p><strong>Junior full stack web developer</strong>: Sep 2020 - Mar 2021, <i className="display-5">BeCode.org,</i> Brussels, Belgium</p>
                        <p><strong>Back end developer</strong>: Jun 2018 - Sep 2019, <i className="display-5">Kalio Tech,</i> Brussels, Belgium</p>
                        <p><strong>Front end developer internship</strong>: Mar - Jun 2018, <i className="display-5">Passeport pour la vie,</i> Brussels, Belgium</p>
                        <p><strong>Front end developer internship</strong>: Jun 2017 - Aug 2017, <i className="display-5">Risc Group Skydoo,</i> Brussels, Belgium</p>
                        <p><strong>Creative Department Manager</strong>: Jul 2010 - Oct 2011, <i className="display-5">I. D. Sarrieri</i> (luxury lingerie company), Bucharest, Romania</p>
                        <p><strong>Textile Industry Technician</strong>: Apr 2006 - Jul 2010, <i className="display-5">Moda Aliss</i> (clothing company), Craiova, Romania</p>
                        <p><strong>Gerber Technician</strong>: Jun 2004 - Apr 2006, <i className="display-5">Modexim</i> (clothing company), Craiova, Romania</p>              
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-lg-10 mx-auto pb-5">
                        <h3>Education & training</h3>
                        <hr className="pink mt10 w-40" />

                        <p><strong>Sep 2015-Jun 2017</strong>: BES Web Developer - <i className="display-5">EPFC Institute</i>, Brussels</p>
                        <p><strong>Sep 2013-Apr 2014</strong>: Photo editing & Static website development certificate - <i className="display-5">Cepegra</i>, Brussels</p>
                        <p><strong>Sep 2012-Jun 2013</strong>: Technician Diploma in Graphic Design - <i className="display-5">Paul Hankar Institute</i>, Brussels</p>
                        <p><strong>Sep 1999-Jun 2003</strong>: Bachelor’s Degree in Computer Science - <i className="display-5">University of Craiova</i>, Romania</p>
                    </div>
                </div>

                <div className="row text-right">
                    <div className="col-lg-10 mx-auto pb-5">
                        <h3>Language skills</h3>
                        <hr className="pink2 mt10 w-40 ml-auto" />

                        <p><strong>Romanian</strong>: <i className="display-5">native speaker</i></p>
                        <p><strong>French</strong>: professional working proficiency, <i className="display-5">C1 level</i> (active & passive)</p>
                        <p><strong>English</strong>: professional working proficiency, <i className="display-5">C1 level</i> (active & passive)</p>
                        <p><strong>Spanish</strong>: elementary, limited working proficiency, <i className="display-5">A2 level</i> (active & passive)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;