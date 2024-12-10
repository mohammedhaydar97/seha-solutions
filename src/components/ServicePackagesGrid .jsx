import React, { useEffect, useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Clock, 
  Award, 
  Utensils, 
  Users, 
  Settings
} from 'lucide-react';

const ServicePackagesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '50px' // Start animation slightly before the component comes into view
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      title: "Basic",
      icon: <Clock className="w-8 h-8 mb-4 text-pink-600" />,
      description: "Monthly inspection and detailed checklist",
      features: [
        "Monthly facility inspection",
        "Detailed checklist provided to owner",
        "Professional consultation",
        "Written recommendations"
      ],
      type: "Consultation"
    },
    {
      title: "Economy",
      icon: <Check className="w-8 h-8 mb-4 text-pink-600" />,
      description: "Bi-monthly inspections with follow-ups",
      features: [
        "Twice monthly inspections",
        "Periodic follow-up visits",
        "Detailed checklist after each visit",
        "Progress tracking",
        "Consultation services"
      ],
      type: "Consultation"
    },
    {
      title: "Advanced",
      icon: <Award className="w-8 h-8 mb-4 text-pink-600" />,
      description: "Legal compliance and QR code implementation",
      features: [
        "Legal license application assistance",
        "QR code establishment",
        "Workflow video documentation",
        "Complete compliance review",
        "Full audit report"
      ],
      type: "Auditing"
    },
    {
      title: "Professional",
      icon: <Utensils className="w-8 h-8 mb-4 text-pink-600" />,
      description: "Complete menu calorie analysis",
      features: [
        "Comprehensive calorie calculation",
        "Nutritional analysis",
        "Menu optimization recommendations",
        "Detailed reporting"
      ],
      type: "Analysis"
    },
    {
      title: "Premium",
      icon: <Users className="w-8 h-8 mb-4 text-pink-600" />,
      description: "Staff training and menu development",
      features: [
        "Employee training courses",
        "Certification upon completion",
        "Healthy menu development",
        "Nutritional consulting",
        "Complete audit services"
      ],
      type: "Auditing & Training"
    },
    {
      title: "Enterprise",
      icon: <Settings className="w-8 h-8 mb-4 text-pink-600" />,
      description: "Customizable service package",
      features: [
        "Flexible service selection",
        "Custom package creation",
        "Mix and match services",
        "Tailored to your needs",
        "Priority support"
      ],
      type: "Custom"
    }
  ];

  return (
    <div className="py-16 px-4" ref={gridRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`
                flex flex-col h-full transform transition-all duration-500
                hover:scale-105
                opacity-0 translate-y-8
                ${isVisible ? 'animate-fadeIn' : ''}
              `}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center">{pkg.icon}</div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {pkg.title}
                </CardTitle>
                <Badge 
                  variant="secondary" 
                  className="bg-pink-50 text-pink-600 hover:bg-pink-100"
                >
                  {pkg.type}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-700"
                    >
                      <Check className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Button 
                  className="w-full bg-pink-600 hover:bg-pink-700" 
                  variant="default"
                >
                  Select Package
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add animation keyframes style
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out;
  }
`;
document.head.appendChild(style);

export default ServicePackagesGrid;