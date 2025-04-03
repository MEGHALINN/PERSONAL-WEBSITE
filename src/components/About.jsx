import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="image-wrapper">
              {/* Replace with your actual image */}
              <img src="../../images/myprof.png" alt="Megha B" />
              <div className="image-bg-shape"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>Megha B</h3>
            <h4>Passionate Developer & Tech Enthusiast</h4>
            <p>
              I am an undergraduate in BTech Computer Science at Model Engineering College. 
              I am a passionate music lover, artist, programmer and an avid reader. 
              My interests are Cyber Security and Game Development. My hobbies include 
              reading, a little bit of art and occasional gaming.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">BTech Computer Science</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Pettah, Trivandrum, Kerala</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">meghab2004@gmail.com</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="primary-btn">Contact Me</a>
              <a href="/assets/resume.pdf" className="outline-btn" download>Download Resume</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;