import React from 'react';
import PageTransition from '../../../components/smoothTransition/PageTransition';
import './App.module.css';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description }) => {
    return (
      // Added a glow effect with box-shadow CSS property
<div className={`transform hover:scale-105 transition duration-500 bg-[#2D2E32] p-6 rounded-xl hover:shadow-2xl ${styles.gloweffect}`}>
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  };


const SmartContractPage = () => {
  return (
    <PageTransition>

    <div className="max-w-7xl mx-auto px-5 py-10 bg-[#1A1B1E] text-gray-300">
      <section className="mb-12 text-center">
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-blue-600 font-bold mb-3">Smart Contract Development Services</h1>
        <p className="max-w-2xl mx-auto">Leverage our expertise in smart contract development to automate and secure your digital transactions with blockchain technology.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-orange-600 mb-4">How Smart Contracts Work</h2>
        <p className="mb-4">Smart contracts are self-executing contracts with the terms of the agreement directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network.</p>
        <p>Smart contracts permit trusted transactions and agreements to be carried out among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold  mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-600 ">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Development and Deployment" 
            description="Design, develop, and deploy self-executing contracts across various blockchain platforms." 
          />
          <ServiceCard 
            title="Audit and Security" 
            description="Conduct comprehensive smart contract audits to identify and rectify security vulnerabilities." 
          />
          <ServiceCard 
            title="Custom Solutions" 
            description="Create tailored smart contract solutions to meet your specific business needs and objectives." 
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-rose-700 to-blue-700 mb-4">Technologies and Tools</h2>
        <p>Our team specializes in Solidity, Truffle, Hardhat, and other leading technologies and tools for smart contract development, ensuring top-tier solutions for our clients.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-4">Why Choose Us</h2>
        <p>With extensive experience and a track record of success, we are your ideal partner for developing secure and efficient smart contracts.</p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Ready to Transform Your Business?</h2>
        <Link to='/contact' className="bg-blue-600 hover:bg-blue-700 transition duration-300 font-bold py-3 px-6 rounded text-white shadow-lg">Get in Touch</Link>
      </section>
    </div>
    </PageTransition>
  );
};

export default SmartContractPage;
