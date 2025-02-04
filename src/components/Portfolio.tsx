import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure using Terraform and Ansible.',
      technologies: ['AWS', 'Terraform', 'Ansible'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kubernetes Cluster Management',
      description: 'Implemented and managed production Kubernetes clusters.',
      technologies: ['Kubernetes', 'Docker', 'Helm'],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'CI/CD Pipeline Optimization',
      description: 'Optimized deployment pipelines using GitHub Actions.',
      technologies: ['GitHub Actions', 'Docker', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold">Portfolio</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}