import React from 'react';
import { Link } from 'react-router-dom';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 mb-6">
    {children}
  </h2>
);

const InfoCard = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 md:mb-0 md:mr-6">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-500">{title}</h3>
      </div>
      <p className="flex-1">{description}</p>
    </div>
  );
};

const LibraryDevelopmentPage = () => {
  return (
    <div className=" text-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">Library Development Services</h1>
          <p className="text-gray-300 max-w-xl mx-auto">Unlock the potential of custom library development to streamline your software projects, enhancing reusability and consistency across your codebase.</p>
        </div>

        <SectionTitle>Why Choose Us?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <InfoCard 
            title="Customization" 
            description="Libraries tailored to fit your unique project requirements, ensuring seamless integration and optimized performance."
          />
          <InfoCard 
            title="Scalability" 
            description="Build scalable solutions that grow with your project needs, from small startups to large enterprise applications."
          />
        </div>

        <SectionTitle>Our Expertise</SectionTitle>
        <div className="flex flex-wrap justify-center gap-6">
          <InfoCard 
            title="Comprehensive Documentation" 
            description="Ensure ease of use with detailed documentation, facilitating quick adoption and efficient implementation."
          />
          <InfoCard 
            title="Ongoing Support" 
            description="Dedicated support for updates, optimizations, and troubleshooting, keeping your libraries up-to-date and secure."
          />
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">Get Started with Advanced Library Development</h2>
          <Link to='/contact' className="bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-br font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default LibraryDevelopmentPage;
