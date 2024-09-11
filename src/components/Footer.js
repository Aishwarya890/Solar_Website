import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p className="mb-0">© {new Date().getFullYear()} Solar Website. All rights reserved.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <p className="mb-0">123 Solar Street, Sunnytown, ST 12345</p>
            <p className="mb-0">Email: <a href="mailto:contact@solarwebsite.com" className="text-white">contact@solarwebsite.com</a></p>
            <p className="mb-0">Phone: <a href="tel:+11234567890" className="text-white">(123) 456-7890</a></p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="mt-3">
          <p className="mb-0">Designed and developed by <a href="https://yourwebsite.com" className="text-white" target="_blank" rel="noopener noreferrer">YourCompany</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
