import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../About.css';

const About = () => {
    return (
        <div className="container-fluid my-5 px-3">
            {/* Hero Section */}
            <section className="text-center text-white py-5 hero-section">
                <div className="container">
                    <h1 className="display-3 mb-3" style={{color:'black'}}>About Us</h1>
                    <p className="lead mb-5" style={{color:'black'}}>Learn about our journey, mission, and the team powering the future of solar energy.</p>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h2 className="card-title">Our Mission</h2>
                                    <p className="card-text">
                                        Our mission is to lead the way in solar technology by providing innovative, efficient, 
                                        and affordable solar energy solutions that help reduce carbon footprints and energy costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h2 className="card-title">Our Values</h2>
                                    <ul className="list-unstyled text-start">
                                        <li><strong>Innovation:</strong> Leading with cutting-edge technology.</li>
                                        <li><strong>Sustainability:</strong> Committed to eco-friendly practices.</li>
                                        <li><strong>Customer Satisfaction:</strong> Delivering exceptional service.</li>
                                        <li><strong>Integrity:</strong> Upholding transparency and ethics.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5 team-section">
                <div className="container">
                    <h2 className="text-center mb-5">Meet Our Team</h2>
                    <div className="row justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card shadow-sm h-100">
                                    <img src={member.image} className="card-img-top" alt={member.name} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{member.name}</h5>
                                        <p className="card-text">{member.title}</p>
                                        <p className="card-text text-muted">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Our Journey</h2>
                    <ul className="timeline">
                        {timelineEvents.map((event, index) => (
                            <li key={index} className="timeline-item">
                                <h5>{event.year}</h5>
                                <p>{event.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-5 text-white text-center cta-section">
                <div className="container">
                    <h2 className="mb-4" style={{color:'black'}}>Join Our Solar Revolution</h2>
                    <p className="mb-5" style={{color:'black'}}>We’re looking for passionate individuals to join our mission and make a difference in the world.</p>
                    <a href="/careers" className="btn btn-lg btn-primary">Explore Careers</a>
                </div>
            </section>
        </div>
    );
}

// Sample data for team members and timeline
const teamMembers = [
    {
        name: 'Jane Doe',
        title: 'CEO & Founder',
        description: 'A visionary leader with over 15 years in renewable energy.',
        image: 'https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2017/02/alphagamma-teamwork-3-steps-to-build-a-strong-team-entrepreneurship.jpg'
    },
    {
        name: 'John Smith',
        title: 'Chief Technology Officer',
        description: 'Leads our technology team with a focus on innovation.',
        image: 'https://thelearningrooms.com/wps/wp-content/uploads/2015/02/team.jpg'
    },
    {
        name: 'Emily Johnson',
        title: 'Head of Customer Service',
        description: 'Ensures exceptional support from inquiry to installation.',
        image: 'https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE='
    }
];

const timelineEvents = [
    { year: '2010', description: 'Founded Solar Solutions with a mission to make solar power accessible.' },
    { year: '2012', description: 'Completed our first commercial solar project.' },
    { year: '2015', description: 'Expanded operations to include energy storage solutions.' },
    { year: '2018', description: 'Reached 1,000 installed solar systems milestone.' },
    { year: '2021', description: 'Launched innovative solar technology that redefined the market.' },
];

export default About;
