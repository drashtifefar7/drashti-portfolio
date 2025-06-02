import React from 'react';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-navy-dark border-t border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-sm mt-1 flex items-center">
              <Heart size={14} className="mr-2 text-red-500" />
              Made with passion and code
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Patel-7777" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/drashti-fefar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:drashtifefar7@gmail.com" 
              className="text-white hover:text-teal transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Drashti Fefar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;