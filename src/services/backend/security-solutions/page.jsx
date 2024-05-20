import React from 'react';
import { Link } from 'react-router-dom';

// Component for showcasing different security solutions
const SolutionCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-md mt-2">{description}</p>
    </div>
  );
};

const SecuritySolutionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-6">Security Solutions Services</h1>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">Protect your digital landscape with our end-to-end security solutions designed to combat modern cyber threats.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        <SolutionCard 
          title="Cybersecurity Assessment" 
          description="Evaluate your current security posture and identify vulnerabilities with a comprehensive cybersecurity assessment."
        />
        <SolutionCard 
          title="Threat Intelligence" 
          description="Stay ahead of potential threats with proactive threat intelligence and monitoring services."
        />
        <SolutionCard 
          title="Data Protection & Privacy" 
          description="Implement robust data protection and privacy measures to safeguard sensitive information from unauthorized access."
        />
        <SolutionCard 
          title="Incident Response" 
          description="Rapidly respond to and recover from security incidents with our expert incident response team."
        />
        {/* Additional solutions can be added here */}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Customized Security Strategies</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">Our security solutions are tailored to meet the unique needs of your business, ensuring optimal protection against evolving cyber threats.</p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">Enhance Your Security Posture</h2>
        <Link to='/contact' className="bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-br font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">Contact Us</Link>
      </section>
    </div>
  );
};

export default SecuritySolutionsPage;
