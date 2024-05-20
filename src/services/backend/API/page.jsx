import React, { useState } from 'react';

import graphQl from '../../../assets/photos/graphql-logo.png'
import nodeJs from '../../../assets/photos/node-js.png'
import restApi from '../../../assets/photos/rest-api-icon.webp'
import jwt from '../../../assets/photos/jwt-icon.svg'
import { Link } from 'react-router-dom';

// Placeholder Icon Components
const PlaceholderIcon = ({ className }) => <div className={`${className} bg-gray-400 rounded-full`}></div>;

const TechCard = ({ IconComponent, name }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow justify-between">
      <img width={"100px"} src={IconComponent} alt="" />
      <h5 className="text-lg font-medium text-white">{name}</h5>
    </div>
  );
};

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-3 bg-gray-700 text-left text-lg font-medium text-white rounded-md focus:outline-none"
      >
        {question}
        <span className="text-lg">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="px-4 py-2 mt-2 text-gray-300 bg-gray-600 rounded-md">{answer}</div>}
    </div>
  );
};

const TechnologiesSection = () => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">Technologies We Use</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <TechCard IconComponent={nodeJs} name="Node.js" />
        <TechCard IconComponent={graphQl} name="GraphQL" />
        <TechCard IconComponent={restApi} name="REST API" />
        <TechCard IconComponent={jwt} name="JWT" />
        {/* Add more technologies as needed */}
      </div>
    </div>
  );
};

const APIDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b text-white py-12 px-4 sm:px-6 lg:px-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">API Development Services</h1>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">Build powerful, efficient, and secure APIs with our custom development services tailored to your business needs.</p>
      </section>

      <TechnologiesSection />

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <FAQAccordion question="What is a RESTful API?" answer="A RESTful API is an application programming interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services." />
        <FAQAccordion question="Why use GraphQL?" answer="GraphQL allows clients to request exactly the data they need, making it efficient for complex systems with multiple entities." />
        <FAQAccordion question="How do you secure APIs?" answer="We implement industry-standard authentication and authorization measures like OAuth2 and JWT to protect your APIs against unauthorized access." />
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-8">Enhance Your Application with Our APIs</h2>
        <Link to="/contact" className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-br font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">Get Started</Link>
      </section>
    </div>
  );
};

export default APIDevelopmentPage;
