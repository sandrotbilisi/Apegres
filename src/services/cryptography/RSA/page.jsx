import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assuming you have an SVG icon or a React component for icons
import { EncryptionIcon, DocumentIcon, SecureIcon } from '../../../icons/icon'; 

const FeatureSection = ({ IconComponent, title, description }) => {
  return (
    <div className="flex items-start space-x-4 mb-8">
      <IconComponent className="h-8 w-8 text-blue-500" />
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-3 bg-gray-800 text-left text-lg font-medium text-white rounded-md focus:outline-none"
      >
        {question}
        <span className="text-lg">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="px-4 py-2 mt-2 text-gray-300 bg-gray-700 rounded-md">{answer}</div>}
    </div>
  );
};

const RSACryptographyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b  text-gray-300">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-6">RSA Cryptography Services</h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed mb-8">Empower your digital infrastructure with advanced RSA cryptography for unparalleled security and data integrity.</p>
      </div>

      {/* Features Section */}
      <div className="px-4 lg:px-20 py-12">
        <h2 className="text-4xl font-semibold mb-10 text-center">Why RSA Cryptography?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureSection 
            IconComponent={EncryptionIcon} 
            title="Robust Encryption" 
            description="RSA's complex algorithm ensures that your data remains secure, making it the gold standard for digital encryption." 
          />
          <FeatureSection 
            IconComponent={DocumentIcon} 
            title="Digital Signatures" 
            description="Authenticate and verify the integrity of your digital communications and transactions with RSA digital signatures." 
          />
          <FeatureSection 
            IconComponent={SecureIcon} 
            title="Versatile Applications" 
            description="From secure email to blockchain, RSA cryptography is versatile enough to protect a wide range of digital applications." 
          />
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-800 py-12 px-4 lg:px-20">
        <h2 className="text-4xl font-semibold mb-8 text-center text-white">Our RSA Implementation Process</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-gray-300 text-center">Our process ensures seamless integration of RSA cryptography into your systems, tailored to your specific security needs.</p>
        {/* Process steps or diagram here */}
      </div>

      {/* FAQs Section */}
      <div className="py-12 px-4 lg:px-20">
        <h2 className="text-4xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion question="What is RSA Cryptography?" answer="RSA is a public-key cryptosystem widely used for secure data transmission." />
        <Accordion question="Why is RSA considered secure?" answer="RSA's security is based on the computational difficulty of factoring large integers, a problem for which no efficient solution currently exists." />
        {/* More FAQs */}
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-semibold text-white mb-8">Get Started with Enhanced Security</h2>
        <Link to="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 hover:bg-gradient-to-br font-bold py-3 px-6 rounded-lg shadow-lg text-white transition-all duration-300">Contact Us</Link>
      </div>
    </div>
  );
};

export default RSACryptographyPage;
