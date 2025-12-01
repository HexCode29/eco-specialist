import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Search, ChevronDown, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'ECO4', path: '/eco4' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
    // { name: 'Blog', path: '/blog' }, // Archived
  ];

  const handleSocialClick = (platform) => {
    toast({
      title: `Navigating to ${platform}`,
      description: "🚧 This feature isn't implemented yet, but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleApplyNow = () => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to apply section
      const applySection = document.getElementById('apply');
      if (applySection) {
        applySection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home with hash
      navigate('/#apply');
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:08009991590';
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      
      // Define searchable content with their paths
      const searchableContent = [
        { keywords: ['eco4', 'eco 4', 'eco scheme', 'government scheme'], path: '/eco4', title: 'ECO4 Scheme' },
        { keywords: ['about', 'about us', 'company'], path: '/about', title: 'About Us' },
        { keywords: ['contact', 'contact us', 'get in touch'], path: '/contact', title: 'Contact Us' },
        { keywords: ['quote', 'get quote', 'free quote'], path: '/#apply', title: 'Get Free Quote' },
        // { keywords: ['blog', 'articles', 'news'], path: '/blog', title: 'Blog' }, // Archived
        { keywords: ['home', 'main page'], path: '/', title: 'Home' }
      ];

      // Find matching content
      const foundContent = searchableContent.find(content => 
        content.keywords.some(keyword => query.includes(keyword))
      );

      if (foundContent) {
        // Navigate to found content
        window.location.href = foundContent.path;
        toast({
          title: "✅ Found!",
          description: `Taking you to: ${foundContent.title}`,
        });
      } else {
        // No content found, redirect to contact page
        window.location.href = '/contact';
        toast({
          title: "📞 Contact Us",
          description: `Couldn't find "${searchQuery}". We'll help you find what you're looking for!`,
        });
      }
      
      handleSearchClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleSearchClose();
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white text-gray-900 py-2 px-4 hidden md:block w-full">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">We Are Social:</span>
            <div className="flex items-center space-x-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <button key={index} onClick={() => handleSocialClick('Social Media')} className="hover:opacity-80 transition-opacity">
                  <Icon className="w-4 h-4 text-[#248E3D]" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#248E3D]" />
              <a href="mailto:info@ecospecialist.co.uk" className="hover:text-[#248E3D] transition-colors duration-300">
                info@ecospecialist.co.uk
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#248E3D]" />
              <span>1 Cranmore Drive, Shirley, Solihull</span>
            </div>
            <button 
              onClick={handleApplyNow}
              className="bg-[#248E3D] text-white font-bold px-4 py-1 rounded-xl text-xs hover:bg-[#1e6b32] transition-colors"
            >
              GET QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
            isScrolled ? 'bg-[#248E3D] shadow-lg border-b-2 border-[#248E3D]' : 'bg-[#248E3D]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 text-white">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white rounded-xl px-2 py-1 shadow-sm">
                <img
                  src="/src/images/eco-logo-header.png"
                  alt="EcoSpecialist logo"
                  className="h-14 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 font-medium transition-colors duration-300 text-white hover:text-white/80`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.hasDropdown && item.subMenu && (
                     <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-900 rounded-xl shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                        {item.subMenu.map(subItem => (
                          <Link key={subItem.name} to={subItem.path} className="block px-4 py-3 hover:bg-[#248E3D] hover:text-white text-sm transition-colors duration-200">
                            {subItem.name}
                          </Link>
                        ))}
                     </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={handleCallNow}
                className="bg-white text-[#248E3D] hover:bg-gray-100 px-6 py-3 rounded-xl flex items-center space-x-2 font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
              <button
                onClick={handleApplyNow}
                className="bg-white text-[#248E3D] hover:bg-gray-100 font-bold px-6 py-3 rounded-xl flex items-center space-x-2 transition-colors"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={handleSearchClick} className="hover:text-white/80 transition-colors text-white">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-black border-t border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        className={`font-medium py-2 transition-colors duration-300 hover:text-[#248E3D] flex justify-between items-center ${
                          location.pathname === item.path ? 'text-[#248E3D]' : 'text-white'
                        }`}
                        onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                      >
                        {item.name}
                        {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                      </Link>
                      {item.hasDropdown && item.subMenu && (
                        <div className="pl-4 pt-2 space-y-2">
                          {item.subMenu.map(subItem => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block text-gray-300 hover:text-[#248E3D]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex flex-col space-y-4 pt-4 border-t border-gray-700">
                    <button
                      onClick={() => {
                        handleCallNow();
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-[#248E3D] text-white hover:bg-[#1e6b32] px-6 py-3 rounded-xl flex items-center justify-center space-x-2 font-semibold transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </button>
                    <Link
                      to="/home"
                      className="btn-primary text-center flex items-center justify-center space-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Search Popup */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleSearchClose}
            />
            
            {/* Search Modal */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Search</h2>
                <button
                  onClick={handleSearchClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="p-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for grants, articles, or information..."
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#248E3D] focus:border-transparent"
                    autoFocus
                  />
                </div>
                
                {/* Search Suggestions */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'ECO4 Scheme',
                      'Energy Efficiency',
                      'Free Insulation',
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setSearchQuery(suggestion)}
                        className="px-4 py-2 bg-gray-100 hover:bg-[#248E3D] hover:text-white text-gray-700 rounded-full text-sm transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={handleSearchClose}
                    className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#248E3D] text-white rounded-xl hover:bg-[#1e6b32] transition-colors font-semibold"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;