import React from 'react';
import bg from '../assets/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Typewriter from './TypeWriter'

const LandView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-5xl text-center font-bold text-gray-800 mb-4"><Typewriter text="Coming Soon..." /></h1>
          <p className="text-lg text-gray-600 mb-8">
            Our new real estate website is under construction. Stay tuned for exciting features and listings!
          </p>
          <div className="flex justify-center mb-4">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Notify Me
            </button>
          </div>
          <div className="text-center text-gray-600">
            <p>Follow us on social media for updates:</p>
            <ul className="flex justify-center mb-4">
              <li className="mr-4">
                <a href="https://x.com/realtorai4u" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/realtorai4u/" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.linkedin.com/company/104570178/admin/feed/posts/" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            &copy; 2024 RealTor. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandView;