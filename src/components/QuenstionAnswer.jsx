import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

const QuestionAnswer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const questions = [
    {
      question: "How Benefit That I Got When Choose Basic Plan?",
      answer: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice"
    },
    {
      question: "How Benefit That I Got When Choose Basic Plan?",
      answer: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice"
    },
    {
      question: "How Benefit That I Got When Choose Basic Plan?",
      answer: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice"
    },
    {
      question: "How Benefit That I Got When Choose Basic Plan?",
      answer: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice"
    },
    {
      question: "How Benefit That I Got When Choose Basic Plan?",
      answer: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice"
    },
    {
      question: "How Benefit That I Got When Choose Basic Plan?",
      answer: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const AccordionItem = ({ item, index }) => (
    <div className="border rounded-lg bg-white mb-4">
      <button
        className="w-full p-4 text-left flex justify-between items-center"
        onClick={() => toggleAccordion(index)}
      >
        <span className="font-medium text-gray-700">{item.question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            activeIndex === index ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeIndex === index ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className="p-4 text-gray-600 border-t">
          {item.answer}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      ref={sectionRef}
      className="max-w-6xl mx-auto p-6"
    >
      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes popUp {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          80% {
            transform: scale(0.95);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <h1 
        className="text-1xl font-bold mb-8 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none',
          animationDelay: '0.2s'
        }}
      >
        Find the perfect fit for your business and achieve your <span className="text-[#FFD700]">goals</span>
      </h1>
      
      <h1 
        className="text-3xl font-bold mb-8 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none',
          animationDelay: '0.4s'
        }}
      >
        Ready to elevate your food safety standards? <br/> 
        Discover more about our services and how we can support your business
      </h1>

      <div className="w-full flex justify-center items-center">
        <Button 
          className="bg-[#FFE0E6] hover:bg-[#FFE0E6]/90 text-gray-800 rounded-full px-20 py-12 text-xl font-semibold transition-all duration-300 hover:scale-105"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'popUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
          }}
        >
          Contact Us Now
        </Button>
      </div>
    </div>
  );
};

export default QuestionAnswer;