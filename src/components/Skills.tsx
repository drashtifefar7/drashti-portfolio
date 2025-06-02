import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: ['Python', 'Go', 'C++', 'SQL'],
    },
    {
      name: 'Frameworks & Libraries',
      skills: ['Django', 'FastAPI', 'Flask', 'Scikit-Learn', 'OpenCV', 'go-chi'],
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    },
    {
      name: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'GitHub', 'Jenkins', 'RabbitMQ'],
    },
    {
      name: 'AI & Machine Learning',
      skills: ['OpenAI', 'Llama', 'Langchain', 'LLMs', 'Sentiment Analysis', 'Vector Embeddings'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-navy-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading text-teal">Skills</h2>
          <p className="text-slate mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I work with
          </p>
        </motion.div>
        {/* First row: 3 cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {skillCategories.slice(0, 3).map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 bg-navy-light border border-slate-dark/20"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={itemVariants}
                      className="skill-badge bg-navy border border-teal/20 text-slate-light hover:border-teal/40 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Second row: 2 cards centered */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skillCategories.slice(3).map((category, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              className="card overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 bg-navy-light border border-slate-dark/20"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={itemVariants}
                      className="skill-badge bg-navy border border-teal/20 text-slate-light hover:border-teal/40 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;