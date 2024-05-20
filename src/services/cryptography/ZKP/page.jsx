import React, { useState } from 'react';
import Image from '../../../assets/infograph.png'
import { Link } from 'react-router-dom';

// An interactive component to visually represent the concept of ZKP
const InteractiveZKPExample = () => {
  // Placeholder for an interactive ZKP example - could be an animation, a clickable demo, etc.
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h3 className="text-lg font-semibold mb-2">Interactive ZKP Demo</h3>
      <p className="text-gray-400 mb-4">Explore how Zero-Knowledge Proofs work with a simple interactive example.</p>
      <div className="flex justify-center items-center h-32 bg-gray-900 rounded-lg">
        {/* Placeholder for interactive elements or animation */}
        <span className="text-gray-400 italic">Interactive demo placeholder</span>
      </div>
    </div>
  );
};

const DemoSection = () => {
        return (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white my-8">
            <h3 className="text-xl font-semibold mb-4">Understanding Zero-Knowledge Proofs</h3>
            <p className="mb-4">Dive into the concept of Zero-Knowledge Proofs with our easy-to-understand infographic:</p>
            {/* Placeholder for infographic image */}
            <div className="flex justify-center items-center">
              <img src={Image} alt="Zero-Knowledge Proofs Infographic" className="max-w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        );
      
  };

const ZeroKnowledgeProofsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b text-gray-300 py-12 px-4 sm:px-6 lg:px-20">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">Zero-Knowledge Proofs Services</h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed mb-8">Enable secure and private verifications with our Zero-Knowledge Proofs services, ensuring data integrity without compromising privacy.</p>
      </section>

      < DemoSection  />

      <section className="my-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-300 to-indigo-400 mb-10">Why ZKP?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Enhanced Privacy</h3>
            <p className="text-gray-400">ZKP allows for the validation of transactions or data without revealing any sensitive information, enhancing user privacy and security.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Increased Security</h3>
            <p className="text-gray-400">By not exposing any underlying data, ZKP minimizes the risk of data breaches and ensures a higher level of security in digital transactions.</p>
          </div>
          {/* Additional benefits can be included */}
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-8">Implement ZKP in Your Projects</h2>
        <p className="text-xl mb-8">Discover how our Zero-Knowledge Proof services can be integrated into your projects to enhance data privacy and security.</p>
        <Link to="/contact" className="bg-gradient-to-r from-teal-500 to-green-500 hover:bg-gradient-to-br font-bold py-3 px-6 rounded-lg shadow-lg text-white transition-all duration-300">Get Started</Link>
      </section>
    </div>
  );
};

export default ZeroKnowledgeProofsPage;
