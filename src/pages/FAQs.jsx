import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:08009991590';
  };

  const handleContactForm = () => {
    window.location.href = '/contact';
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: '❓',
      faqs: [
        {
          question: 'What is EcoSpecialist and what do you do?',
          answer: 'EcoSpecialist is a leading energy efficiency consultancy that helps homeowners access government grants for green energy improvements. We specialize in ECO Specialist Scheme, Boiler Upgrade Scheme, and other government funding programs to make your home more energy-efficient.'
        },
        {
          question: 'How much can I save with government grants?',
          answer: 'Government grants can cover up to £10,000 for energy efficiency improvements. The exact amount depends on your property type, current energy efficiency rating, and the specific grants you qualify for. Our free assessment will calculate your potential savings.'
        },
        {
          question: 'Are your services really free?',
          answer: 'Yes! Our initial consultation and grant assessment is completely free with no obligation. We only get paid when you successfully receive government funding and choose to work with our approved installers.'
        }
      ]
    },
    {
      title: 'ECO Specialist Scheme',
      icon: '🏠',
      faqs: [
        {
          question: 'What is the ECO Specialist Scheme?',
          answer: 'The ECO Specialist Scheme is a government program that provides funding for energy efficiency improvements in low-income and vulnerable households. It can cover insulation, heating upgrades, and other energy-saving measures.'
        },
        {
          question: 'Who qualifies for ECO Specialist funding?',
          answer: 'Eligibility depends on household income, benefits received, and property energy efficiency rating. Generally, households receiving certain benefits or with low incomes qualify. Our assessment will determine your exact eligibility.'
        },
        {
          question: 'What improvements are covered under ECO?',
          answer: 'ECO covers various improvements including cavity wall insulation, loft insulation, solid wall insulation, heating system upgrades, and renewable heating systems like heat pumps.'
        }
      ]
    },
    {
      title: 'Boiler Upgrade Scheme',
      icon: '🔥',
      faqs: [
        {
          question: 'What is the Boiler Upgrade Scheme (BUS)?',
          answer: 'The Boiler Upgrade Scheme provides grants of up to £7,500 to replace fossil fuel heating systems with low-carbon alternatives like heat pumps. It aims to reduce carbon emissions from home heating.'
        },
        {
          question: 'How much grant can I get for a heat pump?',
          answer: 'You can get up to £7,500 for an air source heat pump or £7,500 for a ground source heat pump. Biomass boilers are also eligible for up to £5,000 in funding.'
        },
        {
          question: 'Do I need to replace my existing heating system?',
          answer: 'Yes, the BUS requires replacing fossil fuel heating systems (gas, oil, or electric) with low-carbon alternatives. The old system must be removed and properly disposed of.'
        }
      ]
    },
    {
      title: 'Application Process',
      icon: '📋',
      faqs: [
        {
          question: 'How long does the application process take?',
          answer: 'The application process typically takes 4-8 weeks from initial assessment to approval. This includes property survey, grant application submission, and approval from the relevant government body.'
        },
        {
          question: 'What documents do I need to apply?',
          answer: 'You\'ll need proof of ownership/tenancy, recent energy bills, income/benefit statements, and property details. We\'ll guide you through all required documentation.'
        },
        {
          question: 'Can I apply for multiple grants at once?',
          answer: 'Yes, you can often combine different grants for comprehensive home improvements. For example, ECO funding for insulation combined with BUS funding for heat pump installation.'
        }
      ]
    },
    {
      title: 'Installation & Work',
      icon: '🔧',
      faqs: [
        {
          question: 'Who carries out the installation work?',
          answer: 'All installations are carried out by certified, approved contractors who meet strict government standards. We work with a network of trusted installers across the UK.'
        },
        {
          question: 'How long does installation take?',
          answer: 'Installation times vary by project. Simple insulation work may take 1-2 days, while heat pump installation can take 3-5 days. We\'ll provide detailed timelines during planning.'
        },
        {
          question: 'Do I need to be home during installation?',
          answer: 'Yes, you or an authorized representative should be present during installation. Our installers will coordinate with you to schedule convenient times.'
        }
      ]
    },
    {
      title: 'Costs & Payments',
      icon: '💰',
      faqs: [
        {
          question: 'What if the grant doesn\'t cover all costs?',
          answer: 'If grant funding doesn\'t cover the full cost, you may need to contribute the difference. However, many grants cover 100% of costs for eligible households. We\'ll explain all costs upfront.'
        },
        {
          question: 'When do I pay for the work?',
          answer: 'Payment is typically required after work completion and grant approval. We offer flexible payment options and can help arrange financing if needed.'
        },
        {
          question: 'Are there any hidden costs?',
          answer: 'No, we provide transparent pricing with no hidden costs. All fees and charges are clearly explained before you commit to any work.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQs - Frequently Asked Questions | EcoSpecialist</title>
        <meta name="description" content="Find answers to common questions about government energy grants, ECO Specialist Scheme, Boiler Upgrade Scheme, and our services. Get expert guidance on energy efficiency funding." />
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
              Frequently Asked <span className="text-[#248E3D]">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Find answers to common questions about government grants, energy efficiency improvements, and our services. Can't find what you're looking for? Contact our expert team for personalized assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-8">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 3 + faqIndex;
                    return (
                      <motion.div
                        key={faqIndex}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: faqIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {openFAQ === globalIndex ? (
                            <ChevronUp className="w-5 h-5 text-[#248E3D] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: openFAQ === globalIndex ? 'auto' : 0,
                            opacity: openFAQ === globalIndex ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-[#248E3D]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our expert team is here to help. Get personalized advice on your energy grant options 
              and find out exactly how much you could save.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCallNow}
                className="bg-[#248E3D] text-white hover:bg-[#1e6b32] px-8 py-4 rounded-xl flex items-center space-x-2 font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call 0800 999 1590</span>
              </button>
              <button
                onClick={handleContactForm}
                className="border-2 border-[#248E3D] text-[#248E3D] hover:bg-[#248E3D] hover:text-white px-8 py-4 rounded-xl flex items-center space-x-2 font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
