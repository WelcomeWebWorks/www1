import { motion } from 'framer-motion';
import { pageTransition, itemTransition } from './AnimatedSection';

export default function Contact() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-white">Contact me</h2>
        <div className="w-12 h-1 rounded-full" 
          style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}>
        </div>
      </div>

      <motion.div variants={itemTransition} className="mt-8">
        <p className="text-gray-400 text-lg">
          Open for opportunities: <span className="text-[#3086ff] font-semibold">Yes</span>
        </p>
      </motion.div>

      <motion.form 
        variants={itemTransition}
        className="mt-8 space-y-6"
        action="https://formsubmit.co/saisampathc2@gmail.com" 
        method="POST"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            variants={itemTransition}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#2e2f36] border border-[#2e2f36] 
                       text-[#aeb0b8] placeholder-[#aeb0b8]/70 focus:outline-none focus:border-[#3086ff]
                       transition-all"
              style={{
                backgroundColor: "#2e2f36",
                borderColor: "#2e2f36",
                color: "#aeb0b8"
              }}
            />
          </motion.div>

          <motion.div 
            variants={itemTransition}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#2e2f36] border border-[#2e2f36] 
                       text-[#aeb0b8] placeholder-[#aeb0b8]/70 focus:outline-none focus:border-[#3086ff]
                       transition-all"
              style={{
                backgroundColor: "#2e2f36",
                borderColor: "#2e2f36",
                color: "#aeb0b8"
              }}
            />
          </motion.div>
        </div>

        <motion.div 
          variants={itemTransition}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#2e2f36] border border-[#2e2f36] 
                     text-[#aeb0b8] placeholder-[#aeb0b8]/70 focus:outline-none focus:border-[#3086ff]
                     transition-all resize-none"
            style={{
              backgroundColor: "#2e2f36",
              borderColor: "#2e2f36",
              color: "#aeb0b8"
            }}
          />
        </motion.div>

        <motion.button
          variants={itemTransition}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-8 py-3 rounded-full text-white font-medium 
                   hover:opacity-90 transition-all duration-300 flex items-center gap-2"
          style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}
        >
          <span>Submit</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
