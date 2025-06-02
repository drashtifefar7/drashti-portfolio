import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-navy-dark">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-white">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-lg mb-6 text-slate-light">
An Enthusiastic , Motivated fresher and a Diligent learner pursued Bachelors of Information Technology from Charotar University of Science and Technology (CHARUSAT), Anand(2019-2023). Leadership comes to me naturally and I thrive in the groups. I am extremely adaptive and hence can successfully get accustomed to new skills. I am always curious which allows me to be self-taught. I have excellent presentation and interpersonal skills which always gives me an upper hand. If there is one thing that I can do best then that is innovate, which gives birth to improving existing technology.
              </p>
              
              <p className="text-lg mb-6 text-slate-light">
                I'm a software engineer with a focus on building robust backend systems, integrating AI-driven solutions, and developing scalable applications. My journey in tech started with a strong grasp of core programming principles and has grown into a versatile skill set spanning backend architecture and AI integration.
              </p>
              
              <p className="text-lg text-slate-light">
                When I'm not coding, you'll find me playing sports like volleyball, badminton or capturing nature through painting.
              </p>
            </div>
            
            <div>
              <div className="card p-6 mb-6 bg-navy-light">
                <div className="flex items-start mb-4">
                  <span className="p-2 bg-navy rounded-full text-teal mr-4">
                    <Award size={24} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Achievements</h3>
                    <ul className="text-slate-light space-y-2">
                      <li>• Second Runner-Up in Hack4Good Hackathon by IEEE Community</li>
                      <li>• Ranked in Top 300 out of 7000 candidates in Data-O-Thon</li>
                      <li>• District level volleyball player</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;