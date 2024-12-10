import React, { useEffect, useState } from 'react';
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

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="services-section"
      className={`w-full bg-white py-16 transition-all duration-1000 transform
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-[100vw] overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h1 className={`text-5xl font-bold text-center mb-2 text-[#FFD700] transition-all duration-700 delay-300 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Services
          </h1>
          <p className={`text-lg text-center text-gray-900 font-medium transition-all duration-700 delay-500 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  ${isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${700 + (index * 200)}ms` }}
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
  );
};

export default Services;