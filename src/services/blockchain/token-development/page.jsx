import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHighlight = ({ title, description }) => {
  return (
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-indigo-600 to-blue-400 p-6 text-white">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-md">{description}</p>
    </div>
  );
};

const TokenDevelopmentPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-10 lg:py-14 bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">Token Development Services</h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed">Harness the power of blockchain with custom token development services designed to elevate your project's value and utility.</p>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-600 mb-10">Why Tokenize?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceHighlight 
            title="Fundraising" 
            description="Tokens can serve as a dynamic fundraising tool, offering immediate liquidity and opening new capital avenues." 
          />
          <ServiceHighlight 
            title="Utility & Access" 
            description="Utility tokens provide users with future access to products or services, enhancing engagement and loyalty." 
          />
          <ServiceHighlight 
            title="Asset Tokenization" 
            description="Tokenize real-world assets to improve their liquidity, making it easier to buy, sell, and trade them on blockchain networks." 
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 mb-10">Our Token Development Process</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">Our comprehensive approach ensures your token project is developed with strategic planning, compliance, and technological excellence from concept to launch.</p>
        {/* Detailed process steps or phases can be added here */}
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-8">Start Your Token Project Today</h2>
        <Link to="/contact" className="transition duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg">Get in Touch</Link>
      </section>
    </div>
  );
};

export default TokenDevelopmentPage;
