import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
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

  return (
    <section id="contact" className="py-20 bg-navy-light">
      <div className="container-custom">
        <h2 className="section-heading text-white">Get In Touch</h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
            <p className="text-lg text-white mb-6">
              I'm open to new opportunities and collaborations. Whether you have a question, project idea, or just want to say hi, my inbox is always open!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:drashtifefar7@gmail.com" 
                className="flex items-center text-white hover:text-teal transition-colors"
              >
                <Mail size={20} className="mr-3" />
                <span>drashtifefar7@gmail.com</span>
              </a>
               
              <a 
                href="https://github.com/Patel-7777" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-white hover:text-teal transition-colors"
              >
                <Github size={20} className="mr-3" />
                <span>github.com/Patel-7777</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/drashti-fefar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-white hover:text-teal transition-colors"
              >
                <Linkedin size={20} className="mr-3" />
                <span>linkedin.com/in/drashti-fefar</span>
              </a>
            </div>
          </motion.div>
          
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;