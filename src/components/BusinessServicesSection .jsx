import React, { useEffect, useState } from 'react';
import { Shield, FileText, Lightbulb, BarChart, Settings, DollarSign } from 'lucide-react';

const BusinessServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessServices = [
    {
      title: "Food Safety Protocols",
      description: "Comprehensive safety guidelines and implementation strategies for your establishment",
      icon: <Shield className="w-6 h-6 text-pink-600" />
    },
    {
      title: "Menu Planning",
      description: "Expert assistance in menu design and optimization for maximum profitability",
      icon: <FileText className="w-6 h-6 text-pink-600" />
    },
    {
      title: "Product Development",
      description: "Innovative product creation and refinement to expand your offerings",
      icon: <Lightbulb className="w-6 h-6 text-pink-600" />
    },
    {
      title: "Marketing Strategies",
      description: "Tailored marketing solutions including social media management and brand development",
      icon: <BarChart className="w-6 h-6 text-pink-600" />
    },
    {
      title: "Operational Efficiency",
      description: "Detailed analysis and recommendations to optimize operations and reduce costs",
      icon: <Settings className="w-6 h-6 text-pink-600" />
    },
    {
      title: "Financial Planning",
      description: "Strategic budgeting, profit estimates, and comprehensive financial guidance",
      icon: <DollarSign className="w-6 h-6 text-pink-600" />
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We Assist Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive consulting services help food establishments thrive through expert guidance 
            in safety, operations, and strategic growth. We provide end-to-end solutions to elevate 
            your business to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businessServices.map((service, index) => (
            <div 
              key={index}
              className={`bg-pink-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-xl p-8 shadow-sm transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto">
            We examine your restaurant's operations to boost efficiency and reduce expenses. Our team 
            prepares detailed sales projections, establishes strategic budgets, provides comprehensive 
            marketing assistance, and recommends optimal software solutions for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessServicesSection;