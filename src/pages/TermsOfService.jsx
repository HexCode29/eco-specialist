import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, Mail, Phone } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - EcoSpecialist | Legal Terms & Conditions</title>
        <meta name="description" content="Read EcoSpecialist's Terms of Service. Understand your rights and responsibilities when using our green energy grant services." />
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
              Terms of <span className="text-[#248E3D]">Service</span>
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
                These Terms of Service ("Terms") govern your use of EcoSpecialist's website and services. By using our services, you agree to these terms.
              </p>
            </div>

            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                
                <p className="text-gray-600 mb-4">
                  By accessing or using EcoSpecialist's website and services, you agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                    <p className="text-yellow-800">
                      You must be at least 18 years old to use our services or have parental consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Services */}
              <div>
                <div className="flex items-center mb-4">
                  <Scale className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
                </div>
                
                <p className="text-gray-600 mb-4">EcoSpecialist provides:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Information about government energy efficiency grants</li>
                  <li>Eligibility assessment services</li>
                  <li>Application assistance for various grant schemes</li>
                  <li>Connection with certified installers and contractors</li>
                  <li>Customer support and guidance</li>
                </ul>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <p className="text-green-800">
                    <strong>Important:</strong> We are an intermediary service. Final grant approval depends on government agencies and their criteria.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                
                <p className="text-gray-600 mb-4">When using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide accurate and truthful information</li>
                  <li>Keep your contact information up to date</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to circumvent our systems or security measures</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not share your account credentials with others</li>
                </ul>
              </div>

              {/* Prohibited Uses */}
              <div>
                <div className="flex items-center mb-4">
                  <XCircle className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
                </div>
                
                <p className="text-gray-600 mb-4">You may not use our services to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Submit false or fraudulent information</li>
                  <li>Spam or harass other users or our staff</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated tools to scrape our website</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Interfere with the proper functioning of our services</li>
                </ul>
              </div>

              {/* Grant Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Grant Applications</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Eligibility</h3>
                    <p className="text-gray-600">
                      Grant eligibility is determined by government criteria, not by EcoSpecialist. We provide guidance 
                      based on available information, but final decisions rest with the relevant authorities.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No Guarantee</h3>
                    <p className="text-gray-600">
                      We cannot guarantee grant approval or specific funding amounts. Our role is to assist with 
                      applications and provide information to the best of our ability.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Processing Times</h3>
                    <p className="text-gray-600">
                      Application processing times vary by scheme and are controlled by government agencies. 
                      We will keep you informed of progress where possible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fees and Payments */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees and Payments</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800">
                    <strong>Free Service:</strong> Our grant application assistance is provided free of charge to eligible customers.
                  </p>
                </div>
                
                <p className="text-gray-600 mb-4">Please note:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>We do not charge fees for grant applications</li>
                  <li>Installation costs are separate and handled by certified contractors</li>
                  <li>Any government contributions are paid directly to installers</li>
                  <li>Be wary of companies charging upfront fees for grant applications</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                
                <p className="text-gray-600 mb-4">
                  EcoSpecialist provides services "as is" without warranties. We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Grant application rejections or delays</li>
                  <li>Changes in government policy or funding</li>
                  <li>Actions of third-party contractors or installers</li>
                  <li>Technical issues or website downtime</li>
                  <li>Indirect or consequential damages</li>
                </ul>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    Our total liability is limited to the amount you paid for our services (which is typically £0 for grant applications).
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                
                <p className="text-gray-600 mb-4">
                  All content on our website, including text, images, logos, and software, is owned by EcoSpecialist 
                  or our licensors and is protected by copyright and other intellectual property laws.
                </p>
                
                <p className="text-gray-600">
                  You may use our website for personal, non-commercial purposes only. You may not reproduce, 
                  distribute, or create derivative works without our written permission.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your access to our services at any time, with or without notice, 
                  for any reason, including violation of these Terms.
                </p>
                
                <p className="text-gray-600">
                  You may stop using our services at any time. Upon termination, your right to use our services 
                  ceases immediately.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. We will notify you of significant changes 
                  by posting the updated Terms on our website. Your continued use of our services after changes 
                  become effective constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                
                <p className="text-gray-600">
                  These Terms are governed by the laws of England and Wales. Any disputes will be resolved 
                  in the courts of England and Wales.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                
                <p className="text-gray-600 mb-4">
                  If you have questions about these Terms of Service, please contact us:
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
