import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBlock = ({ title, description }) => (
    <div className="m-2 p-4 max-w-sm bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-xl text-white hover:scale-105 transform transition duration-500 ease-in-out">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );

  const services = [
    { title: "Blockchain Development", description: "Building decentralized applications and smart contract solutions." },
    { title: "Cryptography", description: "Ensuring data security with advanced encryption techniques." },
    { title: "Backend Development", description: "Creating scalable and efficient server-side applications." },
    { title: "Cloud Services", description: "Leveraging cloud platforms for enhanced flexibility and scalability." },
    { title: "AWS", description: "Implementing Amazon Web Services for robust cloud infrastructure." },
    { title: "Application Architecture Design", description: "Designing software architectures that are scalable, reliable, and efficient." },
  ];

const AboutUsSection = () => (
  <div className=" py-12 px-4 sm:px-6 lg:px-20">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          About Us
        </h2>

      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-xl p-8  text-gray-300">
        <p className="mb-6">
        Our team is dedicated to offering a range of services including Application Architecture Design, Cloud Solutions, and Custom Software Development. Leveraging the latest technologies and methodologies, we ensure that our solutions not only meet but exceed our clients' expectations.        </p>


        <div className="mt-12">
            <div><h1>We Offer The Following Services:</h1></div>
        <div className="flex flex-wrap justify-center">
          {services.map(service => (
            <ServiceBlock key={service.title} {...service} />
          ))}
        </div>
      </div>
      </div>



      <div className="text-center mt-10">
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Connect with Us
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUsSection;
