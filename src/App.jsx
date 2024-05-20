import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Add Navigate here
import Navbar from './components/Navbar';
import SmartContractPage from './services/blockchain/smart-contract/page.jsx';
import BlockchainIntegrationPage from './services/blockchain/blockchain-integration/page.jsx';
import BlockchainSecurityPage from './services/blockchain/blockchain-security/page.jsx';
import DefiPage from './services/blockchain/DeFi/page.jsx';
import DecentralizedIdentityPage from './services/blockchain/decentralizedIdentity/page.jsx';
import TokenDevelopmentPage from './services/blockchain/token-development/page.jsx';
import RSAPage from './services/cryptography/RSA/page.jsx';
import FHE from './services/cryptography/FHE/page.jsx';
import ZKP from './services/cryptography/ZKP/page.jsx';
import APIPage from "./services/backend/API/page.jsx"
import SecuritySolutionsPage from './services/backend/security-solutions/page.jsx';
import LibraryDevelopmentPage from './services/backend/library-development/page.jsx';
import AWSServicesPage from './services/cloud/aws/page.jsx';
import ArchitecturePage from './services/ArchitectureDesign/page.jsx';
import AboutPage from './components/AboutPage/page.jsx';
import ContactUs from './components/ContactUs/page.jsx';
import BlockchainEducation from './components/education/blockchain/page.jsx';

import IntroVideo from './components/IntroVideo.jsx'; // Ensure IntroVideo is imported
import HomePage from './components/HomePage/page.jsx';
import Footer from './components/Footer/page.jsx';



function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <Router>
      <>
        {introFinished ? (
          <>
            <Navbar />
            
            <div className='content'>
              <Routes>
                <Route path='/services/blockchain/smart-contract' element={<SmartContractPage />} />
                <Route path='/services/blockchain/blockchain-integration' element={<BlockchainIntegrationPage />} />
                <Route path='/services/blockchain/blockchain-security' element={<BlockchainSecurityPage />} />
                <Route path='/services/blockchain/defi' element={<DefiPage />} />
                <Route path='/services/blockchain/decentralized-identity' element={<DecentralizedIdentityPage />} />
                <Route path='/services/blockchain/token-development' element={<TokenDevelopmentPage />} />
                <Route path='/services/cryptography/rsa' element={<RSAPage />} />
                <Route path='/services/cryptography/fhe' element={<FHE />} />
                <Route path='/services/cryptography/zkp' element={<ZKP />} />
                <Route path='/services/backend/api' element={<APIPage />} />
                {/* <Route path='/services/backend/security-solutions' element={<SecuritySolutionsPage />} /> */}
                <Route path='/services/backend/library-development' element={<LibraryDevelopmentPage />} />
                <Route path='/services/cloud/aws' element={<AWSServicesPage />} />
                <Route path='/services/architecture' element={<ArchitecturePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/education/blockchain' element={< BlockchainEducation />} />
                <Route path='/education/backend' element={ < BlockchainEducation /> } />
                <Route path='/education/ml' element={< BlockchainEducation />} />

                {/* <Route path='/' element={<Navigate replace to="/about" />} /> */}

                {/* Redirect to a default route or show default content */}
                <Route path="/" element={ <HomePage /> } />
              </Routes>
            </div>

            < Footer />
          </>
        ) : (
          <>
          <IntroVideo onVideoEnd={() => setIntroFinished(true)} />
          </>
        )}
      </>
    </Router>
  );
}

export default App;