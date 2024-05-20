import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Route 53',
    description: 'Reliable and cost-effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses.'
  },
  {
    title: 'S3 Bucket',
    description: 'Object storage service that offers industry-leading scalability, data availability, security, and performance.'
  },
  {
    title: 'EC2',
    description: 'Provides scalable computing capacity in the Amazon Web Services (AWS) Cloud, eliminating the need to invest in hardware up front.'
  },
  {
    title: 'Dedicated IP Addresses',
    description: 'Allocate dedicated IP addresses for your instances, providing a static IP address for consistent and reliable application access.'
  },
];

const ServiceCard = ({ title, description }) => (
  <div className="p-6 max-w-sm bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg shadow-md hover:scale-105 transform transition duration-500 ease-in-out">
    <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
    <p className="text-gray-200">{description}</p>
  </div>
);

const CTASection = () => (
    <div className="mt-12 px-6 py-8 bg-gradient-to-r rounded-lg  text-center"> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Cloud Strategy?</h2>
      <p className="text-gray-200 mb-8">Let's discuss how we can tailor AWS services to fit your business needs and drive growth.</p>
      <Link to="/contact" className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">Contact Us</Link>
    </div>
  );

const AWSServicesPage = () => (
  <div className="py-12 px-4 sm:px-6 lg:px-20  min-h-screen flex flex-col items-center">
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
      AWS Cloud Services
    </h1>
    <p className="text-lg text-gray-300 max-w-xl text-center mb-12">
      Maximize your cloud potential with our AWS expertise, offering scalable, secure, and efficient cloud solutions.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
    <CTASection />

  </div>
);

export default AWSServicesPage;


