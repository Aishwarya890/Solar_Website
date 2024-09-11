import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Services = () => {
    return (
        <div className="container my-5">
            <h1 className="display-4 text-center mb-4">Our Services</h1>
            <p className="lead text-center mb-5">We offer a variety of solar energy solutions tailored to your needs.</p>

            <div className="row">
                {/* Solar Panel Installation */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="https://greenearthsolar.in/wp-content/uploads/2022/09/Services-Maintanance.jpg" className="card-img-top" height={300} width={200} alt="Solar Panel Installation" />
                        <div className="card-body">
                            <h5 className="card-title">Solar Panel Installation</h5>
                            <p className="card-text">Our team provides professional installation of high-efficiency solar panels for residential and commercial properties. We ensure a seamless process from start to finish.</p>
                        </div>
                    </div>
                </div>

                {/* Solar Panel Maintenance */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPMLrXEMZAk5ZHKCdItU0KVddBaMmtfC29Q&s" className="card-img-top" height={300} width={200} alt="Solar Panel Maintenance" />
                        <div className="card-body">
                            <h5 className="card-title">Solar Panel Maintenance</h5>
                            <p className="card-text">Regular maintenance is key to keeping your solar panels in optimal condition. We offer comprehensive maintenance services to ensure your system operates efficiently.</p>
                        </div>
                    </div>
                </div>

                {/* Solar Energy Consultation */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="https://media.shilpaahuja.com/wp-content/uploads/2022/03/how-to-become-renewable-energy-consultant-career-path.jpg" className="card-img-top" height={300} width={200} alt="Solar Energy Consultation" />
                        <div className="card-body">
                            <h5 className="card-title">Solar Energy Consultation</h5>
                            <p className="card-text">Our experts provide personalized consultations to help you understand the benefits of solar energy and design a solution that fits your needs and budget.</p>
                        </div>
                    </div>
                </div>

                {/* Solar Battery Storage */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQh-RFCHNu0JTW15Q24ShpY-U3gcng4T2FEg&s" className="card-img-top" height={300} width={200} alt="Solar Battery Storage" />
                        <div className="card-body">
                            <h5 className="card-title">Solar Battery Storage</h5>
                            <p className="card-text">Enhance your solar system with battery storage solutions to store excess energy for use during non-sunny periods. We offer state-of-the-art battery storage options to maximize your energy independence.</p>
                        </div>
                    </div>
                </div>

                {/* Solar System Upgrades */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPk4o3dh5JOIeVEukLCZSFt8PCesEKhF1MBg&s" className="card-img-top" height={300} width={200} alt="Solar System Upgrades" />
                        <div className="card-body">
                            <h5 className="card-title">Solar System Upgrades</h5>
                            <p className="card-text">If you already have a solar system, we can help you upgrade it with the latest technology to improve efficiency and performance. Our team ensures a smooth and cost-effective upgrade process.</p>
                        </div>
                    </div>
                </div>

                {/* Custom Solar Solutions */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheFBe-WgFx63HOov7K53fxE9GHb4iLESaUA&s" className="card-img-top"  height={300} width={200} alt="Custom Solar Solutions" />
                        <div className="card-body">
                            <h5 className="card-title">Custom Solar Solutions</h5>
                            <p className="card-text">We provide customized solar energy solutions tailored to meet your specific requirements. Whether you need a unique installation or specialized equipment, we have the expertise to deliver.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
