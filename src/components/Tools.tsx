import React from 'react';

export default function Tools() {
  const tools = {
    'Cloud Platforms': ['AWS', 'GCP'],
    'Operating Systems': ['Windows Server', 'Linux'],
    'Databases': ['MySQL', 'MongoDB', 'DynamoDB'],
    'Compute & Storage': ['Serverless', 'EC2', 'S3', 'Auto Scaling'],
    'Containerization & Orchestration': ['Kubernetes', 'Docker'],
    'Infrastructure as Code': ['Terraform', 'AWS CloudFormation'],
    'Security & Access Management': ['IAM', 'VPC', 'VPN'],
    'DevOps & CI/CD': ['GitHub Actions', 'Jenkins', 'CI/CD', 'DevOps'],
    'Networking & Performance': ['CDN', 'Load Balancing']
  };
  

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Technologies & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(tools).map(([category, items]) => (
          <div key={category} className="bg-white/10 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}