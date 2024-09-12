import React, { useState, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarItems = ["About", "Members", "Contact", "Blog"];

  // Handler for toggling the mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar fixed z-50 w-full px-5 sm:px-20 py-4 bg-[#191919] text-white flex justify-between items-center font-['Neue Montreal']">
      {/* Logo */}
      <Link to="/" className="flex items-center" aria-label="Home">
        <img
          src="/logo2.png"
          width={50}
          alt="Logo"
          className="hover:rotate-6 transition-transform ease-in-out"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden focus:outline-none"
        aria-label="Toggle Menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links */}
      <div
        className={`${
          isMobileMenuOpen
            ? "fixed inset-x-0 top-16 flex flex-col gap-6 bg-[#191919] py-6"
            : "hidden"
        } lg:flex lg:flex-row lg:gap-10 lg:relative lg:top-0 lg:inset-auto lg:bg-transparent transition-all duration-300`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        {navbarItems.map((item, index) => (
          <MemoizedNavItem key={index} item={item} />
        ))}
      </div>
    </nav>
  );
};

// Memoized NavLink component for performance optimization
const NavItem = ({ item }) => (
  <NavLink
    to={`/${item.toLowerCase()}`}
    className={({ isActive }) =>
      `block py-2 px-3 text-md font-regular capitalize transition-colors duration-200 ${
        isActive ? "text-orange-700" : "text-gray-300"
      } hover:text-orange-700`
    }
    role="menuitem"
  >
    {item === "Contact" ? `${item} Us` : item}
  </NavLink>
);

// Memoize the NavItem component to prevent unnecessary re-renders
const MemoizedNavItem = memo(NavItem);

export default Navbar;
