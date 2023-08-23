import React, { useState, useEffect } from 'react';
import '../assets/style/scrolltotopbutton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="tooltip-container-scroll">
      <div
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
        <span className="scroll">Go Top</span>
      </div>
    </div>
  );
};

export default ScrollToTopButton;