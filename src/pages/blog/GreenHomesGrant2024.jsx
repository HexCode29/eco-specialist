import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GreenHomesGrant2024 = () => {
  return (
    <>
      <Helmet>
        <title>Green Homes Grant: Local Authority Schemes 2024 | EcoSpecialist</title>
        <meta name="description" content="Updated information on local authority Green Homes Grant schemes and how to access funding in your area for 2024." />
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
                Government Grants
              </span>
              <span className="text-gray-500 text-sm">4 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Green Homes Grant: Local Authority Schemes 2024
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Michael Brown</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>5 March 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>4 min read</span>
              </div>
            </div>

            <div className="h-96 md:h-[30rem] rounded-2xl overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center bottom' }}
                alt="Energy efficient home with green technology features and modern design"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
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
                The Green Homes Grant Local Authority Delivery (LAD) scheme continues to provide funding for energy efficiency improvements across the UK. With updated guidelines for 2024, here's everything you need to know about accessing funding in your area.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What is the Green Homes Grant?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Green Homes Grant Local Authority Delivery scheme provides funding to local authorities to help low-income households improve their home's energy efficiency. This includes insulation, heating upgrades, and renewable energy installations.
              </p>

              <div className="bg-[#248E3D]/10 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Up to £10,000 funding per household</li>
                  <li>• Available through local authorities</li>
                  <li>• Focus on low-income households</li>
                  <li>• Covers multiple improvement types</li>
                  <li>• No upfront costs required</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Eligibility Criteria</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To qualify for the Green Homes Grant LAD scheme, you must meet specific criteria:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Income Requirements</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Household income under £31,000</li>
                    <li>• Receiving certain benefits</li>
                    <li>• Living in fuel poverty</li>
                    <li>• Vulnerable households prioritized</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Property Requirements</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• EPC rating of D, E, F, or G</li>
                    <li>• Owner-occupied or private rented</li>
                    <li>• Not received ECO funding recently</li>
                    <li>• Suitable for improvements</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Available Improvements</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Green Homes Grant covers a wide range of energy efficiency improvements:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Primary Measures</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Insulation:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Cavity wall insulation</li>
                        <li>• Solid wall insulation</li>
                        <li>• Loft insulation</li>
                        <li>• Floor insulation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Heating:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Heat pumps</li>
                        <li>• Biomass boilers</li>
                        <li>• Solar thermal</li>
                        <li>• Heating controls</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Secondary Measures</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Windows & Doors:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Double glazing</li>
                        <li>• Triple glazing</li>
                        <li>• Energy-efficient doors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Other:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Draught proofing</li>
                        <li>• Hot water tank insulation</li>
                        <li>• Pipe insulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How to Apply</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The application process varies by local authority, but generally follows these steps:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Check Availability:</strong> Contact your local authority to see if funding is available</li>
                <li><strong>Eligibility Check:</strong> Complete an initial assessment of your circumstances</li>
                <li><strong>Home Assessment:</strong> Professional survey of your property</li>
                <li><strong>Quote:</strong> Receive detailed quotes for recommended improvements</li>
                <li><strong>Installation:</strong> Work carried out by certified installers</li>
                <li><strong>Completion:</strong> Final inspection and certification</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Local Authority Variations</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Each local authority has its own approach to the Green Homes Grant scheme:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Variations</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Different income thresholds</li>
                  <li>• Varying funding amounts</li>
                  <li>• Different improvement priorities</li>
                  <li>• Unique application processes</li>
                  <li>• Local installer requirements</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Benefits of the Scheme</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Benefits</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Up to £10,000 free funding</li>
                    <li>• No upfront costs</li>
                    <li>• Reduced energy bills</li>
                    <li>• Increased property value</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Benefits</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduced carbon emissions</li>
                    <li>• Improved air quality</li>
                    <li>• Contribution to net zero</li>
                    <li>• Sustainable energy use</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tips for Success</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To maximize your chances of receiving funding:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Apply early as funding is limited</li>
                <li>Ensure you meet all eligibility criteria</li>
                <li>Provide accurate information in your application</li>
                <li>Be flexible with improvement options</li>
                <li>Work with approved installers only</li>
              </ul>

              <div className="bg-[#248E3D]/10 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your Application?</h3>
                <p className="text-gray-700 mb-6">
                  Our team can help you navigate the Green Homes Grant application process, check your eligibility, and connect you with approved installers in your area. Get expert guidance today.
                </p>
                <Link
                  to="/#apply"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Free Assessment</span>
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

export default GreenHomesGrant2024;
