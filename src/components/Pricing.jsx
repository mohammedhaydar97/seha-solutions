import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Users, Medal, Lightbulb } from 'lucide-react';

const services = [
  {
    title: "**Decades of Expertise**",
    subtitle: "Our extensive experience in governmental audits and food safety inspections positions us as leaders in the field. We bring a wealth of knowledge and a track record of success to every project, ensuring your business operates smoothly and in full compliance with all regulations.",
    icon: <Users className="w-12 h-12 mb-4 text-[#FFD700]" />,
  },
  {
    title: "**Certified Professionals**",
    subtitle: "Our team comprises certified food safety inspectors and a PhD-certified dietitian with specialized experience in nutrition. This combination of qualifications and hands-on experience ensures that you receive top-tier advice and solutions tailored to your needs.",
    icon: <Medal className="w-12 h-12 mb-4 text-[#FFD700]" />,
  },
  {
    title: "**Innovative Approaches**",
    subtitle: "We are committed to staying at the forefront of industry trends and best practices. Our services are not only thorough but also innovative, ensuring that you benefit from the latest advancements in food safety and health.",
    icon: <Lightbulb className="w-12 h-12 mb-4 text-[#FFD700]" />,
  }
];

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

const plans = [
  {
    name: "BASIC PLAN",
    price: "₹400",
    subtitle: "Consultation",
    features: [
      "Conduct an inspection once a month and give the detailed checklist to the owner of the institution.",
      "Detailed checklist provided",
      "Institution owner consultation",
      "Basic compliance review",
      "Written documentation",
      "Email support"
    ],
    icon: "⭐",
    color: "pink"
  },
  {
    name: "ECONOMY PLAN",
    price: "₹600",
    subtitle: "Consultation",
    features: [
      "Conduct an inspection twice a month for periodic follow-up and give a checklist after each visit.",
      "Compliance monitoring",
      "Progress tracking",
      "Priority support"
    ],
    icon: "🌟",
    color: "blue"
  },
  {
    name: "ADVANCED PLAN",
    price: "₹1000",
    subtitle: "Auditing",
    features: [
      "Help the owner of the establishment in applying the required conditions to obtain a legal license",
      "establish a person OR code for his institution",
      "inaddition to providing a video of the workflow in the institution",
      "24/7 support"
    ],
    icon: "💫",
    color: "purple"
  },
  {
    name: "PROFESSIONAL PLAN",
    price: "₹1500",
    subtitle: "Nutrition Analysis",
    features: [
      "Determine the amount of calories available in all the dishes available on the menus",
    ],
    icon: "🏢",
    color: "green"
  },
  {
    name: "PREMIUM PLAN",
    price: "₹2000",
    subtitle: "Auditing & Training",
    features: [
      "Hold training courses for all employees in the establishment",
      "providing there with certificates",
      "giving ideas to elaborate a manu of healthy foods (auditing) and (training)",
      "Comprehensive auditing",
      "Complete documentation"
    ],
    icon: "👑",
    color: "orange"
  },
  {
    name: "ENTERPRISE PLAN",
    price: "Custom",
    subtitle: "Customized Solutions",
    features: [
      "Customize your plan to choose the needed services from the different packages available.",
      "Mix and match services",
      "Flexible scheduling",
      "Dedicated account manager",
      "Custom reporting",
      "Priority support"
    ],
    icon: "💎",
    color: "red"
  }
];

const getColorClass = (color) => {
  const colors = {
    pink: {
      bg: "bg-pink-500",
      border: "border-pink-500",
      text: "text-pink-500",
      hover: "hover:bg-pink-50",
      button: "hover:bg-pink-500 hover:text-white"
    },
    blue: {
      bg: "bg-blue-500",
      border: "border-blue-500",
      text: "text-blue-500",
      hover: "hover:bg-blue-50",
      button: "hover:bg-blue-500 hover:text-white"
    },
    purple: {
      bg: "bg-purple-500",
      border: "border-purple-500",
      text: "text-purple-500",
      hover: "hover:bg-purple-50",
      button: "hover:bg-purple-500 hover:text-white"
    },
    green: {
      bg: "bg-green-500",
      border: "border-green-500",
      text: "text-green-500",
      hover: "hover:bg-green-50",
      button: "hover:bg-green-500 hover:text-white"
    },
    orange: {
      bg: "bg-orange-500",
      border: "border-orange-500",
      text: "text-orange-500",
      hover: "hover:bg-orange-50",
      button: "hover:bg-orange-500 hover:text-white"
    },
    red: {
      bg: "bg-red-500",
      border: "border-red-500",
      text: "text-red-500",
      hover: "hover:bg-red-50",
      button: "hover:bg-red-500 hover:text-white"
    }
  };
  return colors[color];
};

const MainPage = () => {
  const [isVisible, setIsVisible] = useState({
    services: false,
    demo: {
      main: false,
      services: false,
      testimonials: false
    },
    pricing: {
      header: false,
      cards: false
    }
  });

  useEffect(() => {
    const observers = {};
    const sections = [
      'services',
      'demo-main',
      'demo-services',
      'demo-testimonials',
      'pricing-header',
      'pricing-cards'
    ];

    sections.forEach(section => {
      observers[section] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (section.startsWith('demo-')) {
              const demoSection = section.replace('demo-', '');
              setIsVisible(prev => ({
                ...prev,
                demo: { ...prev.demo, [demoSection]: true }
              }));
            } else if (section.startsWith('pricing-')) {
              const pricingSection = section.replace('pricing-', '');
              setIsVisible(prev => ({
                ...prev,
                pricing: { ...prev.pricing, [pricingSection]: true }
              }));
            } else {
              setIsVisible(prev => ({ ...prev, [section]: true }));
            }
            observers[section].disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(section);
      if (element) {
        observers[section].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Services Section */}
      <section id="services" className="w-full bg-white py-16">
        <div className="max-w-[100vw] overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <h1 className={`text-5xl font-bold text-center mb-2 text-[#FFD700] transition-all duration-700 transform
              ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Services
            </h1>
            <p className={`text-lg text-center text-gray-900 font-medium transition-all duration-700 delay-200 transform
              ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              What We Do
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {services.map((service, index) => (
                <CarouselItem 
                  key={index} 
                  className={`pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 transition-all duration-700 transform
                    ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${400 + (index * 200)}ms` }}
                >
                  <div className="bg-white border border-[#FFD700]/30 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 h-full p-8">
                    <div className="flex flex-col items-center text-center">
                      {service.icon}
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title.replace(/\*\*/g, '')}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.subtitle}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="container mx-auto px-4">
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FFD700] text-white hover:bg-[#F4C430] border-none" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFD700] text-white hover:bg-[#F4C430] border-none" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Virtual Demo Section */}
      <section className="w-full min-h-screen p-8" style={{ backgroundColor: '#F0EFF5' }}>
        <div id="demo-main" 
          className={`transition-all duration-1000 transform
            ${isVisible.demo.main ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold text-center mb-16">
            Why You'll <span className="text-[#FFD1DC] ">Love Us</span>
          </h1>
        </div>

        <div id="demo-services" className="max-w-4xl mx-auto text-center mb-16">
          <p className={`text-lg text-gray-700 mb-8 transition-all duration-700 delay-300 transform
            ${isVisible.demo.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  ${isVisible.demo.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${500 + (index * 200)}ms` }}
              >
                <h3 className="text-lg font-bold text-[#FFD1DC] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="demo-testimonials" className="max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm text-center transition-all duration-700 transform
                  ${isVisible.demo.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F0EFF5]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div 
            id="pricing-header"
            className={`text-center mb-12 transition-all duration-1000 transform
              ${isVisible.pricing.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl font-bold">
              Start With <span className="text-[#FFD700]">Affordable Price</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Choose the perfect plan for your institution's needs
            </p>
          </div>

          <div 
            id="pricing-cards"
            className="grid md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => {
              const colorClasses = getColorClass(plan.color);
              return (
                <div 
                  key={index} 
                  className={`p-8 rounded-2xl bg-white border flex flex-col h-full transition-all duration-700 transform
                    ${isVisible.pricing.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span>{plan.icon}</span>
                      <div>
                        <span className="font-semibold block">{plan.name}</span>
                        <span className="text-sm text-gray-500">{plan.subtitle}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-8">{plan.price} / month</h3>
                    <ul className="space-y-6">
                      {plan.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className={`flex gap-2 transition-all duration-500
                            ${isVisible.pricing.cards ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                          style={{ transitionDelay: `${index * 200 + idx * 100}ms` }}
                        >
                          <span className={`w-2 h-2 rounded-full ${colorClasses.bg} mt-1.5 flex-shrink-0`}></span>
                          <span className="text-gray-600 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-8">
                    <button 
                      className={`w-full py-3 px-6 rounded-full border ${colorClasses.border} ${colorClasses.text} transition-all duration-300 ${colorClasses.button}`}
                    >
                      Get Started Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;