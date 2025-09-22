import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Slikk',
      period: 'September 2025 - Present',
      description: [
        'Took end-to-end ownership of designing and implementing a logistics microservice.',
        'Implemented AWS Lambda functions to process product images asynchronously in the background.'
      ],
      skills: ['Django', 'AWS Lambda', 'AWS SQS', 'PostgreSQL', 'PIL'],
    },
    {
      title: 'Software Engineer',
      company: 'Atheer Labs',
      period: 'April 2024 - August 2025',
      description: [
        'Developed an aggregator app from scratch, integrating the functionalities of Pronto and Atheer products.',
        'Developed a customer support portal to streamline internal task workflows.',
        'Improved copilot microservice for enhanced AI functionality.',
        'Built and optimized job summary feature for concise job reviews.',
      ],
      skills: ['Django', 'FastAPI', 'OpenAI', 'Llama', 'MongoDB', 'Redis'],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Pronto Technologies (Acquired by Atheer Labs)',
      period: 'June 2023 - March 2024',
      description: [
        'Implemented the integration of OpenAI APIs and explored their application within the Pronto product.',
        'Engaged in a use case involving sentiment analysis.',
        'Contributed to the development of the IdP service for the Pronto product.',
        'Implemented fundamental feature enhancements within the Pronto product.',
      ],
      skills: ['Django', 'Go', 'FastAPI', 'OpenAI', 'Machine Learning', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'Trainee Software Engineer',
      company: 'Pronto Technologies (Acquired by Atheer Labs)',
      period: 'Dec 2022 - June 2023',
      description: [
        'Received training on Git, frontend, and backend technology stacks.',
        'Engaged in enhancing logging to familiarize with the Pronto product.',
        'Contributed to bug fixes and feature enhancements.',
      ],
      skills: ['Git', 'Django', 'Go', 'IDP', 'Supertoken', 'PostgreSQL', 'Docker', 'Microservices'],
    },
    {
      title: 'Data Science Intern',
      company: 'Celebal Technologies',
      period: 'June 2022 - July 2022',
      description: [
        'Gained experience in Machine Learning technologies.',
        'Developed an ML project within the healthcare sector aimed at predicting occurrences of diabetes and heart diseases.',
      ],
      skills: ['Python', 'Scikit-Learn', 'TensorFlow', 'Keras'],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-4xl font-bold text-center mb-12 text-white">Work Experience</h2>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
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
                      <h3 className="font-semibold text-xl text-white ml-2">{exp.company}</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar size={18} className="text-teal mr-2" />
                      <p className="text-sm text-slate-light">{exp.period}</p>
                    </div>
                    <p className="font-medium text-lg text-white mb-4 md:mb-0">{exp.title}</p>
                  </div>
                  
                  <div className="md:w-3/4">
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-light flex">
                          <span className="text-teal mr-2">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-badge bg-navy-light text-slate-light border border-teal/20 mr-2 mb-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
