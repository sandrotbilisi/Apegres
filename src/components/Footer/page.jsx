import React from 'react';
import { FaFacebook } from 'react-icons/fa'; // Importing Facebook icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="list-none">
              <li className="mb-2 flex items-center">
                <a href="https://www.facebook.com/profile.php?id=61556616433213" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              {/* Add more social links here */}
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>Learn more about our mission and how you can benefit from our platform, Apegres.</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Have questions? We're here to help. Reach out to us via email or social media.</p>
          </div>
        </div>
        <div className="text-center text-sm mt-10">
          © {new Date().getFullYear()} Apegres. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
