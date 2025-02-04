import React from 'react';
import { Briefcase, GraduationCap,} from 'lucide-react';

export default function Resume() {
  const experience = [
    {
      title: 'Software Developer (Internship)',
      company: 'American Software Group',
      period: '07/2023   10/2023',
      description: 'Developed REST microservices using Java Spring Boot and Apache Kafka. Managed AWS services, including S3 and ECS for deployments. Created Docker images and deployed with Kubernetes. Designed MySQL tables and wrote PL/SQL stored procedures. Automated VPC creation with CloudFormation templates. Configured CI/CD pipelines with Jenkins for microservices deployment.'
    },
    {
      title: 'Cloud Associate',
      company: 'Wipro Ltd',
      period: '08/2022   02/2023',
      description: 'Managed and optimized Google Cloud environments, including Compute Engine, Cloud Storage, and Networking, ensuring efficient resource utilization and high availability.  Collaborated with cross-functional teams to implement cloud solutions tailored to client’s requirements, improving performance and scalability.Developed and maintained automation scripts using Terraform, Google Cloud SDK, and Cloud Deployment Manager to streamline cloud deployments and infrastructure management.  Assisted in cost optimization initiatives, monitoring resource utilization and implementing strategies for better resource management and auto-scaling.Developed and maintained documentation for cloud architecture, processes, and troubleshooting procedures for internal teams.'
    },
    {
      title: 'Cloud Engineer',
      company: 'Alanita Travels',
      period: '04/2020   08/2022 ',
      description: 'Provided technical support and assistance to developers, addressing Designed and maintained scalable AWS infrastructure for high-volume flight booking systems. Implemented CI/CD pipelines with Jenkins and GitLab CI, reducing deployment times by 50%. Utilized Kubernetes for container orchestration, ensuring high availability and scalability. Configured IAM policies and encryption to secure customer data and ensure compliance. Managed VPCs, load balancers, and VPNs to enhance network performance and reduce latency. Integrated Prometheus and Grafana for monitoring, reducing downtime by 30%.'
    }
  ];

  const education = [
    {
      degree: 'Masters Degree in Computer science',
      school: 'Lewis University',
      year: '03/2023   12/2024   Romeoville, Illinois'
    },
    {
      degree: 'Bachelors Degree in Computer Science',
      school: 'Prist University',
      year: '08/2016   05/2020   Thanjavur, TN, India'
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      
      {/* Experience Section */}
      <section>
  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
    <Briefcase size={24} />
    Experience
  </h3>

  {/* Timeline Container */}
  <div className="relative pl-8">
    {/* Continuous Vertical Line (Perfectly Connecting Dots) */}
    <div className="absolute left-[7px] top-0 w-[2px] h-full bg-white/30"></div>

    {experience.map((job, index) => (
      <div key={index} className="relative mb-6 flex items-start">
        {/* Dot Indicator (Placed Exactly on the Line) */}
        <div className="absolute left-[-4px] top-2 w-3 h-3 bg-[rgb(0,255,213)] rounded-full"></div>

        {/* Experience Box */}
        <div className="ml-6 p-6 rounded-lg shadow-sm bg-white/10 w-full">
          <h4 className="text-xl font-medium">{job.title}</h4>
          <p><span style={{ color: "rgb(0, 255, 213)", fontWeight: "bold" }}>{job.company}</span></p>
          <p className="text-sm">{job.period}</p>
          <p className="mt-2">{job.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>




      {/* Education Section */}
<section>
  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
    <GraduationCap size={24} />
    Education
  </h3>

  {/* Timeline Container */}
  <div className="relative pl-8">
    {/* Continuous Vertical Line (Connecting All Dots) */}
    <div className="absolute left-[7px] top-0 w-[2px] h-full bg-white/30"></div>

    {education.map((edu, index) => (
      <div key={index} className="relative mb-6 flex items-start">
        {/* Dot Indicator (Aligned with Vertical Line) */}
        <div className="absolute left-[-4px] top-2 w-3 h-3 bg-[rgb(0,255,213)] rounded-full"></div>

        {/* Education Box with Black Background */}
        <div className="ml-6 p-6 rounded-lg shadow-sm bg-white/10 text-white w-full">
          <h4 className="text-xl font-medium">{edu.degree}</h4>
          <p><span style={{ color: "rgb(0, 255, 213)", fontWeight: "bold" }}>{edu.school}</span></p>
          <p className="text-sm text-gray-300">{edu.year}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}