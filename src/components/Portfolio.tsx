import { motion } from 'framer-motion';
import { pageTransition, itemTransition } from './AnimatedSection';

export default function Portfolio() {
  const projects = [
    {
      title: 'Introduction to Cloud Computing',
      description: 'Introduction to Cloud Computing',
      technologies: ['IBM',],
      image: 'https://res.cloudinary.com/dvzsmoule/image/upload/v1739010656/sai_certificate_cd8w0g.png'
    },

    {
      title: 'Cloud Essentials',
      description: 'Cloud Essentials',
      technologies: ['AWS',],
      image: 'https://res.cloudinary.com/dvzsmoule/image/upload/v1739010683/sai_certificate_ch1lum.jpg'
    }

  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-white">Portfolio</h2>
        <div className="w-12 h-1 rounded-full" 
          style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemTransition}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#3086ff] text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}