import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeatPumpInstallation2024 = () => {
  return (
    <>
      <Helmet>
        <title>Heat Pump Installation: What to Expect in 2024 | EcoSpecialist</title>
        <meta name="description" content="A comprehensive guide to heat pump installation, costs, and the Boiler Upgrade Scheme grants available in 2024." />
      </Helmet>

      {/* Back Button */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-[#248E3D] hover:text-[#1e6b32] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#248E3D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Heat Pumps
              </span>
              <span className="text-gray-500 text-sm">6 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Heat Pump Installation: What to Expect in 2024
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Sarah Thompson</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>12 March 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>

            <div className="h-96 md:h-[30rem] rounded-2xl overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center bottom' }}
                alt="Modern heat pump installation outside residential home with professional technician"
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Heat pumps are becoming increasingly popular as homeowners look for efficient, eco-friendly heating solutions. With the Boiler Upgrade Scheme providing up to £7,500 in grants, 2024 is an excellent time to consider heat pump installation. Here's everything you need to know.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What is a Heat Pump?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A heat pump is an energy-efficient heating system that extracts heat from the air, ground, or water and transfers it into your home. Unlike traditional boilers that burn fuel to create heat, heat pumps simply move existing heat from one place to another, making them incredibly efficient.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Types of Heat Pumps</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Air Source</h3>
                  <p className="text-gray-700 mb-4">
                    Most common type, extracts heat from outside air. Suitable for most homes and easier to install.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Lower installation cost</li>
                    <li>• Quick installation</li>
                    <li>• Good for most climates</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ground Source</h3>
                  <p className="text-gray-700 mb-4">
                    Extracts heat from the ground via buried pipes. More efficient but requires more space.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Higher efficiency</li>
                    <li>• Consistent performance</li>
                    <li>• Requires garden space</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Source</h3>
                  <p className="text-gray-700 mb-4">
                    Uses nearby water sources like lakes or rivers. Most efficient but requires water access.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Highest efficiency</li>
                    <li>• Stable temperature</li>
                    <li>• Requires water source</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Installation Process</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Heat pump installation typically takes 1-3 days depending on the type and complexity:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Site Survey:</strong> Assessment of your property and heating requirements</li>
                <li><strong>Planning:</strong> Design of the heat pump system and pipework</li>
                <li><strong>Installation:</strong> Fitting the outdoor unit and indoor components</li>
                <li><strong>Commissioning:</strong> Testing and optimization of the system</li>
                <li><strong>Handover:</strong> Demonstration and documentation</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Costs and Grants</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Heat pump costs vary depending on the type and size of your home:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Costs (Before Grants)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Air source heat pump: £8,000 - £15,000</li>
                  <li>• Ground source heat pump: £15,000 - £25,000</li>
                  <li>• Water source heat pump: £12,000 - £20,000</li>
                </ul>
              </div>

              <div className="bg-[#248E3D]/10 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Available Grants</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Boiler Upgrade Scheme: Up to £7,500</li>
                  <li>• ECO4 Scheme: Up to £10,000</li>
                  <li>• Local Authority Grants: Varies by area</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Benefits of Heat Pumps</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Up to 400% efficiency compared to traditional boilers</li>
                <li>Significant reduction in carbon emissions</li>
                <li>Lower running costs over time</li>
                <li>Can provide both heating and cooling</li>
                <li>Long lifespan (15-20 years)</li>
                <li>Minimal maintenance requirements</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Is a Heat Pump Right for You?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Heat pumps work best in well-insulated homes. Consider these factors:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Your home's insulation level</li>
                <li>Available outdoor space for the unit</li>
                <li>Current heating system and radiators</li>
                <li>Budget and available grants</li>
                <li>Long-term energy savings goals</li>
              </ul>

              <div className="bg-[#248E3D]/10 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Install a Heat Pump?</h3>
                <p className="text-gray-700 mb-6">
                  Our certified heat pump installers can help you choose the right system and access maximum grant funding. Get a free quote and eligibility check today.
                </p>
                <Link
                  to="/#apply"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeatPumpInstallation2024;
