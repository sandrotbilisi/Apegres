import React from 'react';
import PageTransition from '../../../components/smoothTransition/PageTransition';
import { Link } from 'react-router-dom';


const DeFiFeatureCard = ({ title, description }) => {
    return (
        <div className="transition duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl bg-gradient-to-br from-green-500 to-blue-600 text-white">
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-base">{description}</p>
            </div>
        </div>
    );
};

const DeFiServicesPage = () => {
    return (
        <PageTransition>
            <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-20 lg:py-14 bg-gradient-to-b  text-gray-300">
                <section className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-6">DeFi Services</h1>
                    <p className="max-w-4xl mx-auto text-xl leading-relaxed">Unlock the full potential of decentralized finance with our comprehensive DeFi development, consulting, and integration services.</p>
                </section>

                <section className="mb-20">
                    <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-500 mb-10">Our Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <DeFiFeatureCard
                            title="DeFi Development"
                            description="Build innovative DeFi applications that offer transparency, security, and accessibility."
                        />
                        <DeFiFeatureCard
                            title="Smart Contracts for DeFi"
                            description="Develop and deploy smart contracts that power decentralized exchanges, lending platforms, and more."
                        />
                        <DeFiFeatureCard
                            title="DeFi Integration"
                            description="Seamlessly integrate DeFi protocols into your existing financial systems to enhance their capabilities."
                        />
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-10">Why DeFi?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8">Decentralized finance offers unparalleled opportunities for financial innovation, reducing reliance on traditional financial infrastructures and promoting financial inclusion.</p>
                </section>

                <section className="text-center">
                    <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-orange-500 mb-8">Transform Finance with DeFi</h2>
                    <Link to='/contact' className="transition duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg">Get Started</Link>
                </section>
            </div>
        </PageTransition>
    );
};

export default DeFiServicesPage;
