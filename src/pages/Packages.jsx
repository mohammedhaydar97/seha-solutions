import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown,
  Calendar
} from 'lucide-react';
import PurpleWaveBanner from '@/components/PurpleBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusinessServicesSection from '@/components/BusinessServicesSection ';
import ServicePackagesGrid from '@/components/ServicePackagesGrid ';

const ServicePackages = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Get the combined height of PurpleWaveBanner and Navbar
    const banner = document.querySelector('#purple-banner');
    const navbar = document.querySelector('#navbar');
    const totalHeight = (banner?.offsetHeight || 0) + (navbar?.offsetHeight || 0);
    setNavHeight(totalHeight);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PurpleWaveBanner id="purple-banner" />
      <Navbar id="navbar" />

      {/* Hero Section */}
      <div 
        className="relative overflow-hidden" 
        style={{ 
          height: `calc(50vh - ${navHeight}px)`,
          backgroundColor: '#FFE0E6'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200 bg-opacity-50 flex flex-col items-center justify-center">
          <div className="text-center text-pink-900 p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Service Packages
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-pink-800">
              Tailored solutions designed to fit your unique needs, empowering your vision at every level.
            </p>
          </div>
        </div>
      </div>

      <BusinessServicesSection />

      {/* Limited Places Banner */}
      <div className="bg-pink-50 border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center text-pink-800">
            <span className="text-base md:text-lg font-medium">
              ⚡ Limited spots available - <span className="text-pink-900 font-bold underline">
                Book your consultation now
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <ServicePackagesGrid />

      {/* Book Consultation CTA */}
      <div style={{ backgroundColor: '#FFE0E6' }} className="text-pink-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your First Consultation
          </h2>
          <p className="text-pink-800 mb-10 text-xl max-w-2xl mx-auto">
            Take the first step towards ensuring your establishment's food safety and compliance. 
            Limited consultation spots available this month.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-pink-600 text-white hover:bg-pink-700 flex items-center gap-2 text-lg px-8 py-6 h-auto"
            >
              <Calendar className="w-6 h-6" />
              Book Your Consultation Now
            </Button>
            <Badge 
              variant="outline" 
              className="bg-pink-100 text-pink-800 border-pink-200 text-lg py-2 px-4"
            >
              Only 5 spots left this month
            </Badge>
          </div>
        </div>
      </div>

      <Footer />

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 opacity-0 translate-y-10 group-scroll-visible:opacity-100 group-scroll-visible:translate-y-0"
        aria-label="Scroll to top"
      >
        <ChevronDown className="transform rotate-180" size={24} />
      </button>
    </div>
  );
};

export default ServicePackages;