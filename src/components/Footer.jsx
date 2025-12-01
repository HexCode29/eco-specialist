import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 This feature isn't implemented yet, but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📧 Newsletter Signup",
      description: "🚧 This feature isn't implemented yet, but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-white text-gray-900 w-full border-t-4 border-[#248E3D]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <img
                src="/src/images/eco-logo.png"
                alt="EcoSpecialist logo"
                className="h-32 md:h-40 w-auto"
              />
            </div>
            <div className="flex space-x-4 mt-[25px]">
              {[
                { icon: Facebook, name: 'Facebook' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Instagram, name: 'Instagram' }
              ].map(({ icon: Icon, name }) => (
                <button
                  key={name}
                  onClick={() => handleSocialClick(name)}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#248E3D] transition-colors duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold text-[#248E3D]">Quick Links</span>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'ECO4', path: '/eco4' },
                { name: 'Contact', path: '/contact' },
                { name: 'FAQs', path: '/faqs' },
                // { name: 'Blog', path: '/blog' } // Archived
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Grant Types */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold text-[#248E3D]">ECO4</span>
            <div className="flex flex-col space-y-2">
              <Link to="/eco4" className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300">
                What is ECO4?
              </Link>
              <a href="/#apply" className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300">
                Check Eligibility
              </a>
              <Link to="/contact" className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300">
                Speak to an Expert
              </Link>
            </div>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold text-[#248E3D]">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#248E3D]" />
                <a href="tel:08009991590" className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300">
                  0800 999 1590
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#248E3D]" />
                <a href="mailto:info@ecospecialist.co.uk" className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300">
                  info@ecospecialist.co.uk
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#248E3D] mt-1" />
                <span className="text-gray-600">
                  Birmingham Office:<br />
                  1 Cranmore Drive, Shirley,<br />
                  Solihull, West Midlands, B90 4RZ
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <span className="text-lg font-semibold text-[#248E3D] block mb-3">Newsletter</span>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:border-[#248E3D] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 EcoSpecialist. All rights reserved. | Designed by Onixs.AI
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-600 hover:text-[#248E3D] transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;