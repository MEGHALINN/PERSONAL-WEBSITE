import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaCss3Alt, 
  FaPython, 
  FaDatabase, 
  FaGamepad,
  FaHtml5,
  FaJs,
  FaNodeJs
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    { name: 'React', percentage: 70, icon: <FaReact />, color: '#61DAFB' },
    { name: 'CSS', percentage: 70, icon: <FaCss3Alt />, color: '#264de4' },
    { name: 'Python', percentage: 60, icon: <FaPython />, color: '#3776AB' },
    { name: 'MySQL', percentage: 60, icon: <FaDatabase />, color: '#4479A1' },
    { name: 'Unity', percentage: 55, icon: <FaGamepad />, color: '#000000' },
    { name: 'JavaScript', percentage: 65, icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Node.js', percentage: 50, icon: <FaNodeJs />, color: '#339933' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Skills</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="skills-content">
          <motion.div 
            className="skills-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h3>My Skills & Experiences</h3>
            <p>
              As a programmer, my experiences include:
            </p>
            <ul className="experience-list">
              <li>
                <span className="experience-highlight">Shop Management Software:</span> Developed using Python and MySQL with a Python-based MySQL interface.
              </li>
              <li>
                <span className="experience-highlight">Endless Runner Game:</span> Created using Unity Engine, enhancing my game development skills.
              </li>
              <li>
                <span className="experience-highlight">Front-End Web Developer Intern:</span> Worked at Deltasoft Consulting Pvt Ltd, contributing to projects like WatchWise, FontFriend, and Votify.
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="skills-bars"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                variants={itemVariants}
              >
                <div className="skill-info">
                  <div className="skill-name">
                    <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                    <h4>{skill.name}</h4>
                  </div>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ backgroundColor: skill.color }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;