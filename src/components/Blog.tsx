import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: 'Best Practices for Kubernetes Security',
      date: '2024-03-15',
      excerpt: 'Learn about the essential security practices for your Kubernetes clusters.',
      readTime: '5 min read'
    },
    {
      title: 'Automating Infrastructure with Terraform',
      date: '2024-03-10',
      excerpt: 'A comprehensive guide to infrastructure as code using Terraform.',
      readTime: '7 min read'
    },
    {
      title: 'Monitoring Microservices with Prometheus',
      date: '2024-03-05',
      excerpt: 'Essential metrics and monitoring strategies for microservices architecture.',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="bg-white/10 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <div className="text-sm">{post.readTime}</div>
            </div>
            <time className="text-sm">{post.date}</time>
            <p className="mt-2">{post.excerpt}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}