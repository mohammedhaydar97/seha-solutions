import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white w-full p-8 border-t border-gray-300 relative">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 mb-24">
        {/* Company Info Section */}
        <div className="flex flex-col space-y-4 md:w-[40%]">
          <img src="/logo.png" alt="Company Logo" className="h-12" />
          <h1 className="text-xl font-semibold">Find the perfect fit for your business and achieve your goals.</h1>
          <p className="text-gray-100 text-sm">
            Ready to elevate your food safety standards? Discover more about our services and how we can support your business by exploring the links below or contacting us directly.
          </p>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col space-y-4 items-center md:w-[20%]">
          <h3 className="text-xl font-semibold">Menu</h3>
          <nav className="flex flex-col space-y-2 items-center">
            <a href="#" className="text-gray-100 hover:text-white hover:underline transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-100 hover:text-white hover:underline transition-colors duration-200">About</a>
            <a href="#" className="text-gray-100 hover:text-white hover:underline transition-colors duration-200">Services</a>
            <a href="#" className="text-gray-100 hover:text-white hover:underline transition-colors duration-200">Portfolio</a>
            <a href="#" className="text-gray-100 hover:text-white hover:underline transition-colors duration-200">Contact</a>
          </nav>
        </div>

        {/* Contact Form */}
        <div className="md:w-[40%]">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="w-full md:w-1/2">
                <label className="block text-sm mb-1 font-medium">First name</label>
                <input 
                  type="text"
                  className="w-full p-2 rounded bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 focus:outline-none"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm mb-1 font-medium">Last name</label>
                <input 
                  type="text"
                  className="w-full p-2 rounded bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <input 
                type="email"
                className="w-full p-2 rounded bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1 font-medium">Query</label>
              <textarea 
                className="w-full p-2 rounded bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 focus:outline-none h-24 resize-none"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-2 rounded  bg-[#FFE0E6]  transition-all duration-200 text-black" 
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#FFE0E6] text-white py-4 absolute bottom-0 left-0 right-0">
        <div className="w-full max-w-6xl text-black mx-auto text-center">
          © {new Date().getFullYear()} Copyright
        </div>
      </div>
    </footer>
  );
};

export default Footer;