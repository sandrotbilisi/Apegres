import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/Apegres-logo-white.svg'
import { FaHamburger } from 'react-icons/fa';

const HamburgerIcon = ({ className }) => {
    return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg" alt="Hamburger Icon" className={className} />
    )
}

// A generalized DropdownItem component for handling hover states and displaying nested content
const DropdownItem = ({ title, children }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative"
        >
            <button className="px-4 py-2 hover:bg-gray-800 rounded cursor-pointer text-white flex items-center justify-between w-full">
                {title}
            </button>
            {isHovering && (
                <div className="absolute left-full top-0 min-w-max bg-white text-black rounded shadow-lg">
                    {children}
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    // Main Services dropdown hover state
    const [isHoveringServices, setIsHoveringServices] = useState(false);
    const [isHoveringEducation, setIsHoveringEducation] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [showServices, setShowServices] = useState(false);
    const [showBlockchainDetails, setShowBlockchainDetails] = useState(false);
    const [showCryptographyDetails, setShowCryptographyDetails] = useState(false);
    const [showBackendDetails, setShowBackendDetails] = useState(false);
    const [showCloudDetails, setShowCloudDetails] = useState(false);

    const [showMobileLinks, setShowMobileLinks] = useState(false);
    const [showEducation, setShowEducation] = useState(false);


    useEffect(() => {
        const handleWindowResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const isMobile = viewportWidth <= 725;


    return (
        !isMobile ? (
            <nav className="color navbar">
                <div className="container mx-auto flex justify-between items-center py-4 dgdg">
                    <Link to="/" className="text-xl font-semibold text-white flex justify-center items-center	 "> <img src={Logo} alt="" width={50} /> Apegres</Link>
                    <div className="flex items-center">
                        {/* Simplified non-dropdown links */}
                        <Link to="/" className="px-4 py-2 text-white hover:bg-gray-700 rounded cursor-pointer">Home</Link>
                        <Link to="/about" className="px-4 py-2 text-white hover:bg-gray-700 rounded cursor-pointer">About Us</Link>
                        <div
                            onMouseEnter={() => setIsHoveringServices(true)}
                            onMouseLeave={() => setIsHoveringServices(false)}
                            className="relative"
                        >
                            <button className="px-4 py-2 hover:bg-gray-700 rounded cursor-pointer text-white flex items-center justify-between">
                                Services
                            </button>

                            {isHoveringServices && (
                                <div className="absolute left-0 top-full bg-gray-700 text-black py-2 rounded shadow-lg z-100000">
                                    <DropdownItem title="Blockchain Development">
                                        <Link to="/services/blockchain/smart-contract" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Smart Contract Development</Link>
                                        <Link to="/services/blockchain/blockchain-integration" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Blockchain integration</Link>
                                        <Link to="/services/blockchain/blockchain-security" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Blockchain Security</Link>
                                        <Link to="/services/blockchain/defi" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">DeFi</Link>
                                        <Link to="/services/blockchain/decentralized-identity" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Decentralised Identity</Link>
                                        {/* <a href="/services/blockchain/token-development" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Token Development</a> */}
                                        {/* <a href="/services/blockchain/web3" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Web3</a> */}
                                    </DropdownItem>
                                    <DropdownItem title="Cryptography">
                                        <Link to="/services/cryptography/rsa" className="block px-4 bg-gray-700 text-white py-2 hover:bg-gray-800">RSA</Link>
                                        <Link to="/services/cryptography/fhe" className="block px-4 bg-gray-700 text-white py-2 hover:bg-gray-800">Fully Homomorphic Encryption</Link>
                                        <Link to="/services/cryptography/zkp" className="block px-4 bg-gray-700 text-white py-2 hover:bg-gray-800">Zero Knowledge Proofs</Link>
                                        {/* <a href="/services/cryptography/fhe" className="block px-4 bg-gray-700 text-white py-2 hover:bg-gray-800">Digital Signatures</a> */}
                                        {/* <Link to="/services/cryptography/fhe" className="block px-4 bg-gray-700 text-white py-2 hover:bg-gray-800"> Hash Functions</Link> */}
                                        {/* Additional Cryptography links */}
                                    </DropdownItem>
                                    <DropdownItem title="Backend Development">
                                        <Link to="/services/backend/api" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">API</Link>
                                        {/* <a href="/services/backend/cloud-integration" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Cloud Integration</a> */}
                                        {/* <Link to="/services/backend/jwt" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">JWT</Link> */}
                                        {/* <a href="/services/backend/data-encryption" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Data Encryption </a> */}
                                        {/* <Link to="/services/backend/security-solutions" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800"> Security Solutions </Link> */}
                                        {/* <a href="/services/backend/event-handling" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Event Handling, Management</a> */}
                                        <Link to="/services/backend/library-development" className="block bg-gray-700 text-white px-4 py-2 hover:bg-gray-800">Library Development</Link>
                                    </DropdownItem>
                                    <DropdownItem title="Cloud Services">
                                        <Link to="/services/cloud/aws" className="block bg-gray-700 text-white  px-4 py-2 hover:bg-gray-800">AWS</Link>
                                        {/* <a href="/services/cloud/route-53" className="block bg-gray-700 text-white  px-4 py-2 hover:bg-gray-800">Route 53</a> */}
                                        {/* <a href="/services/cloud/s3-bucket" className="block bg-gray-700 text-white  px-4 py-2 hover:bg-gray-800">S3 Bucket</a> */}
                                        {/* <a href="/services/cloud/ec2" className="block bg-gray-700 text-white  px-4 py-2 hover:bg-gray-800">EC2</a> */}
                                        {/* <a href="/services/cloud/dedicated-ip" className="block bg-gray-700 text-white  px-4 py-2 hover:bg-gray-800">Dedicated IP Addresses</a> */}
                                        {/* <a href="/services/cloud/domain-management" className="block bg-gray-700  text-white px-4 py-2 hover:bg-gray-800">Domain Management</a> */}
                                    </DropdownItem>
                                    <Link className='px-4 py-2 hover:bg-gray-800 rounded cursor-pointer text-white flex items-center justify-between w-full text-center' to="/services/architecture">Application Architecture Design </Link>                                {/* Further services dropdowns */}
                                </div>
                            )}
                        </div>
                        <div
                            onMouseEnter={() => setIsHoveringEducation(true)}
                            onMouseLeave={() => setIsHoveringEducation(false)}
                            className="relative"
                        >
                            <button className="px-4 py-2 hover:bg-gray-700 rounded cursor-pointer text-white flex items-center justify-between">
                                Education
                            </button>
                            {isHoveringEducation && (
                                <div className="absolute left-0 top-full bg-gray-700 text-black py-2 rounded shadow-lg">
                                    <Link className='px-4 py-2 hover:bg-gray-800 rounded cursor-pointer text-white flex items-center justify-between w-full text-center' to="/education/blockchain">Blockchain</Link>
                                    <Link className='px-4 py-2 hover:bg-gray-800 rounded cursor-pointer text-white flex items-center justify-between w-full text-center' to="/education/backend">Backend</Link>
                                    <Link className='px-4 py-2 hover:bg-gray-800 rounded cursor-pointer text-white flex items-center justify-between w-full text-center' to="/education/ml">Machine Learning</Link>
                                    {/* Further services dropdowns */}
                                </div>
                            )}
                        </div>
                        {/* <a href="/our-team" className="px-4 py-2 text-white hover:bg-gray-700 rounded cursor-pointer">Our Team</a> */}
                        <Link to="/contact" className="px-4 py-2 text-white hover:bg-gray-700 rounded cursor-pointer">Contact</Link>

                        {/* Services Dropdown */}

                    </div>
                </div>
            </nav>
        ) : (
            <>  <nav className='flex justify-between p-5 navbar'>
                <Link to="/" className="text-xl font-semibold text-white flex justify-center items-center	 "> <img src={Logo} alt="" width={50} /> Apegres</Link>
                <button onClick={() => {
                    setShowMobileLinks(!showMobileLinks);
                }}> < HamburgerIcon className=' text-white ' /> </button>
            </nav>

                {showMobileLinks && (
                    <div className="mobile-menu bg-gray-700 text-white p-4 sticky z-50">
                        <Link to="/" className="hover:bg-gray-800 w-full ">
                            <div className='px-4 py-2 hover:bg-gray-800'>
                                Home
                            </div>
                        </Link>

                        <Link to="/about" className="hover:bg-gray-800 w-full ">
                            <div className='px-4 py-2 hover:bg-gray-800'>
                                About us
                            </div>
                        </Link>

                        <div onClick={() => setShowServices(!showServices)} className="px-4 py-2 hover:bg-gray-800">Services</div>
                        {showServices && (
                            <div className="pl-4">
                                <div onClick={() => setShowBlockchainDetails(!showBlockchainDetails)} className="px-4 py-2 hover:bg-gray-800">Blockchain Development</div>
                                {showBlockchainDetails && (
                                    <div className="pl-4">
                                        <Link to="/services/blockchain/smart-contract" className="block text-white px-4 py-2 hover:bg-gray-900">Smart Contract Development</Link>
                                        <Link to="/services/blockchain/blockchain-integration" className="block text-white px-4 py-2 hover:bg-gray-900">Blockchain integration</Link>
                                        <Link to="/services/blockchain/blockchain-security" className="block text-white px-4 py-2 hover:bg-gray-900">Blockchain Security</Link>
                                        <Link to="/services/blockchain/defi" className="block text-white px-4 py-2 hover:bg-gray-900">DeFi</Link>
                                        <Link to="/services/blockchain/decentralized-identity" className="block text-white px-4 py-2 hover:bg-gray-900">Decentralised Identity</Link>
                                    </div>
                                )}

                                <div onClick={() => setShowCryptographyDetails(!showCryptographyDetails)} className="px-4 py-2 hover:bg-gray-800">Cryptography</div>
                                {showCryptographyDetails && (
                                    <div className="pl-4">
                                        <Link to="/services/cryptography/rsa" className="block text-white px-4 py-2 hover:bg-gray-900">RSA</Link>
                                        <Link to="/services/cryptography/fhe" className="block text-white px-4 py-2 hover:bg-gray-900">Fully Homomorphic Encryption</Link>
                                        <Link to="/services/cryptography/zkp" className="block text-white px-4 py-2 hover:bg-gray-900">Zero Knowledge Proofs</Link>
                                    </div>
                                )}

                                <div onClick={() => setShowBackendDetails(!showBackendDetails)} className="px-4 py-2 hover:bg-gray-800">Backend Development</div>
                                {showBackendDetails && (
                                    <div className="pl-4">
                                        <Link to="/services/backend/api" className="block text-white px-4 py-2 hover:bg-gray-900">API Development</Link>
                                        <Link to="/services/backend/library-development" className="block text-white px-4 py-2 hover:bg-gray-900">Library Development</Link>
                                    </div>
                                )}

                                <div onClick={() => setShowCloudDetails(!showCloudDetails)} className="px-4 py-2 hover:bg-gray-800">Cloud Services</div>
                                {showCloudDetails && (
                                    <div className="pl-4">
                                        <Link to="/services/cloud/aws" className="block text-white px-4 py-2 hover:bg-gray-900">AWS</Link>
                                    </div>
                                )}
                            </div>
                        )}
                        <div onClick={() => setShowEducation(!showEducation)} className="px-4 py-2 hover:bg-gray-800">Education</div>
                        {showEducation && (
                            <div className="pl-4">
                                <Link to="/education/blockchain" className="block text-white px-4 py-2 hover:bg-gray-900">Blockchain</Link>
                                <Link to="/education/backend" className="block text-white px-4 py-2 hover:bg-gray-900">Backend</Link>
                                <Link to="/education/ml" className="block text-white px-4 py-2 hover:bg-gray-900">Machine Learning</Link>
                            </div>
                        )}
                        <Link to="/contact" className="hover:bg-gray-800 w-full ">
                            <div className='px-4 py-2 hover:bg-gray-800'>
                                Contact Us
                            </div>
                        </Link>
                    </div>
                )}
            </>

        )

    );
};

export default Navbar;
