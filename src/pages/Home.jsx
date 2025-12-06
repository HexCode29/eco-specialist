import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Users, Award, TrendingUp, Sun, Wind, Leaf, Calculator, Wrench, Home as HomeIcon, Zap, Thermometer, ShieldCheck, Smile, Briefcase, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { saveLead, getServices } from '@/firebase/firestoreService';

const Home = () => {

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash === '#apply') {
        setTimeout(() => {
          const applySection = document.getElementById('apply');
          if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Delay to ensure page is fully loaded
      }
    };

    handleHashNavigation();
    
    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  const slides = [
    {
      title: "Save money on your energy bills with government-funded home upgrades.",
      subtitle: "SUSTAINABLE FUTURE",
      description: "you may qualify for free energy-efficient improvements through the ECO scheme, checking your eligibility takes less than 30 seconds!",
      buttonText: "Check Eligibility",
      buttonLink: "/#apply",
      backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "ECO Specialist Scheme Up to £10,000",
      subtitle: "MAXIMUM GRANTS",
      description: "Get up to £10,000 in government funding for energy efficiency improvements. From insulation to heat pumps, we help you secure maximum funding.",
      buttonText: "Apply Now",
      buttonLink: "/#apply",
      backgroundImage: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2024/09/Wales-countryside-aerial-view-C-AdobeStock_276022302-1024x577.jpg"
    },
    {
      title: "Boiler Upgrade Scheme £7,500",
      subtitle: "HEAT PUMP GRANTS",
      description: "Upgrade to low-carbon heating systems with government grants. Save up to £900 per year on heating costs with professional installation.",
      buttonText: "Get Quote",
      buttonLink: "/#apply",
      backgroundImage: "https://images.unsplash.com/photo-1566491514380-2a32340e1a61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const hero = slides[0];

  const StepperForm = () => {
    const [step, setStep] = useState(1);
    const [postcode, setPostcode] = useState('');
    const [ownership, setOwnership] = useState('');
    const [heating, setHeating] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [boilerAge, setBoilerAge] = useState('');
    const [epc, setEpc] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [city, setCity] = useState('');
    const [heatingOptions, setHeatingOptions] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [onBenefits, setOnBenefits] = useState('');
    const [benefitType, setBenefitType] = useState('');

    useEffect(() => {
      const fetchHeatingOptions = async () => {
        const result = await getServices();
        if (result.success) {
          const allowedNames = [
            'Gas Boiler',
            'Electric',
            'Oil / LPG',
            'Oil/LPG',
            'Heat Pump',
            'Solid Fuel',
            'Storage Heaters',
            'Boiler Service'
          ];

          const filtered = result.services.filter((svc) =>
            allowedNames.includes(svc.name)
          );

          setHeatingOptions(filtered);
        } else {
          console.error('Failed to load heating services for eligibility form:', result.error);
        }
      };

      fetchHeatingOptions();
    }, []);

    const canNextFrom1 = postcode.trim().length >= 4;
    const canNextFrom2 =
      ownership !== '' &&
      heating !== '' &&
      bedrooms !== '' &&
      onBenefits !== '' &&
      (onBenefits === 'No' || benefitType !== '');
    const canNextFrom3 = propertyType !== '' && boilerAge !== '' && epc !== '';

    const getDisplayName = (name) => {
      // Remove "Service" from "Boiler Service" for display only
      return name === 'Boiler Service' ? 'Boiler' : name;
    };

    const handleSelectHeating = (serviceLike) => {
      // serviceLike may be a Firestore service or a simple fallback object
      setHeating(serviceLike.name);
      setSelectedServices([
        {
          id: serviceLike.id || serviceLike.name,
          name: serviceLike.name,
          price: serviceLike.price
        }
      ]);
    };

    const handleSubmit = async () => {
      const address = [addressLine1, city, postcode].filter(Boolean).join(', ');

      const payload = {
        postcode,
        ownership,
        currentHeating: heating,
        propertyType,
        bedrooms,
        boilerAge,
        epc,
        name,
        email,
        phone,
        address,
        onBenefits,
        benefitType,
        selectedServices,
        source: 'home_apply_section'
      };

      const result = await saveLead(payload);
      if (result.success) {
        toast({ title: '✅ Submitted', description: 'Thanks! We will contact you within 24 hours.' });
        setStep(1);
        setPostcode('');
        setOwnership('');
        setHeating('');
        setPropertyType('');
        setBedrooms('');
        setBoilerAge('');
        setEpc('');
        setName('');
        setEmail('');
        setPhone('');
        setAddressLine1('');
        setCity('');
        setSelectedServices([]);
        setOnBenefits('');
        setBenefitType('');
      } else {
        toast({ title: '❌ Submission failed', description: 'Please try again in a moment.' });
      }
    };

    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          {[1,2,3,4].map((s, idx) => (
            <div key={s} className="flex items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-[#248E3D] text-white' : 'bg-gray-200 text-gray-600'}`}>
                {s}
              </div>
              {idx < 3 && (
                <div className={`w-16 h-1 mx-3 rounded ${step > s ? 'bg-[#248E3D]' : 'bg-gray-200'}`}></div>
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">What is your address?</h3>
            <p className="text-gray-600 mb-6 text-center">Enter your postcode to check your eligibility instantly.</p>
            <div className="max-w-xl mx-auto">
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="e.g. B90 4RZ"
                className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D]"
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setStep(2)}
                  disabled={!canNextFrom1}
                  className="bg-[#248E3D] text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Check eligibility
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">A few quick questions</h3>
            <p className="text-gray-600 mb-6 text-center">This helps us confirm the schemes you may qualify for.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Ownership</label>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {['Owner Occupier','Private Tenant'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => setOwnership(opt)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm md:text-base ${
                        ownership===opt ? 'bg-[#248E3D] text-white border-[#248E3D]' : 'border-gray-300 hover:border-[#248E3D]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="mt-2">
                  <p className="block text-sm font-semibold text-gray-800 mb-3">
                    Are you or anyone in your household in receipt of benefits?
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {['Yes', 'No'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setOnBenefits(opt)}
                        className={`w-full px-3 py-2 rounded-xl border text-sm md:text-base ${
                          onBenefits===opt ? 'bg-[#248E3D] text-white border-[#248E3D]' : 'border-gray-300 hover:border-[#248E3D]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {onBenefits === 'Yes' && (
                    <div className="mt-2">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Which benefit do you receive?
                      </label>
                      <select
                        value={benefitType}
                        onChange={(e) => setBenefitType(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D] text-sm md:text-base"
                      >
                        <option value="">Select a benefit</option>
                        <option value="Child Benefit (thresholds apply)">Child Benefit (thresholds apply)</option>
                        <option value="Child Tax Credit (CTC)">Child Tax Credit (CTC)</option>
                        <option value="Housing Benefit">Housing Benefit</option>
                        <option value="Income based Jobseekers Allowance (JSA)">Income based Jobseekers Allowance (JSA)</option>
                        <option value="Income related Employment and Support Allowance (ESA)">Income related Employment and Support Allowance (ESA)</option>
                        <option value="Income Support (IS)">Income Support (IS)</option>
                        <option value="Pension Credit Guarantee Credit (PCGC)">Pension Credit Guarantee Credit (PCGC)</option>
                        <option value="Pension Credit Savings Credit (PCSC)">Pension Credit Savings Credit (PCSC)</option>
                        <option value="Universal Credit (UC)">Universal Credit (UC)</option>
                        <option value="Working Tax Credit (WTC)">Working Tax Credit (WTC)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Current heating</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(heatingOptions.length > 0
                    ? heatingOptions
                    : [
                        { name: 'Gas Boiler' },
                        { name: 'Electric' },
                        { name: 'Oil / LPG' },
                        { name: 'Oil/LPG' },
                        { name: 'Heat Pump' },
                        { name: 'Solid Fuel' },
                        { name: 'Storage Heaters' },
                        { name: 'Boiler Service' }
                      ]
                  ).map((opt) => (
                    <button
                      key={opt.id || opt.name}
                      onClick={() => handleSelectHeating(opt)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm md:text-base ${
                        heating === opt.name
                          ? 'bg-[#248E3D] text-white border-[#248E3D]'
                          : 'border-gray-300 hover:border-[#248E3D]'
                      }`}
                    >
                      {getDisplayName(opt.name)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Number of bedrooms</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1','2','3','4+'].map(opt => (
                    <button key={opt} onClick={() => setBedrooms(opt)} className={`w-full px-4 py-3 rounded-xl border text-sm md:text-base ${bedrooms===opt ? 'bg-[#248E3D] text-white border-[#248E3D]' : 'border-gray-300 hover:border-[#248E3D]'}`}>{opt}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between max-w-2xl mx-auto mt-6">
              <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800">Back</button>
              <button onClick={() => setStep(3)} disabled={!canNextFrom2} className="px-6 py-3 rounded-xl bg-[#248E3D] text-white font-semibold disabled:opacity-50">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Tell us about your property</h3>
            <p className="text-gray-600 mb-6 text-center">We’ll tailor your grant options based on your home.</p>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Property type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['House','Flat','Bungalow','Other'].map(opt => (
                    <button key={opt} onClick={() => setPropertyType(opt)} className={`w-full px-4 py-3 rounded-xl border text-sm md:text-base ${propertyType===opt ? 'bg-[#248E3D] text-white border-[#248E3D]' : 'border-gray-300 hover:border-[#248E3D]'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <label className="block text-sm font-semibold text-gray-800 mb-3">
                    {heating === 'Gas Boiler' ? 'How old is your boiler?' : heating === 'Heat Pump' ? 'How old is your heat pump?' : 'How old is your heating system?'}
                  </label>
                  <div className="space-y-2">
                    {['0-9 years','10-15 years','15-20 years','Over 20 years','Unsure'].map(opt => (
                      <button key={opt} onClick={() => setBoilerAge(opt)} className={`w-full px-4 py-3 rounded-xl border text-sm md:text-base ${boilerAge===opt ? 'bg-[#248E3D] text-white border-[#248E3D]' : 'border-gray-300 hover:border-[#248E3D]'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <label className="block text-sm font-semibold text-gray-800 mb-3">EPC rating</label>
                  <div className="space-y-2">
                    {['A','B','C','D','E','F','G',"I don't know"].map(opt => (
                      <button key={opt} onClick={() => setEpc(opt)} className={`w-full px-4 py-3 rounded-xl border text-sm md:text-base ${epc===opt ? 'bg-[#248E3D] text-white border-[#248E3D]' : 'border-gray-300 hover:border-[#248E3D]'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between max-w-2xl mx-auto mt-6">
              <button onClick={() => setStep(2)} className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800">Back</button>
              <button onClick={() => setStep(4)} disabled={!canNextFrom3} className="px-6 py-3 rounded-xl bg-[#248E3D] text-white font-semibold disabled:opacity-50">Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Your contact details</h3>
            <p className="text-gray-600 mb-6 text-center">We’ll be in touch within 24 hours with your eligibility results.</p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Full name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com" type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Phone</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="e.g. 0800 123 4567" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Address line 1</label>
                <input
                  placeholder="Street address"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">City</label>
                <input
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Postcode</label>
                <input placeholder="Postcode" value={postcode} onChange={(e)=>setPostcode(e.target.value.toUpperCase())} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#248E3D]" />
              </div>
            </div>
            <div className="flex justify-between max-w-3xl mx-auto mt-6">
              <button onClick={() => setStep(3)} className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800">Back</button>
              <button onClick={handleSubmit} className="px-8 py-3 rounded-xl bg-[#248E3D] text-white font-semibold">Submit</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const grants = [
    {
      id: 'eco-specialist',
      title: 'ECO Specialist Scheme',
      description: 'The ECO Specialist scheme helps low-income households improve their home\'s energy efficiency through government-funded improvements.',
      icon: HomeIcon,
    },
    {
      id: 'bus',
      title: 'Boiler Upgrade Scheme',
      description: 'Government grants to help homeowners replace fossil fuel heating systems with low-carbon alternatives like heat pumps.',
      icon: Thermometer,
    },
    {
      id: 'ghg',
      title: 'Green Homes Grant',
      description: 'Local authority schemes providing vouchers for energy-saving home improvements to reduce energy bills and carbon emissions.',
      icon: Zap,
    },
    {
      id: 'whd',
      title: 'Warm Homes Discount',
      description: 'Annual discount on electricity bills for eligible households to help with energy costs during the cold winter months.',
      icon: Calculator,
    }
  ];


  const workProcessSteps = [
    {
      icon: Calculator,
      title: 'Pre-assessment',
      description: 'Complete the online application form and get your free eligibility check.'
    },
    {
      icon: HomeIcon,
      title: 'Installation',
      description: 'New heating and insulation will be installed by certified professionals.'
    },
    {
      icon: Award,
      title: 'Fully Funded Upgrades',
      description: 'Government grants cover the full cost, you don’t pay a penny.'
    }
  ];


  return (
    <>
      <Helmet>
        <title>EcoSpecialist - Green Energy Grants & Solutions | Birmingham</title>
        <meta name="description" content="Get up to £10,000 in government grants for energy efficiency improvements. Expert advice on ECO Specialist, Boiler Upgrade Scheme, and Green Homes Grant in Birmingham." />
      </Helmet>

      {/* Hero Section with Form */}
      <section id="apply" className="relative py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Hero Text - Top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 max-w-3xl"
            >
              <span className="text-[#4caf50] font-bold tracking-widest uppercase text-xs md:text-sm">{hero.subtitle}</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-3 leading-tight text-gray-900">
                {hero.title}
              </h1>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                {hero.description}
              </p>
            </motion.div>

            {/* Eligibility Form - Center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-5xl"
            >
              <StepperForm />
            </motion.div>
          </div>
        </div>
      </section>


      {/* ECO 4 Scheme Section */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          <motion.div 
            className="bg-gradient-to-br from-[#4caf50] to-[#388e3c] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              WHAT IS ECO 4 SCHEME?
            </h2>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <div className="absolute -bottom-10 -right-10 text-white text-9xl font-bold opacity-10">
              ECO 4
            </div>
          </motion.div>
          <div className="bg-white p-8 md:p-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Understanding ECO 4 Scheme</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Government Funding</h4>
                    <p className="text-gray-600">ECO 4 provides up to £10,000 in government funding for energy efficiency improvements in eligible households.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Eligibility Criteria</h4>
                    <p className="text-gray-600">Available to low-income households, those receiving certain benefits, or with properties rated E, F, or G.</p>
                  </div>
                </div>
                
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    </div>
                    <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Improvements Covered</h4>
                    <p className="text-gray-600">Insulation, heating upgrades, renewable energy systems, and other energy-saving measures.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Long-term Benefits</h4>
                    <p className="text-gray-600">Reduce energy bills, improve home comfort, lower carbon emissions, and increase property value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="overflow-hidden">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Text Section - Left/Top */}
            <motion.div
              className="flex items-center justify-center h-full order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 lg:p-12 h-full flex flex-col justify-center w-full min-h-[600px]">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How do you Qualify?
                </h2>
                <p className="text-gray-600 mb-8">
                  You may qualify for free energy‑efficient home improvements if you receive certain benefits. If any of the credits below apply to you, there’s a strong chance you’re eligible under the ECO scheme.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#248E3D] mr-3 mt-0.5" />
                    <span className="text-gray-700">Free survey, paperwork and application support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#248E3D] mr-3 mt-0.5" />
                    <span className="text-gray-700">No upfront costs for eligible households</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#248E3D] mr-3 mt-0.5" />
                    <span className="text-gray-700">Installed by certified, government‑approved professionals</span>
                  </li>
                </ul>
                <Link
                  to="/about"
                  className="self-start inline-block bg-[#248E3D] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#1e6b32] transition-colors text-sm md:text-base"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Credits List - Right/Bottom */}
            <motion.div
              className="flex items-center justify-center h-full order-2 lg:order-2 bg-gradient-to-br from-[#4caf50] to-[#388e3c]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full min-h-[600px] flex items-center justify-center">
                <div className="max-w-2xl w-full p-6 sm:p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Qualifying Credits</h3>
                  <ul className="divide-y divide-white/15">
                    {[
                      'Universal Credit',
                      'Pension Credit (Guarantee Credit)',
                      'Income Support',
                      "Income-based Jobseeker’s Allowance (JSA)",
                      "Income-related Employment and Support Allowance (ESA)",
                      'Working Tax Credit',
                      'Child Tax Credit',
                      'Housing Benefit'
                    ].map((credit) => (
                      <li key={credit} className="flex items-start py-3">
                        <CheckCircle className="w-5 h-5 text-white mr-3 mt-0.5" />
                        <span className="text-white/90 leading-relaxed">{credit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-gradient-to-br from-[#4caf50] to-[#388e3c] py-20">
        <div className="container mx-auto px-4">
            <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
            <p className="font-bold text-white/90 uppercase tracking-wider text-lg mb-4">How We Work</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">In 3 Simple Steps</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get your grant approved quickly and efficiently with our streamlined process designed for your convenience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {workProcessSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white/20 p-6 rounded-full inline-block mb-6">
                      <step.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#4caf50] font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-4">{step.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{step.description}</p>
                  </div>
                    </div>
                  </motion.div>
                ))}
              </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => {
                const applySection = document.getElementById('apply');
                if (applySection) {
                  applySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block bg-white text-[#248E3D] font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-xl shadow-lg"
            >
              Start Your Application
            </button>
            </motion.div>
        </div>
      </section>

    </>
  );
};

export default Home;