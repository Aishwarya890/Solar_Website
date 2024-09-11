import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_tg029ot',    // Replace with your EmailJS service ID
            'template_tjp5pgq',   // Replace with your EmailJS template ID
            formData,
            '2uuVzEIwfzbVtiD6B' // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            setFormData({ from_name: '', from_email: '', message: '' });  // Reset form after submission
        })
        .catch((err) => {
            console.log('FAILED...', err);
            alert('Failed to send the message, please try again.');
        });
    };

    return (
        <div className="container">
    <h1 className="display-4 text-center mb-4 text-dark">Contact Us</h1>
    <p className="lead text-center mb-4 text-dark">Get in touch with us for more information about our solar solutions.</p>
    
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="form-container p-4 rounded-lg shadow-lg border border-dark" style={{ backgroundColor: '#343a40' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="from_name" className="form-label text-light">Name</label>
                        <input 
                            type="text" 
                            className="form-control rounded-pill px-3 border-0 shadow-sm" 
                            id="from_name" 
                            placeholder="Enter your name" 
                            value={formData.from_name}
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from_email" className="form-label text-light">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control rounded-pill px-3 border-0 shadow-sm" 
                            id="from_email" 
                            placeholder="Enter your email" 
                            value={formData.from_email}
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-light">Message</label>
                        <textarea 
                            className="form-control rounded-lg px-3 border-0 shadow-sm" 
                            id="message" 
                            rows="5" 
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange} 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary rounded-pill w-100 mt-3 shadow-lg">Submit</button>

                </form>
                
            </div>
            
        </div>

        {/* Google Map Section */}
     <div className="mt-5">
                <h2 className="text-center mb-4 text-dark">Find Us Here</h2>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21393.228257591112!2d74.018497528495!3d18.58196312894371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c399c4dad9d3%3A0x100e014b229c54d5!2sVS%20Tech%20Horizon%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1725947801925!5m2!1sen!2sin"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        style={{ border: 0, width: '100%', height: '500px' }}
                    ></iframe>
                </div>
            </div>
    </div>

     
</div>



        
        
    );
}

export default Contact;
