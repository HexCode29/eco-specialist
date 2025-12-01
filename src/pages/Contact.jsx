import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { saveContactMessage } from '@/firebase/firestoreService';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [openFaqs, setOpenFaqs] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        title: "⚠️ reCAPTCHA Required",
        description: "Please complete the reCAPTCHA verification before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await saveContactMessage({ ...formData, recaptchaToken });
      
      if (result.success) {
        toast({
          title: "📧 Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "❌ Error Sending Message",
        description: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallClick = () => {
    window.open('tel:08009991590', '_self');
  };

  const handleGetDirections = () => {
    const address = "1 Cranmore Drive, Shirley, Solihull B90 4RZ, UK";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0800 999 1590',
      description: 'Free consultation available',
      action: handleCallClick
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ecospecialist.co.uk',
      description: 'We respond within 24 hours',
      action: () => window.open('mailto:info@ecospecialist.co.uk?subject=EcoSpecialist Inquiry', '_blank')
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '1 Cranmore Drive, Shirley',
      description: 'Solihull, West Midlands, B90 4RZ',
      action: handleGetDirections
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon - Fri: 8:00 - 18:00',
      description: 'Sat: 9:00 - 16:00, Sun: Closed',
      action: null
    }
  ];

  const faqs = [
    {
      question: 'How long does the grant application process take?',
      answer: 'Most applications are processed within 2-4 weeks. We handle all paperwork and keep you updated throughout the process.'
    },
    {
      question: 'Do I need to pay anything upfront?',
      answer: 'No, our assessment and application services are completely free. You only pay if you choose to proceed with non-grant funded work.'
    },
    {
      question: 'What if my application is rejected?',
      answer: 'We have a 95% success rate, but if your application is rejected, we\'ll explore alternative funding options at no extra cost.'
    },
    {
      question: 'Can I apply for multiple grants?',
      answer: 'Yes, many customers qualify for multiple grants. We\'ll identify all available funding options for your situation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact EcoSpecialist - Free Energy Grant Consultation | Birmingham</title>
        <meta name="description" content="Contact EcoSpecialist for free energy grant consultation. Call 0800 999 1590 or email info@ecospecialist.uk. Birmingham office: 1 Cranmore Drive, Shirley, Solihull." />
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
              Contact <span className="text-[#248E3D]">Information</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={info.action}
              >
                <div className="w-16 h-16 bg-[#248E3D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-[#248E3D] font-semibold mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full flex flex-col max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                  Send Us a <span className="text-[#248E3D]">Message</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Fill out the form below and we'll get back to you within 24 hours 
                  with information about available grants for your property.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#248E3D] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#248E3D] focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#248E3D] focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#248E3D] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="grant-inquiry">Grant Inquiry</option>
                      <option value="free-assessment">Free Assessment</option>
                      <option value="existing-customer">Existing Customer</option>
                      <option value="general-question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#4caf50] focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your property and what grants you're interested in..."
                  ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key - replace with your actual site key
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                  className="btn-primary w-full py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Birmingham, we're easily accessible 
              for face-to-face consultations.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Birmingham Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-[#248E3D] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        1 Cranmore Drive, Shirley<br />
                        Solihull, West Midlands<br />
                        B90 4RZ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-[#248E3D] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Opening Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 - 18:00<br />
                        Saturday: 9:00 - 16:00<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-[#248E3D] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">0800 999 1590</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleGetDirections}
                  className="btn-primary mt-6"
                >
                  Get Directions
                </button>
              </div>
              <div className="h-96 lg:h-auto bg-gray-100 rounded-r-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.1234567890!2d-1.8123456789!3d52.4123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a1234567890%3A0x1234567890abcdef!2s1%20Cranmore%20Drive%2C%20Shirley%2C%20Solihull%20B90%204RZ%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EcoSpecialist Birmingham Office Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;