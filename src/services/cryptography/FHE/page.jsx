import React from 'react';
import { Link } from 'react-router-dom';

const FeatureHighlight = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 mb-8 ">
      <div className="shrink-0">
        {Icon}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const FullyHomomorphicEncryptionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b text-gray-300 py-12 px-4 sm:px-6 lg:px-20">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">Fully Homomorphic Encryption Services</h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed">Unlock the full potential of data encryption with our Fully Homomorphic Encryption services, enabling secure, private computations on encrypted data.</p>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-500 mb-10">Benefits of FHE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureHighlight 
            Icon={<svg className="h-8 w-8 text-blue-500" /* SVG Placeholder */ />} 
            title="Data Privacy" 
            description="Perform computations on encrypted data, ensuring privacy and security of sensitive information." 
          />
          <FeatureHighlight 
            Icon={<svg className="h-8 w-8 text-green-500" /* SVG Placeholder */ />} 
            title="Cloud Computing" 
            description="Enhance cloud computing security by enabling encrypted data processing." 
          />
          <FeatureHighlight 
            Icon={<svg className="h-8 w-8 text-yellow-500" /* SVG Placeholder */ />} 
            title="Secure Data Sharing" 
            description="Share encrypted data securely across different platforms without revealing the actual data." 
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10">Our FHE Solutions</h2>
        <p className="text-xl mb-8">We offer end-to-end FHE solutions, from initial consultation to implementation, ensuring your data remains encrypted and secure throughout every computational process.</p>
        {/* More detailed solution offerings can be added here */}
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-8">Start with FHE Today</h2>
        <Link to="/contact" className="bg-gradient-to-r from-teal-500 to-green-500 hover:bg-gradient-to-br font-bold py-3 px-6 rounded-lg shadow-lg text-white transition-all duration-300">Contact Us</Link>
      </section>
    </div>
  );
};

export default FullyHomomorphicEncryptionPage;
