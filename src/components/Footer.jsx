import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaAngleUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="scroll-top">
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaAngleUp />
        </motion.button>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>MEGHA</h2>
            <p>Python Programmer | Web Developer | Game Developer</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <motion.a 
                href="https://github.com/MEGHALINN" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/megha-b-mb"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Megha B. All Rights Reserved. 
            <span className="heart-icon">
              Made with <FaHeart /> 
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;