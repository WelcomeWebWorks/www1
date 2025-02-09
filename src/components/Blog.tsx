import { motion } from 'framer-motion';
import { pageTransition, itemTransition } from './AnimatedSection';

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
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-white">Blog</h2>
        <div className="w-12 h-1 rounded-full" 
          style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {posts.map((post, index) => (
          <motion.div
            key={index}
            variants={itemTransition}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            className="bg-[#22262a]/50 backdrop-blur-sm border border-[#2a2e32] rounded-lg p-6 hover:border-[#3086ff]/50 transition-all"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <div className="text-sm">{post.readTime}</div>
            </div>
            <time className="text-sm">{post.date}</time>
            <p className="mt-2">{post.excerpt}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
              Read more →
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}