import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Star, Shield, Users, Award, Clock, Check, FileText, Book } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import truck from './../assets/servicesPage.webp'

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(undefined);
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeServiceCards, setActiveServiceCards] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleStatsIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && activeIndex === -1) {
          animateCards();
        }
      });
    };

    const handleServicesIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && activeServiceCards === -1) {
          animateServiceCards();
        }
      });
    };

    const statsObserver = new IntersectionObserver(handleStatsIntersect, observerOptions);
    const servicesObserver = new IntersectionObserver(handleServicesIntersect, observerOptions);

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    return () => {
      if (statsRef.current) statsObserver.disconnect();
      if (servicesRef.current) servicesObserver.disconnect();
    };
  }, [activeIndex, activeServiceCards]);

  const animateCards = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < stats.length) {
        setActiveIndex(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  };

  const animateServiceCards = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < services.length) {
        setActiveServiceCards(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Shield className="w-8 h-8 text-[#FFD700]" />,
      title: "Farm-to-Table Food Safety",
      shortDesc: "Ensuring safety at every step of the food journey",
      description: "Ensuring Safety from Start to Finish. We uphold the principles of health and food safety at every stage of the food supply chain. Our expertise guarantees that your practices meet rigorous standards, ensuring high quality and safety from the farm to the consumer.",
      offers: "Implementation of best practices for food handling, safety protocols, and compliance with industry standards.",
      benefits: "Enhanced safety, reduced risk, and confidence in the quality of your food products.",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD700]" />,
      title: "Quality Assurance and Compliance",
      shortDesc: "Setting new standards in food quality",
      description: "Setting the Standard for Excellence. Our team helps food establishments meet regulatory conditions and maintain consistent food quality and safety, providing a safe environment for every customer through meticulous adherence to food safety regulations.",
      offers: "Comprehensive audits, documentation requirements, quality assurance practices, and creating a safe dining environment.",
      benefits: "Improved food safety practices, reduced risk, customer satisfaction, and adherence to safety regulations.",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <Users className="w-8 h-8 text-[#FFD700]" />,
      title: "Comprehensive Training Programs",
      shortDesc: "Empowering your team with knowledge",
      description: "Empowering Your Team with Knowledge. We offer a range of training programs and courses designed for local and national community activities. Our programs equip your employees with the necessary skills and knowledge to uphold food safety and quality standards.",
      offers: "On-site and on-line training seminars, workshops, and courses tailored to your staff's needs.",
      benefits: "Well-trained staff, improved food safety practices, and enhanced operational efficiency.",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <FileText className="w-8 h-8 text-[#FFD700]" />,
      title: "Licensing Assistance",
      shortDesc: "Streamlining your path to compliance",
      description: "Streamlining Your Path to Legal Operation. Navigating the licensing process can be complex. We provide expert assistance in obtaining necessary permits and documentation, ensuring that your food establishment is compliant with all necessary regulations.",
      offers: "Assistance with application processes, documentation, and regulatory filings.",
      benefits: "Smooth and efficient licensing, reduced administrative burden, and regulatory compliance.",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <Book className="w-8 h-8 text-[#FFD700]" />,
      title: "Nutritional Analysis and Menu Enhancement",
      shortDesc: "Optimizing menus for health and wellness",
      description: "Optimizing Your Menu for Health and Wellness. We analyze the caloric content of your menu items and offer suggestions to modify options based on your clients. Our service includes creating nutritious menu options that cater to various dietary needs, ensuring ingredient separation, gluten-free, and allergy-friendly choices.",
      offers: "Caloric estimation, ingredient modification, and development of health-conscious menu options.",
      benefits: "Higher guest satisfaction, better catering to dietary needs, and improved customer satisfaction.",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD700]" />,
      title: "Legal Licensing For Food Regulations",
      shortDesc: "Ensuring complete regulatory compliance",
      description: "Ensuring Compliance with Public Health Standards. We assist in obtaining legal licenses for food regulations as mandated by the Ministry of Public Health. Our services ensure that your establishment meets all legal requirements and operates within the framework of public health regulations.",
      offers: "Support in obtaining and maintaining food regulation compliance.",
      benefits: "Full compliance with legal standards, reduced risk of non-compliance issues, and peace of mind.",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD700]" />,
      title: "We help you with your business setup",
      shortDesc: "Nurseries, schools, medical centers, beauty centers, restaurants and all catering",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD700]" />,
      title: "We assist your business",
      shortDesc: "Ensuring complete regulatory compliance",
      description: "food safety protocols, menu planning, product development, marketing strategies, examine a restaurant's operations and make recommendations to boost efficiency and save expenses. Prepare sales and profit estimates, establishes strategic budgets, provides assistance with marketing and social media, and recommend software products.",
      color: "bg-[#FFE0E6]"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD700]" />,
      title: "examine a restaurant's operations",
      shortDesc: "Ensuring complete regulatory compliance",
      description: "examine a restaurant's operations and make recommendations to boost efficiency and save expenses. They may prepare sales and profit estimates, establishes strategic budgets, provides assistance with marketing and social media, and recommend software products.",
      color: "bg-[#FFE0E6]"
    }
  ];

  const stats = [
    { number: "98%", label: "Success Rate", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> },
    { number: "5000+", label: "Clients Served", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <img 
        src={truck}
        alt="Food safety background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-10 text-center px-4">
        <div className="transition-all duration-700 ease-in-out">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFE0E6] mb-6">
            Revolutionizing Food Safety
          </h1>
          <p className="text-xl md:text-2xl text-[#FFE0E6] max-w-2xl mx-auto mb-8">
            Transforming ideas into impactful solutions with precision, creativity, and expertise.
          </p>
          <button 
            onClick={scrollToServices}
            className="bg-[#FFE0E6] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ffd1da] transition-colors duration-300 shadow-lg"
          >
            Explore Our Services
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#FFE0E6] animate-bounce cursor-pointer"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>

        {/* Stats Section */}
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className={`text-center transition-all duration-700 ease-out transform
                  ${index <= activeIndex 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                  }
                  hover:shadow-lg hover:-translate-y-1`}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center text-[#FFE0E6]">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we're transforming food safety with cutting-edge technology and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden ${service.color} p-6 cursor-pointer transform transition-all duration-700 ease-out
                  ${index <= activeServiceCards 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                  }
                  hover:scale-105 hover:shadow-lg`}
                onClick={() => setActiveService(activeService === index ? undefined : index)}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeService === undefined || activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-4">
                    {service.description && (
                      <p className="text-gray-700">{service.description}</p>
                    )}
                    {service.offers && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">What We Offer:</h4>
                        <p className="text-gray-700">{service.offers}</p>
                      </div>
                    )}
                    {service.benefits && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">Benefits:</h4>
                        <p className="text-gray-700">{service.benefits}</p>
                      </div>
                    )}
                    <button className="flex items-center space-x-2 text-[#FFE0E6] hover:text-[#FFE0E6]/80 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 bg-[#FFE0E6] text-white p-3 rounded-full shadow-lg hover:bg-[#FFE0E6]/80 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;