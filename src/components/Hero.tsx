import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-teal">Drashti Fefar</span>
            </h1>
            <p className="text-lg sm:text-l text-gray-300 mb-6">
             I build intelligent systems and scalable backend solutions.
            </p>
            <p className="text-lg sm:text-l text-gray-300 mb-6">
              Software Developer and AI Engineer passionate about transforming complex problems into elegant, efficient solutions using modern technologies.
            </p>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/Patel-7777" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-teal transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/drashti-fefar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:drashtifefar7@gmail.com" 
                className="text-gray-300 hover:text-teal transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary bg-teal hover:bg-teal/80 text-navy"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline border-teal text-teal hover:bg-teal/10"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-full overflow-hidden aspect-square border-4 border-navy shadow-xl">
              <img 
                src="/drashti.jpg" 
                alt="Drashti Fefar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;