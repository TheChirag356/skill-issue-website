import React from "react";
import { Flag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center font-hack-mono">
      <Link to="/" className="flex items-center">
        {/* <Flag color="#ffffff" /> */}
        <img src="/logo2.png" width={50} alt="" className="hover:rotate-6 ease-in-out" />
      </Link>

      <div className="links flex gap-10">
        {["About", "Achievements", "Members", "Contact", "Blog"].map((item, index) => (
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            <a
              key={index}
              className={`text-md text-white capitalize font-regular ${
                index === 4 && "ml-32"
              } `}
            >
              {item}
            </a>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
