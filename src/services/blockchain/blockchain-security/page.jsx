import React from 'react';
import PageTransition from '../../../components/smoothTransition/PageTransition';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="transition duration-500 transform hover:-translate-y-2 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
      <div className="p-6 text-white bg-gradient-to-r from-blue-500 to-blue-700">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

const BlockchainSecurityPage = () => {
  return (
    
    < PageTransition>
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-20 lg:py-14 bg-gradient-to-b text-gray-300">      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6">Blockchain Security Services</h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed">Safeguard your blockchain applications against emerging threats with our cutting-edge security solutions.</p>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-blue-500 mb-10">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            title="Smart Contract Audits" 
            description="Proactive examination to uncover vulnerabilities in your smart contracts, ensuring robust security protocols are enforced." 
          />
          <FeatureCard 
            title="Security Architecture Review" 
            description="Comprehensive analysis of your blockchain's architecture to identify and mitigate potential security risks." 
          />
          <FeatureCard 
            title="Penetration Testing" 
            description="Advanced penetration testing techniques to detect and secure exploitable vulnerabilities in your blockchain network." 
          />
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">Why Prioritize Blockchain Security?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">In the rapidly evolving world of blockchain, maintaining the highest level of security is paramount to protect your assets and ensure trust in your systems.</p>
        <Link to="/contact" className="transition duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow hover:shadow-lg">Contact Us</Link>
      </section>
    </div>
    </PageTransition>
  );
};

export default BlockchainSecurityPage;
