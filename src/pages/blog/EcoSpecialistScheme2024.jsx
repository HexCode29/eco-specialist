import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcoSpecialistScheme2024 = () => {
  return (
    <>
      <Helmet>
        <title>ECO Specialist Scheme 2024: Complete Guide | EcoSpecialist</title>
        <meta name="description" content="Everything you need to know about the ECO Specialist scheme, including eligibility criteria, available improvements, and how to apply for up to £10,000 in government funding." />
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
                Featured
              </span>
              <span className="text-[#248E3D] font-semibold">Government Grants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ECO Specialist Scheme 2024: Complete Guide to Free Home Improvements
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>James Mitchell</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>15 March 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>

            <div className="h-96 md:h-[30rem] rounded-2xl overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center bottom' }}
                alt="Modern energy efficient home with solar panels, insulation, and green technology improvements"
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
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
                The ECO Specialist Scheme 2024 represents a significant opportunity for UK homeowners to access up to £10,000 in government funding for energy efficiency improvements. This comprehensive guide will walk you through everything you need to know about eligibility, available improvements, and the application process.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What is the ECO Specialist Scheme?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Energy Company Obligation (ECO) Specialist Scheme is a government initiative designed to help low-income and vulnerable households improve their home's energy efficiency. The scheme provides funding for various home improvements that can significantly reduce energy bills and carbon emissions.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Eligibility Criteria</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To qualify for the ECO Specialist Scheme, you must meet specific criteria:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>You must be a homeowner or private tenant</li>
                <li>Your household income must be below £31,000 per year</li>
                <li>You must receive certain benefits (Pension Credit, Universal Credit, etc.)</li>
                <li>Your property must have an EPC rating of D, E, F, or G</li>
                <li>You must not have received ECO funding in the last 12 months</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Available Improvements</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The ECO Specialist Scheme covers a wide range of energy efficiency improvements:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Insulation</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Cavity wall insulation</li>
                    <li>• Loft insulation</li>
                    <li>• Solid wall insulation</li>
                    <li>• Floor insulation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Heating Systems</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Heat pumps</li>
                    <li>• Boiler upgrades</li>
                    <li>• Heating controls</li>
                    <li>• Radiator upgrades</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How to Apply</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The application process for the ECO Specialist Scheme is straightforward:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Check your eligibility using our online tool</li>
                <li>Contact an approved ECO installer</li>
                <li>Receive a free home assessment</li>
                <li>Get a detailed quote for improvements</li>
                <li>Sign the agreement and begin work</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Benefits of the Scheme</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Participating in the ECO Specialist Scheme offers numerous benefits:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Up to £10,000 in free funding</li>
                <li>Significant reduction in energy bills</li>
                <li>Improved home comfort and warmth</li>
                <li>Reduced carbon footprint</li>
                <li>Increased property value</li>
                <li>No upfront costs required</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Next Steps</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                If you're interested in applying for the ECO Specialist Scheme, the first step is to check your eligibility. Our team of experts can guide you through the entire process and help you access the maximum funding available.
              </p>

              <div className="bg-[#248E3D]/10 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6">
                  Contact our ECO Specialist team today for a free eligibility check and home assessment. We'll help you access up to £10,000 in government funding for your home improvements.
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

export default EcoSpecialistScheme2024;
