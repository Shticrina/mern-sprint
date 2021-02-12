import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {
    document.title = 'Home'; 
    // console.log(props.location);

    return (
        <section className="header3 cid-r7uFS9wDR8 mbr-fullscreen mbr-parallax-background" id="header3-1">

            <div className="mbr-overlay">
            </div>

            <div className="container align-left py-5">
                <div className="row justify-content-center mbr-white mt-4">
                    <div className="mbr-white col-md-12">
                        <h1 className="mbr-section-subtitle mbr-fonts-style align-left pb-2 display-5">it is only through practice that one can make progress</h1>
                        <h2 className="mbr-section-title mbr-white mbr-fonts-style align-left display-1">my portfolio</h2>

                        <p className="mbr-text pb-3 mbr-fonts-style mbr-white align-left display-7">focused on developing my coding skills<br />I am keen on starting new projects</p>

                        <div className="mbr-section-btn align-left">
                            <Link to="/projects" className="btn-danger btn btn-lg display-4">see my projects</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="jarallax-container-0">
                <div></div>
            </div>
        </section>
    );
}

export default Home;