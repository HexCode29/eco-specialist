import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnergyEfficiency2024 = () => {
  return (
    <>
      <Helmet>
        <title>Energy Efficiency: Simple Steps to Reduce Bills | EcoSpecialist</title>
        <meta name="description" content="Practical tips and advice for improving your home's energy efficiency without major renovations in 2024." />
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
                Energy Saving
              </span>
              <span className="text-gray-500 text-sm">6 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Energy Efficiency: Simple Steps to Reduce Bills
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Lisa Johnson</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>3 March 2024</span>
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
                alt="Smart home energy monitoring system and efficient appliances in modern kitchen"
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
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
                With energy bills continuing to rise, improving your home's energy efficiency has never been more important. The good news is that you don't need major renovations to make a significant impact. Here are practical, cost-effective steps you can take today to reduce your energy consumption and save money.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Quick Wins (Under £50)</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These simple changes can be implemented immediately and will start saving you money right away:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Draught Proofing</h3>
                  <p className="text-gray-700 mb-4">
                    Seal gaps around windows, doors, and floors to prevent heat loss.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What to do:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Install door seals</li>
                        <li>• Use draught excluders</li>
                        <li>• Seal window frames</li>
                        <li>• Block chimney when not in use</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Savings:</h4>
                      <p className="text-gray-700 text-sm">£25-£50 per year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Thermostat</h3>
                  <p className="text-gray-700 mb-4">
                    Control your heating more efficiently with programmable settings.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What to do:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Set temperature schedules</li>
                        <li>• Use smartphone controls</li>
                        <li>• Monitor energy usage</li>
                        <li>• Adjust when away</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Savings:</h4>
                      <p className="text-gray-700 text-sm">£75-£150 per year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">LED Light Bulbs</h3>
                  <p className="text-gray-700 mb-4">
                    Replace old incandescent bulbs with energy-efficient LEDs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What to do:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Replace all bulbs gradually</li>
                        <li>• Choose appropriate brightness</li>
                        <li>• Use motion sensors</li>
                        <li>• Turn off when not needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Savings:</h4>
                      <p className="text-gray-700 text-sm">£30-£60 per year</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Medium Investments (£50-£500)</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These improvements require a bit more investment but offer significant long-term savings:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Insulation Upgrades</h3>
                  <p className="text-gray-700 mb-4">
                    Improve your home's thermal efficiency with better insulation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Options:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Top up loft insulation</li>
                        <li>• Install cavity wall insulation</li>
                        <li>• Add floor insulation</li>
                        <li>• Insulate hot water tank</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Savings:</h4>
                      <p className="text-gray-700 text-sm">£100-£400 per year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Energy-Efficient Appliances</h3>
                  <p className="text-gray-700 mb-4">
                    Replace old, inefficient appliances with modern, energy-saving models.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Priority Items:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Refrigerator/freezer</li>
                        <li>• Washing machine</li>
                        <li>• Dishwasher</li>
                        <li>• Boiler/heating system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Savings:</h4>
                      <p className="text-gray-700 text-sm">£50-£200 per year</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Daily Energy-Saving Habits</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Small changes in your daily routine can add up to significant savings:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Heating & Cooling</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Lower thermostat by 1°C (saves £80/year)</li>
                    <li>• Close curtains at night</li>
                    <li>• Use radiator reflectors</li>
                    <li>• Bleed radiators regularly</li>
                    <li>• Don't heat unused rooms</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Usage</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Take shorter showers</li>
                    <li>• Use cold water for washing</li>
                    <li>• Fix dripping taps</li>
                    <li>• Insulate hot water pipes</li>
                    <li>• Use dishwasher efficiently</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Smart Home Technology</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Modern technology can help you monitor and control your energy usage:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-[#248E3D]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Monitoring</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Smart meters for real-time usage tracking</li>
                    <li>• Energy monitoring apps</li>
                    <li>• Smart plugs for individual appliances</li>
                    <li>• Usage alerts and recommendations</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Controls</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Smart heating controls</li>
                    <li>• Automated lighting systems</li>
                    <li>• Smart power strips</li>
                    <li>• Voice-activated controls</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Government Support</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Don't forget to take advantage of available government schemes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>ECO4 scheme for low-income households</li>
                <li>Boiler Upgrade Scheme for heat pumps</li>
                <li>Local authority grants and loans</li>
                <li>Energy Company Obligation (ECO)</li>
                <li>Smart Export Guarantee for solar panels</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Measuring Your Success</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Track your progress to see the impact of your energy-saving efforts:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Compare monthly energy bills</li>
                <li>Monitor your EPC rating improvements</li>
                <li>Use smart meter data</li>
                <li>Track carbon footprint reduction</li>
                <li>Calculate return on investment</li>
              </ul>

              <div className="bg-[#248E3D]/10 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Getting Started?</h3>
                <p className="text-gray-700 mb-6">
                  Our energy efficiency experts can help you identify the best improvements for your home, access available grants, and create a personalized energy-saving plan. Get a free home assessment today.
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

export default EnergyEfficiency2024;
