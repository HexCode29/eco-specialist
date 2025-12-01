import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolarPanelGrants2024 = () => {
  return (
    <>
      <Helmet>
        <title>Solar Panel Grants: Maximizing Your Savings | EcoSpecialist</title>
        <meta name="description" content="Discover how to combine solar panel installations with government grants to maximize your energy savings in 2024." />
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
                Solar Energy
              </span>
              <span className="text-gray-500 text-sm">5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solar Panel Grants: Maximizing Your Savings
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>David Wilson</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>10 March 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <div className="h-96 md:h-[30rem] rounded-2xl overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center bottom' }}
                alt="Solar panels installed on residential roof with blue sky and modern home"
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
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
                Solar panels are one of the most effective ways to reduce your energy bills and carbon footprint. With various government grants and schemes available, 2024 is an excellent time to invest in solar technology. Here's how to maximize your savings.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Solar Panels?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Solar panels convert sunlight into electricity, providing clean, renewable energy for your home. With electricity prices rising and environmental concerns growing, solar panels offer both financial and environmental benefits.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Benefits</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduce electricity bills by up to 70%</li>
                    <li>• Earn money through Smart Export Guarantee</li>
                    <li>• Increase property value by 4-6%</li>
                    <li>• Payback period of 6-10 years</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Benefits</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduce carbon footprint by 1.5 tonnes/year</li>
                    <li>• Use clean, renewable energy</li>
                    <li>• Contribute to net zero targets</li>
                    <li>• Minimal maintenance required</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Available Grants and Schemes</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-[#248E3D]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Export Guarantee (SEG)</h3>
                  <p className="text-gray-700 mb-3">
                    Energy companies pay you for excess electricity you export to the grid. Rates vary but typically range from 3-6p per kWh.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Available to all solar panel owners</li>
                    <li>• Requires MCS certification</li>
                    <li>• Payments made quarterly</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ECO4 Scheme</h3>
                  <p className="text-gray-700 mb-3">
                    Provides funding for solar panels as part of broader energy efficiency improvements for low-income households.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Up to £10,000 funding available</li>
                    <li>• Must meet income criteria</li>
                    <li>• Includes other energy improvements</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Authority Grants</h3>
                  <p className="text-gray-700 mb-3">
                    Many local authorities offer grants and loans for solar panel installations. Check with your local council for available schemes.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Varies by location</li>
                    <li>• May include interest-free loans</li>
                    <li>• Often combined with other improvements</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">System Sizing and Costs</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The right system size depends on your energy usage and roof space:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">System Size</th>
                      <th className="border border-gray-300 p-3 text-left">Annual Output</th>
                      <th className="border border-gray-300 p-3 text-left">Typical Cost</th>
                      <th className="border border-gray-300 p-3 text-left">Suitable For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">3kW</td>
                      <td className="border border-gray-300 p-3">2,500 kWh</td>
                      <td className="border border-gray-300 p-3">£4,000 - £6,000</td>
                      <td className="border border-gray-300 p-3">Small homes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">4kW</td>
                      <td className="border border-gray-300 p-3">3,500 kWh</td>
                      <td className="border border-gray-300 p-3">£5,000 - £7,500</td>
                      <td className="border border-gray-300 p-3">Medium homes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">6kW</td>
                      <td className="border border-gray-300 p-3">5,000 kWh</td>
                      <td className="border border-gray-300 p-3">£7,000 - £10,000</td>
                      <td className="border border-gray-300 p-3">Large homes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Maximizing Your Savings</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To get the most from your solar panel investment:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Optimize usage:</strong> Use appliances during daylight hours</li>
                <li><strong>Battery storage:</strong> Store excess energy for evening use</li>
                <li><strong>Smart controls:</strong> Automate energy usage patterns</li>
                <li><strong>Regular maintenance:</strong> Keep panels clean and efficient</li>
                <li><strong>Monitor performance:</strong> Track energy generation and usage</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Installation Process</h2>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Site Survey:</strong> Assessment of roof suitability and shading</li>
                <li><strong>Planning Permission:</strong> Usually not required for domestic installations</li>
                <li><strong>Installation:</strong> Typically takes 1-2 days</li>
                <li><strong>Commissioning:</strong> Testing and connection to the grid</li>
                <li><strong>Registration:</strong> MCS certification and SEG application</li>
              </ol>

              <div className="bg-[#248E3D]/10 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Go Solar?</h3>
                <p className="text-gray-700 mb-6">
                  Our solar experts can help you choose the right system, access available grants, and maximize your energy savings. Get a free quote and site survey today.
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

export default SolarPanelGrants2024;
