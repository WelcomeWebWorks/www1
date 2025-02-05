import { useState } from 'react';
import { User, FileText, Briefcase, BookOpen, Phone, PenTool as Tool, Mail, MapPin, Download, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Tools from './components/Tools';
import Contact from './components/Contact';

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
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'www.linkedin.com/in/saisampathc' },
    { icon: Twitter, href: 'https://twitter.com' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about': return <About />;
      case 'resume': return <Resume />;
      case 'portfolio': return <Portfolio />;
      case 'blog': return <Blog />;
      case 'tools': return <Tools />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1d21] text-white">
      <div className="geometric-background" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#22262a] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16 space-x-4">

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center gap-4">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    activeTab === id 
                      ? 'bg-[#00ffd5] text-black' 
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2e32]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button - Centered */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#2a2e32]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Centered */}
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
                      ? 'bg-[#00ffd5] text-black' 
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2e32]'
                  } justify-center`}
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
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Profile Card */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="card sticky top-24">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://res.cloudinary.com/dmleutllp/image/upload/v1738698147/www1_img1_rfinrl.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full mb-4"
              />
              <div className="space-y-2">
                <h1 className="text-lg font-bold">SAI SAMPATH C PUSULURI</h1>
                <p className="text-sm text-gray-400">DevOps | Cloud Engineer</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Phone size={14} />
                  <span>+1 3312267566</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail size={14} />
                  <span>saisampathc2@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} />
                  <span>Naperville, Illinois, USA</span>
                </div>
              </div>
              
              <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-[#00ffd5] text-black rounded-lg hover:bg-opacity-90 transition-all">
  <a
    href="https://res.cloudinary.com/dmleutllp/image/upload/v1738710600/Sai_Sampath_CV_5_uaxlx3.pdf"
    download="Sai_Sampath_CV_5.pdf"  // The downloaded file will have this name
    className="flex items-center gap-2"
  >
    <Download size={16} />
    <span>Download CV</span>
  </a>
</button>


              {/* Social Links */}
              <div className="mt-6 flex gap-4 justify-center">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00ffd5] transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="card">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
