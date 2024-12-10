import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Contact = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Let's bring your business to excellence —reach out and start the conversation today :)";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Adjust speed of typing here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#FFE0E6]">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 text-center px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up opacity-0">
                Contact us
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto h-20">
                {displayText}
              </p>
            </div>
          </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease forwards;
        }
      `}</style>

      <main className="max-w-4xl mx-auto px-4 py-12 -mt-10 relative z-10">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information:</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Address:</h4>
              <address className="text-gray-600 not-italic">
                [Your Address]<br />
                [City, State, ZIP Code]<br />
                Lebanon
              </address>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Phone:</h4>
              <p className="text-gray-600">[Your Phone Number]</p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Email:</h4>
              <p className="text-gray-600">[Your Email Address]</p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Business Hours:</h4>
              <div className="text-gray-600">
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFE0E6] focus:border-transparent"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFE0E6] focus:border-transparent"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFE0E6] focus:border-transparent"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFE0E6] text-gray-800 py-2 px-4 rounded-md hover:bg-[#FFE0E6]/90 transition-colors duration-200 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;