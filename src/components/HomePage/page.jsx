import React, { useState, useEffect } from 'react';
import bgVideo from '../../assets/videos/blue-bitcoin-rotate.mp4'
import { Link } from 'react-router-dom';
import styles from "./App.module.css"

const phrases = [" Here!", " Now!"];

const HomePage = () => {
  const [typedText, setTypedText] = useState(" ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 150;
    let typingTimeout;

    if (!isDeleting && typedText === phrases[phraseIndex]) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else if (isDeleting) {
      typingTimeout = setTimeout(() => setTypedText(typedText.slice(0, typedText.length - 1)), deletingSpeed);
    } else {
      typingTimeout = setTimeout(() => setTypedText(phrases[phraseIndex].slice(0, typedText.length + 1)), typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [typedText, phraseIndex, isDeleting]);

  return (
    <div className="bg-gray-900 font min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      <video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
        <source src={bgVideo} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>
      <div className="z-10 p-10 text-center relative">
        <h1 className="text-8xl font-bold text  mb-4">
          <span className={`text-transparent bg-clip-text bg-gradient-to-tr from-yellow-200 to-yellow-600 ${styles.font}`}>Build your future <br /><span>{" ‎  "} {typedText} </span> </span>
        </h1>
        <p className={`text-3xl font text-purple-700 mb-8 ${styles.font}`}>
          Discover solutions that empower your digital transformation
        </p>
        <Link
          to="contact"
          className={`inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-110 ${styles.font}`}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
