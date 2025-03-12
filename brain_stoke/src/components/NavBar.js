import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa";

const NavBar = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <nav className="mt-4 mb-14 flex flex-col sm:flex-row items-center bg-slate-900 justify-between py-4 shadow-lg shadow-red-800 rounded-xl px-10  ">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/">
            <FaBriefcaseMedical  className="text-5xl text-red-600 shadow-lg "/>
          </Link>
        </div>
        <div className="relative w-full sm:w-auto">
          <button
            onClick={toggleMenu}
            className="sm:hidden flex items-center justify-center text-white text-2xl mx-auto"
          >
            {isMenuOpen ? (
              <IoIosClose className="text-center" />
            ) : (
              <IoIosMenu className="text-center" />
            )}
          </button>
          <ul
            ref={menuRef}
            className={`grid grid-col-4 sm:flex justify-center gap-4 sm:gap-7 text-xl ${
              isMenuOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700" : "text-white"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700" : "text-white"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700" : "text-white"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prediction"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700" : "text-white"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Prediction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700" : "text-white"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
