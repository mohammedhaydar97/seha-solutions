import React, { useState, useEffect } from 'react';

const VirtualDemo = () => {
  const [isVisible, setIsVisible] = useState({
    main: false,
    services: false,
    testimonials: false
  });

  useEffect(() => {
    const observers = {};
    const sections = ['main', 'services', 'testimonials'];

    sections.forEach(section => {
      observers[section] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
            observers[section].disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(`${section}-section`);
      if (element) {
        observers[section].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const testimonials = [
    {
      rating: 5,
      title: "Excellent Service",
      text: "Their service is brilliant! I really hope some of them are now using your service.",
      author: "Fiona"
    },
    {
      rating: 5,
      title: "Love the flexibility",
      text: "We are very happy with the box and we value that we can have the standard box or choose our own.",
      author: "Joseph"
    },
    {
      rating: 4,
      title: "Fantastic quality",
      text: "I'm really appreciating the quality and presentation. The flavour of the veg is outstanding.",
      author: "Michelle"
    }
  ];

  return (
    <div className="w-full min-h-screen p-8" style={{ backgroundColor: '#F0EFF5' }}>
      {/* Main Title */}
      <div id="main-section" 
        className={`transition-all duration-1000 transform
          ${isVisible.main ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl font-bold text-center mb-16">
          Why You'll <span className="text-[#FFD1DC] ">Love Us</span>
        </h1>
      </div>

      {/* Services Description */}
      <div id="services-section" className="max-w-4xl mx-auto text-center mb-16">
        <p className={`text-lg text-gray-700 mb-8 transition-all duration-700 delay-300 transform
          ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          We offer a full suite of services designed to address every aspect of food safety. 
          Our customized approach means that we cater to your specific needs, providing solutions 
          that drive excellence and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            {
              title: "Expert Training Programs",
              text: "Empower your team with knowledge and skills through our comprehensive training sessions."
            },
            {
              title: "Regulatory Consulting",
              text: "Navigate complex food safety regulations with confidence using our expert guidance."
            },
            {
              title: "Licensing Assistance",
              text: "Streamline your licensing process with our efficient and supportive services."
            },
            {
              title: "Nutritional Analysis",
              text: "Enhance your menu with precise calorie counts and healthy options tailored to your customers' needs."
            }
          ].map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-700 transform
                ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${500 + (index * 200)}ms` }}
            >
              <h3 className="text-lg font-bold text-[#FFD1DC] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials-section" className="max-w-6xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm text-center transition-all duration-700 transform
                ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-bold text-[#FFD1DC] mb-3">{testimonial.title}</h3>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-800">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualDemo;