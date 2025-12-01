import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WarmHomesDiscount2024 = () => {
  return (
    <>
      <Helmet>
        <title>Warm Homes Discount: How to Apply and Qualify | EcoSpecialist</title>
        <meta name="description" content="Step-by-step guide to applying for the Warm Homes Discount and understanding eligibility requirements in 2024." />
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
                Government Support
              </span>
              <span className="text-gray-500 text-sm">5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Warm Homes Discount: How to Apply and Qualify
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Robert Taylor</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>1 March 2024</span>
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
                alt="Elderly couple staying warm in energy efficient home with cozy interior"
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
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
                The Warm Homes Discount is a government scheme that provides a £150 discount on electricity bills for eligible households. With energy costs continuing to rise, this discount can provide much-needed relief for vulnerable households. Here's everything you need to know about qualifying and applying.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What is the Warm Homes Discount?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Warm Homes Discount is a government scheme that helps low-income households with their electricity bills. The discount is applied directly to your electricity bill, reducing the amount you need to pay.
              </p>

              <div className="bg-[#248E3D]/10 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Details</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• £150 discount on electricity bills</li>
                  <li>• Applied automatically to your bill</li>
                  <li>• Available each winter</li>
                  <li>• No cash payment - bill reduction only</li>
                  <li>• Helps over 2.7 million households</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Eligibility Criteria</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                There are two ways to qualify for the Warm Homes Discount:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Core Group (Automatic)</h3>
                  <p className="text-gray-700 mb-4">
                    You'll automatically receive the discount if you receive the Guarantee Credit element of Pension Credit.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Receive Guarantee Credit</li>
                        <li>• Have your name on the electricity bill</li>
                        <li>• Live in England, Scotland, or Wales</li>
                        <li>• Apply by 31 March each year</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What happens:</h4>
                      <p className="text-gray-700 text-sm">Discount applied automatically - no application needed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Broader Group (Application Required)</h3>
                  <p className="text-gray-700 mb-4">
                    You may qualify if you're on a low income and receive certain benefits.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Low income household</li>
                        <li>• Receive certain benefits</li>
                        <li>• High energy costs</li>
                        <li>• Apply through your energy supplier</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What happens:</h4>
                      <p className="text-gray-700 text-sm">Must apply directly to your energy supplier</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Qualifying Benefits</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You may be eligible if you receive any of these benefits:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Main Benefits</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Pension Credit (Guarantee Credit)</li>
                    <li>• Universal Credit</li>
                    <li>• Income Support</li>
                    <li>• Income-based Jobseeker's Allowance</li>
                    <li>• Income-related Employment and Support Allowance</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Benefits</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Working Tax Credit</li>
                    <li>• Child Tax Credit</li>
                    <li>• Housing Benefit</li>
                    <li>• Council Tax Support</li>
                    <li>• Disability Living Allowance</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How to Apply</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The application process depends on which group you fall into:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-[#248E3D]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Core Group Application</h3>
                  <p className="text-gray-700 mb-4">
                    If you receive Guarantee Credit, you need to apply to your energy supplier.
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Contact your electricity supplier</li>
                    <li>Provide your Pension Credit reference number</li>
                    <li>Confirm your details match your benefit claim</li>
                    <li>Apply by 31 March each year</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Broader Group Application</h3>
                  <p className="text-gray-700 mb-4">
                    Apply directly to your energy supplier if you're on a low income.
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Check if your supplier offers the scheme</li>
                    <li>Complete their application form</li>
                    <li>Provide proof of benefits and income</li>
                    <li>Submit before the deadline</li>
                  </ol>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Important Dates</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Be aware of these key dates for the Warm Homes Discount:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2024 Timeline</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Period:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Opens: August 2024</li>
                      <li>• Closes: 31 March 2025</li>
                      <li>• Early application recommended</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Discount Applied:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Between October and March</li>
                      <li>• Exact date varies by supplier</li>
                      <li>• Check your bill for confirmation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What to Do If You Don't Qualify</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you don't qualify for the Warm Homes Discount, there are other forms of support available:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Alternative Support</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Cold Weather Payments</li>
                    <li>• Winter Fuel Payment</li>
                    <li>• Energy Company Obligation (ECO)</li>
                    <li>• Local authority grants</li>
                    <li>• Energy efficiency improvements</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Efficiency</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Free insulation schemes</li>
                    <li>• Boiler replacement grants</li>
                    <li>• Heat pump installations</li>
                    <li>• Solar panel grants</li>
                    <li>• Smart meter installations</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tips for Success</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To maximize your chances of receiving the Warm Homes Discount:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Apply as early as possible when applications open</li>
                <li>Ensure all your details are up to date</li>
                <li>Keep copies of all correspondence</li>
                <li>Contact your supplier if you don't hear back</li>
                <li>Check your bill regularly for the discount</li>
              </ul>

              <div className="bg-[#248E3D]/10 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your Application?</h3>
                <p className="text-gray-700 mb-6">
                  Our team can help you understand your eligibility, complete your application, and explore other energy support schemes available to you. Get expert guidance today.
                </p>
                <Link
                  to="/#apply"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Free Help</span>
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

export default WarmHomesDiscount2024;
