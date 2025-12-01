import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart3, Shield, Eye, Mail, Phone } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - EcoSpecialist | How We Use Cookies</title>
        <meta name="description" content="Learn about EcoSpecialist's cookie usage. Understand what cookies we use, why we use them, and how to manage your preferences." />
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
              Cookie <span className="text-[#248E3D]">Policy</span>
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
                This Cookie Policy explains how EcoSpecialist uses cookies and similar technologies on our website.
              </p>
            </div>

            <div className="space-y-12">
              {/* What Are Cookies */}
              <div>
                <div className="flex items-center mb-4">
                  <Cookie className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are stored on your device when you visit a website. They help 
                  websites remember information about your visit, such as your preferences and actions.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">
                    <strong>Good to know:</strong> Cookies don't contain personal information like your name or address. 
                    They contain unique identifiers that help us provide a better experience.
                  </p>
                </div>
              </div>

              {/* Types of Cookies We Use */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                
                <div className="space-y-8">
                  {/* Essential Cookies */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Shield className="w-5 h-5 text-red-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800">Essential Cookies</h3>
                      <span className="ml-auto bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Required</span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      These cookies are necessary for the website to function properly. They enable basic features 
                      like page navigation and access to secure areas.
                    </p>
                    
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Examples:</strong> Session management, security tokens, form submissions
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <BarChart3 className="w-5 h-5 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800">Analytics Cookies</h3>
                      <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Optional</span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                    
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Examples:</strong> Google Analytics, page views, bounce rate, traffic sources
                      </p>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Settings className="w-5 h-5 text-green-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800">Functional Cookies</h3>
                      <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Optional</span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering 
                      your preferences and providing customized content.
                    </p>
                    
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Examples:</strong> Language preferences, form data, user interface settings
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Eye className="w-5 h-5 text-purple-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800">Marketing Cookies</h3>
                      <span className="ml-auto bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Optional</span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      These cookies track your browsing habits to show you relevant advertisements and 
                      measure the effectiveness of our marketing campaigns.
                    </p>
                    
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Examples:</strong> Facebook Pixel, Google Ads, retargeting pixels
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                
                <p className="text-gray-600 mb-4">
                  We use services from trusted third parties that may set their own cookies:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Google Analytics</h3>
                    <p className="text-sm text-gray-600">
                      Helps us understand website usage and improve user experience.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Google reCAPTCHA</h3>
                    <p className="text-sm text-gray-600">
                      Protects our forms from spam and automated abuse.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Firebase</h3>
                    <p className="text-sm text-gray-600">
                      Provides secure data storage and website hosting services.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Social Media</h3>
                    <p className="text-sm text-gray-600">
                      Enables social sharing and embedded content from platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div>
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-[#248E3D] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Browser Settings</h3>
                    <p className="text-gray-600 mb-4">
                      You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Chrome</h4>
                        <p className="text-sm text-gray-600">
                          Settings → Privacy and security → Cookies and other site data
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Firefox</h4>
                        <p className="text-sm text-gray-600">
                          Options → Privacy & Security → Cookies and Site Data
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                        <p className="text-sm text-gray-600">
                          Preferences → Privacy → Manage Website Data
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Edge</h4>
                        <p className="text-sm text-gray-600">
                          Settings → Cookies and site permissions → Cookies and site data
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800">
                      <strong>Note:</strong> Disabling essential cookies may affect website functionality. 
                      Some features may not work properly without these cookies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookie Consent */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent</h2>
                
                <p className="text-gray-600 mb-4">
                  When you first visit our website, we'll ask for your consent to use optional cookies. You can:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Accept all cookies for the best experience</li>
                  <li>Reject optional cookies (essential cookies will still be used)</li>
                  <li>Customize your preferences for different cookie types</li>
                  <li>Change your preferences at any time</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                
                <p className="text-gray-600 mb-4">Different cookies have different lifespans:</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium text-gray-800">Session Cookies</span>
                    <span className="text-gray-600">Deleted when you close your browser</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium text-gray-800">Functional Cookies</span>
                    <span className="text-gray-600">Up to 1 year</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium text-gray-800">Analytics Cookies</span>
                    <span className="text-gray-600">Up to 2 years</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium text-gray-800">Marketing Cookies</span>
                    <span className="text-gray-600">Up to 1 year</span>
                  </div>
                </div>
              </div>

              {/* Updates to Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or 
                  for legal reasons. We will notify you of any significant changes by posting the updated 
                  policy on our website.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                
                <p className="text-gray-600 mb-4">
                  If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;
