import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: 'Content Moderation System',
      image: '/moderation.png',
      github: 'https://github.com/Patel-7777/moderation_system',
    },
    {
      title: 'AI-Powered Document Query System',
      image: '/document.png',
      github: 'https://github.com/Patel-7777/pdf-chatbot',
    },
    {
      title: 'URL Shortener',
      image: '/url.png',
      github: 'https://github.com/Patel-7777/url_shortner',
    },
  ];

  const additionalProjects = [
    {
      title: 'Face Recognition',
      image: '/face.png',
      github: 'https://github.com/Patel-7777/ComputerVisionProjects',
    },
    {
      title: 'Diseases Detection',
      image: '/diseases.png',
      github: 'https://github.com/Patel-7777/ML-in-Health-Care',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-navy">
      <div className="container-custom">
        <h2 className="section-heading text-white">Projects</h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="card overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 bg-navy-light border border-slate-dark/20"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {additionalProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="card overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 bg-navy-light border border-slate-dark/20"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;