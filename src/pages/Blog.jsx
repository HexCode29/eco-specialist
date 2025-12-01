import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const handleReadMore = (title) => {
    toast({
      title: `Reading: ${title}`,
      description: "🚧 This feature isn't implemented yet, but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  const featuredPost = {
    title: 'ECO Specialist Scheme 2024: Complete Guide to Free Home Improvements',
    excerpt: 'Everything you need to know about the ECO Specialist scheme, including eligibility criteria, available improvements, and how to apply for up to £10,000 in government funding.',
    author: 'James Mitchell',
    date: '15 March 2024',
    readTime: '8 min read',
    category: 'Government Grants',
    image: 'Featured blog post about ECO Specialist scheme with modern home improvements',
    link: '/blog/eco-specialist-scheme-2024'
  };

  const blogPosts = [
    {
      title: 'Heat Pump Installation: What to Expect in 2024',
      excerpt: 'A comprehensive guide to heat pump installation, costs, and the Boiler Upgrade Scheme grants available.',
      author: 'Sarah Thompson',
      date: '12 March 2024',
      readTime: '6 min read',
      category: 'Heat Pumps',
      image: 'Modern heat pump installation outside residential home with professional technician',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      slug: 'heat-pump-installation-2024',
      link: '/blog/heat-pump-installation-2024'
    },
    {
      title: 'Solar Panel Grants: Maximizing Your Savings',
      excerpt: 'Discover how to combine solar panel installations with government grants to maximize your energy savings.',
      author: 'David Wilson',
      date: '10 March 2024',
      readTime: '5 min read',
      category: 'Solar Energy',
      image: 'Solar panels installed on residential roof with blue sky and modern home',
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      slug: 'solar-panel-grants-2024',
      link: '/blog/solar-panel-grants-2024'
    },
    {
      title: 'Insulation Grants: Types and Benefits Explained',
      excerpt: 'Learn about different types of insulation available through government grants and their energy-saving benefits.',
      author: 'Emma Clarke',
      date: '8 March 2024',
      readTime: '7 min read',
      category: 'Insulation',
      image: 'Professional installing wall insulation in modern home with thermal materials',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      slug: 'insulation-grants-2024',
      link: '/blog/insulation-grants-2024'
    },
    {
      title: 'Green Homes Grant: Local Authority Schemes 2024',
      excerpt: 'Updated information on local authority Green Homes Grant schemes and how to access funding in your area.',
      author: 'Michael Brown',
      date: '5 March 2024',
      readTime: '4 min read',
      category: 'Government Grants',
      image: 'Energy efficient home with green technology features and modern design',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      slug: 'green-homes-grant-2024',
      link: '/blog/green-homes-grant-2024'
    },
    {
      title: 'Energy Efficiency: Simple Steps to Reduce Bills',
      excerpt: 'Practical tips and advice for improving your home\'s energy efficiency without major renovations.',
      author: 'Lisa Johnson',
      date: '3 March 2024',
      readTime: '6 min read',
      category: 'Energy Saving',
      image: 'Smart home energy monitoring system and efficient appliances in modern kitchen',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      slug: 'energy-efficiency-2024',
      link: '/blog/energy-efficiency-2024'
    },
    {
      title: 'Warm Homes Discount: How to Apply and Qualify',
      excerpt: 'Step-by-step guide to applying for the Warm Homes Discount and understanding eligibility requirements.',
      author: 'Robert Taylor',
      date: '1 March 2024',
      readTime: '5 min read',
      category: 'Government Support',
      image: 'Elderly couple staying warm in energy efficient home with cozy interior',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      slug: 'warm-homes-discount-2024',
      link: '/blog/warm-homes-discount-2024'
    }
  ];

  const categories = [
    'All Posts',
    'Government Grants',
    'Heat Pumps',
    'Solar Energy',
    'Insulation',
    'Energy Saving',
    'Government Support'
  ];

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Energy Grants Blog - Latest News & Guides | EcoSpecialist</title>
        <meta name="description" content="Stay updated with the latest energy grant news, guides, and tips. Expert advice on ECO Specialist, heat pumps, solar panels, and government funding schemes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#248E3D]/5 to-[#1e6b32]/5"></div>
        
        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#248E3D]/20 rounded-full"></div>
        <div className="absolute top-32 left-32 w-12 h-12 bg-[#248E3D]/25 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#248E3D]/18 rounded-full"></div>
        <div className="absolute top-20 right-16 w-24 h-24 bg-[#248E3D]/22 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-14 h-14 bg-[#248E3D]/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-18 h-18 bg-[#248E3D]/16 rounded-full"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Energy Grants <span className="text-[#248E3D]">Blog</span>
            </h1>
            <span className="text-[#248E3D] font-bold tracking-widest uppercase text-sm">LATEST NEWS & GUIDES</span>
          </motion.div>
        </div>
      </section>

      

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug || index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="h-48">
                  <img 
                    className="w-full h-full object-cover"
                    alt={post.image}
                    src={post.imageUrl || "https://images.unsplash.com/photo-1595872018818-97555653a011?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#248E3D] font-semibold text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={post.link || '#'}
                    className="mt-4 text-[#248E3D] font-semibold hover:text-[#1e6b32] transition-colors flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay <span className="text-gradient">Updated</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest energy grant news, 
              tips, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "📧 Newsletter Subscription",
                    description: "🚧 This feature isn't implemented yet, but don't worry! You can request it in your next prompt! 🚀",
                  });
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:border-[#248E3D] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Blog;