"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking on a link or outside
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Name Section */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dev Jain
        </motion.a>

        {/* Hamburger icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <motion.div
            className="space-y-2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-8 h-0.5 bg-black"></div>
          </motion.div>
        </div>

        {/* Navigation Links for large screens */}
        <ul className="hidden lg:flex space-x-6">
          {['About Me', 'Skills', 'Projects', 'Experience', 'Contact'].map((section) => (
            <li key={section}>
              <motion.a
                href={`#${section.toLowerCase().replace(/\s+/g, '')}`}
                className="hover:text-blue-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={closeMenu}
              >
                {section}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white w-64 h-full p-6 flex flex-col space-y-6 z-30"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <div className="flex justify-end">
                <span
                  className="cursor-pointer text-2xl font-bold"
                  onClick={closeMenu}
                >
                  &times;
                </span>
              </div>

              {/* Mobile Links */}
              {['About Me', 'Skills', 'Projects', 'Experience', 'Contact'].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section.toLowerCase().replace(/\s+/g, '')}`}
                  className="text-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onClick={closeMenu}
                >
                  {section}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
