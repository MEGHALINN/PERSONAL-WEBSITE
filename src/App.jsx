import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const sectionVariants = {
    hidden: (direction) => ({
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
        duration: 0.8
      }
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <motion.div
          className="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>MEGHA B</h1>
          <p>Loading portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main className="content-wrapper">
        <Hero />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom="right"
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom="left"
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom="right"
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom="left"
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
