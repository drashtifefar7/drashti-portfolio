import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Building2, Calendar } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = [
    {
      institution: 'Charotar University of Science and Technology',
      degree: 'Bachelor\'s Degree in Information Technology',
      year: '2023',
      grade: '9.56 CGPA, 3rd position at Department level',
    },
    {
      institution: 'Nalanda Vidhyalaya',
      degree: 'Higher Secondary School (PCM)',
      year: '2019',
      grade: '92.67%, 6th position at School level',
    },
    {
      institution: 'New Era Public School',
      degree: 'Secondary School',
      year: '2017',
      grade: 'Served as Educational Public Relation Officer'
    },
  ];

  return (
    <section id="education" className="py-20 bg-navy-dark">
      <div className="container-custom">
        <h2 className="section-heading text-white">Education</h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card p-6 hover:shadow-lg transition-shadow bg-navy-light"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/4">
                  <div className="flex mb-2">
                    <div className="w-8 flex-shrink-0 flex items-start justify-center">
                      <Building2 size={20} className="text-teal" />
                    </div>
                    <h3 className="font-semibold text-xl text-white ml-2">{edu.institution}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <Calendar size={18} className="text-teal mr-2" />
                    <p className="text-sm text-gray-400">{edu.year}</p>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="flex items-center mb-2">
                    <GraduationCap size={18} className="text-teal mr-2" />
                    <p className="font-medium text-lg text-white">{edu.degree}</p>
                  </div>
                  <p className="text-gray-300">{edu.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;