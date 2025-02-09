import { useState } from 'react';
import { User, FileText, Briefcase, BookOpen, Phone, PenTool as Tool, Mail, MapPin, Download, Menu, X, Github, Linkedin } from 'lucide-react';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Tools from './components/Tools';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'tools', label: 'Tools', icon: Tool },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saisampathc' },
    { icon: X, href: 'https://x.com/yourusername' },
    { icon: Mail, href: 'mailto:saisampathc2@gmail.com' }
  ];

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">
        {activeTab === 'about' && <About key="about" />}
        {activeTab === 'resume' && <Resume key="resume" />}
        {activeTab === 'portfolio' && <Portfolio key="portfolio" />}
        {activeTab === 'blog' && <Blog key="blog" />}
        {activeTab === 'tools' && <Tools key="tools" />}
        {activeTab === 'contact' && <Contact key="contact" />}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1d21] text-white">
      <div className="geometric-background" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#22262a] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16 space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    activeTab === id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2e32]'
                  }`}
                  style={activeTab === id ? {
                    backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)"
                  } : {}}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#2a2e32]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#22262a] border-t border-[#2a2e32]">
            <div className="container mx-auto px-4 py-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg ${
                    activeTab === id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2e32]'
                  } justify-center mb-2`}
                  style={activeTab === id ? {
                    backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)"
                  } : {}}
                >
                  <Icon size={20} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-6 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          {/* Profile Card */}
          <div className="w-full lg:w-[420px] lg:flex-shrink-0">
            <div className="card lg:sticky lg:top-24">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://res.cloudinary.com/dvzsmoule/image/upload/v1738963865/sai_image_bs4anu.jpg"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4 md:mb-6 border-4 border-[#2a2e32] shadow-lg"
                />
                <div className="space-y-2 md:space-y-3">
                  <h1 className="text-lg md:text-xl font-bold">SAI SAMPATH C PUSULURI</h1>
                  <p className="text-base md:text-lg text-white">DevOps | Cloud Engineer</p>
                  
                  {/* Social Links */}
                  <div className="py-4 border-t border-b border-[#2a2e32] my-4">
                    <div className="flex gap-4 md:gap-6 justify-center">
                      {socialLinks.map(({ icon: Icon, href }, index) => (
                        <a
                          key={index}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative social-icon social-icon-hover bg-white rounded-full w-12 h-12 flex items-center justify-center transition-all hover:shadow-lg"
                        >
                          <Icon 
                            size={24} 
                            className="text-[#3f345f] hover:text-[#3086ff] transition-colors"
                          />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                    <Phone size={16} />
                    <span>+1 6502604477</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                    <Mail size={16} />
                    <a 
                      href="mailto:saisampathc2@gmail.com"
                      className="hover:text-[#3086ff] transition-colors"
                    >
                      saisampathc2@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                    <MapPin size={16} />
                    <span>Naperville, Illinois</span>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_the_U.S..svg/768px-Flag_of_the_U.S..svg.png?20221027022216"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_the_U.S..svg/768px-Flag_of_the_U.S..svg.png?20221027022216"
                      alt="USA"
                      className="w-5 h-3 inline-block ml-1"
                    />
                  </div>
                </div>
                
                <button 
                  className="mt-6 md:mt-8 flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-white rounded-lg hover:opacity-90 transition-all"
                  style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}
                >
                  <a
                    href="https://res.cloudinary.com/dmleutllp/image/upload/v1738710600/Sai_Sampath_CV_5_uaxlx3.pdf"
                    download="Sai_Sampath_CV_5.pdf"
                    className="flex items-center gap-2"
                  >
                    <Download size={16} />
                    <span>Download CV</span>
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="card">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
