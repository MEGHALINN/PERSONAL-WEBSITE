import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGamepad, FaServer, FaMobileAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'With experience in React, Node.js, JavaScript, HTML, CSS, and MySQL, I have worked as a Front-End Web Developer Intern at Deltasoft Consulting Pvt Ltd. I contributed to projects like WatchWise, FontFriend, and Votify, building responsive and user-friendly interfaces.'
    },
    {
      icon: <FaGamepad />,
      title: 'Game Development',
      description: 'I have hands-on experience in Unity Game Development, having created an Endless Runner Game. I actively participate in game development communities like GDC MEC and continuously improve my skills to build engaging and immersive gaming experiences.'
    },
    {
      icon: <FaServer />,
      title: 'Database Management',
      description: "Experienced in designing and implementing database solutions using MySQL. I've developed systems like Shop Management Software that efficiently handle data storage, retrieval, and management while ensuring data integrity and security."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          
        </div>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              variants={itemVariants}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;