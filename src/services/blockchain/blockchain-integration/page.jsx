import React, { useState } from 'react';
import PageTransition from '../../../components/smoothTransition/PageTransition';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

// Accordion component for FAQs
const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <button
                className="flex justify-between items-center w-full px-4 py-3 text-left text-white bg-[#2D2E32] rounded-lg hover:bg-[#3e3f43] transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="px-4 py-2 mt-2 bg-[#1A1B1E] rounded-lg">{answer}</div>}
        </div>
    );
};

const ServiceCard = ({ title, description }) => {
    return (
        <div className={`bg-[#2D2E32] p-6 rounded-xl ${styles.gloweffect} hover:scale-105 hover:${styles.noglow}  transform transition duration-500`}>
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const BlockchainIntegrationPage = () => {
    return (
        <PageTransition>

        <div className="max-w-7xl mx-auto px-5 py-10 bg-[#1A1B1E] text-gray-300 ">
            <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-blue-600 mb-6">Blockchain Integration Services</h1>
                <p className="max-w-4xl mx-auto  text-xl">Unlock the potential of blockchain technology to secure and streamline your business processes.</p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-blue-600  mb-8">Why Integration Matters</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <ServiceCard
                        title="Efficiency Gains"
                        description="Reduce operational costs and increase transaction speed through blockchain-powered automation."
                    />
                    <ServiceCard
                        title="Enhanced Security"
                        description="Benefit from the immutable and transparent nature of blockchain for secure data management."
                    />
                    <ServiceCard
                        title="Innovative Solutions"
                        description="Stay ahead of the curve by leveraging blockchain technology to offer cutting-edge services."
                    />
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-red-900 to-purple-700 mb-8 ">Frequently Asked Questions</h2>
                <div>

                    <Accordion
                        question="Can blockchain integration disrupt my current operations?"
                        answer="Blockchain integration is designed to enhance and streamline your operations without significant disruption. Our approach focuses on seamless integration with minimal downtime."
                    />
                    <Accordion
                        question="What types of businesses can benefit from blockchain integration?"
                        answer="Any business that requires transparent, secure, and efficient transactional or data management processes can benefit from blockchain integration. This includes finance, supply chain, healthcare, and more."
                    />
                    <Accordion
                        question="How long does it take to integrate blockchain into my existing systems?"
                        answer="The timeline for blockchain integration varies depending on the complexity of your existing systems and the scope of the integration. Projects can range from a few weeks to several months."
                    />
                    <Accordion
                        question="Is blockchain integration expensive?"
                        answer="Costs can vary based on the project's complexity and the specific blockchain technology implemented. However, we strive to provide cost-effective solutions that offer a high return on investment."
                    />
                    <Accordion
                        question="How does blockchain ensure data security?"
                        answer="Blockchain technology uses advanced cryptography to secure data. Each transaction is encrypted and linked to the previous transaction, creating an immutable and tamper-proof record."
                    />
                    <Accordion
                        question="Can blockchain integration work with any type of database?"
                        answer="Blockchain can be integrated with various types of databases, but the approach may differ based on the database architecture. Our team assesses the best strategy for integration on a case-by-case basis."
                    />
                    <Accordion
                        question="Do I need to understand blockchain technology to benefit from it?"
                        answer="No, you don't need to be an expert in blockchain technology. Our team will handle all aspects of the integration process, ensuring that you reap all the benefits without needing to delve into the technical details."
                    />

                    {/* Add more FAQs as needed */}
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-yellow-600 mb-8">Ready to Elevate Your Business?</h2>
                <Link to="/contact" className="inline-block bg-blue-500 hover:bg-blue-700 transition duration-300 font-bold py-3 px-6 rounded-lg text-white shadow">Get Started</Link>
            </section>
        </div>
        </PageTransition>

    );
};

export default BlockchainIntegrationPage;
