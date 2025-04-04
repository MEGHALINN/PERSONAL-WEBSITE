import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="sparkle-container">
          <motion.div 
            className="sparkle top-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >✦</motion.div>
          <motion.div 
            className="sparkle top-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >✦</motion.div>
          <motion.div 
            className="sparkle bottom-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >✦</motion.div>
          <motion.div 
            className="sparkle bottom-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >✦</motion.div>
          
          <motion.div 
            className="profile-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          >
            <div className="profile-image">
              {/* Replace with your actual profile image */}
              <img src="../..//myprof.png" alt="Megha B" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="title-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Web Developer
          </motion.h1>
          
          <motion.div 
            className="intro-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2>HI I'm Megha B<span className="wave">ツ</span></h2>
            <p>
            A passionate Computer Science Engineering student from Kochi with a keen interest in crafting engaging digital experiences. I believe technology should not only solve problems but also bring joy through thoughtful and seamless interactions. While I enjoy exploring all aspects of development, I find myself drawn toward the creativity in frontend design and the challenge of translating ideas into visually compelling and intuitive interfaces. When I’m not coding or designing, you’ll find me immersed in painting, gaming, listening to music, or indulging in a bit of scrapbook journaling.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;