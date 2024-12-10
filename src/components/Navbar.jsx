import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logo1.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  mx-[10%]">
      <div className="flex items-center">
        <img className="w-[150px] " src={logo} alt="" />
      </div>
      <div className="flex gap-12">
        {[
          { to: "/", text: "Home" },
          { to: "/story", text: "Story" },
          { to: "/services", text: "Services" },
          { to: "/packages", text: "Packages" },
          { to: "/contact", text: "Contact Us" }
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group relative text-[#FF9EB5] hover:text-[#FF7F9C] text-base font-bold 
                       tracking-wide transition-all duration-300 hover:scale-105"
          >
            {link.text}
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7F9C] 
                           transition-all duration-300 ease-out
                           group-hover:w-full" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;