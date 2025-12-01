import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Heart, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring exceptional service and support.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We operate with complete transparency and honesty, building lasting relationships with our clients.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest green energy technologies and grant opportunities.'
    }
  ];

  const team = [
    {
      name: 'James Mitchell',
      role: 'Managing Director',
      experience: '15+ years',
      description: 'Leading expert in government energy grants with extensive experience in renewable energy sector.'
    },
    {
      name: 'Sarah Thompson',
      role: 'Head of Grants',
      experience: '12+ years',
      description: 'Specialist in ECO schemes and government funding with a track record of securing millions in grants.'
    },
    {
      name: 'David Wilson',
      role: 'Technical Director',
      experience: '18+ years',
      description: 'Certified energy assessor and installation expert ensuring quality and compliance in all projects.'
    }
  ];


  return (
    <>
      <Helmet>
        <title>About EcoSpecialist - Leading Green Energy Grant Experts | Birmingham</title>
        <meta name="description" content="Learn about EcoSpecialist's mission to help homeowners access government energy grants. 8+ years experience, £50M+ grants secured, 95% success rate." />
      </Helmet>

      {/* Hero Section - White/Green Theme */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4caf50]/5 to-[#388e3c]/5"></div>
        
        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#4caf50]/20 rounded-full"></div>
        <div className="absolute top-32 left-32 w-12 h-12 bg-[#4caf50]/25 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#4caf50]/18 rounded-full"></div>
        <div className="absolute top-20 right-16 w-24 h-24 bg-[#4caf50]/22 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-14 h-14 bg-[#4caf50]/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-18 h-18 bg-[#4caf50]/16 rounded-full"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-[#4caf50]">EcoSpecialist</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At EcoSpecialist, we believe that every homeowner should have access to 
              energy-efficient solutions that reduce costs and environmental impact. 
              Our mission is to bridge the gap between government funding and homeowners 
              who need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#4caf50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">EcoSpecialist?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Government Approved',
                description: 'Fully accredited and approved by all major government grant schemes'
              },
              {
                title: 'No Upfront Costs',
                description: 'All assessments and applications are completely free with no hidden charges'
              },
              {
                title: 'Expert Knowledge',
                description: 'Deep understanding of all available grants and eligibility requirements'
              },
              {
                title: 'End-to-End Service',
                description: 'From initial assessment to final installation, we handle everything'
              },
              {
                title: 'Quality Guarantee',
                description: 'All work is guaranteed and carried out by certified professionals'
              },
              {
                title: 'Local Expertise',
                description: 'Based in Birmingham with extensive knowledge of the local area'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;