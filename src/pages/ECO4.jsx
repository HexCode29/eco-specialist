import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Images chosen to closely match reference layout
const cacheBust = '?v=1';
const imgTabletEpc = `/src/images/eco4/section-1.webp${cacheBust}`;
const imgBoilerEngineer = `/src/images/eco4/section-3.webp${cacheBust}`;

// Service images
const imgBoilerUpgrades = `/src/images/eco4/Boiler Upgrades.webp${cacheBust}`;
const imgSolarPanels = `/src/images/eco4/Solar Panels.webp${cacheBust}`;
const imgInsulation = `/src/images/eco4/Insulation.webp${cacheBust}`;
const imgCentralHeating = `/src/images/eco4/Central Heating.webp${cacheBust}`;
const imgHeatPumps = `/src/images/eco4/Heat Pumps.webp${cacheBust}`;
const imgStorageHeaters = `/src/images/eco4/Storage Heaters.webp${cacheBust}`;

const ECO4 = () => {
  return (
    <>
      <Helmet>
        <title>ECO4 Scheme, Government-backed Energy Efficiency | EcoSpecialist</title>
        <meta name="description" content="ECO4 is a UK government-backed scheme helping eligible households improve home energy efficiency with fully funded measures." />
      </Helmet>

      {/* Hero Section - match other pages */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4caf50]/5 to-[#388e3c]/5"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#4caf50]/20 rounded-full"></div>
        <div className="absolute top-32 left-32 w-12 h-12 bg-[#4caf50]/25 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#4caf50]/18 rounded-full"></div>
        <div className="absolute top-20 right-16 w-24 h-24 bg-[#4caf50]/22 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-14 h-14 bg-[#4caf50]/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-18 h-18 bg-[#4caf50]/16 rounded-full"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900">
              What Is <span className="text-[#4caf50]">ECO4</span>?
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Intro + EPC Tablet image (image right) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">ECO4 is a fully funded government backed scheme.</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This initiative provides financial support to improve energy efficiency across the UK and reduce the carbon footprint of homes.
              </p>
              <p>
                ECO4 places obligations on large energy companies to reduce emissions and help the UK progress toward net zero.
              </p>
              <p>
                A large portion of UK households have an EPC rating below D. Through ECO4, the Government aims to raise as many homes as possible to EPC band C by 2035, improving comfort while lowering bills.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Upgrades focus on insulation and efficient heating systems</li>
                <li>Measures are designed to cut energy use and carbon emissions</li>
                <li>Support is targeted where it has the biggest impact</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={imgTabletEpc} alt="EPC on tablet" className="rounded-2xl w-full h-[330px] md:h-[410px] object-cover shadow" />
          </div>
        </div>
      </section>

      {/* Section 2: Boiler engineer image left + TrustMark text right */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <img src={imgBoilerEngineer} alt="Boiler engineer" className="rounded-2xl w-full h-[330px] md:h-[410px] object-cover shadow" />
          </div>
          <div className="order-2 md:order-1">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                All ECO4 measures are carried out by approved TrustMark installers with the right qualifications to ensure safe, effective and durable work.
              </p>
              <p>
                Assessments are completed by qualified Retrofit Assessors and coordinated by a Retrofit Coordinator, with insurance backed guarantees.
              </p>
              <p>
                Installations are scheduled to minimise disruption. For rented homes, landlord permissions and tenant consent are handled as part of the process.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Independent survey to determine the right measures</li>
                <li>Quality assurance at each stage of installation</li>
                <li>Insurance backed guarantees for peace of mind</li>
                <li>Post‑installation handover pack and performance guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Energy upgrades available with free ECO4 funding</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: 'boiler-upgrades',
                title: 'Boiler Upgrades',
                description: 'Includes upgrades to new energy efficient boilers and installation of heating controls, thermostats and smart meters. New boilers can be up to 65% more efficient.',
                image: imgBoilerUpgrades,
              },
              {
                id: 'solar-panels',
                title: 'Solar Panels',
                description: 'Reduce your energy bills and carbon footprint with renewable energy such as solar panels. Also, feed into the grid and get paid for surplus energy.',
                image: imgSolarPanels,
              },
              {
                id: 'insulation',
                title: 'Insulation',
                description: 'Cavity, loft and underfloor insulation keeps the heat in your home. Resulting in not using as much energy to constantly reheat your home.',
                image: imgInsulation,
              },
              {
                id: 'central-heating',
                title: 'Central Heating',
                description: 'Installation of central heating systems for homes that currently do not have any. Keep warm all year round and control at your finger tips, whilst monitoring usage with a smart meter.',
                image: imgCentralHeating,
              },
              {
                id: 'heat-pumps',
                title: 'Heat Pumps',
                description: 'You may be better with a heat pump, which is a new innovative way to heat your home whilst reducing your energy bills.',
                image: imgHeatPumps,
              },
              {
                id: 'storage-heaters',
                title: 'Storage Heaters',
                description: 'Cost-effective heating by storing energy during off-peak hours when electricity is cheaper, and releasing it throughout the day, thereby reducing energy bills and providing consistent warmth.',
                image: imgStorageHeaters,
              }
            ].map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col">
                  <div className="mb-4 -mx-2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Check Eligibility */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#248E3D] to-[#1e6b32] text-white p-6 md:px-8 md:py-10 max-w-5xl md:max-w-6xl mx-auto">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-white/10 rounded-full" />
            <div className="relative text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to check your ECO4 eligibility?</h2>
              <p className="text-white/90 mb-6 max-w-3xl mx-auto">
                It takes less than 60 seconds. Answer a few quick questions and we’ll tell you if your home can receive fully funded insulation and heating upgrades under the ECO4 scheme.
              </p>
              <ul className="flex sm:flex-nowrap flex-wrap justify-center gap-1 md:gap-2 mb-8 text-white/90 mx-auto">
                <li className="inline-flex items-center justify-center bg-white/10 rounded-xl px-3 py-3 text-center whitespace-nowrap text-sm md:text-base">Up to 100% funded improvements</li>
                <li className="inline-flex items-center justify-center bg-white/10 rounded-xl px-3 py-3 text-center whitespace-nowrap text-sm md:text-base">TrustMark approved installers</li>
                <li className="inline-flex items-center justify-center bg-white/10 rounded-xl px-3 py-3 text-center whitespace-nowrap text-sm md:text-base">No obligation eligibility check</li>
              </ul>
              <a href="/#apply" className="inline-flex items-center justify-center bg-white text-[#248E3D] hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl shadow transition-colors">
                Check Eligibility Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ECO4;


