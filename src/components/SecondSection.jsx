import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import handshake from './../../images/businessman-with-tablet-after-closing-deal.jpg'

const SecondSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('image-section')) {
              entry.target.classList.add('animate-slide-right');
            } else if (entry.target.classList.contains('text-section')) {
              entry.target.classList.add('animate-slide-left');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const imageSection = sectionRef.current?.querySelector('.image-section');
    const textSection = sectionRef.current?.querySelector('.text-section');

    if (imageSection) {
      imageSection.classList.remove('animate-slide-right');
      observer.observe(imageSection);
    }

    if (textSection) {
      textSection.classList.remove('animate-slide-left');
      observer.observe(textSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute top-20 right-40 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-1/4 w-4 h-4 bg-purple-600 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full"></div>
      
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="image-section md:w-1/2 mb-8 md:mb-0 opacity-0">
          <div className="bg-white rounded-3xl shadow-xl p-4 transform rotate-[-5deg]">
            <div className="aspect-[4/3] bg-gray-50 rounded-2xl">
              <img src={handshake} alt="Business handshake" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="text-section md:w-1/2 md:pl-12 opacity-0">
          <h1 className="text-4xl font-bold mb-4">
            Your Premier Partner in{' '}
            <span className="text-[#FFD700]">
              Food Safety and Compliance
            </span>
          </h1>
          
          <p className="text-gray-600 mb-6">
            At Soha Solutions, we set the gold standard in food safety and regulatory compliance. With over 18 years of experience, our mission is to ensure that your food establishment not only meets but exceeds the highest standards of health, safety, and legal requirements. Based in Lebanon, our team of experts delivers unparalleled service, guiding you through every aspect of food safety and regulatory adherence.
          </p>
          
          <Button className="bg-[#FFD1DC] hover:bg-[#ffbcc9] text-white px-8 py-2 rounded-full">
            Free Register
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-right {
          animation: slideRight 1s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideLeft 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SecondSection;