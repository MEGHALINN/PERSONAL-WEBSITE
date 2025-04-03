import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
   
    {
      id: 1,
      title: 'Endless Runner Game',
      category: 'game',
      image: '../../images/EndlessRunner.png',
      github: 'https://github.com/MEGHALINN',
      description: 'An engaging endless runner game developed using Unity Engine with custom character controllers, obstacle generation, and score tracking.',
      technologies: ['Unity', 'C#', 'Game Design'],
    },
    {
      id: 2,
      title: 'WatchWise',
      category: 'web',
      image: '../../images/WatchWise.png',
      github: 'https://github.com/MEGHALINN',
      description: 'A movie recommendation platform developed during my internship at Deltasoft Consulting, featuring personalized recommendations and user reviews.',
      technologies: ['React', 'Node.js', 'CSS'],
    },
    {
      id: 3,
      title: 'FontFriend',
      category: 'web',
      image: '../../images/FontFriend.png',
      github: 'https://github.com/MEGHALINN',
      description: 'A web application for font exploration and pairing, allowing designers to preview and compare different font combinations.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 4,
      title: 'Votify',
      category: 'web',
      image: '../../images/Votify.jpeg',
      github: 'https://github.com/MEGHALINN',
      description: 'An online voting platform with secure authentication and real-time results visualization developed during my internship.',
      technologies: ['React', 'Firebase', 'Chart.js'],
    }
  ];

  const filters = [
   
   
  ];

  const filteredProjects = activeFilter === 'all' 
  ? projects.slice(0, 4)  // Ensure only 4 projects are shown
  : projects.filter(project => project.category === activeFilter).slice(0, 4);

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
      transition: { duration: 0.5 }
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Projects</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Check out some of my recent work
          </p>
        </motion.div>
        
        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <motion.button 
                      className="view-project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openProject(project)}
                    >
                      <FaSearch />
                    </motion.button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="project-category">{project.category}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="github-link">
          <a 
            href="https://github.com/MEGHALINN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="primary-btn"
          >
            <FaGithub /> View All Projects on GitHub
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div 
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={closeProject}>×</button>
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                  <div className="technologies">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="modal-links">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="primary-btn"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;