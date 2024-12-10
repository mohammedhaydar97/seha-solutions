import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import truck from './../assets/servicesPage.webp'
const Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isStrengthInView, setIsStrengthInView] = useState(false);
  const servicesRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const strengthRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      // Check if Who We Are section is in view
      if (whoWeAreRef.current) {
        const rect = whoWeAreRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        setIsInView(isVisible);
      }

      // Check if Strength section is in view
      if (strengthRef.current) {
        const rect = strengthRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        setIsStrengthInView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Main image */}
      <img 
        src={truck}
        alt="Hero background"
        className="absolute w-full h-full object-cover object-center"
      
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="transition-all duration-700 ease-in-out">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFE0E6] mb-6">
            Our Story
          </h1>
          <p className="text-xl text-[#FFE0E6] md:text-2xl max-w-2xl mx-auto mb-8">
            Experience the perfect blend of innovation and safety in every bite
          </p>
          <button
            onClick={scrollToServices}
            className="bg-[#FFE0E6] text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300"
          >
            Explore Our Story
          </button>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#FFE0E6] animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>

        {/* Quote Section */}
        <div ref={servicesRef} className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="text-center">
              <div className="relative inline-block">
                <h2 className="text-[#F9D875] placeholder:text-3xl md:text-4xl font-extrabold italic  mb-4 relative">
                  <span className="absolute -top-6 -left-8 text-[#FFE0E6] text-6xl font-serif">"</span>
                  <span className="absolute -bottom-6 -right-8 text-[#FFE0E6] text-6xl font-serif">"</span>
                  We felt the need for a Quality and innovative team in the market and we couldn't help but to fill in!
                </h2>
                <h1 style={{ float: 'right', marginRight: '150px' }} className='text-4xl font-bold'>- SEHA CEO</h1>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 py-24 relative overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE0E6]/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFE0E6]/20 rounded-full translate-y-1/2 -translate-x-1/2" />

          {/* Who We Are Section */}
          <div ref={whoWeAreRef} className="mb-20">
            <h2 className={`text-4xl font-bold text-gray-900 mb-12 text-center transition-all duration-1000 transform ${isInView ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
              }`}>
              Who We Are
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Card */}
              <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-1000 transform ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}>
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-pink-900 rounded-full mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15l-5-5L5 21M5 12l5-5 4 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Expertise</h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#FFE0E6] mr-2">•</span>
                        Certified Registered Dietitian with Doctor of Science in Nutrition
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFE0E6] mr-2">•</span>
                        Professional Master's Degree in Nutrition: Dietetics and Food Management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-1000 transform ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-pink-900 rounded-full mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Industry Experience</h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#FFE0E6] mr-2">•</span>
                        18+ years experience in food safety auditing
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFE0E6] mr-2">•</span>
                        Experience with Ministry of Public Health and UNICEF
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFE0E6] mr-2">•</span>
                        Extensive training with WHO and Ministry of Public Health
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Strength Section */}
          <div ref={strengthRef} className="bg-[#FFE0E6]/5 rounded-3xl p-12 relative">
            <h2 className={`text-4xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 transform ${isStrengthInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
              Our Strength
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-1000 delay-300 transform ${isStrengthInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Professionally qualified team designs Food Safety Training Courses</p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">HACCP Implementation procedures and comprehensive documentation</p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Practical approach with industry experience and deep knowledge</p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#FFE0E6] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Team includes former food safety enforcement officials</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 bg-[#FFE0E6] text-white p-3 rounded-full shadow-lg hover:bg-[#FFE0E6]/80 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Story;