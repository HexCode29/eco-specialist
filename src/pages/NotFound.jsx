import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AlertTriangle, Home as HomeIcon, FileText } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | EcoSpecialist</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return home or get a free quote." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#248E3D]/10 text-[#248E3D] mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              Sorry, the page you are looking for doesn’t exist or may have been moved.
              Please check the URL or use the buttons below to continue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="bg-[#248E3D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e6b32] inline-flex items-center space-x-2">
                <HomeIcon className="w-5 h-5" />
                <span>Go to Home</span>
              </Link>
              <Link to="/#apply" className="border-2 border-[#248E3D] text-[#248E3D] px-6 py-3 rounded-xl font-semibold hover:bg-[#248E3D] hover:text-white inline-flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Check Eligibility</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
