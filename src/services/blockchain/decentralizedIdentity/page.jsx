import React from 'react';
import PageTransition from '../../../components/smoothTransition/PageTransition';
import { Link } from 'react-router-dom';

const InfoCard = ({ title, description }) => {
  return (
    <div className="transition duration-500 transform hover:-translate-y-2 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl bg-gray-800 p-6">
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const DecentralizedIdentityPage = () => {
  return (
    <PageTransition>
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-20 lg:py-14 bg-gradient-to-b  text-gray-300">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">Decentralized Identity Services</h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed">Empower individuals and organizations with secure, verifiable, and privacy-preserving identity solutions built on blockchain technology.</p>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-600 mb-10">Why Decentralized Identity?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard 
            title="Enhanced Privacy" 
            description="Users have full control over their personal information, sharing only what is necessary without centralized control." 
          />
          <InfoCard 
            title="Increased Security" 
            description="Leverage the inherent security features of blockchain technology to protect identity data against breaches and fraud." 
          />
          <InfoCard 
            title="Interoperability" 
            description="Facilitate seamless and secure identity verification across various platforms and services without redundant processes." 
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-10">Our Services</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">From strategy consultation to implementation, we offer comprehensive services to develop and deploy decentralized identity systems tailored to your specific needs.</p>
        {/* Include detailed service offerings here */}
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-8">Get Started with Decentralized Identity</h2>
        <Link to='/contact' className="transition duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg">Contact Us</Link>
      </section>
    </div>
    </PageTransition>
  );
};

export default DecentralizedIdentityPage;