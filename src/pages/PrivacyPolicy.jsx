import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - EcoSpecialist | Data Protection & Privacy</title>
        <meta name="description" content="Learn how EcoSpecialist protects your personal data and privacy. Our comprehensive privacy policy explains data collection, usage, and your rights." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-12 bg-white overflow-hidden">
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
              Privacy <span className="text-[#248E3D]">Policy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-blue-800 font-semibold mb-2">Last Updated: October 2, 2025</p>
              <p className="text-blue-700">
                This Privacy Policy explains how EcoSpecialist ("we," "our," or "us") collects, uses, and protects your information when you use our website and services.
              </p>
            </div>

            <div className="space-y-12">
              {/* Information We Collect */}
              <div>
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Property details for grant applications</li>
                      <li>Income and benefit information for eligibility assessment</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>IP address and browser information</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Device and operating system information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Process grant applications and eligibility assessments</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send important updates about your applications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                
                <p className="text-gray-600 mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Government agencies for grant processing</li>
                  <li>Certified installers and contractors</li>
                  <li>Third-party service providers (with strict confidentiality agreements)</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <p className="text-green-800 font-semibold">
                    We never sell your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                
                <p className="text-gray-600 mb-4">We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure cloud storage with Firebase</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Staff training on data protection</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                
                <p className="text-gray-600 mb-4">Under GDPR and UK data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                
                <p className="text-gray-600 mb-4">We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  You can control cookies through your browser settings. See our Cookie Policy for more details.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or want to exercise your rights, contact us:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#248E3D] mr-3" />
                    <span className="text-gray-700">info@ecospecialist.co.uk</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#248E3D] mr-3" />
                    <span className="text-gray-700">0800 999 1590</span>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes 
                  by posting the new policy on our website and updating the "Last Updated" date. Your continued use 
                  of our services after changes become effective constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
