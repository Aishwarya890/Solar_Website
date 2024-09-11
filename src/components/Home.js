import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img1 from '../images/solar1.jpg';
import img2 from '../images/solar2.jpg';
import img3 from '../images/solar3.jpg';
import '../Home.css';

const Home = () => {
    return (
        <section className='sec'>
            <div className="text-center position-relative overflow-hidden" id='div1'>
            {/* Full-Screen Carousel */}
            <div id="solarCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} alt="Solar Energy 1" className="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={img2} alt="Solar Energy 2" className="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} />
                       
                    </div>
                    <div className="carousel-item">
                        <img src={img3} alt="Solar Energy 3" className="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} />
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#solarCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#solarCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Featured Services Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="mb-5">Our Featured Services</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src={img1} className="card-img-top" alt="Service 1" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Solar Panel Installation</h5>
                                    <p className="card-text">Expert installation of high-efficiency solar panels for residential and commercial properties.</p>
                                    <a href="/services" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src={img2} className="card-img-top" alt="Service 2" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Energy Storage Solutions</h5>
                                    <p className="card-text">Advanced battery systems to store and manage solar energy for greater efficiency.</p>
                                    <a href="/services" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src={img3} className="card-img-top" alt="Service 3" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Solar Energy Consulting</h5>
                                    <p className="card-text">Professional consulting services to optimize your solar energy projects.</p>
                                    <a href="/services" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-5 text-white" style={{ background: 'linear-gradient(45deg, rgba(192, 192, 192, 0.5), rgba(211, 211, 211, 0.5))' }}>
                <div className="container text-center">
                    <h2 className="mb-4" style={{ color: 'black' }}>Ready to Go Solar?</h2>
                    <p className="mb-4" style={{ color: 'black' }}>Contact us today to schedule a consultation and take the first step towards a sustainable future.</p>
                    <a href="/contact" className="btn btn-lg btn-warning">Get Started</a>
                </div>
            </section>
        </div>
        </section>
    );
}

export default Home;
