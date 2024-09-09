import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarItems = ["About", "Members", "Contact", "Blog"];

  return (
    <div className="navbar fixed z-50 w-full px-5 sm:px-20 py-4 bg-[#191919] text-white flex justify-between items-center font-['Neue Montreal'] justify-center">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo2.png"
          width={50}
          alt="Logo"
          className="hover:rotate-6 transition-transform ease-in-out"
        />
      </Link>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`flex-col lg:flex-row lg:flex items-center gap-10 absolute lg:static top-16 left-0 right-0 bg-[#191919] lg:bg-transparent lg:gap-10 px-5 lg:px-0 transition-all duration-300 ${
          isMobileMenuOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        {navbarItems.map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `block py-2 px-3 duration-200 text-md font-regular capitalize ${
                isActive ? "text-orange-700" : "text-gray-300"
              } hover:text-orange-700`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
