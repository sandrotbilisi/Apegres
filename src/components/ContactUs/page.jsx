import React, { useState } from 'react';
import styles from './App.module.css';


const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your message has been sent!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-20">
<div className={`${styles.maxWidth} w-full space-y-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-8 shadow-lg border border-gray-700`}>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Contact Us</h2>
          <p className="mt-2 text-center text-sm text-gray-300">Have a question or want to work together?</p>
          <p className="text-md text-gray-400 mt-4">Email us directly at <a href="mailto:apegres@gmail.com" className="text-blue-300 hover:text-blue-400">apegres@gmail.com</a></p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className={`rounded-md shadow-sm -space-y-px flex flex-col ${styles.gapp}`}>
            <div>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className={`appearance-none rounded-md relative block k w-full px-7 py-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500  ${ styles.padding } `}
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className={`appearance-none rounded-md relative block k w-full px-7 py-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500  ${ styles.padding } `}
                placeholder="Email address" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className={`appearance-none rounded-md relative block k w-full px-7 py-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500  ${ styles.padding } `}
                placeholder="Message" 
                value={formData.message} 
                onChange={handleChange}>
              </textarea>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
