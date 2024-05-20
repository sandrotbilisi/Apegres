 import React, { useEffect } from 'react';
 import Video from '../assets/videos/02.Tech Logo intro Update Short.mp4'
 
 export default function IntroVideo({ onVideoEnd }) {
    useEffect(() => {
      const videoElement = document.getElementById('intro-video');
      const handleVideoEnd = () => {
        onVideoEnd(); // Call the passed function when the video ends
      };
  
      videoElement.addEventListener('ended', handleVideoEnd);
  
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }, [onVideoEnd]); // Depend on onVideoEnd to recreate the effect if the function changes
  
    return (
      <video id="intro-video" autoPlay muted controls={false}>
        <source src={Video} type="video/mp4" />
      </video>
    );
  }
  