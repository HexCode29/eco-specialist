import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsulationGrants2024 = () => {
  return (
    <>
      <Helmet>
        <title>Insulation Grants: Types and Benefits Explained | EcoSpecialist</title>
        <meta name="description" content="Learn about different types of insulation available through government grants and their energy-saving benefits in 2024." />
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
                Insulation
              </span>
              <span className="text-gray-500 text-sm">7 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Insulation Grants: Types and Benefits Explained
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Emma Clarke</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>8 March 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>

            <div className="h-96 md:h-[30rem] rounded-2xl overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center bottom' }}
                alt="Professional installing wall insulation in modern home with thermal materials"
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
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
                Proper insulation is one of the most cost-effective ways to improve your home's energy efficiency. With various government grants available, you can significantly reduce your energy bills while making your home more comfortable. Here's everything you need to know about insulation grants and their benefits.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Insulation Matters</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Insulation acts as a barrier to heat flow, keeping your home warm in winter and cool in summer. Without proper insulation, you could be losing up to 35% of your heating through walls, 25% through the roof, and 15% through floors.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Loss Statistics</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#248E3D] mb-2">35%</div>
                    <div className="text-gray-700">Through walls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#248E3D] mb-2">25%</div>
                    <div className="text-gray-700">Through roof</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#248E3D] mb-2">15%</div>
                    <div className="text-gray-700">Through floors</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Types of Insulation</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cavity Wall Insulation</h3>
                  <p className="text-gray-700 mb-4">
                    Fills the gap between inner and outer walls with insulating material. Most effective for homes built after 1920.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Save up to £300 per year</li>
                        <li>• Quick installation (2-4 hours)</li>
                        <li>• Minimal disruption</li>
                        <li>• 25-year guarantee</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cost:</h4>
                      <p className="text-gray-700 text-sm">£500 - £1,500 (often free with grants)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Loft Insulation</h3>
                  <p className="text-gray-700 mb-4">
                    Insulates the space between your ceiling and roof. Recommended thickness is 270mm for maximum efficiency.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Save up to £250 per year</li>
                        <li>• Easy DIY installation</li>
                        <li>• Immediate effect</li>
                        <li>• 40-year lifespan</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cost:</h4>
                      <p className="text-gray-700 text-sm">£300 - £800 (often free with grants)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solid Wall Insulation</h3>
                  <p className="text-gray-700 mb-4">
                    Applied to the inside or outside of solid walls. More expensive but highly effective for older properties.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Save up to £500 per year</li>
                        <li>• Improves property value</li>
                        <li>• Reduces condensation</li>
                        <li>• 30-year guarantee</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cost:</h4>
                      <p className="text-gray-700 text-sm">£5,000 - £15,000 (grants available)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Floor Insulation</h3>
                  <p className="text-gray-700 mb-4">
                    Insulates suspended timber floors or solid floors. Particularly effective for ground floor rooms.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Save up to £150 per year</li>
                        <li>• Warmer floors</li>
                        <li>• Reduces drafts</li>
                        <li>• Improves comfort</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cost:</h4>
                      <p className="text-gray-700 text-sm">£300 - £1,200 (grants available)</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Available Grants</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-[#248E3D]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ECO4 Scheme</h3>
                  <p className="text-gray-700 mb-3">
                    Provides up to £10,000 for insulation improvements for low-income households.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Must receive certain benefits</li>
                    <li>• Household income under £31,000</li>
                    <li>• Property EPC rating D-G</li>
                    <li>• Covers all insulation types</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Authority Grants</h3>
                  <p className="text-gray-700 mb-3">
                    Many councils offer grants and loans for insulation improvements.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Varies by location</li>
                    <li>• May include interest-free loans</li>
                    <li>• Often combined with other improvements</li>
                    <li>• Check with your local council</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Installation Process</h2>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Assessment:</strong> Professional survey of your property</li>
                <li><strong>Grant Application:</strong> Check eligibility and apply for funding</li>
                <li><strong>Installation:</strong> Professional installation by certified installers</li>
                <li><strong>Inspection:</strong> Quality check and certification</li>
                <li><strong>Guarantee:</strong> Receive warranty documentation</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Maximizing Benefits</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To get the most from your insulation investment:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Combine different types of insulation for maximum effect</li>
                <li>Ensure proper ventilation to prevent condensation</li>
                <li>Use certified installers for quality workmanship</li>
                <li>Take advantage of available grants and schemes</li>
                <li>Consider insulation as part of broader energy improvements</li>
              </ul>

              <div className="bg-[#248E3D]/10 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Insulate Your Home?</h3>
                <p className="text-gray-700 mb-6">
                  Our insulation experts can help you choose the right type of insulation, access available grants, and ensure professional installation. Get a free assessment and quote today.
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

export default InsulationGrants2024;
