import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-16 right-4 bg-gray-800 p-2 rounded-lg cursor-pointer bg-cyan-blue opacity-30 hover:bg-cyan-blue hover:opacity-80"
          onClick={scrollToTop}
        >
          <FaArrowUp size={14} color="#fff" />
        </div>
      )}
    </div>
  );
};
