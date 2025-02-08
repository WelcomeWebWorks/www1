import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, itemTransition } from './AnimatedSection';
import { Code2, Cloud, Terminal, Database } from 'lucide-react';

export default function About() {
  const skills = [
    {
      title: 'DevOps',
      icon: Terminal,
      description: 'I enjoy improving the speed and quality of delivery, automating workflows, and achieving CI/CD.'
    },
    {
      title: 'Cloud Engineer',
      icon: Cloud,
      description: 'I design, secure, and maintain an organization\'s cloud-based infrastructure and applications.'
    },
    {
      title: 'SRE',
      icon: Database,
      description: 'I focus on processes and tools that ensure the scalability, reliability, and availability of software systems.'
    },
    {
      title: 'Software Development',
      icon: Code2,
      description: 'I enjoy learning software development either for personal or specific purposes.'
    }
  ];

  const titles = ["Cloud", "DevOps", "SRE"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <div className="w-12 h-1 rounded-full" 
          style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}>
        </div>
      </div>

      <div className="space-y-8 mt-8">
        <section>
          <p className="text-gray-400 leading-relaxed">
            I am a{" "}
            <b>
              <span style={{ color: "#3086ff", fontWeight: "bold" }}>
                {titles[currentTitleIndex]}
              </span>{" "}
              <span className="text-white font-bold">Engineer</span>
            </b>{" "}
            with extensive experience in designing, implementing, and maintaining cloud-based infrastructures. My expertise lies in leveraging cutting-edge cloud technologies and software engineering principles to optimize system performance, scalability, automate workflows, and implement container orchestration solutions like Kubernetes. I have a proven track record of successfully managing cloud environments and collaborating with cross-functional teams to deliver innovative solutions with over <span style={{ color: "#3086ff", fontWeight: "bold" }}>3+ years</span> of hands-on experience supporting, automating, and optimizing mission-critical deployments in Cloud while also leveraging configuration management, CI/CD, and DevOps processes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">What I'm Doing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemTransition}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-[#2a2e32] hover:bg-[#2f3338] transition-all"
                >
                  <Icon size={40} className="text-[#3086ff] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* <section>
          <h2 className="text-2xl font-bold mb-6">Clients</h2>
          <div className="flex flex-wrap gap-8">
            <img src="https://via.placeholder.com/200x80?text=Client+1" alt="Client 1" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/200x80?text=Client+2" alt="Client 2" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </section> */}
      </div>
    </motion.div>
  );
}
