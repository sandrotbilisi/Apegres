import React from 'react';
import { Link } from 'react-router-dom';

const BenefitItem = ({ title, description }) => (
  <div className="shadow overflow-hidden rounded-md px-6 py-4 mb-4 bg-gradient-to-r from-purple-600 to-blue-500">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-gray-100">{description}</p>
  </div>
);

const ApplicationArchitectureDesignPage = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20 min-h-screen bg-gradient-to-b  text-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400 mb-4">Application Architecture Design Services</h1>
          <p className="text-md">Crafting scalable, efficient, and robust application architectures to power your digital solutions.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400 mb-6">Why Invest in Architecture Design?</h2>
          <BenefitItem 
            title="Scalability" 
            description="Ensure your application can grow seamlessly with your business, handling increasing loads with ease."
          />
          <BenefitItem 
            title="Performance" 
            description="Optimize application performance with architectures designed for efficiency and speed."
          />
          <BenefitItem 
            title="Reliability" 
            description="Build reliable systems that maintain functionality and uptime even under stress or failure."
          />
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-6">Start Building Better Applications Today</h2>
          <Link to='/contact' className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 font-bold py-2 px-6 rounded-lg transition duration-300">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationArchitectureDesignPage;
