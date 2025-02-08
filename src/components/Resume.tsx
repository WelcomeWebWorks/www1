import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

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
      description: "Managed and optimized Google Cloud environments, including Compute Engine, Cloud Storage, and Networking, ensuring efficient resource utilization and high availability.  Collaborated with cross-functional teams to implement cloud solutions tailored to client's requirements, improving performance and scalability.Developed and maintained automation scripts using Terraform, Google Cloud SDK, and Cloud Deployment Manager to streamline cloud deployments and infrastructure management.  Assisted in cost optimization initiatives, monitoring resource utilization and implementing strategies for better resource management and auto-scaling.Developed and maintained documentation for cloud architecture, processes, and troubleshooting procedures for internal teams."
    },
    {
      title: 'Cloud Engineer',
      company: 'Promaestro Techsource Pvt. Ltd.',
      period: '04/2020   08/2022 Hyderabad, India',
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
    },
    {
      degree: 'High School',
      school: 'Vikas-The Concept School',
      year: '2012   2016   Hyderabad, India'
    }
  ];

  const certifications = [
    {
      title: "DevOps Engineering on AWS",
      organization: "AWS Skill Builder",
      program: "DevOps Training Program",
      period: "February 2025 (23 Hours)",
      location: "Online",
      description: "Automating infrastructure, implementing continuous integration (CI) and continuous delivery (CD) pipelines, and using AWS services like CodePipeline, CodeBuild, and CloudWatch. Gained expertise in automating deployment processes, monitoring application performance"
    },
    {
      title: "AWS Certified SysOps Administrator – Associate",
      organization: "AWS Skill Builder",
      program: "Cloud Operations Training Program",
      period: "December 2024 (32 Hours)",
      location: "Online",
      description: "Managing scalable and highly available systems on AWS, monitoring AWS environments using CloudWatch, automating cloud operations, troubleshooting system issues, managing infrastructure with AWS Systems Manager"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      organization: "AWS Skill Builder",
      program: "Cloud Architecture Training Program",
      period: "February 2023 (51 Hours)",
      location: "Online",
      description: "Designing scalable and highly available cloud architectures, deploying AWS services, implementing cost optimization strategies, ensuring cloud security, and architecting resilient solutions using AWS best practices."
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      organization: "AWS Skill Builder",
      program: "Cloud and IT Professional Training Program",
      period: "December 2022 (36 Hours)",
      location: "Online",
      description: "The training covers cloud concepts, AWS services, security, architecture, and billing. This program reinforced my knowledge of core AWS services, cloud security, architecture, and billing while enhancing my ability to manage and optimize cloud solutions effectively."
    },
    {
      title: "Introduction to cloud computing",
      organization: "IBM",
      program: "Cloud Computing Training Program",
      period: "November 2020",
      location: "Online",
      description: "Understanding cloud computing concepts, exploring cloud service models (IaaS, PaaS, SaaS), working with cloud deployment models, and applying cloud technologies in real-world scenarios."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: 'calc(100% - 40px)',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const renderTimelineSection = (title: string, icon: React.ReactNode, items: any[]) => (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h3 
        className="text-2xl font-semibold mb-6 flex items-center gap-2"
        variants={itemVariants}
      >
        {icon}
        {title}
      </motion.h3>

      <div className="flex flex-col items-start relative pl-6">
        <motion.div 
          className="absolute left-[7px] top-[22px] w-[2px]"
          variants={lineVariants}
          style={{
            background: 'linear-gradient(180deg, #3086ff 50%, transparent 0%)',
            backgroundSize: '2px 20px'
          }}
        />

        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-start mb-12 relative w-full"
            variants={itemVariants}
          >
            <motion.div 
              className="absolute left-0 top-4 z-10"
              variants={dotVariants}
            >
              <div className="w-4 h-4 bg-[#3086ff] rounded-full border-4 border-[#1a1d21]" />
            </motion.div>

            <motion.div 
              className="ml-8 w-full"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <div className="p-6 rounded-lg bg-[#22262a]/50 backdrop-blur-sm border border-[#2a2e32] hover:border-[#3086ff]/50 transition-all duration-300">
                <h4 className="text-xl font-medium text-white">{item.title}</h4>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mt-1 text-gray-400">
                  <span className="text-[#3086ff] font-semibold">
                    {item.company || item.organization || item.school}
                  </span>
                  {item.program && (
                    <>
                      <span className="hidden md:block">•</span>
                      <span>{item.program}</span>
                    </>
                  )}
                  <span className="hidden md:block">•</span>
                  <span>{item.period || item.year}</span>
                </div>
                {item.location && (
                  <div className="mt-1 text-gray-400">
                    <span>{item.location}</span>
                  </div>
                )}
                {item.description && (
                  <p className="mt-4 text-gray-300 leading-relaxed">{item.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  return (
    <div className="space-y-8">
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-white">Resume</h2>
        <div className="w-12 h-1 rounded-full" 
          style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}>
        </div>
      </motion.div>
      
      {renderTimelineSection("Experience", <Briefcase size={24} />, experience)}
      {renderTimelineSection("Education", <GraduationCap size={24} />, education)}
      {renderTimelineSection("Nonformal Education", <Award size={24} />, certifications)}
    </div>
  );
}