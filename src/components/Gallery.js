import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import img1 from '../images/solar-project-1.jpg';
import img2 from '../images/solar-project-2.png';
import img3 from '../images/solar-project-3.jpg';
import img4 from '../images/solar-project-4.jpg';
import img5 from '../images/solar-project-5.webp';
import img6 from '../images/solar-project-6.jpg';

const Gallery = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ];

    return (
        <div className="container my-5">
            <h1 className="display-4 text-center mb-4">Gallery</h1>
            <p className="lead text-center mb-5">Explore our completed solar projects.</p>
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="card">
                            <img src={image} className="card-img-top" alt={`Project ${index + 1}`} />
                            <div className="card-body">
                                {/* <h5 className="card-title">Project {index + 1}</h5>
                                <p className="card-text">Description of project {index + 1}.</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
